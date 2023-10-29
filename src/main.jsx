import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BackGround from "./components/BackGround/BackGround.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="relative overflow-hidden">
      <App />
      <BackGround />
    </div>
  </React.StrictMode>
);
