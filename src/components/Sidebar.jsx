import { useEffect } from "react";
import { useChatStore } from "../Store/useChatStore"
import { SidebarSkeleton } from "./Skeletons/SidebarSkeleton";
import { Users } from "lucide-react";
import { useAuthStore } from "../Store/useAuthStore";

export const Sidebar = () => {
    const { isUsersLoading, getUsers, users, selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore()
    console.log(onlineUsers);
    
    useEffect(() => {
        getUsers()
    }, [getUsers]);

    if (isUsersLoading) return <SidebarSkeleton />;

    return (
        <aside className="h-full w-20 lg:w-72 border-r border-white/20 flex flex-col transition-all duration-200">
            <div className="border-b border-white/10 w-full flex gap-2 items-center p-5">
                <Users className="size-6" />
                <span className="font-medium hidden lg:block">Contacts</span>
            </div>
            {/* TODO: online filter toggle */}

            <div className="overflow-y-auto w-full">
                {users.map((user) => (
                    <button onClick={() => setSelectedUser(user)} className={`w-full p-2 flex items-center gap-3 hover:bg-white/10 transition-colors ${selectedUser?.id === user.id ? "bg-slate-700 " : ""}`} key={user.id}>

                        <div className="relative mx-auto lg:mx-0">
                            <div className="relative chat-image avatar size-[3rem] border-2 border-blue-700 rounded-full" style={{
                                backgroundColor: "yellowgreen"
                            }}>
                                <img className="" src="/assets/profile.png" alt={user.username} />
                            </div>
                            {onlineUsers.includes(`${user.id}`) && (
                                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-white" />
                            )}
                        </div>

                        <div className="hidden lg:block text-left min-w-0">
                            <div className="font-medium truncate">{user.username}</div>
                            <div className="text-sm text-gray-300">
                                {onlineUsers.includes(`${user.id}`) ? "online" : "offline"}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </aside>
    )
};


