import { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./app.component";
import MyTaskPage from "./pages/my-task-page/my-task-page.component";
import TaksDetailPage from "./pages/task-detail-page/task-detail-page.componet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "mytask",
    element: <MyTaskPage />,
  },
  {
    path: "mytask/:id",
    element: <TaksDetailPage />,
  },
]);
