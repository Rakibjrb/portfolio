import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="overflow-x-hidden">
      <Sidebar />
      <div className="xl:ml-80 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
