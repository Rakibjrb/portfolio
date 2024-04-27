// import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../CommonComponets/SectionHeader/SectionHeader";
import BlogCard from "../../CommonComponets/BlogCard";
// import useAxiosPublic from "../../../hooks/axios/useAxiosPublic";
// import Loading from "../../CommonComponets/Loading";

const LatestBlogs = () => {
  //   const axios = useAxiosPublic();

  //   const { data: projects, isLoading } = useQuery({
  //     queryKey: ["projects"],
  //     queryFn: async () => {
  //       const res = await axios.get("/latest-projects");
  //       return res.data;
  //     },
  //   });

  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0">
      <SectionHeader title={"Read My Latest Blogs"} />
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 pt-5 md:pt-0">
        {[0, 1, 2]?.map((blog) => (
          <div
            key={blog + "blog"}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="500"
          >
            <BlogCard />
          </div>
        ))}
      </div>
      {/* )} */}
    </div>
  );
};

export default LatestBlogs;
