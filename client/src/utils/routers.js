import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/register",
        element: <SignUp/>
    },
    {
        path: "*",
        element: <h2>Hello world</h2>
    }
])

export default router