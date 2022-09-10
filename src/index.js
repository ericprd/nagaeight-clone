import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalProvider from "./context/global-context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GlobalProvider>
  </BrowserRouter>
);
