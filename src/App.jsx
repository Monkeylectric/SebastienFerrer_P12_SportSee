import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';

import { getUserById, getUserActivityById, getUserAverageSession, getUserPerformance } from "./services/mock/data.mock.service.js";
// import { getUserById, getUserActivityById, getUserAverageSession, getUserPerformance } from "./services/data.service.js";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />,
            loader: async ({ params }) => {
                const userId = 12;

                const USER_MAIN_DATA = await getUserById(parseInt(userId));
                const USER_ACTIVITY_SESSIONS = await getUserActivityById(parseInt(userId));
                const USER_AVERAGE_SESSIONS = await getUserAverageSession(parseInt(userId));
                const USER_PERFORMANCE = await getUserPerformance(parseInt(userId));

                // if (USER_ACTIVITY_SESSIONS === "") {
                //     throw new Error();
                // }

                return {
                    USER_MAIN_DATA,
                    USER_ACTIVITY_SESSIONS,
                    USER_AVERAGE_SESSIONS,
                    USER_PERFORMANCE
                };
            },
            // errorElement: "Error",
        },
        {
            path: "/profil",
            //element:
            //loader:
            //error:
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
