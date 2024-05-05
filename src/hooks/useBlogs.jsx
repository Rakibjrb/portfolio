import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axios/useAxiosPublic";

const useBlogs = (skip) => {
  const axios = useAxiosPublic();

  const { data: blogs, isLoading } = useQuery({
    queryKey: ["get-blogs", skip],
    queryFn: async () => {
      const res = await axios.get(`/blogs/all?skip=${skip * 9}`);
      return res.data;
    },
  });

  return { blogs, isLoading };
};

export default useBlogs;
