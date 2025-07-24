const express = require("express");
const { generateSlug } = require("random-word-slugs");
const { RunTaskCommand, ECSClient } = require("@aws-sdk/client-ecs");
const { } = require("socket.io");
const { Kafka } = require('kafkajs');
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
app.use(express.json());

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
const kafkaConsumer = kafkaClient.consumer({ groupId: 'edgenest-logs-consumers' });

const io = new Server({ cors: 'enable' });
io.listen(9001, () => {
    console.log("Socket server running  on: 9001");
});
io.on("connection", (socket) => {
    socket.on('subscribe', (channel) => {
        socket.join(channel);
        socket.emit(`message`, `Joined ${channel}`);
    })
})


const ecsClient = new ECSClient({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY.toString(),
        secretAccessKey: process.env.S3_SECRET_KEY.toString()
    }
})

const config = {
    CLUSTER: 'arn:aws:ecs:ap-south-1:979188187252:cluster/edgenest-builder-cluster',
    TASK: 'arn:aws:ecs:ap-south-1:979188187252:task-definition/edgenest-builder-task'
}

app.post("/project", async (req, res) => {
    const { gitURL } = req.body;
    const projectSlug = generateSlug();

    const cmd = new RunTaskCommand({
        cluster: config.CLUSTER,
        taskDefinition: config.TASK,
        launchType: 'FARGATE',
        count: 1,
        networkConfiguration: {
            awsvpcConfiguration: {
                subnets: ["subnet-000459d6539048077", "subnet-0019f47cb9015c938", "subnet-0e9bea79e42c171ee"],
                securityGroups: ["sg-0022fbb54b8684052"],
                assignPublicIp: 'ENABLED'
            }
        },
        overrides: {
            containerOverrides: [
                {
                    name: 'edgenest-builder-image',
                    environment: [
                        {
                            name: 'PROJECT_ID',
                            value: projectSlug
                        },
                        {
                            name: 'GIT_REPOSITORY_URL',
                            value: gitURL
                        },
                        {
                            name: 'KAFKA_SERVICE_URL',
                            value: process.env.KAFKA_SERVICE_URL.toString()
                        },
                        {
                            name: 'KAFKA_USERNAME',
                            value: process.env.KAFKA_USERNAME.toString()
                        },
                        {
                            name: 'KAFKA_PASSWORD',
                            value: process.env.KAFKA_PASSWORD.toString()
                        },
                    ]
                }
            ]
        }
    });

    await ecsClient.send(cmd);
    return res.status(200).json({ status: 'queued', slug: projectSlug, url: `http://${projectSlug}.localhost:3000/` })
});

async function initKafkaSubcribe() {
    await kafkaConsumer.connect();
    await kafkaConsumer.subscribe({ topic: 'edgenest-projectbulid-logs', fromBeginning: true });
    await kafkaConsumer.run({
        eachMessage: async ({ topic, message }) => {
            const projectId = message.key.toString().split("---")[1];
            io.to(projectId).emit('message', message.value.toString());
        }
    })
}
initKafkaSubcribe();
app.listen(9000, () => {
    console.log("Api server running on port 9000!");
})