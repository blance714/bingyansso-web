import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/App";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Login from "./pages/Login";
import { Error } from "./pages/Error";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "thirdOAuth",
      children: [{ path: "github", element: <div>github</div> }],
    },
  ],
  {
    basename: "/bingyansso-web",
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
