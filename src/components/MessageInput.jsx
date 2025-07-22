import { useState } from "react";
import { useChatStore } from "../Store/useChatStore";
import { Send } from "lucide-react";

export const MessageInput = () => {
    const [text, setText] = useState("");
    const { sendMessage, getMessages, selectedUser } = useChatStore();

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        try {
            await sendMessage({ message: text.trim() });
            // Clear form
            setText("");

        } catch (error) {
            console.log("Failed to send message", error.message);
        };
    };

    return (
        <div className="p-4 w-full">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <div className="flex-1 flex gap-2">
                    <input
                        type="text"
                        className="w-full input input-bordered rounded-lg input-sm sm:input-md outline-none"
                        placeholder="Type message herer..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <button type="submit" disabled={!text} className="">
                    <Send size={22} />
                </button>
            </form>
        </div>
    )
};


