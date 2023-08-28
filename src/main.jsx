import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./styles/index.css";
import { Header } from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
);
