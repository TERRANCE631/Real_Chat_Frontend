import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true })
        try {
            await axiosInstance.get("/messages/users").then((res) => {
                const user = res.data;
                set({ users: user });
            });

        } catch (error) {
            toast.error(error.message);
            console.log("Error in getUsers function" + " | " + error.message);
        } finally {
            set({ isUsersLoading: false });
        };
    },

    getMessages: async (userID) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/messages/${userID}`);
            const messages = res.data;
            set({ messages: messages });

        } catch (error) {
            toast.error(error.message);
            console.log("Error in getUsers function" + " | " + error.message);
        } finally {
            set({ isMessagesLoading: false });
        };
    },

    setSelectedUser: (selectedUser) => {
        set({ selectedUser: selectedUser })
    },

    sendMessage: async (message) => {
        try {
            const { selectedUser, messages } = get();
            const res = await axiosInstance.post(`/messages/send/${selectedUser.id}`, { message: message });
            const sent = res.data
            set({ messages: [...messages, sent] });

        } catch (error) {
            toast.error(error.message);
            console.log("Error in sendMessage function" + " | " + error.message);
        };
    },

    subscribeToMessages: () => {
        const { selectedUser } = get();

        if (!selectedUser) return;
        const socket = useAuthStore.getState().socket;

        socket.on("newMessage", (newMessage) => {
            const isMessageSentToSelectedUser = newMessage.sender_ID !== selectedUser.id;
            if (isMessageSentToSelectedUser) return;

            set({ messages: [...get().messages, newMessage] })
            console.log(newMessage);
        })
    },

    unSubscribeToMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },

}));