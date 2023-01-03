import { createRoot } from "react-dom/client";
import App from "./App";
import { ShopProvider } from "./ShopContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ShopProvider>
    <App />
  </ShopProvider>
);
