import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
