import { X } from "lucide-react";
import { useAuthStore } from "../Store/useAuthStore";
import { useChatStore } from "../Store/useChatStore";

export const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();

    return (
        <div className="p-2.5 border-b border-base-300">
            <div className="flex items-center justify-between">
                <div className="flex gap-3">

                    <div className="size-10 rounded-full relative">
                        <div className="relative size-[2.6rem] border-2 border-blue-700 rounded-full" style={{
                            backgroundColor: "yellowgreen"
                        }}>
                            <img className="" src="/assets/profile.png" alt="" />
                        </div>
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

