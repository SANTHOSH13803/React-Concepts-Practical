import { useState } from "react";
import Dashboard from "./Dashboard";
import DashboardContext from "./context";
import Input from "../../shared/Input";
const ContextAPI = () => {
  const [user, setUser] = useState("");
  return (
    <DashboardContext.Provider value={user}>
      <div className="border p-5 flex gap-2">
        <h1 className="border-r pr-4">Login Page</h1>
        <div>
          <Input
            type="text"
            label={"User Name"}
            onChange={setUser}
            placeholder="User Details"
          />
        </div>
      </div>
      <Dashboard />
    </DashboardContext.Provider>
  );
};

export default ContextAPI;
