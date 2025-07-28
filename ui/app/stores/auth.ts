import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { createStore } from "zustand";
import { api } from "../lib/constants";

export type AuthStore = {
    authenticated: boolean,
    loading: boolean,
    isLoggedIn: () => Promise<void>;
    authenticateUser: (code: string, installation_id?: string) => Promise<{ installed: boolean, success: boolean }>;
}

export const authStore = createStore<AuthStore>()((set, get) => ({
    loading: false,
    userData: null,
    authenticated: false,
    authenticateUser: async (code, installation_id) => {
        set({ loading: true });
        try {
            await api.post(`/auth`, {
                code: code,
                installation_id: installation_id ?? null
            });
            toast.success("Authentication successful!");
        } catch (e) {
            if (isAxiosError(e)) {
                if (e.response?.data.message == "App Not Installed!") {
                    set({ loading: false })
                    return { installed: false, success: false };
                } else {
                    toast.error(e.response?.data.message);
                }
            } else {
                toast.error("Error authenticating user!");
            }
            return { installed: true, success: false };
        }
        set({ loading: false })
        return { installed: true, success: true };
    },
    isLoggedIn: async () => {
        set({ loading: true });
        try {
            await api.get(`/auth/session`);
            set({ authenticated: true })
        } catch (e) {
            if (isAxiosError(e)) {
                toast.error("Please signin using Github to continue!");
                if (!window.location.href.includes("/auth") && window.location.href.includes("/dashboard")) {
                    window.location.href = "/auth"
                }
                console.log(e.response?.data);
            } else {
                console.log(e);
            }
        }
        set({ loading: false });
    }
}));