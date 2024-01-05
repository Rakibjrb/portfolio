import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionHeader from "../../CommonComponets/SectionHeader/SectionHeader";
import Project from "../../CommonComponets/Project";

const LatestProjects = () => {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("./projects.json");
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0">
      <SectionHeader title={"Latest Projects"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 pt-5 md:pt-0">
        {projects?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
