import PropTypes from "prop-types";
import "./tech.css";

const Technology = ({ tech }) => {
  return (
    <div className="w-44 bg-white p-4 rounded-lg mr-10">
      <img className="w-[100px] mx-auto" src={tech.img} alt="tech" />
    </div>
  );
};

Technology.propTypes = {
  tech: PropTypes.object,
};
export default Technology;
