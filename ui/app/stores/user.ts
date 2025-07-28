import { isAxiosError } from "axios";
import { createStore } from "zustand";
import { DeploymentLogs, LogsResponse, NewDeploymentData, NewProjectData, ProjectDeployments, UserData, UserProject } from "../lib/types";
import { api } from "../lib/constants";
import toast from "react-hot-toast";
import { authStore } from "./auth";

type UserStoreData = {
    loading: boolean,
    userData: UserData | null,
    subdomainValid: boolean,
    selectedProject: UserProject | null,
    deployments: Record<string, ProjectDeployments[]>;
    deploymentLogs: Record<string, DeploymentLogs[]>,
    getLogs: (deploymentId: string) => Promise<void>;
    getProjectDeployments: (projectId: string) => Promise<void>;
    setSubdomainValid: (valid: boolean) => void;
    setSelectedProject: (project: UserProject) => void;
    getUserData: () => Promise<void>;
    newProject: (data: NewProjectData) => Promise<void>;
    newDeployment: (data: NewDeploymentData) => Promise<void>;
    subDomainExists: (subdomain: string) => Promise<boolean>;
}

export const userStore = createStore<UserStoreData>()((set, get) => ({
    userData: null,
    selectedProject: null,
    loading: false,
    deployments: {},
    deploymentLogs: {},
    subdomainValid: false,
    setSubdomainValid: (valid) => {
        set({ subdomainValid: valid })
    },
    setSelectedProject: (project) => {
        set({ selectedProject: project });
    },
    getUserData: async () => {
        const { authenticated } = authStore.getState();
        if (authenticated) {
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
            window.location.href = "/dashboard";
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
            await api.post("/user/new-deployment", { ...data });
            window.location.href = "/dashboard";
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

            newDeployments[projectId] = deployments.reverse();

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
    getLogs: async (deploymentId) => {
        set({ loading: true });
        const { deploymentLogs } = get();
        try {
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
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error(e.response?.data.message ?? e.message);
            } else {
                toast.error("Error getting deployment log!");
            }
            console.log(e);
        }
        set({ loading: false })
    }
}))