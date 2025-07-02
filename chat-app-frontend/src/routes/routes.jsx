import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/Home';
import ChatPage from '../pages/Chat';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/chat',
        element: <ChatPage />,
    },
    {
        path: '/about',
        element: <h1>This is about page</h1>,
    },
    {
        path: '*',
        element: <h1>404 Page Not Found</h1>,
    },
]);

export default Routes;
