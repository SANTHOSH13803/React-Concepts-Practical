import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="border  flex justify-between border-r">
      <SideBar />
      <h1 className="p-5 w-8/12">Dashboard - User Not passed here as props</h1>
    </div>
  );
};

export default Dashboard;
