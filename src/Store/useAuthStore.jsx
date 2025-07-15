import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/checkauth");
            set({ authUser: res.data })
        } catch (error) {
            console.log("Error in checkAuth function" + " " + error.message);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        };
    }
}));