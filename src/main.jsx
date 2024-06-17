import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/pages/ep2.css";
import { ThemeProvider } from "./components/ThemeContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);
