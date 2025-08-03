import path from "node:path";
import { defineConfig } from "prisma/config";
import dotenv from "dotenv";

dotenv.config({path: process.env.NODE_ENV == "production" ? ".env.production" : ".env.local"});

export default defineConfig({
    // @ts-ignore
    earlyAccess: true,
    schema: path.join(__dirname, "prisma", "schema.prisma"),
})