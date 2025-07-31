import express, { Request, Response } from "express";
import { app, SERVER } from "./lib/clients";
import dotenv from "dotenv";
import { authRouter } from "./auth/route";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./user/route";
import rateLimit from "express-rate-limit";
import { initKafkaSubscribe } from "./lib/ws";
dotenv.config();

const PORT = process.env.PORT || 9000;
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: true,
    message: "Rate limit exceeded!"
})

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(limiter);
app.use(express.json());
app.use(cookieParser());

app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "All good!" });
})
app.use("/user", userRouter);
app.use("/auth", authRouter);

console.log("Socket server running  on port 9001 & 9002");

SERVER.listen(PORT, async () => {
    console.log(`Api server running on port ${PORT}!`);
    await initKafkaSubscribe();
})