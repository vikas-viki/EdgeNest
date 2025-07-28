import { PrismaClient } from "../prisma-client";
import { createClient } from '@clickhouse/client'

export const db = new PrismaClient()

export const clickhouseClient = createClient({
    url: process.env.CLICKHOUSE_URL,
    username: 'default',
    password: process.env.CLICKHOUSE_PASSWORD,
});