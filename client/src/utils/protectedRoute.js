import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext, AuthStates } from "./AuthContext";

export const useAuth = () => {
  const {
    auth: { loggedIn },
  } = useContext(AuthContext);
  return loggedIn;
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? <Outlet/> : <Navigate to={"/"}/>;
};

export default PrivateRoute;
