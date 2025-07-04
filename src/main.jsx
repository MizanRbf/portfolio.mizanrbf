import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./Layouts/RootLayout.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
