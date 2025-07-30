import express, { Request, Response } from "express";
import { io, publicIO } from "./lib/clients";
import dotenv from "dotenv";
import { authRouter } from "./auth/route";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./user/route";
import rateLimit from "express-rate-limit";
import { initKafkaSubscribe } from "./lib/ws";
dotenv.config();

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: true,
    message: "Rate limit exceeded!"
})
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
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

io.listen(9001);
publicIO.listen(9002);
console.log("Socket server running  on port 9001 & 9002");

app.listen(9000, async () => {
    console.log("Api server running on port 9000!");
    await initKafkaSubscribe();
})