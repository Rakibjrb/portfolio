import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <Link to={`/projects/details/${project?._id}`}>
      <div className="p-4 font-lato">
        <img
          className="w-full h-[200px] rounded-lg"
          src={project?.image}
          alt={project?.project_name}
        />
        <div className="text-white mt-4">
          <h3 className="text-3xl text-center md:text-3xl">
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
