import Skill from "../../Components/CommonComponets/SectionHeader/Skill";
import Skills from "../../Components/HomePageComponents/Skills/Skills";

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

const AllSkills = () => {
  return (
    <div className="mt-24">
      <Skills hiddenBtn={true} />
      <div className="max-w-7xl mx-auto px-5 xl:px-0">
        <div className="-mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {skills?.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5"></div>
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
