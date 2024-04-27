import About from "../../Components/HomePageComponents/About/About";
import Banner from "../../Components/HomePageComponents/Banner/Banner";
import Education from "../../Components/HomePageComponents/Education/Education";
import LatestBlogs from "../../Components/HomePageComponents/LatestBlogs/LatestBlogs";
import LatestProjects from "../../Components/HomePageComponents/LatestProjects/LatestProjects";
import Skills from "../../Components/HomePageComponents/Skills/Skills";
import Technologies from "../../Components/HomePageComponents/Technologies/Technologies";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="space-y-32 mt-32">
        <About />
        <LatestProjects />
        <Skills />
        <Education />
        <LatestBlogs />
        <Technologies />
      </div>
    </div>
  );
};

export default Home;
