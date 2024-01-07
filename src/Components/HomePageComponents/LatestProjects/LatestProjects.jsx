import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../CommonComponets/SectionHeader/SectionHeader";
import Project from "../../CommonComponets/Project";
import useAxiosPublic from "../../../hooks/axios/useAxiosPublic";

const LatestProjects = () => {
  const axios = useAxiosPublic();

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("./projects");
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0">
      <SectionHeader title={"Latest Projects"} />
      {isLoading ? (
        <div className="flex justify-center">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 pt-5 md:pt-0">
          {projects?.map((project) => (
            <div
              key={project._id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="500"
            >
              <Project project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestProjects;
