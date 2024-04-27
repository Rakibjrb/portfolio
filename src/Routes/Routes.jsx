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
import Overview from "../Pages/AdminLogin/AdminPages/Overview/Overview";
import AddProject from "../Pages/AdminLogin/AdminPages/AddProject/AddProject";
import Contacts from "../Pages/AdminLogin/AdminPages/Contacts/Contacts";
import Details from "../Pages/AdminLogin/AdminPages/Contacts/ContactDetails/Details";
import PageNotFound from "./PageNotFound";
import AllProjects from "../Pages/AdminLogin/AdminPages/AllProjects/AllProjects";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <PageNotFound />,
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
        path: "/blogs",
        element: <Blogs />,
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
    children: [
      {
        index: true,
        path: "",
        element: (
          <PrivateRoutes>
            <Overview />
          </PrivateRoutes>
        ),
      },
      {
        path: "projects",
        element: (
          <PrivateRoutes>
            <AllProjects />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-project",
        element: (
          <PrivateRoutes>
            <AddProject />
          </PrivateRoutes>
        ),
      },
      {
        path: "contacts",
        element: (
          <PrivateRoutes>
            <Contacts />
          </PrivateRoutes>
        ),
      },
      {
        path: "contacts/:id",
        element: (
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
