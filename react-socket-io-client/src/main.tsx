import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { io } from "socket.io-client";

const socket = io("ws://localhost:3030");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>
);
