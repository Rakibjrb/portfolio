import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "./nav.css";

const links = (
  <>
    <li className="text-[16px]">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="text-[16px]">
      <NavLink to="/projects">Projects</NavLink>
    </li>
    <li className="text-[16px]">
      <NavLink to="/skills">Skills</NavLink>
    </li>
    <li className="text-[16px]">
      <NavLink to="/education">Education</NavLink>
    </li>
    <li className="text-[16px]">
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </>
);
const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="text-white py-2 md:py-4">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 font-lato">
        <div className="navbar">
          <div className="flex-1">
            <a className="text-xl md:text-2xl font-semibold font-lato">
              portf<span className="text-[#56cbf9]">olio.</span>
            </a>
          </div>
          <div className="flex-none">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden z-[60]"
            >
              {mobileMenu ? (
                <IoClose className="text-3xl" />
              ) : (
                <FaBarsStaggered className="text-2xl" />
              )}
            </button>
            <ul className="hidden lg:flex menu-horizontal px-1 font-lato font-semibold uppercase space-x-5">
              {links}
            </ul>
            <ul
              className={`absolute right-0 ${
                mobileMenu ? "top-20" : "-top-[9999px]"
              } bg-[#00000061] transition-all duration-300 z-50 w-[300px] text-center lg:hidden menu-vertical px-5 py-8 font-lato font-semibold uppercase border rounded-lg space-y-5`}
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
