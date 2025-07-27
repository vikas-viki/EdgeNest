import { isAxiosError } from "axios";
import { createStore } from "zustand";
import { NewProjectData, UserData } from "../lib/types";
import { api } from "../lib/constants";
import toast from "react-hot-toast";

type UserStoreData = {
    loading: boolean,
    userData: UserData | null,
    subdomainValid: boolean,
    getUserData: () => Promise<void>;
    newProject: (data: NewProjectData) => Promise<void>;
    subDomainExists: (subdomain: string) => Promise<boolean>;
}

export const userStore = createStore<UserStoreData>()((set, get) => ({
    userData: null,
    loading: false,
    subdomainValid: false,
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
            const response = await api.post("/user/project", { ...data });
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error(e.response?.data.message || e.message);
            } else {
                toast.error("Error creating project!");
            }
        }
        set({ loading: false });
    }
}))