import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import "./sidebar.css";

// const pages = [
//   {
//     link: "Overview",
//   },
//   {
//     link: "Add Projects",
//   },
//   {
//     link: "Go Home",
//   },
//   {
//     link: "Logout",
//   },
// ];

const Sidebar = () => {
  const [showBar, setShowBar] = useState(false);

  return (
    <div>
      <nav className="text-white flex justify-between p-4 bg-[#12afc0]">
        <button
          onClick={() => setShowBar(true)}
          className="text-black bg-white px-3 py-2"
        >
          <FaBarsStaggered className="text-2xl" />
        </button>
        <h2 className="text-4xl">Dashboard</h2>
      </nav>
      <div
        className={`sidebar text-white font-lato fixed top-0 ${
          showBar ? "left-0" : "-left-[9999px]"
        } w-[85%] md:w-96 min-h-screen transition-all duration-300`}
      >
        <div className="flex gap-2 justify-center items-center h-32 relative">
          <button
            onClick={() => setShowBar(false)}
            className="absolute top-2 right-2 text-black bg-white p-1"
          >
            <IoClose className="text-3xl" />
          </button>
          <LuLayoutDashboard className="text-3xl" />
          <h2 className="text-3xl">Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
