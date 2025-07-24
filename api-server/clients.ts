import { ECSClient } from "@aws-sdk/client-ecs";
import { Kafka } from "kafkajs";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const KAFKA_SERVICE_URL = process.env.KAFKA_SERVICE_URL;
const KAFKA_USERNAME = process.env.KAFKA_USERNAME;
const KAFKA_PASSWORD = process.env.KAFKA_PASSWORD;

if (!KAFKA_SERVICE_URL || !KAFKA_USERNAME || !KAFKA_PASSWORD) throw ("Env not found!");

export const kafkaClient = new Kafka({
    clientId: 'edge-nest',
    brokers: [KAFKA_SERVICE_URL],
    ssl: true,
    sasl: {
        mechanism: 'plain',
        username: KAFKA_USERNAME,
        password: KAFKA_PASSWORD
    }
});

export const io = new Server({ cors: { origin: "*" } });

const ecsAccessKeyId = process.env.S3_ACCESS_KEY;
const ecsSecretAccessKey = process.env.S3_SECRET_KEY;

if (!ecsAccessKeyId || !ecsSecretAccessKey) {
    throw new Error("Missing AWS credentials in environment variables");
}

export const ecsClient = new ECSClient({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: ecsAccessKeyId,
        secretAccessKey: ecsSecretAccessKey
    }
})