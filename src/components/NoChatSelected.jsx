import { MessageSquare } from "lucide-react"

export const NoChatSelected = () => {
    return (
        <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-white/5">
            <div className="max-w-md text-center space-y-6">
                <div className="flex justify-center gap-4 mb-4">
                    <div className="relative">
                        <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center animate-bounce">
                            <MessageSquare className="size-8 text-gray-100" />
                        </div>
                    </div>
                </div>

                {/* welcome text */}
                <h2 className="text-2xl font-bold">Welcome to chatty!</h2>
                <p className="text-gray-100">
                    Select a conversation from the sidebar to start chatting
                </p>
            </div>
        </div>
    )
}


