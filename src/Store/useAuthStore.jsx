import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.VITE_SOCKET_URL;

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isEditing: false,
    onlineUsers: [],
    sockect: null,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            set({ isCheckingAuth: true });

            const res = await axiosInstance.get("/auth/checkauth");
            set({ authUser: res.data });
            get().connectSocket();

        } catch (error) {
            console.log("Error in checkAuth function" + " " + error.message);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        };
    },

    signup: async (data) => {
        set({ isSigningUp: true })
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            const { authUser } = get();
            const user = res.data
            set({ authUser: user.user });
            get().connectSocket();

            if (user.message) {
                toast.warn(user.message);
            }

            if (authUser) {
                toast.success("Account created successfully");
            };

        } catch (error) {
            toast.error(error.message);
            console.log("Error in signup function" + " | " + error.message);
        } finally {
            set({ isSigningUp: false });
        };
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/auth/loggin", data);
            const user = res.data
            set({ authUser: user.user });
            get().connectSocket();

            if (user.message) {
                toast.error(user.message);
            }

            if (!user.message) {
                toast.success("You have successfully logged in");
            };

        } catch (error) {
            toast.error(error.message);
            console.log("Error in login function" + " | " + error.message);
        } finally {
            set({ isLoggingIn: false });
        };
    },

    loggout: async () => {
        try {
            await axiosInstance.post("/auth/loggout");
            set({ authUser: null });
            toast.success("Logged out successfully")
            get().disconnectSocket();

        } catch (error) {
            console.log(error.responce.data.message);
        };
    },


    editUsername: async (data, setEdit, checkAuth) => {
        set({ isEditing: true });
        try {
            if (data !== "") {
                await axiosInstance.put("/auth/edit/username", data);
                toast.success(`Username has been updated`);
                await checkAuth();
            } else { toast.warn("No changes applied") };

        } catch (error) {
            console.log("Error in editUsername function" + " | " + error.message);
        } finally {
            set({ isEditing: false });
            setEdit(false);
        };
    },

    connectSocket: () => {
        const { authUser } = get();
        if (!authUser || get().sockect?.connected) return;

        const socket = io(BASE_URL, {
            withCredentials: true,
            transports: ["websocket", "polling"], // important for Render/Netlify hosting
            query: { userID: authUser.id }
        });
        socket.connect()
        set({ socket: socket });

        socket.on("getOnlineUsers", (userIDs) => {
            set({ onlineUsers: userIDs })
            console.log(userIDs);
        })
    },

    disconnectSocket: () => {
        if (get().socket?.connected) return get().socket.disconnect();
    },
}));
