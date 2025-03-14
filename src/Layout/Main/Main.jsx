import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Animation from "../../Components/CommonComponets/Animation";

const Main = () => {
  return (
    <>
      <Animation />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
