import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GomokuContextProvider } from "./providers/GomokuContext.jsx";
import { ConfigContextProvider } from "./providers/ConfigContext.jsx";
import { ApiContextProvider } from "./providers/ApiProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ConfigContextProvider>
    <ApiContextProvider>
      <GomokuContextProvider>
        <App />
      </GomokuContextProvider>
    </ApiContextProvider>
  </ConfigContextProvider>
);
