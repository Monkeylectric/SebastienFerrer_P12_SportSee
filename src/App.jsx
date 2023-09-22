import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';

// import { getUserById, getUserActivityById, getUserAverageSession, getUserPerformance } from "./services/mock/data.mock.service.js";
import { getUserById, getUserActivityById, getUserAverageSession, getUserPerformance } from "./services/data.service.js";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/dashboard/:id",
            element: <Dashboard />,
            loader: async ({ params }) => {
                const userId = params.id;

                const USER_MAIN_DATA = await getUserById(parseInt(userId));
                const USER_ACTIVITY_SESSIONS = await getUserActivityById(parseInt(userId));
                const USER_AVERAGE_SESSIONS = await getUserAverageSession(parseInt(userId));
                const USER_PERFORMANCE = await getUserPerformance(parseInt(userId));

                return {
                    USER_MAIN_DATA,
                    USER_ACTIVITY_SESSIONS,
                    USER_AVERAGE_SESSIONS,
                    USER_PERFORMANCE
                };
            },
            errorElement: <Error number="404" />,
        },
        {
            path: "*",
            element: <Error number="404" />
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
