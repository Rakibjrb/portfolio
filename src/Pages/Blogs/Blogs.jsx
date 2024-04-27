import AllBlogs from "./AllBlogs";
import Sidebar from "./Sidebar";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0 py-6 lg:py-10">
      <div className="grid grid-cols-12 gap-6 lg:gap-4">
        <div className="col-span-12 lg:col-span-8">
          <AllBlogs />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
