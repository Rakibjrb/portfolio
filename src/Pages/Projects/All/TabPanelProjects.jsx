import PropTypes from "prop-types";
import Loading from "../../../Components/CommonComponets/Loading";
import Project from "../../../Components/CommonComponets/Project";
import useProjects from "../../../hooks/useProjects";

const TabPanelProjects = ({ tab }) => {
  let tabName;
  if (tab === "All") {
    tabName = "all";
  } else if (tab === "MERN") {
    tabName = "mern";
  } else if (tab === "Front End") {
    tabName = "frontend";
  } else if (tab === "Basic") {
    tabName = "basic";
  }

  const { projects, isLoading } = useProjects(tabName);

  return (
    <div className="mt-10">
      {isLoading ? (
        <Loading />
      ) : projects?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 pt-5 md:pt-0">
          {projects?.map((project) => (
            <Project key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <h3 className="text-2xl text-center">No {tab} Projects Found</h3>
      )}
    </div>
  );
};

TabPanelProjects.propTypes = {
  tab: PropTypes.string,
};
export default TabPanelProjects;
