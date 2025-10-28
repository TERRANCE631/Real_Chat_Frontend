import { useEffect, useState } from "react";
import { useChatStore } from "../Store/useChatStore"
import { SidebarSkeleton } from "./Skeletons/SidebarSkeleton";
import { Users } from "lucide-react";
import { useAuthStore } from "../Store/useAuthStore";

export const Sidebar = () => {
    const { isUsersLoading, getUsers, users, selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore()
    const [showOnlineUsersOnly, setShowOnlineUsersOnly] = useState(false);
    const filteredUsers = showOnlineUsersOnly ? users.filter((user) => onlineUsers.includes(`${user.id}`)) : users;

    useEffect(() => {
        getUsers()
    }, [getUsers]);

    if (isUsersLoading) return <SidebarSkeleton />;

    return (
        <aside className="h-full w-20 lg:w-72 bg-black bg-opacity-20 border-r border-white/20 flex flex-col transition-all duration-200">
            <div className="border-b border-white/10 w-full gap-2 items-center p-5">
                <div className="flex gap-2">
                    <Users className="size-6" />
                    <span className="font-medium hidden lg:block">Contacts</span>
                </div>
                {/* TODO: online filter toggle */}
                <div className="mt-3 hidden lg:flex items-center gap-2">
                    <label className="cursor-pointer flex items-center gap-2">
                        <input
                            checked={showOnlineUsersOnly}
                            type="checkbox"
                            onChange={(e) => setShowOnlineUsersOnly(e.target.checked)}
                            className="checkbox checkbox-sm"
                        />
                        <span className="text-sm">Online users</span>
                    </label>
                    <span className="text-xs text-zink-500">({onlineUsers.length - 1} online)</span>
                </div>
            </div>

            <div className="overflow-y-auto w-full">
                {filteredUsers.map((user) => (
                    <button onClick={() => setSelectedUser(user)} className={`w-full p-2 flex items-center gap-3 hover:bg-base-100 transition-colors ${selectedUser?.id === user.id ? "bg-base-100 " : ""}`} key={user.id}>

                        <div className="relative mx-auto lg:mx-0">
                            <div className={`size-14 text-xl rounded-full flex items-center justify-center text-primary-content bg-black bg-opacity-20 font-medium shadow-inner shadow-green-700 border-green-500 border-2`} style={{ backgroundColor: `${user.userIdColor}` }}>
                                {user.username.slice(0, 1).toUpperCase()}
                            </div>
                            {onlineUsers.includes(`${user.id}`) && (
                                <span className="absolute bottom-0 right-1 size-3 bg-green-500 shadow-inner shadow-green-800 rounded-full ring-2 ring-white/80" />
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

                {filteredUsers.length === 0 &&
                    <div className="text-center text-zink-500 py-4">No online users found</div>
                }
            </div>
        </aside>
    )
};


