import PropTypes from "prop-types";
import "./tech.css";

const Technology = ({ tech }) => {
  return (
    <div className="w-32 h-[100px] flex justify-center items-center bg-white rounded-lg mr-10">
      <img className="w-[60px] mx-auto" src={tech.img} alt="tech" />
    </div>
  );
};

Technology.propTypes = {
  tech: PropTypes.object,
};
export default Technology;
