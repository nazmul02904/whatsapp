import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/Signup/Signup";
import PrivateRoute from "./protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <h2>Hello world again in home</h2>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <h2>Hello world</h2>,
  },
]);

export default router;
