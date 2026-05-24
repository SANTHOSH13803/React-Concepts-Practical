import { NavLink, Outlet } from "react-router-dom";

function SubjectLayout({ title, routes }) {
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
font-bold
"
        >
          {title}
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
overflow-auto
"
      >
        {routes.map((each) => (
          <NavLink
            key={each.name}
            to={each.path}
            className={({ isActive }) => `

px-4
py-2
rounded
transition
whitespace-nowrap

${isActive ? "bg-slate-200 font-semibold" : "hover:bg-slate-100"}

`}
          >
            {each.name}
          </NavLink>
        ))}
      </nav>

      {/* Content */}

      <main
        className="
overflow-auto
p-10
"
      >
        <Outlet />
      </main>
    </div>
  );
}

export default SubjectLayout;
