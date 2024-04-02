import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const axios = useAxiosPublic();

  const { data: projects } = useQuery({
    queryKey: ["get-all-projects-admin"],
    queryFn: async () => {
      const res = await axios.get("/projects/tabs/all");
      return res.data;
    },
  });

  console.log(projects);

  return (
    <div className="px-3 py-4 font-lato">
      <Link to={"/dashboard/add-project"}>
        <button className="py-3 rounded-lg w-full bg-green-500 text-xl font-semibold text-black hover:bg-gray-200 transition-all">
          Add New Project
        </button>
      </Link>
      <div className="mt-8 w-full">
        <div className=" overflow-x-auto overflow-y-hidden">
          <table className="table">
            {/* head */}
            <thead className="text-white">
              <tr>
                <th className="text-sm">Image & Name</th>
                <th className="text-sm">Date</th>
                <th className="text-sm">Project Type</th>
                <th className="text-sm">Make</th>
              </tr>
            </thead>
            <tbody>
              {projects?.map((project, index) => (
                <tr key={`projects-id${index}`}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={project?.image} alt="project_image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{project?.project_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{project?.date}</td>
                  <td>
                    <div className="bg-green-500 uppercase text-sm text-black font-semibold inline-block py-1 px-4 rounded-md">
                      {project?.type}
                    </div>
                  </td>
                  <th>
                    {project?.type === "latest" ? (
                      <button className="btn bg-red-400 btn-sm uppercase text-sm text-black hover:text-white hover:border hover:border-white font-semibold">
                        Old
                      </button>
                    ) : (
                      <button className="btn bg-green-500 btn-sm uppercase text-sm text-black hover:text-white hover:border hover:border-white font-semibold">
                        Latest
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
