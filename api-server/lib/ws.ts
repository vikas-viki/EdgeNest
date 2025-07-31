import { Socket } from "socket.io";
import { isSessionValid } from "../middlewares";
import { UserService } from "../user/service";
import { kafkaConsumer, privateIO, publicIO } from "./clients";
import * as cookie from "cookie";
import { KafkaMessage } from "kafkajs";

const deploymentLogsBuffer: Record<string, { key: string, value: string }[]> = {};

publicIO.on("connection", (socket: Socket) => {
    socket.on("subscribe", async (deploymentId: string) => {
        socket.join(deploymentId);

        if (deploymentLogsBuffer[deploymentId]) {
            deploymentLogsBuffer[deploymentId].map(l => {
                socket.emit("message", l);
            });
        }
    })
})

privateIO.use(async (socket: Socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers.cookie || '');
    const token = cookies.session_token;

    if (!token) {
        return new Error("No session token");
    }

    const res = await isSessionValid(token);
    if (!res.isValid || !res.user) {
        return new Error("Invalid session token!");
    }

    socket.user = res.user;
    next();
})

privateIO.on("connection", async (socket: Socket) => {
    socket.on('subscribe', async (channel: string) => {
        const [deploymentId, projectId] = channel.split("---");
        const res = await UserService.isUserDeployment(projectId, deploymentId, socket.user.id);
        if (res) {
            socket.join(deploymentId);

            if (deploymentLogsBuffer[deploymentId]) {
                deploymentLogsBuffer[deploymentId].map(l => {
                    socket.emit("message", l);
                });
            }
        }
    })
});

export async function initKafkaSubscribe() {
    await kafkaConsumer.connect().then(() => console.log("Kafka consume connected!"));
    await kafkaConsumer.subscribe({ topic: 'edgenest-projectbulid-logs', fromBeginning: true });
    await kafkaConsumer.run({
        eachMessage: async ({ message }: { message: KafkaMessage }) => {
            if (message.key && message.value) {
                const splits = message.key.toString().split("---");
                const deploymentId = splits[1];
                const key = splits[2]; // auto-number
                const isPublic = splits[3];

                if (message.value.toString() == "DEPLOYMENT_DONE") {
                    await UserService.deploymentComplete(deploymentId);
                } else {
                    console.log(isPublic, "log::", message.value.toString());
                    if (!deploymentLogsBuffer[deploymentId]) {
                        deploymentLogsBuffer[deploymentId] = [];
                        setTimeout(() => {
                            delete deploymentLogsBuffer[deploymentId];
                        }, 5 * 60 * 1000); // 5 mins
                    }
                    deploymentLogsBuffer[deploymentId].push({ key, value: message.value.toString() });
                    if (isPublic == "YES") {
                        publicIO.to(deploymentId).emit('message', { key, value: message.value.toString() });
                    } else {
                        privateIO.to(deploymentId).emit('message', { key, value: message.value.toString() });
                    }
                }
            }
        }
    })
}