import SectionHeader from "../../CommonComponets/SectionHeader/SectionHeader";
import bpipic1 from "../../../assets/education/bpi1.jpeg";
import bpipic2 from "../../../assets/education/bpi2.jpeg";

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto my-24 px-3 xl:px-0">
      <SectionHeader title={"Education"} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-3">
        <div>
          <img className="rounded-lg" src={bpipic1} alt="pic1" />
        </div>
        <div className="md:col-span-2 flex items-center justify-center">
          <div className="text-white space-y-5">
            <h2 className="text-xl lg:text-3xl text-center">
              Bogura Polytechnic Institute
            </h2>
            <h3 className="text-center lg:text-xl">Expecting Degree : 2027</h3>
            <h3 className="text-center lg:text-xl">
              Diploma in{" "}
              <span className="text-[#56cbf9]">
                Computer Science & Engineering
              </span>
            </h3>
          </div>
        </div>
        <div>
          <img className="rounded-lg" src={bpipic2} alt="pic1" />
        </div>
      </div>
    </div>
  );
};

export default Education;
