import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EmployeeListContextProvider } from "./contexts/EmployeeListContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EmployeeListContextProvider>
      <App />
    </EmployeeListContextProvider>
  </React.StrictMode>
);
