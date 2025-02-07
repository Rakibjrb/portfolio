import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllProjects = () => {
  const axios = useAxiosPublic();

  const { data: projects, refetch: reloadProjects } = useQuery({
    queryKey: ["get-all-projects-admin"],
    queryFn: async () => {
      const res = await axios.get("/projects/tabs/all");
      return res.data;
    },
  });

  const swalFire = (value) =>
    Swal.fire({
      title: "Are you sure?",
      text: `to make this is ${value} project?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    });

  const makeOld = (id) => {
    swalFire("old").then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`/change-type/${id}`, { type: "old" })
          .then((res) => {
            reloadProjects();
            Swal.fire({
              title: res.ok && "Success",
              text: "Now this is an old project listed",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err.message);
            Swal.fire({
              icon: "warning",
              title: "something went wrong !!!",
            });
          });
      }
    });
  };

  const makeLatest = (id) => {
    swalFire("latest").then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`/change-type/${id}`, { type: "latest" })
          .then((res) => {
            reloadProjects();
            Swal.fire({
              title: res.ok && "Success",
              text: "Now this is an latest project listed",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err.message);
            Swal.fire({
              icon: "warning",
              title: "something went wrong !!!",
            });
          });
      }
    });
  };

  return (
    <div className="px-3 py-4 font-lato">
      <Link to={"/dashboard/add-project"}>
        <button className="py-3 rounded-lg w-full bg-green-500 text-xl font-semibold text-black hover:bg-gray-200 transition-all">
          Add A New Project
        </button>
      </Link>
      <div className="mt-4 w-full bg-[#18656a] rounded-lg">
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
                      <button
                        onClick={() => makeOld(project?._id)}
                        className="btn bg-red-400 btn-sm uppercase text-sm text-black hover:text-white hover:border hover:border-white font-semibold"
                      >
                        Old
                      </button>
                    ) : (
                      <button
                        onClick={() => makeLatest(project?._id)}
                        className="btn bg-green-500 btn-sm uppercase text-sm text-black hover:text-white hover:border hover:border-white font-semibold"
                      >
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
