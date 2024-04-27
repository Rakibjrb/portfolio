const BlogCard = () => {
  return (
    <div className="space-y-4 text-white bg-gradient-to-b from-[#23c0d2] to-[#57706e] p-4 rounded-lg">
      <img
        className="w-full rounded-xl"
        src={"https://i.ibb.co/vXDH5xr/bg3.jpg"}
        alt={"Blog Card"}
      />

      <h2 className="text-2xl md:text-3xl font-bold">Blog Title</h2>
      <h3 className="text-sm">Rakibul Hasan - 12-4-2024</h3>
      <p>This is blog short desction</p>
    </div>
  );
};

export default BlogCard;
