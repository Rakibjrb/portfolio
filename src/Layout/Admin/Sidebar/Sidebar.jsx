import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/auth/useAuth";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBarChartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const [showBar, setShowBar] = useState(false);

  const adminLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire("Logout success");
            navigate("/");
          })
          .catch(() => {
            Swal.fire("Something went wrong !!!");
          });
      }
    });
  };

  const pages = [
    {
      name: "Overview",
      link: "/dashboard",
      icon: <BsBarChartFill className="link-child uppercase text-3xl " />,
    },
    {
      name: "Add Project",
      link: "/dashboard/add-project",
      icon: <LuLayoutDashboard className="link-child uppercase text-3xl" />,
    },
    {
      name: "Go Home",
      link: "/",
      icon: <FaHome className="link-child uppercase text-3xl " />,
    },
    {
      name: "Logout",
      link: "",
      icon: <BiLogOut className="link-child uppercase text-3xl" />,
    },
  ];

  const dashboardHeader = (
    <>
      <LuLayoutDashboard className="text-3xl" />
      <h2 className="text-3xl">Dashboard</h2>
    </>
  );

  const links = (
    <ul>
      {pages?.map((pageLink, index) => (
        <li
          key={`pagelink${index}`}
          className="link-parent p-5 hover:bg-[#04D9F1] transition-colors text-black cursor-pointer flex items-center gap-4"
        >
          {pageLink.icon}
          {pageLink.name == "Logout" ? (
            <div
              onClick={adminLogout}
              className="link-child uppercase text-xl w-full"
            >
              {pageLink.name}
            </div>
          ) : (
            <NavLink
              to={pageLink.link}
              className="link-child uppercase text-xl w-full"
            >
              {pageLink.name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav className="text-white flex justify-between p-4 bg-[#12afc0] xl:hidden">
        <button
          onClick={() => setShowBar(true)}
          className="text-black bg-white px-3 py-2"
        >
          <FaBarsStaggered className="text-2xl" />
        </button>
        <h2 className="text-4xl">Dashboard</h2>
      </nav>
      <div
        className={`sidebar xl:hidden text-white font-lato fixed top-0 ${
          showBar ? "left-0" : "-left-[9999px]"
        } w-[85%] md:w-80 min-h-screen transition-all duration-300`}
      >
        <div className="flex gap-2 justify-center items-center h-32 relative border-b-4">
          <button
            onClick={() => setShowBar(false)}
            className="absolute top-2 right-2 text-black bg-white p-1"
          >
            <IoClose className="text-3xl" />
          </button>
          {dashboardHeader}
        </div>
        {links}
      </div>
      <div
        className="sidebar hidden xl:block text-white font-lato fixed top-0 
          left-0 md:w-80 min-h-screen transition-all duration-300"
      >
        <div className="flex gap-2 justify-center items-center h-32 relative border-b-4">
          {dashboardHeader}
        </div>
        {links}
      </div>
    </>
  );
};

export default Sidebar;
