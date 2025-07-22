import { EditIcon, Loader, Mail, User } from "lucide-react";
import { useAuthStore } from "../Store/useAuthStore";
import { useState } from "react";

export const Profile = () => {
    const { authUser, editUsername, checkAuth, isEditing } = useAuthStore();
    const user = authUser.user;
    const [edit, setEdit] = useState(false);

    const [formdata, setFormdata] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        editUsername(formdata, setEdit, checkAuth);
    };

    return (
        <div className="pt-20 w-full">
            <div className="max-w-2xl mx-auto p-4 py-8">
                <div className="bg-white/5 rounded-lg p-6 space-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-semiold">Profile</h1>
                        <p className="mt-2 text-gray-200">Your profile information</p>
                    </div>

                    {/* Avatar section */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative size-[9rem] border-4 border-blue-700 rounded-full" style={{
                            backgroundColor: "yellowgreen"
                        }}>
                            <img className="" src="/assets/profile.png" alt="" />
                        </div>
                        <div className="space-y-6 w-full">
                            <div className="space-y-1.5">
                                <div className="text-sm text-zinc-400 flex items-center gap-2">
                                    <span><User className="size-4" /></span>
                                    <span className="flex items-center gap-2">
                                        <span>Username</span>
                                        {!edit && <button onClick={() => setEdit((prev) => !prev)} type="button" className="flex items-center gap-1">
                                            <span><EditIcon className="text-white/90 size-5" /></span>
                                            <span className="text-white/90">Edit</span>
                                        </button>}
                                    </span>
                                </div>
                                {!edit && <p className="px-4 py-2.5 bg-white/5 tracking-wider border border-white/20 rounded-md">{user?.username || authUser.username || <div className="text-gray-400">Unknown</div>}</p>}

                                {edit && <div className="form-control">
                                    <div className="relative">
                                        <button type="submit" onClick={handleSubmit} className="absolute bg-blue-700 duration-500 transition-all inset-y-0 right-0 pl-4 flex items-center rounded-r-md border-white/20 border-2">
                                            <div className="size-5 text-base-content/40 text-slate-900 pr-14 rounded-r-md" >
                                                {isEditing ? <div className=""><Loader className="size-6 animate-spin text-white flex justify-center ml-2" /></div> : <div className="">Done</div>}
                                            </div>
                                        </button>
                                        <input
                                            type="text"
                                            className="w-full outline-none px-4 py-2.5 bg-white/5 border border-white/20 rounded-md tracking-wider"
                                            placeholder={formdata === "" && "Re-enter your username"}
                                            defaultValue={user?.username || authUser.username}
                                            onChange={(e) => setFormdata({ ...formdata, username: e.target.value })}
                                        />
                                    </div>
                                </div>}
                            </div>
                            <div className="space-y-1.5">
                                <div className="text-sm text-zinc-400 flex items-center gap-2">
                                    <span><Mail className="size-4" /></span>
                                    <span>Email address</span>
                                </div>
                                <p className="px-4 py-2.5 tracking-wider bg-white/5 border border-white/20 rounded-md">{user?.email || authUser.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 rounded-lg p-6">
                        <div className="text-lg font-medium mb-4">Account Information</div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center py-2 border-b border-white/20">
                                <span>Member since:</span>
                                <span className="tracking-widest">{user?.created_at || authUser.created_at}</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center py-2">
                                <span>Account status:</span>
                                <span className="text-blue-700 tracking-widest">Actvie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

