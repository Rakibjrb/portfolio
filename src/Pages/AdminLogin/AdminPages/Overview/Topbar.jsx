import { useQuery } from "@tanstack/react-query";
import { FaHeart } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { AiOutlineFileDone } from "react-icons/ai";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";

const Topbar = () => {
  const axios = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["statisticsData"],
    queryFn: async () => {
      const res = await axios.get("/admin/statistics");
      return res.data;
    },
  });

  return (
    <div className="mt-7 bg-[#4f4f4f] p-4">
      <h2 className="text-3xl mb-4 text-white">Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="p-3 bg-[#000000] rounded-md flex justify-center items-center min-h-[260px] text-white">
          <div className="text-center">
            <div className="flex justify-center">
              <GoProjectSymlink className="text-5xl" />
            </div>
            <h3 className="text-xl my-5">Total Projects</h3>
            <h4 className="text-2xl font-bold">{data?.totalProjects || 0}</h4>
          </div>
        </div>
        <div className="p-3 bg-[#000000] rounded-md flex justify-center items-center min-h-[260px] text-white">
          <div className="text-center">
            <div className="flex justify-center">
              <FaHeart className="text-5xl" />
            </div>
            <h3 className="text-xl my-5">Total Hearts</h3>
            <h4 className="text-2xl font-bold">{data?.totalResected || 0}</h4>
          </div>
        </div>
        <div className="p-3 bg-[#000000] rounded-md flex justify-center items-center min-h-[260px] text-white">
          <div className="text-center">
            <div className="flex justify-center">
              <AiOutlineFileDone className="text-5xl" />
            </div>
            <h3 className="text-xl my-5">Task Completed</h3>
            <h4 className="text-2xl font-bold">2</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
