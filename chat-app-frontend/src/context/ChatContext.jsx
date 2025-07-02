import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [roomId, setRoomId] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const [connected, setConnected] = useState(false);

    return (
        <ChatContext.Provider
            value={{
                roomId,
                currentUser,
                connected,
                setRoomId,
                setCurrentUser,
                setConnected,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useChatContext = () => useContext(ChatContext);
export default ChatProvider;
