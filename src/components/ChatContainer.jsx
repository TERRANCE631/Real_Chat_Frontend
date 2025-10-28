import { useEffect, useRef } from "react";
import { useChatStore } from "../Store/useChatStore"
import { ChatHeader } from "./ChatHeader";
import { MessageInput } from "./MessageInput";
import { MessagesSkeleton } from "./Skeletons/MessagesSkeleton";
import { useAuthStore } from "../Store/useAuthStore";
import { formatMessageTime } from "../lib/Utils";

export const ChatContainer = () => {
    const { messages, getMessages, isMessagesLoading, unSubscribeToMessages, selectedUser, subscribeToMessages } = useChatStore();
    const { authUser, checkAuth } = useAuthStore();
    const messageRef = useRef(null);

    useEffect(() => {
        getMessages(selectedUser.id);
        subscribeToMessages()

        return () => unSubscribeToMessages()
    }, [selectedUser.id, getMessages, checkAuth, subscribeToMessages, unSubscribeToMessages]);

    useEffect(() => {
        if (messageRef.current && messages) {
            messageRef.current.scrollIntoView({ behavior: "smooth" })
        };
    }, [messages]);

    if (isMessagesLoading) {
        return (
            <div className="flex-1 flex flex-col overflow-auto">
                <ChatHeader />
                <MessagesSkeleton />
                <MessageInput />
            </div>
        )
    };

    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <ChatHeader />
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/5">
                {messages && messages.map((message) => (
                    <div
                        ref={messageRef}
                        key={message.id}
                        className={`chat ${message.sender_ID === authUser.id ? "chat-end" : "chat-start"}`}
                    >
                        <div className="chat-image">
                            <div className={`size-12 text-xl rounded-full flex items-center justify-center text-primary-content bg-black bg-opacity-20 font-medium shadow-inner shadow-green-700 border-green-500 border-2`} style={{ backgroundColor: `${message.sender_ID === authUser.id ? authUser.userIdColor : selectedUser.userIdColor}` }}>
                                {message.sender_ID === authUser.id ? authUser.username.slice(0, 1).toUpperCase() : selectedUser.username.slice(0, 1).toUpperCase()}
                            </div>
                        </div>
                        <div className="chat-header mb-1">
                            {message.sender_ID === authUser.id ? authUser.username : selectedUser.username}
                            <time className="text-xs opacity-50 ml-1">
                                {formatMessageTime(message.created_at)}
                            </time>
                        </div>
                        <div className={`chat-bubble flex bg-black/50`}>
                            {message.message && <p>{message.message}</p>}
                        </div>
                    </div>
                ))}
            </div>
            <MessageInput />
        </div>
    )
}


