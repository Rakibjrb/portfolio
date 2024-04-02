import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";

const AllProjects = () => {
  const axios = useAxiosPublic();

  const { data: projects } = useQuery({
    queryKey: ["get-all-projects-admin"],
    queryFn: async () => {
      const res = await axios.get("/projects/tabs/all");
      return res.data;
    },
  });

  console.log(projects);

  return <div className="px-3 py-3">Latest projects</div>;
};

export default AllProjects;
