import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/App";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import { OAuthCallback } from "./pages/OAuthCallback";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "oauth/:type",
          element: <OAuthCallback />
        }
      ],
    }
  ],
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
