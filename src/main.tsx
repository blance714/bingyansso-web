import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { OAuthCallback } from "./pages/OAuthCallback";

import App from "./pages/App";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import Register from "./pages/Register";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Auth />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },
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
