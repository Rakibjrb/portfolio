import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="space-y-4 text-white p-4 rounded-lg">
      <img
        className="w-full rounded-xl"
        src={blog?.thumbnail_image || "https://i.ibb.co/vXDH5xr/bg3.jpg"}
        alt={"Blog Card"}
      />

      <Link to={`/blog/${blog?._id}`}>
        <h2 className="mt-4 text-2xl font-bold hover:underline">
          {blog?.title}
        </h2>
      </Link>
      <h3 className="text-sm">
        {blog?.author?.name} - {blog?.author?.published_date}
      </h3>
      <p>{blog?.description?.slice(0, 100)} ....</p>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
};
export default BlogCard;
