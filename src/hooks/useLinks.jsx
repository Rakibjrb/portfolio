import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axios/useAxiosPublic";

const useLinks = () => {
  const axios = useAxiosPublic();

  const { data: links } = useQuery({
    queryKey: ["get-important-links"],
    queryFn: async () => {
      const res = await axios.get("/important/links");
      return res.data;
    },
  });

  return links ? links : [];
};

export default useLinks;
