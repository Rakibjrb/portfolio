import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
  return (
    <div className="space-y-4 text-white bg-gradient-to-b from-[#23c0d2] to-[#57706e] p-4 rounded-lg">
      <img
        className="w-full rounded-xl"
        src={blog?.thumbnail_image || "https://i.ibb.co/vXDH5xr/bg3.jpg"}
        alt={"Blog Card"}
      />

      <h2 className="text-2xl md:text-3xl font-bold">{blog?.title}</h2>
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
