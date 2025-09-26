import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GomokuContextProvider } from "./providers/GomokuContext.jsx";

createRoot(document.getElementById("root")).render(
  <GomokuContextProvider>
    <App />
  </GomokuContextProvider>
);
