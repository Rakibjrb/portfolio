import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../Components/CommonComponets/BlogCard";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Loading from "../../Components/CommonComponets/Loading";

const Sidebar = () => {
  const axios = useAxiosPublic();

  const { data: latestBlogs, isLoading } = useQuery({
    queryKey: ["get-latest-blogs"],
    queryFn: async () => {
      const res = await axios.get("/api/latest/blogs");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="sticky top-28">
      <h1 className="mb-6 text-3xl font-semibold text-white">Latest Blogs</h1>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BlogCard blog={latestBlogs ? latestBlogs[0] : {}} />

          {/* four latest blogs */}

          <div className="space-y-4 mt-5">
            {latestBlogs?.map((blogs, index) => (
              <div
                key={blogs + index + "latestblogs"}
                className="flex items-center gap-4 bg-[#638682] rounded-xl text-white"
              >
                <div className="w-[140px]">
                  <img
                    className="w-full rounded-l-xl"
                    src={blogs?.thumbnail_image}
                    alt={"Blog Card"}
                  />
                </div>

                <div className="space-y-2 flex-1">
                  <h2 className="text-xl font-semibold">{blogs?.title}</h2>
                  <p>{blogs?.author?.published_date}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
