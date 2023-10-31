import  { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Board from "./App.tsx";

const root = createRoot(document.getElementById("root") as Element);
console.log(root)
root.render(
  <StrictMode>
    <Board />
  </StrictMode>
);