import toast from "react-hot-toast";
import { createStore } from "zustand";
import { api, WS_PUBLIC_URL } from "../lib/constants";
import { isAxiosError } from "axios";
import { DeploymentLogs, LogsResponse } from "../lib/types";
import { io } from "socket.io-client";

type TempStore = {
    branch: string,
    gitURL: string
    subdomain: string | null
    modalOpen: boolean;
    env: string,
    logsOpen: boolean,
    setLogsOpen: (o: boolean) => void;
    deploymentLogs: DeploymentLogs[],
    deploymentId: string | null,
    outputFolder: string,
    getLogs: (id: string) => void;
    setModalOpen: (o: boolean) => void;
    setOutputFolder: (o: string) => void;
    setEnv: (e: string) => void;
    setBranch: (b: string) => void;
    setGitURL: (u: string) => void;
    deployProject: () => Promise<string>;
    setDeploymentId: (i: string) => void;
    joinDeploymentRoom: (id: string) => void;
}

export const tempStore = createStore<TempStore>()((set, get) => ({
    subdomain: null,
    gitURL: "",
    deploymentId: null,
    logsOpen: false,
    modalOpen: false,
    branch: "",
    deploymentLogs: [],
    env: "",
    outputFolder: "",
    setLogsOpen: (o) => {
        set({ logsOpen: o });
    },
    setGitURL: (u) => {
        set({ gitURL: u });
    },
    setModalOpen: (o) => {
        set({ modalOpen: o });
    },
    setOutputFolder: (o) => {
        set({ outputFolder: o });
    },
    setEnv: (e) => {
        set({ env: e });
    },
    setBranch: (b) => {
        set({ branch: b });
    },
    setDeploymentId: (i) => {
        set({ deploymentId: i });
    },
    deployProject: async () => {
        try {
            const { branch, env, outputFolder, gitURL } = get();

            const data = {
                repoBranch: branch.trim(),
                env: env.trim(),
                outputFolder: outputFolder.trim(),
                gitUrl: gitURL.trim()
            };

            data.repoBranch = data.repoBranch.length == 0 ? "main" : data.repoBranch;
            data.outputFolder = data.outputFolder.length == 0 ? "dist" : data.outputFolder;

            if (gitURL.length == 0) {
                toast.error("No Github URL provided");
                return "";
            }

            if (data.env.length != 0) {
                const envs: Record<string, string>[] = [];

                data.env.trim().split("\n").forEach(e => {
                    const s = e.split("=", 2);
                    if (s[0] != "" && s[1]) {
                        envs.push({
                            name: s[0],
                            value: s[1]
                        })
                    }
                });

                if (env.length % 2 != 0) {
                    toast.error("Invalid ENV provided!");
                    return "";
                }
            }

            const response = await api.post("/user/public-deployment", data);
            const deploymentId = response.data.id;
            set({ deploymentId, deploymentLogs: [] });
            return deploymentId;
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error(e.response?.data.message ?? e.message);
            } else {
                toast.error("Error deploying project!");
                console.log(e);
            }
        }
    },
    getLogs: async (id: string) => {
        set({ logsOpen: true });
        try {
            const res = await api.get(`/user/public-deployment-logs/${id}`);
            const live = res.data.live;
            set({ subdomain: res.data.subdomain });
            if (live) {
                const { joinDeploymentRoom } = get();
                joinDeploymentRoom(id);
            } else {
                const logs: DeploymentLogs[] = [];
                res.data.logs.data.map((l: LogsResponse) => {
                    logs.push({
                        time: l.timestamp,
                        log: l.log
                    });
                });
                set({ deploymentLogs: logs });
            }
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error(e.response?.data.message ?? e.message);
            } else {
                toast.error("Error getting logs!");
                console.log(e);
            }
        }
    },
    joinDeploymentRoom: (deploymentId) => {
        toast.success("Getting live logs");
        const socket = io(WS_PUBLIC_URL, {
            withCredentials: true,
            transports: ["websocket"]
        });
        socket.on("connect", () => {
            socket.emit("subscribe", `${deploymentId}`);
        })

        socket.on("message", (data: { key: string, value: string }) => {
            const { deploymentLogs } = get();
            const keyExists = deploymentLogs.filter(d => d.key && d.key == Number(data.key)).length > 0;
            if (!keyExists) {
                deploymentLogs.push({
                    log: data.value,
                    key: Number(data.key),
                    time: "now"
                });
                set({ deploymentLogs });
            }
        });
    }
}));