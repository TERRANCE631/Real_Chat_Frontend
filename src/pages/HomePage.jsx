import { useChatStore } from "../Store/useChatStore"
import { ChatContainer, NoChatSelected, Sidebar } from "../components";

export const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen bg-">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg border border-white/10 overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  )
};

