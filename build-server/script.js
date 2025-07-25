const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const mimetype = require("mime-types");
const dotenv = require("dotenv");
const { Kafka } = require("kafkajs");
dotenv.config();

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY.toString(),
        secretAccessKey: process.env.S3_SECRET_KEY.toString()
    }
});

const kafkaClient = new Kafka({
    clientId: 'edge-nest',
    brokers: [process.env.KAFKA_SERVICE_URL.toString()],
    ssl: true,
    sasl:{
        mechanism: 'plain',
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_PASSWORD
    }
});
const kafkaProducer = kafkaClient.producer();
const projectID = process.env.PROJECT_ID;

let key = 0;
async function publishLog(log) {
    await kafkaProducer.connect();
    try {
        await kafkaProducer.send({
            topic: `edgenest-projectbulid-logs`,
            messages: [
                { key: `log---${projectID}---${key++}`, value: log.toString() }
            ]
        });
    } catch (e) {
        console.log("kafka error: ", e);
    }
}


async function init() {
    publishLog("Build Started...");
    const outputDir = path.join(__dirname, "output");

    const p = exec(`cd ${outputDir} && npm install && npm run build`);

    p.stdout.on("data", (data) => {
        publishLog(data.toString());
    });

    p.stderr.on("data", (err) => {
        publishLog(`error: ${err.toString()}`);
    });

    p.on("close", async () => {
        publishLog("Build completed.");
        const distFolderPath = path.join(__dirname, "output", "dist");
        const distFolderPathContent = fs.readdirSync(distFolderPath, { recursive: true });
        publishLog("Uploading started");
        for (const filePath of distFolderPathContent) {
            const absPath = path.join(distFolderPath, filePath);
            if (fs.lstatSync(absPath).isDirectory()) continue;

            const cmd = new PutObjectCommand({
                Bucket: 'edgenest-output',
                Key: `__outputs/${projectID}/${filePath}`,
                Body: fs.createReadStream(absPath),
                ContentType: mimetype.lookup(filePath) || 'application/octet-stream',
            });
            
            await s3Client.send(cmd);
            publishLog(`Uploaded ${filePath}`);
        }
        publishLog("Upload complete!");
    })
}
init();