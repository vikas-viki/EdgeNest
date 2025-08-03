import { createClient } from '@clickhouse/client'
import { ECSClient } from "@aws-sdk/client-ecs";
import { S3Client } from '@aws-sdk/client-s3';
import { Kafka } from "kafkajs";
import { Server } from "socket.io";
import { PrismaClient } from '../prisma-client';
import { createServer } from "http";
import express from 'express';
import dotenv from "dotenv";

dotenv.config({path: process.env.NODE_ENV == "production" ? ".env.production" : ".env.local"});

const KAFKA_SERVICE_URL = process.env.KAFKA_SERVICE_URL?.toString();
const KAFKA_USERNAME = process.env.KAFKA_USERNAME?.toString();
const KAFKA_PASSWORD = process.env.KAFKA_PASSWORD?.toString();
const IAM_ACCESS_KEY = process.env.IAM_ACCESS_KEY?.toString();
const IAM_SECRET_KEY = process.env.IAM_SECRET_KEY?.toString();

if (!KAFKA_SERVICE_URL || !KAFKA_USERNAME || !KAFKA_PASSWORD) throw ("Env not found!");
if (!IAM_ACCESS_KEY || !IAM_SECRET_KEY) {
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
export const io = new Server(SERVER, { cors: { origin: process.env.FRONTEND_URL, credentials: true } });
export const publicIO = io.of("/public");
export const privateIO = io.of("/private");
export const ecsClient = new ECSClient({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: IAM_ACCESS_KEY,
        secretAccessKey: IAM_SECRET_KEY
    }
})
export const db = new PrismaClient()
export const clickhouseClient = createClient({
    url: process.env.CLICKHOUSE_URL?.toString(),
    username: 'default',
    password: process.env.CLICKHOUSE_PASSWORD?.toString(),
});

export const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: IAM_ACCESS_KEY,
        secretAccessKey: IAM_SECRET_KEY
    }
});