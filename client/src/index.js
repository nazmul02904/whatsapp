import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./utils/AuthContext";
import theme from "./utils/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
