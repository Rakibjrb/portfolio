const Topbar = () => {
  return (
    <div className="mt-7 bg-[#4f4f4f] p-4">
      <h2 className="text-3xl mb-4 text-white">Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="p-3 bg-[#000000] rounded-md">
          <h3 className="text-xl">Title</h3>
          <h4 className="text-2xl font-bold">Value</h4>
        </div>
        <div className="p-3 bg-[#000000] rounded-md">
          <h3 className="text-xl">Title</h3>
          <h4 className="text-2xl font-bold">Value</h4>
        </div>
        <div className="p-3 bg-[#000000] rounded-md">
          <h3 className="text-xl">Title</h3>
          <h4 className="text-2xl font-bold">Value</h4>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
