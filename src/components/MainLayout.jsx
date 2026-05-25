import { NavLink, Outlet } from "react-router-dom";
import { sideBarRoutes } from "../routes";

const MainLayout = () => {
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
          {sideBarRoutes.map((each) => (
            <NavLink
              key={each.header}
              to={each.path}
              className={({ isActive }) =>
                `px-4 py-2 roundedhover:bg-slate-200 ${isActive ? "hover-button" : ""}`
              }
            >
              {each.header}
            </NavLink>
          ))}
        </div>
      </aside>
      {/* Content */}

      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
