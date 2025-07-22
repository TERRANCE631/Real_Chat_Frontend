import { useChatStore } from "../Store/useChatStore"
import { ChatContainer, NoChatSelected, Sidebar } from "../components";

export const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-white/10 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  )
};

