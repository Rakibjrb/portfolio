import { Link } from "react-router-dom";
import useBlogs from "../../../../hooks/useBlogs";
import Loading from "../../../../Components/CommonComponets/Loading";
import AddBlog from "./AddBlog";

const MyBlogs = () => {
  const { blogs, isLoading } = useBlogs(0);

  return (
    <div className="w-full p-4 bg-[#34e5e853] min-h-screen">
      <h1 className="text-4xl uppercase text-center">My Blogs</h1>
      <div className="w-full xl:grid xl:grid-cols-6 xl:gap-4 py-4">
        <div className="xl:col-span-4">
          <h2 className="text-xl uppercase">Add a new blog</h2>
          <AddBlog />
        </div>

        {/* fetch all blogs and show here */}
        <div className="space-y-4 mt-5 xl:col-span-2">
          {isLoading ? (
            <Loading />
          ) : (
            blogs?.map((blog, index) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;
