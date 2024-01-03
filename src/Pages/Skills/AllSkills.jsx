import Skill from "../../Components/CommonComponets/Skill";
import Skills from "../../Components/HomePageComponents/Skills/Skills";

const skills = [
  {
    id: "alskdadff1",
    skill: "html",
    parcentage: 90,
  },
  {
    id: "alskdasdff2",
    skill: "css",
    parcentage: 80,
  },
  {
    id: "alskdfasdff3",
    skill: "Javacript",
    parcentage: 70,
  },
];

const AllSkills = () => {
  return (
    <div className="my-24">
      <Skills hiddenBtn={true} />
      <div className="max-w-7xl mx-auto px-5 xl:px-0">
        <div className="mt-16 md:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
