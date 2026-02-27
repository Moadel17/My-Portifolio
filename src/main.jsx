import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WindowWidth from "./context/windowWidth.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <WindowWidth>
    <StrictMode>
      <App />
    </StrictMode>
  </WindowWidth>,
);
