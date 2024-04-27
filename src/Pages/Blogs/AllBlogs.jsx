import BlogCard from "../../Components/CommonComponets/BlogCard";

const AllBlogs = () => {
  return (
    <div className="space-y-8">
      <h1 className="mb-6 text-4xl font-semibold text-white">Blogs</h1>

      {/* banner blog */}

      <BlogCard />

      <div className="grid grid-cols-12 gap-4">
        {[0, 1, 2, 3, 4, 5]?.map((news, index) => (
          <div
            key={news + index + "news"}
            className="col-span-12 md:col-span-6"
          >
            <BlogCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
