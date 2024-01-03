import About from "../../Components/HomePageComponents/About/About";
import Banner from "../../Components/HomePageComponents/Banner/Banner";
import Education from "../../Components/HomePageComponents/Education/Education";
import Technologies from "../../Components/HomePageComponents/Technologies/Technologies";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Technologies />
      <Education />
    </div>
  );
};

export default Home;
