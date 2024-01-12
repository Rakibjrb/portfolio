import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axios/useAxiosPublic";

const useProjects = (category) => {
  const axios = useAxiosPublic();

  const { data: projects, isLoading } = useQuery({
    queryKey: ["getprojectsfortabs", category],
    queryFn: async () => {
      const res = await axios.get(`/projects/tabs/${category}`);
      return res.data;
    },
  });

  return { projects, isLoading };
};

export default useProjects;
