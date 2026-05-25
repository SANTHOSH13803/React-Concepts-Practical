import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/index";
import { Suspense } from "react";

const browswerRouter = createBrowserRouter(routes);
const App = () => {
  return (
    <Suspense
      fallback={
        <div className="text-4xl h-full w-full text-center ">Loading....</div>
      }
    >
      <RouterProvider router={browswerRouter} />
    </Suspense>
  );
};

export default App;
