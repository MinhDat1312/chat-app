import './config/init.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';
import ChatProvider from './context/ChatContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChatProvider>
            <Toaster position="top-right" />
            <App />
        </ChatProvider>
    </StrictMode>,
);
