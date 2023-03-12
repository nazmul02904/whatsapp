import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext, AuthStates } from "./AuthContext";

export const useAuth = () => {
  const {
    auth: { loggedIn },
    auth,
  } = useContext(AuthContext);
  console.log(auth);
  return loggedIn;
};

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  return auth ? children : navigate("/");
};

export default PrivateRoute;
