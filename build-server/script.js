const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const mimetype = require("mime-types");
const dotenv = require("dotenv");
const { Kafka, Partitioners } = require("kafkajs");
const { createClient } = require('@clickhouse/client');
const pLimit = require("p-limit").default;
dotenv.config();

[
    "S3_ACCESS_KEY", "S3_SECRET_KEY", "SUB_DOMAIN", "PROJECT_ID", "DEPLOYMENT_ID",
    "GIT_REPOSITORY_URL", "BRANCH", "KAFKA_SERVICE_URL", "KAFKA_USERNAME",
    "KAFKA_PASSWORD", "CLICKHOUSE_URL", "CLICKHOUSE_PASSWORD", "OUTPUT_FOLDER"
].forEach(key => {
    if (!process.env[key]) throw new Error(`Missing env var: ${key}`);
});

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
    }
});

const clickhouseClient = createClient({
    url: process.env.CLICKHOUSE_URL,
    username: "default",
    password: process.env.CLICKHOUSE_PASSWORD,
});

const kafkaClient = new Kafka({
    clientId: "edge-nest",
    brokers: [process.env.KAFKA_SERVICE_URL],
    ssl: true,
    sasl: {
        mechanism: "plain",
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_PASSWORD,
    }
});
const kafkaProducer = kafkaClient.producer({ createPartitioner: Partitioners.LegacyPartitioner });

const subdomain = process.env.SUB_DOMAIN;
const projectID = process.env.PROJECT_ID;
const deploymentID = process.env.DEPLOYMENT_ID;
const githubUrl = process.env.GIT_REPOSITORY_URL;
const gitBranch = process.env.BRANCH;
const outputDir = path.join(__dirname, "output");

let key = 0;
const logs = [];

async function publishLog(log) {
    const text = Buffer.isBuffer(log) ? log.toString("utf-8") : log.toString();

    logs.push({
        deployment_id: deploymentID,
        timestamp: new Date(),
        log: text,
    });
    try {
        await kafkaProducer.send({
          topic: `edgenest-projectbulid-logs`,
          messages: [
            {
              key: `log---${deploymentID}---${key++}---${projectID === deploymentID ? "YES" : "NO"}`,
              value: text,
              partition: 0
            }
          ]
        });
    } catch (e) {
        console.error("kafka error: ", e);
    }
}

async function task([cmd, ...args], doneMsg, options = {}) {
    await new Promise(resolve => {
        const spn = spawn(cmd, args, { shell: false, ...options });

        spn.stdout.on("data", async data => await publishLog(data));
        spn.stderr.on("data", async data => await publishLog(`${data}`));

        spn.on("error", async () => {
            await publishLog(`Error executing ${cmd} ${args.join(" ")}`);
            resolve();
        });
        spn.on("exit", async () => {
            await publishLog(doneMsg);
            resolve();
        });
    });
}

async function init() {
    try {
        await kafkaProducer.connect();

        await task(["git", "clone", "--branch", gitBranch, "--single-branch", githubUrl, outputDir], "Repository Cloned!");

        await publishLog("Installing dependencies...");
        await task(["npm", "install"], "Installation complete!", { cwd: outputDir });

        await publishLog("Running build...");
        await task(["npm", "run", "build"], "Build completed.", { cwd: outputDir });

        await publishLog("Uploading started...");
        const distFolderPath = path.join(outputDir, process.env.OUTPUT_FOLDER);
        const limit = pLimit(5);

        const files = fs.readdirSync(distFolderPath, { recursive: true });

        await Promise.all(files.map(filePath =>
            limit(async () => {
                const absPath = path.join(distFolderPath, filePath);
                const stat = fs.lstatSync(absPath);
                if (!stat.isDirectory()) {
                    await s3Client.send(new PutObjectCommand({
                        Bucket: "edgenest-output",
                        Key: `__outputs/${subdomain}/${filePath}`,
                        Body: fs.createReadStream(absPath),
                        ContentType: mimetype.lookup(filePath) || "application/octet-stream"
                    }));
                    await publishLog(`Uploaded ${filePath}`);
                }
            })
        ));

        await publishLog("Upload complete!");
        await publishLog("Deployment Succeeded, Site Live!");
        await publishLog("DEPLOYMENT_DONE");

        await clickhouseClient.insert({
            table: "deployment_logs",
            values: logs,
            format: "JSONEachRow"
        });
    } catch (e) {
        console.log(e);
        await publishLog(e.message ?? "Build failed");
    } finally {
        await kafkaProducer.disconnect();
    }
}

init();
