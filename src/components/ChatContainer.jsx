import { useEffect } from "react";
import { useChatStore } from "../Store/useChatStore"
import { ChatHeader } from "./ChatHeader";
import { MessageInput } from "./MessageInput";
import { MessagesSkeleton } from "./Skeletons/MessagesSkeleton";
import { useAuthStore } from "../Store/useAuthStore";

export const ChatContainer = () => {
    const { messages, getMessages, isMessagesLoading, selectedUser } = useChatStore();
    const { authUser, checkAuth } = useAuthStore();

    useEffect(() => {
        getMessages(selectedUser.id);
        checkAuth();
    }, [selectedUser.id, getMessages, checkAuth]);

    console.log(authUser.id);

    if (isMessagesLoading) {
        return (
            <div className="flex-1 flex flex-col overflow-auto">
                <ChatHeader />
                <MessagesSkeleton />
                <MessageInput />
            </div>
        )
    }

    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <ChatHeader />
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages && messages.map((message) => (
                    <div key={message.id} className={`chat ${message.sender_ID === authUser.id ? "chat-end" : "chat-start"}`}>
                        <div className="chat-image avatar">
                            <div className="size-10 rounded-full relative">
                                <div className="relative size-[2.6rem] border-2 border-blue-700 rounded-full" style={{
                                    backgroundColor: "yellowgreen"
                                }}>
                                    <img className="" src="/assets/profile.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="chat-header mb-1">
                            <time className="text-xs opacity-50 ml-1">
                                {message.created_at}
                            </time>
                        </div>
                        <div className="chat-bubble flex">
                            {message.message && <p>{message.message}</p>}
                        </div>
                    </div>
                ))}
            </div>
            <MessageInput />
        </div>
    )
}


