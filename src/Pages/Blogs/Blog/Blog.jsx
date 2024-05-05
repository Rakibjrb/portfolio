import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/axios/useAxiosPublic";
import Loading from "../../../Components/CommonComponets/Loading";

const Blog = () => {
  const id = useParams().id;
  const axios = useAxiosPublic();

  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog-post-by-id", id],
    queryFn: async () => {
      const res = await axios.get(`/blogs/${id}`);
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="space-y-4 text-white rounded-lg lg:w-1/2 mb-4 lg:mb-0 mr-4 float-start">
            <img
              className="w-full rounded-xl"
              src={blog?.thumbnail_image || "https://i.ibb.co/vXDH5xr/bg3.jpg"}
              alt={"Blog Card"}
            />
          </div>
          <div className="text-white space-y-5">
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              {blog?.title}
            </h2>
            <h3 className="text-sm">
              {blog?.author?.name} - {blog?.author?.published_date}
            </h3>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Read in Details</h2>
              <p className="text-xl text-justify">{blog?.description}</p>
            </div>

            <div className="mt-8">
              <Link
                to={"/blogs"}
                className="text-center text-xl px-4 py-1 rounded-md bg-[#4bbec7] text-black font-semibold uppercase"
              >
                Go Back
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
