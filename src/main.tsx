import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AnnotationProvider from "@/providers/AnnotationContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnnotationProvider>
      <App />
    </AnnotationProvider>
  </StrictMode>
);
