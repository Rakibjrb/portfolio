import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Admin/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AdminLogin from "../Pages/AdminLogin/AdminLogin";
import MyEducation from "../Pages/Education/MyEducation";

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
        path: "/education",
        element: <MyEducation />,
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
