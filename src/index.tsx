import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MenuProvider } from "./layout/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MenuProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MenuProvider>
  </React.StrictMode>
);
