import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import FAQ from "./components/FAQ.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FAQ />
  </StrictMode>
);
