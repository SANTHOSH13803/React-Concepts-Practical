import { NavLink, Route, Routes } from "react-router-dom";
import ContextDemo from "./Concepts/contextApi/ContextDemo";
function App() {
  const routes = [
    {
      path: "context",
      name: "Context API",
      element: <ContextDemo />
    },

    {
      path: "button",
      name: "Button",
      element: <div>Button Docs</div>
    },

    {
      path: "hooks",
      name: "Hooks",
      element: <div>Hooks Docs</div>
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
            to={each.path}
            className="
hover:text-blue-500
"
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
