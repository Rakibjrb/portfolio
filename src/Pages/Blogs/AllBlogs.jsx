import BlogCard from "../../Components/CommonComponets/BlogCard";
import useBlogs from "../../hooks/useBlogs";
import Loading from "../../Components/CommonComponets/Loading";

const AllBlogs = () => {
  const { blogs, isLoading } = useBlogs(0);

  return (
    <>
      <h1 className="mb-6 text-4xl font-semibold text-white">Blogs</h1>

      {/* banner blog */}

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!blogs ? (
            <div className="py-10">
              <h1 className="text-center">No Blogs are available</h1>
            </div>
          ) : (
            <>
              <div className="rounded-lg bg-gradient-to-b from-[#23c0d2] to-[#57706e]">
                <BlogCard blog={blogs ? blogs[0] : {}} />
              </div>

              {isLoading ? (
                <div className="mt-6 py-6">
                  <Loading />
                </div>
              ) : (
                <div className="mt-6 grid grid-cols-12 gap-4">
                  {blogs?.map((blog, index) => (
                    <div
                      key={blog + index + "news"}
                      className="rounded-lg col-span-12 md:col-span-6 bg-gradient-to-b from-[#23c0d2] to-[#57706e]"
                    >
                      <BlogCard blog={blog} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default AllBlogs;
