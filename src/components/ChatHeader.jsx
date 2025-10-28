import { X } from "lucide-react";
import { useAuthStore } from "../Store/useAuthStore";
import { useChatStore } from "../Store/useChatStore";

export const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();

    return (
        <div className="p-2.5 border-b border-white/20 bg-black bg-opacity-20">
            <div className="flex items-center justify-between">
                <div className="flex gap-3">

                    <div className={`size-10 text-xl rounded-full flex items-center justify-center text-primary-content font-medium bg-black bg-opacity-20 shadow-inner shadow-green-700 ${onlineUsers.includes(`${selectedUser.id}`) ? "border-green-500 border-2" : ""}`} style={{ backgroundColor: `${selectedUser.userIdColor}` }}>
                        {selectedUser.username.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="">
                        <h3 className="">{selectedUser.username}</h3>
                        <p className="text-sm text-base-contect/70">
                            {onlineUsers.includes(`${selectedUser.id}`) ? "Online" : "Offline"}
                        </p>
                    </div>
                </div>
                <button onClick={() => setSelectedUser(null)}>
                    <X />
                </button>
            </div>
        </div>
    )
};

