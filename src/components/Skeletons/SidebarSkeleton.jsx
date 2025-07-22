import { Users } from "lucide-react"

export const SidebarSkeleton = () => {
    // Create 8 skeleton items
    const SkeletonContacts = Array(6).fill(null);

    return (
        <aside className="h-full w-20 lg:w-72 border-r border-white/20 flex flex-col transition-all duration-200">
            <div className="border-b p-5 w-full border-white/10">
                <div className="flex items-center gap-2">
                    <Users className="size-6" />
                    <span className="font-medium hidden lg:block">Contacts</span>
                </div>
            </div>

            {/* Skeleton Contacts */}
            <div className="overflow-y-auto w-full">
                {SkeletonContacts.map((_, idx) => (
                    <div key={idx} className="w-full p-2 flex items-center gap-3">
                        {/* Avatar Skeleton */}
                        <div className="relative mx-auto lg:mx-0">
                            <div className="bg-white/20 animate-pulse size-12 rounded-full" />
                        </div>

                        {/* User infor skeleton - only visible on larger screens */}
                        <div className="hidden lg:block text-left min-w-0 flex-1">
                            <div className="bg-white/20 animate-pulse rounded-full h-4 w-32 mb-2" />
                            <div className="bg-white/20 animate-pulse rounded-full h-3 w-16" />
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

