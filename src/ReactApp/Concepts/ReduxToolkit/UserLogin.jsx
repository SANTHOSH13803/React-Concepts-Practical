import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProfile } from "./userSlice";

const UserLogin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const handleUserChange = (e) => {
    const { value } = e.target;
    setUser(value);
  };
  const handleSubmit = () => {
    dispatch(saveProfile({ user, isLoggedIn: true }));
    setUser("");
  };
  return (
    <div className="text-xl font-mono">
      <h1 className="font-bold">User Login section</h1>
      <input
        type="text"
        value={user}
        onChange={handleUserChange}
        className="border rounded-xl mt-2 mb-2 p-2 w-3/6"
        placeholder="User name ....."
      />
      <button
        className=" border-amber-800 rounded-2xl bg-indigo-400 p-2 font-bold text-white ml-5"
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default UserLogin;
