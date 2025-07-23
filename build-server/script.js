const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const mimetype = require("mime-types");
const dotenv = require("dotenv");
dotenv.config();

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY.toString(),
        secretAccessKey: process.env.S3_SECRET_KEY.toString()
    }
});
const projectID = process.env.PROJECT_ID;

async function init() {
    console.log("executing script.js");

    const outputDir = path.join(__dirname, "output");

    const p = exec(`cd ${outputDir} && npm install && npm run build`);

    p.stdout.on("data", (data) => {
        console.log("data::", data.toString());
    });

    p.stderr.on("data", (err) => {
        console.log("error: ", err.toString());
    });

    p.on("close", async () => {
        console.log("Build completed!");

        const distFolderPath = path.join(__dirname, "output", "dist");
        const distFolderPathContent = fs.readdirSync(distFolderPath, { recursive: true });

        for (const filePath of distFolderPathContent) {
            const absPath = path.join(distFolderPath, filePath);
            if (fs.lstatSync(absPath).isDirectory()) continue;

            console.log(`uploading: ${filePath}`);

            const cmd = new PutObjectCommand({
                Bucket: 'edgenest-output',
                Key: `__outputs/${projectID}/${filePath}`,
                Body: fs.createReadStream(absPath),
                ContentType: mimetype.lookup(filePath)  || 'application/octet-stream',
            });

            await s3Client.send(cmd);

            console.log("uploaded: ", filePath);
        }

    })
}
init();