import PropTypes from "prop-types";
import "./tech.css";

const Technology = ({ tech }) => {
  return (
    <div className="py-10">
      <div className="relative">
        <div
          className={`${tech.animation} w-32 h-[100px] flex justify-center items-center bg-white rounded-lg rounded-tl-3xl mr-10 cursor-pointer`}
        >
          <img className="w-[60px] mx-auto" src={tech.img} alt="tech" />
        </div>
        <div
          className={`${tech.animation} hover-do w-32 h-[100px] absolute top-0 left-0 bg-[#000] rounded-lg rounded-tl-3xl cursor-pointer flex items-center justify-center`}
        >
          <h2 className="text-[#23C0D2] text-xl text-center">
            {tech.technology}
          </h2>
        </div>
      </div>
    </div>
  );
};

Technology.propTypes = {
  tech: PropTypes.object,
};
export default Technology;
