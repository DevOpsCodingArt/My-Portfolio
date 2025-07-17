import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// src/index
import { scan } from "react-scan"; // must be imported before React and React DOM
import React from "react";

scan({
  enabled: true,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
