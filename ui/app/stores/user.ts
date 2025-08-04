import { isAxiosError } from "axios";
import { createStore } from "zustand";
import { DeploymentLogs, LogsResponse, NewDeploymentData, NewProjectData, ProjectDeployments, UserData, UserProject } from "../lib/types";
import { api, WS_URL } from "../lib/constants";
import toast from "react-hot-toast";
import { authStore } from "./auth";
import { io, Socket } from "socket.io-client";

type UserStoreData = {
    loading: boolean,
    socket: Socket | null
    userData: UserData | null,
    subdomainValid: boolean,
    liveLogs: string[], // live deployment logs subscription
    selectedProject: UserProject | null,
    socketLogs: Record<string, { key: string, value: string }[]>;
    deployments: Record<string, ProjectDeployments[]>;
    deploymentLogs: Record<string, DeploymentLogs[]>,
    getLogs: (deploymentId: string, projectId: string) => Promise<void>;
    getProjectDeployments: (projectId: string) => Promise<void>;
    setSubdomainValid: (valid: boolean) => void;
    setSelectedProject: (project: UserProject) => void;
    getUserData: () => Promise<void>;
    newProject: (data: NewProjectData) => Promise<void>;
    connectToWs: () => void;
    newDeployment: (data: NewDeploymentData) => Promise<void>;
    subDomainExists: (subdomain: string) => Promise<boolean>;
    joinDeploymentRoom: (deploymentId: string, projectId: string) => void;
}

export const userStore = createStore<UserStoreData>()((set, get) => ({
    userData: null,
    socket: null,
    selectedProject: null,
    loading: false,
    deployments: {},
    deploymentLogs: {},
    liveLogs: [],
    subdomainValid: false,
    socketLogs: {},
    setSubdomainValid: (valid) => {
        set({ subdomainValid: valid })
    },
    setSelectedProject: (project) => {
        set({ selectedProject: project });
    },
    getUserData: async () => {
        try {
            const response = await api.get("/user");
            const data = response.data.user as UserData;
            set({ userData: data });
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error(e.response?.data.message || e.message);
            } else {
                toast.error("Error getting user details!");
            }
        }
    },
    subDomainExists: async (subdomain) => {
        set({ loading: true });
        try {
            await api.post("/user/subdomain-exists", { subdomain });
            toast.success("Subdomain available!");
            set({ subdomainValid: true });
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error("Subdomain doesn't exists!");
            } else {
                toast.error("Error validating subdomain");
                console.log(e);
            }
            set({ loading: false, subdomainValid: false });
            return false;
        }
        set({ loading: false });
        return true;
    },
    newProject: async (data) => {
        set({ loading: true });
        try {
            await api.post("/user/project", { ...data });
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error(e.response?.data.message || e.message);
            } else {
                toast.error("Error creating project!");
            }
        }
        set({ loading: false });
    },
    newDeployment: async (data) => {
        set({ loading: true });
        try {
            const res = await api.post("/user/new-deployment", { ...data });
            if (res.status == 200) {
                toast.success("Deployment Started");
            }
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error(e.response?.data.message || e.message);
            } else {
                toast.error("Error deploying project!");
            }
        }
        set({ loading: false });
    },
    getProjectDeployments: async (projectId) => {
        try {
            const state = get();
            const response = await api.get(`user/deployments/${projectId}`);

            const deployments = response.data.deployments as ProjectDeployments[];
            const newDeployments = state.deployments;

            newDeployments[projectId] = deployments;

            set({ deployments: newDeployments });
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error(e.response?.data.message ?? e.message);
            } else {
                toast.error("Error getting deployments!");
            }
            console.log(e);
        }
    },
    getLogs: async (deploymentId, projectId) => {
        set({ loading: true });
        const { deploymentLogs, deployments, joinDeploymentRoom } = get();
        try {
            const deployment = deployments[projectId].filter(d => d.id == deploymentId)[0];
            if (!deployment) return;
            if (deployment.live) {
                joinDeploymentRoom(deploymentId, projectId);
            } else {
                if (!deploymentLogs[deploymentId]) {
                    const response = await api.get(`/user/logs/${deploymentId}`);
                    const newLogs = deploymentLogs;
                    const logs: DeploymentLogs[] = [];
                    response.data.logs.data.map((l: LogsResponse) => {
                        logs.push({
                            time: l.timestamp,
                            log: l.log
                        })
                    });
                    newLogs[deploymentId] = logs;
                }
            }
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error(e.response?.data.message ?? e.message);
            } else {
                toast.error("Error getting deployment log!");
            }
            console.log(e);
        }
        set({ loading: false })
    },
    connectToWs: () => {
        const s = io(WS_URL, {
            withCredentials: true,
            transports: ["websocket"]
        });
        s.on("connect", () => {
            console.log("private socket connected!")
        })
        set({ socket: s });
    },
    joinDeploymentRoom: (deploymentId, projectId) => {
        const { socket, liveLogs } = get();
        if (liveLogs.includes(deploymentId)) {
            return;
        } else {
            set({ liveLogs: [...liveLogs, deploymentId] });
        }
        toast.success("Getting live logs");
        if (socket) {
            if (socket.connected) {
                socket.emit("subscribe", `${deploymentId}---${projectId}`);
            } else {
                socket.on("connect", () => {
                    socket.emit("subscribe", `${deploymentId}---${projectId}`);
                })
            }
            socket.on("message", (data: { key: string, value: string }) => {
                const { deploymentLogs } = get();
                if (!deploymentLogs[deploymentId]) {
                    deploymentLogs[deploymentId] = [];
                }
                const keyExists = deploymentLogs[deploymentId].filter(d => d.key && d.key == Number(data.key)).length > 0;
                if (!keyExists) {
                    deploymentLogs[deploymentId].push({
                        log: data.value,
                        key: Number(data.key),
                        time: "now"
                    });
                    set({ deploymentLogs });
                }
            });
        }
    }
}))