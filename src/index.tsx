import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//Just to prevent "hadouken" script ;D

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
