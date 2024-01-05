import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Admin/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AdminLogin from "../Pages/AdminLogin/AdminLogin";
import MyEducation from "../Pages/Education/MyEducation";
import AllSkills from "../Pages/Skills/AllSkills";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/details/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/skills",
        element: <AllSkills />,
      },
      {
        path: "/education",
        element: <MyEducation />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
  },
]);

export default router;
