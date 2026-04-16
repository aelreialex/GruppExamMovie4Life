import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// DETTA ÄR FRÅN MANTINE (MÅSTE FINNAS FÖR ATT MANTINE SKA FUNGERA)
import { MantineProvider } from "@mantine/core"; // ← Strömförsörjning till Mantine
import "@mantine/core/styles.css"; // ← Grund-styling för Mantine
import "@mantine/carousel/styles.css"; // ← Styling för carousellen

// Hitta elementet med id="root" i index.html och rita upp appen där
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* MantineProvider wrap:ar hela appen - utan den fungerar INTE Mantine */}
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>,
);
