import { NavLink, Route, Routes } from "react-router-dom";
import ReactApp from "./ReactApp/App";

function App() {
  const routes = [
    {
      path: "/react/*",
      element: <ReactApp />,
      name: "React"
    }
  ];

  return (
    <div className="h-screen grid grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside
        className="
      border-r
      bg-slate-50
      p-6"
      >
        <h1
          className="
        text-2xl
        font-bold
        mb-10"
        >
          Docs
        </h1>

        <div className="flex flex-col gap-4">
          {routes.map((each) => (
            <NavLink
              key={each.name}
              to={each.path}
              className="
              px-4
              py-2
              rounded
              hover:bg-slate-200
              "
            >
              {each.name}
            </NavLink>
          ))}
        </div>
      </aside>

      {/* Content */}

      <main className="overflow-auto">
        <Routes>
          {routes.map((each) => (
            <Route key={each.path} path={each.path} element={each.element} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
