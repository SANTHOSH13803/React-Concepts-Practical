import ContextDemo from "./Concepts/contextApi/ContextDemo";
import BasicFormTheory from "./Concepts/forms/BasicFormTheory";
import ReduxToolKitTheory from "./Concepts/ReduxToolkit/ReduxToolKitTheory";
import RouterTheory from "./Concepts/Router/RouterTheory";
const ReactRoutes = [
  {
    path: "context",
    name: "Context API",
    element: <ContextDemo />
  },

  {
    path: "rtk-toolkit",
    name: "Redux Toolkit",
    element: <ReduxToolKitTheory />
  },
  {
    path: "react-router",
    name: "React Router",
    element: <RouterTheory />
  },
  {
    path: "basic-form",
    name: "Basic Form",
    element: <BasicFormTheory />
  }
];
export default ReactRoutes;
