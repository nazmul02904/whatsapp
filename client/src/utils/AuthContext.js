import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ loggedIn: null, user: {} });

  useEffect(() => {
    fetch(
      "https://3001-nazmul02904-whatsapp-zvbi069ezfn.ws-us90.gitpod.io/auth/login",
      {
        credentials: "include",
      }
    )
      .catch((err) => {
        setAuth({ loggedIn: false });
      })
      .then((res) => {
        if (!res || !res.ok || res.status >= 400) {
          setAuth({ loggedIn: false });
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) {
          setAuth({ loggedIn: false });
          return;
        }
        setAuth({ ...data });
        navigate("/home");
      });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const AuthStates = () => useContext(AuthContext);
