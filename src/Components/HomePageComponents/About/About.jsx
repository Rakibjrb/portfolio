import { Link } from "react-router-dom";
import { FiAward, FiBriefcase } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import image from "../../../assets/images/mypic2.jpg";

const data = [
  {
    id: "0001",
    title: "Experience",
    title2: "6 Months",
    icon: <FiAward className="text-2xl" />,
  },
  {
    id: "0002",
    title: "Completed",
    title2: "10+ Projects",
    icon: <FiBriefcase className="text-2xl" />,
  },
  {
    id: "0003",
    title: "Support",
    title2: "online 24/7",
    icon: <BiSupport className="text-2xl" />,
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 md:px-10 lg:px-3 xl:px-0 font-lato overflow-x-hidden">
      <div className="mt-5 flex flex-col lg:flex-row lg:items-center gap-10">
        <div className="xl:w-1/3">
          <img
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="rounded-xl w-3/4 md:w-3/5 lg:w-auto mx-auto"
            src={image}
            alt="about section pic"
          />
        </div>
        <div className="text-white xl:w-2/3">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="text-5xl font-semibold mb-10"
          >
            About <span className="text-[#23c0d2]">Me</span>
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="500"
            className="text-xl text-justify xl:text-left"
          >
            Hello, I am Rakibul Hasan, a passionate Front End and MERN stack web
            developer with a keen eye for design and a love for crafting
            seamless user experiences. With a strong foundation in HTML, CSS,
            and JavaScript, I specialize in building dynamic and responsive web
            applications using the MERN (MongoDB, Express.js, React, Node.js)
            stack.
          </p>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="xl:w-3/5 grid grid-cols-3 gap-2 md:gap-3 my-10"
          >
            {data?.map((singleData) => (
              <div
                key={singleData?.id}
                className={`border px-2 py-5 flex flex-col items-center rounded-md space-y-1 ${
                  singleData.id === "0002" && "bg-[#23c1d290]"
                } hover:bg-[#23c1d290] transition-colors`}
              >
                {singleData.icon}
                <h3>{singleData.title}</h3>
                <h3>{singleData.title2}</h3>
              </div>
            ))}
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex gap-3 mt-10"
          >
            <button className="btn text-black hover:text-white bg-[#23c0d2] uppercase hover:border hover:border-white">
              Download Resume
            </button>
            <Link
              to={"/education"}
              className="btn text-white hover:text-black uppercase border hover:bg-[#23c0d2] border-white"
            >
              Education
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
