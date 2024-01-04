import SectionHeader from "../../Components/CommonComponets/SectionHeader/SectionHeader";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0 h-[600px] flex justify-center items-center bg-gradient-to-b from-[#000000] to-[#75e6f0] rounded-b-full">
      <div className="font-lato">
        <SectionHeader title={"Get In Touch"} />
        <form>
          <div className="flex gap-6">
            <div className="space-y-6 flex-1">
              <input
                className="bg-white text-xl py-2 px-4 rounded-md w-full placeholder:text-black text-black outline-none"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-white text-xl py-2 px-4 rounded-md w-full placeholder:text-black text-black outline-none"
                type="text"
                placeholder="Your Email"
              />
              <input
                className="bg-white text-xl py-2 px-4 rounded-md w-full placeholder:text-black text-black outline-none"
                type="text"
                placeholder="Subject"
              />
            </div>
            <textarea
              className="bg-white placeholder:text-black text-black text-xl flex-1 w-full rounded-md outline-none px-4 py-2"
              rows="6"
              placeholder="Write Your Message Here ..."
            ></textarea>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="btn uppercase hover:bg-[#4cbec6] text-white hover:border hover:border-white hover:text-white">
              Send Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
