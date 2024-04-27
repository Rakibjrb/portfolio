import BlogCard from "../../Components/CommonComponets/BlogCard";

const Sidebar = () => {
  return (
    <div className="space-y-8 sticky top-28">
      <h1 className="mb-6 text-3xl font-semibold text-white">Latest Blogs</h1>

      <BlogCard />

      {/* four latest blogs */}

      <div className="space-y-4">
        {[0, 1, 2, 3, 4, 5].map((news, index) => (
          <div
            key={news + index + "latestblogs"}
            className="flex items-center gap-4 bg-[#638682] rounded-xl text-white"
          >
            <div className="w-[140px]">
              <img
                className="w-full rounded-l-xl"
                src={"https://i.ibb.co/Qcrtbwh/photography.jpg"}
                alt={"Blog Card"}
              />
            </div>

            <div className="space-y-2 flex-1">
              <h2 className="text-xl font-semibold">Blog Title</h2>
              <p>14-4-2024</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
