import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../Components/CommonComponets/BlogCard";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Loading from "../../Components/CommonComponets/Loading";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const axios = useAxiosPublic();

  const { data: latestBlogs, isLoading } = useQuery({
    queryKey: ["get-latest-blogs"],
    queryFn: async () => {
      const res = await axios.get("/latest/blogs");
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
          <div className="rounded-lg bg-gradient-to-b from-[#23c0d2] to-[#57706e]">
            <BlogCard blog={latestBlogs ? latestBlogs[0] : {}} />
          </div>

          {/* four latest blogs */}

          <div className="space-y-4 mt-5">
            {latestBlogs?.map((blog, index) => (
              <div
                key={blog + index + "latestblogs"}
                className="flex items-center gap-4 bg-[#638682] rounded-xl text-white"
              >
                <div className="w-[140px]">
                  <img
                    className="w-full rounded-l-xl"
                    src={blog?.thumbnail_image}
                    alt={"Blog Card"}
                  />
                </div>

                <div className="space-y-2 flex-1">
                  <Link to={`/blog/${blog._id}`}>
                    <h2 className="mt-4 text-xl font-bold hover:underline">
                      {blog?.title}
                    </h2>
                  </Link>
                  <p>{blog?.author?.published_date}</p>
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
