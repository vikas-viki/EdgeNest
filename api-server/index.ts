import { Socket } from "socket.io";

import express from "express";
import { io, kafkaClient } from "./clients";
import dotenv from "dotenv";
import { KafkaMessage } from "kafkajs";
import { authRouter } from "./auth/route";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./user/route";
import { UserService } from "./user/service";
dotenv.config();

const kafkaConsumer = kafkaClient.consumer({ groupId: 'edgenest-logs-consumers' });

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser())
io.on("connection", (socket: Socket) => {
    socket.on('subscribe', (channel: string) => {
        socket.join(channel);
        socket.emit(`message`, `Joined ${channel}`);
    })
});

app.use("/user", userRouter);
app.use("/auth", authRouter);

async function initKafkaSubcribe() {
    await kafkaConsumer.connect();
    await kafkaConsumer.subscribe({ topic: 'edgenest-projectbulid-logs', fromBeginning: true });
    await kafkaConsumer.run({
        eachMessage: async ({ message }: { message: KafkaMessage }) => {
            if (message.key && message.value) {
                const projectId = message.key.toString().split("---")[1];
                if (message.value.toString() == "Upload complete!") {
                    await UserService.deploymentComplete(projectId);
                }
                console.log("log::", message.value.toString())
                io.to(projectId).emit('message', message.value.toString());
            }
        }
    })
}

io.listen(9001);
console.log("Socket server running  on: 9001");
app.listen(9000, async () => {
    await initKafkaSubcribe();
    console.log("Api server running on port 9000!");
})