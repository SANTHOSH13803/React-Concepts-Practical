/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import ProtectedRoutes from "../../ProtectedRoutes";
const ReactApp = lazy(() => import("../ReactApp/App"));
const Login = lazy(() => import("../components/Login"));
import ReactRoutes from "../ReactApp";

import MainLayout from "../components/MainLayout";
export const sideBarRoutes = [
  {
    path: "react",
    header: "React",
    element: <ReactApp />,
    children: ReactRoutes
  },

  {
    path: "typescript",

    header: "Typescript",
    element: <div>TS</div>
  }
];
const routes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",

        element: <MainLayout />,

        children: sideBarRoutes
      }
    ]
  }
];
export default routes;
