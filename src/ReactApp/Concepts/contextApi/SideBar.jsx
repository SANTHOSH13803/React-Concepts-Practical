import { useContext } from "react";
import DashboardContext from "./context";

const SideBar = () => {
  const user = useContext(DashboardContext);
  return (
    <div className="border-r p-5 w-4/12">
      Side Bar - <span className="text-red-500">{user}</span>
    </div>
  );
};

export default SideBar;
