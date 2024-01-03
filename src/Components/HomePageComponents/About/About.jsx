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
    title: "Experience",
    title2: "6 Months",
    icon: <BiSupport className="text-2xl" />,
  },
];

const About = () => {
  return (
    <div className="my-24 max-w-7xl mx-auto px-3 md:px-10 lg:px-3 xl:px-0 font-lato">
      <div className="mt-5  flex flex-col lg:flex-row lg:items-center gap-10">
        <div className="xl:w-1/3">
          <img
            className="rounded-xl w-3/4 md:w-3/5 lg:w-auto mx-auto"
            src={image}
            alt="about section pic"
          />
        </div>
        <div className="text-white xl:w-2/3">
          <h2 className="text-5xl font-semibold mb-10">
            About <span className="text-[#23c0d2]">Me</span>
          </h2>
          <p className="text-xl text-justify xl:text-left">
            Hello, I am Rakibul Hasan, a passionate Front End and MERN stack web
            developer with a keen eye for design and a love for crafting
            seamless user experiences. With a strong foundation in HTML, CSS,
            and JavaScript, I specialize in building dynamic and responsive web
            applications using the MERN (MongoDB, Express.js, React, Node.js)
            stack.
          </p>
          <div className="xl:w-3/5 grid grid-cols-3 gap-2 md:gap-3 my-10">
            {data?.map((singleData) => (
              <div
                key={singleData?.id}
                className={`border px-2 py-4 flex flex-col items-center rounded-md space-y-1 ${
                  singleData.id === "0002" && "bg-[#23c1d290]"
                } hover:bg-[#23c1d290] transition-colors`}
              >
                {singleData.icon}
                <h3>{singleData.title}</h3>
                <h3>{singleData.title2}</h3>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-10">
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
