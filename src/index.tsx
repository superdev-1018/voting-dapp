import React, { useContext,createContext } from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./assets/scss/index.scss";
import { FontProvider } from "./fontContext";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FontProvider>
      <App />
    </FontProvider>
  </React.StrictMode>
);
