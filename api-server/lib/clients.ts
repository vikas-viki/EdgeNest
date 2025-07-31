import { createClient } from '@clickhouse/client'
import { ECSClient } from "@aws-sdk/client-ecs";
import { Kafka } from "kafkajs";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { PrismaClient } from '../prisma-client';
import { createServer } from "http";
import express from 'express';
dotenv.config();

const KAFKA_SERVICE_URL = process.env.KAFKA_SERVICE_URL;
const KAFKA_USERNAME = process.env.KAFKA_USERNAME;
const KAFKA_PASSWORD = process.env.KAFKA_PASSWORD;
const ECS_ACCESS_KEYID = process.env.S3_ACCESS_KEY;
const ECS_SECRET_KEY = process.env.S3_SECRET_KEY;


if (!KAFKA_SERVICE_URL || !KAFKA_USERNAME || !KAFKA_PASSWORD) throw ("Env not found!");
if (!ECS_ACCESS_KEYID || !ECS_SECRET_KEY) {
    throw new Error("Missing AWS credentials in environment variables");
}

export const app = express();
export const SERVER = createServer(app);
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
export const kafkaConsumer = kafkaClient.consumer({ groupId: 'edgenest-logs-consumers' });
export const io = new Server(SERVER, { cors: { origin: "http://localhost:3000", credentials: true } });
export const publicIO = io.of("/public");
export const privateIO = io.of("/private");
export const ecsClient = new ECSClient({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: ECS_ACCESS_KEYID,
        secretAccessKey: ECS_SECRET_KEY
    }
})
export const db = new PrismaClient()
export const clickhouseClient = createClient({
    url: process.env.CLICKHOUSE_URL,
    username: 'default',
    password: process.env.CLICKHOUSE_PASSWORD,
});