import PropTypes from "prop-types";
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="bg-gradient-to-b from-[#23c0d2] to-[#414141] p-4 rounded-lg font-lato">
      <img
        className="w-full h-[200px] rounded-lg"
        src={project?.image}
        alt={project?.project_name}
      />
      <div className="text-white mt-4">
        <Link
          className="hover:underline"
          to={`/projects/details/${project?._id}`}
        >
          <h3 className="text-4xl">{project?.project_name}</h3>
        </Link>
        <div className="flex justify-center gap-4 mt-5">
          <div className="tooltip" data-tip="Visit Live Site">
            <Link to={project?.live_link} target="blank">
              <CgWebsite className="text-4xl text-[#23c0d2]" />
            </Link>
          </div>
          <div className="tooltip" data-tip="View Client Side Code">
            <Link to={project?.client_code} target="blank">
              <FaCode className="text-4xl" />
            </Link>
          </div>
          {project.server_code === "none" ? (
            <></>
          ) : (
            <div className="tooltip" data-tip="View Server Side Code">
              <Link to={project?.server_code} target="blank">
                <FaCode className="text-4xl" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object,
};
export default Project;
