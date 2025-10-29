import { useState, useRef } from "react";
import { useChatStore } from "../Store/useChatStore";
import { Send } from "lucide-react";

export const MessageInput = () => {
    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    const { sendMessage } = useChatStore();
    const inputRef = useRef(null);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim() || isSending) return;

        try {
            setIsSending(true);
            await sendMessage({ message: text.trim() });
            setText("");
            inputRef.current?.focus(); // 👈 keeps input focused after sending
        } catch (error) {
            console.log("Failed to send message:", error.message);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="p-4 w-full border-t border-white/20 bg-black bg-opacity-20">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                    ref={inputRef}
                    type="text"
                    className="w-full input input-bordered border-base-100 rounded-md input-md outline-none bg-transparent text-white placeholder-gray-400"
                    placeholder="Type message here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus // 👈 ensures it's focused when component loads
                />
                <button
                    type="submit"
                    disabled={!text.trim() || isSending}
                    className={`border-2 border-white/30 btn btn-base-100 rounded-md flex items-center justify-center ${isSending ? "opacity-50 cursor-not-allowed" : "hover:border-white/60"
                        }`}
                >
                    <Send size={22} />
                </button>
            </form>
        </div>
    );  
};
