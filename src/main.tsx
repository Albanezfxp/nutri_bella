import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// index.css entra ANTES do App: os tokens e o CSS base precisam vir primeiro no
// bundle para que o CSS de cada componente consiga sobrescrever (.header__cta
// so vence .btn se o arquivo do componente for carregado depois).
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
