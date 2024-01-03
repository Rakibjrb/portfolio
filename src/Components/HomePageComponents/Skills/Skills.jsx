import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SectionHeader from "../../CommonComponets/SectionHeader/SectionHeader";
import Skill from "../../CommonComponets/SectionHeader/Skill";

const skills = [
  {
    id: "alskdf1",
    skill: "react",
    parcentage: 80,
  },
  {
    id: "alskdf2",
    skill: "nodejs",
    parcentage: 50,
  },
  {
    id: "alskdf3",
    skill: "express",
    parcentage: 40,
  },
  {
    id: "alskdf4",
    skill: "mongodb",
    parcentage: 70,
  },
];

const professional = [
  {
    id: "aoiudfhgnkfb1",
    skill: "Communication",
    parcentage: 70,
  },
  {
    id: "aoiudfhgnkfb2",
    skill: "Team Work",
    parcentage: 50,
  },
  {
    id: "aoiudfhgnkfb3",
    skill: "Management",
    parcentage: 60,
  },
  {
    id: "aoiudfhgnkfb4",
    skill: "Creativity",
    parcentage: 80,
  },
];

const Skills = ({ hiddenBtn }) => {
  return (
    <div className="max-w-7xl mx-auto font-lato px-5 xl:px-0">
      <SectionHeader title={"My Skills"} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="text-center text-3xl">Technical</h2>
          {skills?.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <h2 className="text-center text-3xl  mb-10">Professional</h2>
          <div className="grid grid-cols-2 gap-5">
            {professional?.map((skill) => (
              <div key={skill.id} className="text-center">
                <div
                  className="radial-progress text-[#00B6FF]"
                  style={{ "--value": skill?.parcentage }}
                  role="progressbar"
                >
                  {skill?.parcentage}%
                </div>
                <h2 className="mt-4">{skill?.skill}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${hiddenBtn ? "hidden" : ""} flex justify-center mt-16`}>
        <Link
          to={"/skills"}
          className="btn text-black hover:text-white bg-[#00B6FF] uppercase hover:border hover:border-white"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

Skills.propTypes = {
  hiddenBtn: PropTypes.bool,
};
export default Skills;
