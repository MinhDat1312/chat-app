import { useNavigate } from 'react-router';
import { useChatContext } from '../context/ChatContext';
import { useEffect, useRef, useState } from 'react';
import { getMessages } from '../services/RoomService';
import { baseURL } from '../config/AxiosHelper';
import { Stomp } from '@stomp/stompjs';
import chatIcon from '../assets/chat.png';
import { timeAgo } from '../utils/helper';
import { MdAttachFile, MdSend } from 'react-icons/md';
import SockJS from 'sockjs-client';
import toast from 'react-hot-toast';

const ChatPage = () => {
    const navigate = useNavigate();
    const { roomId, currentUser, connected, setConnected, setRoomId, setCurrentUser } = useChatContext();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [stompClient, setStompClient] = useState(null);
    const chatBoxRef = useRef(null);

    useEffect(() => {
        if (!connected) {
            navigate('/');
        }
    }, [connected, roomId, currentUser]);

    useEffect(() => {
        const loadMessages = async () => {
            try {
                const messages = await getMessages(roomId);
                setMessages(messages);
            } catch (error) {
                toast.error(error);
            }
        };

        if (connected) {
            loadMessages();
        }
    }, []);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scroll({
                top: chatBoxRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [messages]);

    useEffect(() => {
        const connectWebSocket = () => {
            const sock = new SockJS(`${baseURL}/chat`);
            const client = Stomp.over(sock);

            client.connect({}, () => {
                setStompClient(client);

                toast.success('connected');

                client.subscribe(`/topic/room/${roomId}`, (message) => {
                    const newMessage = JSON.parse(message.body);
                    setMessages((prev) => {
                        const isDuplicate = prev.some(
                            (msg) =>
                                msg.content === newMessage.content &&
                                msg.sender === newMessage.sender &&
                                msg.timeStamp === newMessage.timeStamp,
                        );

                        if (isDuplicate) return prev;
                        return [...prev, newMessage];
                    });
                });
            });
        };

        if (connected) {
            connectWebSocket();
        }
    }, [roomId]);

    const handleLogout = () => {
        stompClient.disconnect();
        setConnected(false);
        setRoomId('');
        setCurrentUser('');
        navigate('/');
    };

    const sendMessage = async () => {
        if (stompClient && connected && input.trim()) {
            const message = {
                roomId: roomId,
                sender: currentUser,
                content: input,
            };

            stompClient.send(`/app/sendMessage/${roomId}`, {}, JSON.stringify(message));
            setInput('');
        }
    };

    return (
        <div className="">
            <header className="dark:border-gray-700  fixed w-full dark:bg-gray-900 py-5 shadow flex justify-around items-center">
                <div>
                    <h1 className="text-xl font-semibold">
                        Room : <span>{roomId}</span>
                    </h1>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">
                        User : <span>{currentUser}</span>
                    </h1>
                </div>
                <div>
                    <button
                        onClick={handleLogout}
                        className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-2 rounded-full cursor-pointer"
                    >
                        Leave Room
                    </button>
                </div>
            </header>

            <main ref={chatBoxRef} className="py-20 px-10   w-2/3 dark:bg-slate-600 mx-auto h-screen overflow-auto ">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender === currentUser ? 'justify-end' : 'justify-start'} `}
                    >
                        <div
                            className={`my-2 ${
                                message.sender === currentUser ? 'bg-green-800' : 'bg-gray-800'
                            } p-2 max-w-xs rounded`}
                        >
                            <div className="flex flex-row gap-2">
                                <img className="h-10 w-10" src={chatIcon} alt="" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-bold">{message.sender}</p>
                                    <p>{message.content}</p>
                                    <p className="text-xs text-gray-400">{timeAgo(message.timeStamp)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
            <div className=" fixed bottom-4 w-full h-16 ">
                <div className="h-full  pr-10 gap-4 flex items-center justify-between rounded-full w-1/2 mx-auto dark:bg-gray-900">
                    <input
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage();
                            }
                        }}
                        type="text"
                        placeholder="Type your message here..."
                        className=" w-full  dark:border-gray-600 b dark:bg-gray-800  px-5 py-2 rounded-full h-full focus:outline-none  "
                    />

                    <div className="flex gap-1">
                        <button className="dark:bg-purple-600 h-10 w-10  flex   justify-center items-center rounded-full">
                            <MdAttachFile size={20} />
                        </button>
                        <button
                            onClick={sendMessage}
                            className="dark:bg-green-600 h-10 w-10  flex   justify-center items-center rounded-full cursor-pointer"
                        >
                            <MdSend size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
