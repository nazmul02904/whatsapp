import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/register",
        element: <h2>Register Page</h2>
    },
    {
        path: "*",
        element: <h2>Hello world</h2>
    }
])

export default router