import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <Link to={`/projects/details/${project?._id}`}>
      <div className="bg-gradient-to-b from-[#23c0d2] to-[#414141] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#000] p-4 rounded-lg font-lato">
        <img
          className="w-full h-[200px] rounded-lg"
          src={project?.image}
          alt={project?.project_name}
        />
        <div className="text-white mt-4">
          <h3 className="text-3xl text-center md:text-4xl">
            {project?.project_name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

Project.propTypes = {
  project: PropTypes.object,
};
export default Project;
