import { isAxiosError } from "axios";
import { createStore } from "zustand";
import { UserData } from "../lib/types";
import { api } from "../lib/constants";
import toast from "react-hot-toast";

type UserStoreData = {
    userData: UserData | null,
    getUserData: () => Promise<void>;
}

export const userStore = createStore<UserStoreData>()((set, get) => ({
    userData: null,
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
    }
}))