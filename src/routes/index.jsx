import ReactRoutes from "../ReactApp";
import ReactApp from "../ReactApp/App";

import MainLayout from "../components/MainLayout";

const routes = [
  {
    path: "/",

    element: <MainLayout />,

    children: [
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
    ]
  }
];
export default routes;
