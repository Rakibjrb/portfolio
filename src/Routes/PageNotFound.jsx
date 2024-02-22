import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="space-y-10">
        <div className="space-y-3 text-center">
          <h1 className="text-5xl font-bold">404</h1>
          <h2 className="text-3xl font-semibold capitalize">Page not found</h2>
        </div>
        <div className="flex justify-center">
          <Link
            to={"/"}
            className="bg-[#41d4f5] py-1 px-5 text-black rounded-lg hover:bg-[#438796] transition-colors uppercase"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
