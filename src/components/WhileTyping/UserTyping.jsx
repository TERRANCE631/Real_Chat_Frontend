export const UserTyping = ({ authUser, selectedUser, messageRef }) => {
    return (
        <div ref={messageRef} className={`chat ${selectedUser.id === authUser.id ? "flex gap-2.5 mb-5" : "flex gap-2.5 mb-5"}`}>
            <div className="chat-image">
                <div
                    className="size-12 text-xl rounded-full flex items-center justify-center text-primary-content bg-black bg-opacity-20 font-medium shadow-inner shadow-green-700 border-green-500 border-2"
                    style={{ backgroundColor: selectedUser.userIdColor }}
                >
                    {selectedUser.username.slice(0, 1).toUpperCase()}
                </div>
            </div>
            <div className="chat-bubble chat bg-black/40 flex gap-1 items-center">
                <span className="size-2 bg-gray-300 rounded-full animate-bounce"></span>
                <span className="size-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                <span className="size-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.3s]"></span>
            </div>
        </div>
    );
};
