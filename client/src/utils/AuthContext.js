import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loggedIn: false, user: {}, message: "" });
  console.log(auth);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const AuthStates = () => useContext(AuthContext);
