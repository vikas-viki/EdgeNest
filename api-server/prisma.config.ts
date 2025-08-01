import path from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

dotenv.config();


export default defineConfig({
    // @ts-ignore
    earlyAccess: true,
    schema: path.join(__dirname, "prisma", "schema.prisma"),
})