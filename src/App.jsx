import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/index";

const browswerRouter = createBrowserRouter(routes);
const App = () => {
  return <RouterProvider router={browswerRouter} />;
};

export default App;
