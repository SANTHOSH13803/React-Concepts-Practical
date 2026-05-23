import { NavLink, Route, Routes } from "react-router-dom";
import ContextDemo from "./Concepts/contextApi/ContextDemo";
import ReduxToolKitTheory from "./Concepts/ReduxToolkit/ReduxToolKitTheory";
function App() {
  const routes = [
    {
      path: "context",
      name: "Context API",
      element: <ContextDemo />
    },

    {
      path: "rtk-toolkit",
      name: "Redux Toolkit",
      element: <ReduxToolKitTheory />
    }
  ];

  return (
    <div
      className="
h-screen
grid
grid-rows-[70px_60px_1fr]
"
    >
      {/* Header */}

      <header
        className="
border-b
flex
items-center
px-10
bg-white
"
      >
        <h1
          className="
text-3xl
font-bold"
        >
          React
        </h1>
      </header>

      {/* Top Nav */}

      <nav
        className="
border-b
px-10
flex
items-center
gap-6
bg-slate-50
"
      >
        {routes.map((each) => (
          <NavLink
            key={each.name}
            to={`/react/${each.path}`}
            className={({ isActive }) => `
 px-4
 py-2
 rounded
 transition

 ${isActive ? "bg-slate-200 font-semibold" : "hover:bg-slate-100"}

 `}
          >
            {each.name}
          </NavLink>
        ))}
      </nav>

      {/* Docs Area */}

      <main
        className="
p-10
overflow-auto
"
      >
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
