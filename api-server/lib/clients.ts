import { PrismaClient } from "../prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const createPrismaClient = () => {
    globalForPrisma.prisma = new PrismaClient();
    return globalForPrisma.prisma;
}

export const db = globalForPrisma.prisma ?? createPrismaClient();