const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const mimetype = require("mime-types");
const dotenv = require("dotenv");
const { Kafka } = require("kafkajs");
const { createClient } = require('@clickhouse/client');
const { Partitioners } = require("kafkajs");
dotenv.config();

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY.toString(),
        secretAccessKey: process.env.S3_SECRET_KEY.toString()
    }
});
const clickhouseClient = createClient({
    url: process.env.CLICKHOUSE_URL,
    username: 'default',
    password: process.env.CLICKHOUSE_PASSWORD,
});
const kafkaClient = new Kafka({
    clientId: 'edge-nest',
    brokers: [process.env.KAFKA_SERVICE_URL.toString()],
    ssl: true,
    sasl: {
        mechanism: 'plain',
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_PASSWORD
    }
});
const kafkaProducer = kafkaClient.producer({
    createPartitioner: Partitioners.LegacyPartitioner
});
const subdomain = process.env.SUB_DOMAIN;
const projectID = process.env.PROJECT_ID;
const deploymentID = process.env.DEPLOYMENT_ID;

let key = 0;
const logs = [];

async function publishLog(log) {
    logs.push({
        deployment_id: deploymentID,
        timestamp: new Date(),
        log: log.toString()
    });
    try {
        await kafkaProducer.send({
            topic: `edgenest-projectbulid-logs`,
            messages: [
                { key: `log---${deploymentID}---${key++}---${projectID.toString().toLowerCase() == deploymentID.toString().toLowerCase() ? "YES": "NO"}`, value: log.toString() }
            ]
        });
    } catch (e) {
        console.log("kafka error: ", e);
    }
}

async function init() {
    try {
        await kafkaProducer.connect();
        await publishLog("Build Started...");
        const outputDir = path.join(__dirname, "output");

        const p = exec(`cd ${outputDir} && npm install && npm run build`);

        p.stdout.on("data", async (data) => {
            await publishLog(data.toString());
        });

        p.stderr.on("data", async (err) => {
            await publishLog(`error: ${err.toString()}`);
        });

        p.on("close", async () => {
            await publishLog("Build completed.");
            const distFolderPath = path.join(__dirname, "output", process.env.OUTPUT_FOLDER);
            const distFolderPathContent = fs.readdirSync(distFolderPath, { recursive: true });
            await publishLog("Uploading started");
            await Promise.all(distFolderPathContent.map(async (filePath) => {
                const absPath = path.join(distFolderPath, filePath);
                if (!fs.lstatSync(absPath).isDirectory()) {
                    const cmd = new PutObjectCommand({
                        Bucket: 'edgenest-output',
                        Key: `__outputs/${subdomain}/${filePath}`,
                        Body: fs.createReadStream(absPath),
                        ContentType: mimetype.lookup(filePath) || 'application/octet-stream',
                    });

                    await s3Client.send(cmd);
                    await publishLog(`Uploaded ${filePath}`);
                }
            }));
            await publishLog("Upload complete!");
            await publishLog("Deployment Suceeded!");
            await publishLog("DEPLOYMENT_DONE");
            await clickhouseClient.insert({
                table: "deployment_logs",
                values: logs,
                format: "JSONEachRow"
            });
        })
    } catch (e) {
        await publishLog(e.message ?? "Error on building!");
    } finally {
    }
}
init();