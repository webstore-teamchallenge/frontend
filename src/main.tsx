import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import './scss/main.scss'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
