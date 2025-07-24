import { Socket } from "socket.io";

import express from "express";
import { Request, Response } from "express";
import { generateSlug } from "random-word-slugs";
import { RunTaskCommand } from "@aws-sdk/client-ecs";
import { ecsClient, io, kafkaClient } from "./clients";
import dotenv from "dotenv";
import { KafkaMessage } from "kafkajs";
dotenv.config();

const kafkaConsumer = kafkaClient.consumer({ groupId: 'edgenest-logs-consumers' });
const config = {
    CLUSTER: 'arn:aws:ecs:ap-south-1:979188187252:cluster/edgenest-builder-cluster',
    TASK: 'arn:aws:ecs:ap-south-1:979188187252:task-definition/edgenest-builder-task',
    subnets: ["subnet-000459d6539048077", "subnet-0019f47cb9015c938", "subnet-0e9bea79e42c171ee"],
    securityGroups: ["sg-0022fbb54b8684052"]
}

const app = express();
app.use(express.json());

io.on("connection", (socket: Socket) => {
    socket.on('subscribe', (channel: string) => {
        socket.join(channel);
        socket.emit(`message`, `Joined ${channel}`);
    })
});

app.post("/project", async (req: Request, res: Response) => {
    const { gitURL } = req.body;
    const projectSlug = generateSlug();

    const cmd = new RunTaskCommand({
        cluster: config.CLUSTER,
        taskDefinition: config.TASK,
        launchType: 'FARGATE',
        count: 1,
        networkConfiguration: {
            awsvpcConfiguration: {
                subnets: config.subnets,
                securityGroups: config.securityGroups,
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
                            value: process.env.KAFKA_SERVICE_URL?.toString()
                        },
                        {
                            name: 'KAFKA_USERNAME',
                            value: process.env.KAFKA_USERNAME?.toString()
                        },
                        {
                            name: 'KAFKA_PASSWORD',
                            value: process.env.KAFKA_PASSWORD?.toString()
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
        eachMessage: async ({ message }: { message: KafkaMessage }) => {
            if (message.key && message.value) {
                const projectId = message.key.toString().split("---")[1];
                io.to(projectId).emit('message', message.value.toString());
            }
        }
    })
}

io.listen(9001);
console.log("Socket server running  on: 9001");
app.listen(9000, () => {
    initKafkaSubcribe();
    console.log("Api server running on port 9000!");
})