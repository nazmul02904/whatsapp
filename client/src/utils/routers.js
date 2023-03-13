import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/Signup/Signup";
import { AuthStates } from "./AuthContext";
import PrivateRoute from "./protectedRoute";

const Views = () => {
  const {
    auth: { loggedIn },
  } = AuthStates();

  return loggedIn === null ? (
    <h2>loading...</h2>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<h2>This is homepage</h2>} />
      </Route>
    </Routes>
  );
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <SignUp />,
//   },
//   {
//     path: "/home",
//     element: (
//       <PrivateRoute>
//         <h2>Hello world again in home</h2>
//       </PrivateRoute>
//     ),
//   },
//   {
//     path: "*",
//     element: <h2>Hello world</h2>,
//   },
// ]);

export default Views;
