import { useState } from 'react';
import chatIcon from '../assets/chat.png';
import toast from 'react-hot-toast';
import { createRoomApi, joinChatApi } from '../services/RoomService';
import { useNavigate } from 'react-router';
import { useChatContext } from '../context/ChatContext';

const JoinCreateChat = () => {
    const navigate = useNavigate();
    const [detail, setDetail] = useState({
        roomId: '',
        userName: '',
    });
    const { setRoomId, setCurrentUser, setConnected } = useChatContext();

    const handleFormInputChange = (event) => {
        setDetail({
            ...detail,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        if (detail.roomId === '' || detail.userName === '') {
            toast.error('Invalid Input !');
            return false;
        }
        return true;
    };

    async function joinChat() {
        if (validateForm()) {
            try {
                const room = await joinChatApi(detail.roomId);
                toast.success('You joined successfully');
                setCurrentUser(detail.userName);
                setRoomId(room.roomId);
                setConnected(true);
                navigate('/chat');
            } catch (error) {
                if (error.status == 400) {
                    toast.error(error.response.data);
                } else {
                    toast.error('Error in joining room');
                }
            }
        }
    }

    async function createRoom() {
        if (validateForm()) {
            try {
                const response = await createRoomApi(detail.roomId);
                toast.success('Room created successfully');
                setCurrentUser(detail.userName);
                setRoomId(response.roomId);
                setConnected(true);
                navigate('/chat');
            } catch (error) {
                if (error.status == 400) {
                    toast.error(error.response.data);
                } else {
                    toast('Error in creating room');
                }
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="p-10 dark:border-gray-700 border w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">
                <div>
                    <img src={chatIcon} className="w-24 mx-auto" />
                </div>
                <h1 className="text-2xl font-semibold text-center ">Join Room / Create Room</h1>
                <div className="">
                    <label htmlFor="room" className="block font-medium mb-2">
                        Room ID / New Room ID
                    </label>
                    <input
                        name="roomId"
                        value={detail.roomId}
                        id="room"
                        onChange={handleFormInputChange}
                        type="text"
                        placeholder="Enter the room id"
                        className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="">
                    <label htmlFor="name" className="block font-medium mb-2">
                        Your name
                    </label>
                    <input
                        name="userName"
                        value={detail.userName}
                        id="name"
                        onChange={handleFormInputChange}
                        type="text"
                        placeholder="Enter the name"
                        className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-center gap-2 mt-4">
                    <button
                        onClick={joinChat}
                        className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full cursor-pointer"
                    >
                        Join Room
                    </button>
                    <button
                        onClick={createRoom}
                        className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-full cursor-pointer"
                    >
                        Create Room
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinCreateChat;
