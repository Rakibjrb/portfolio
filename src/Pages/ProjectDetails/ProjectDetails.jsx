import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IoHeartSharp } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { TiInputChecked } from "react-icons/ti";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Loading from "../../Components/CommonComponets/Loading";

const ProjectDetails = () => {
  const projectId = useParams().id;
  const axios = useAxiosPublic();
  const { data: project, isLoading } = useQuery({
    queryKey: ["getsingleproject", projectId],
    queryFn: async () => {
      const res = await axios.get(`/projects/${projectId}`);
      return res.data;
    },
  });

  return (
    <div className="max-w-3xl mx-auto px-3 my-16 xl:px-0 font-lato">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-white rounded-md text-black">
          <div className="flex justify-between p-5">
            <h2 className="text-2xl font-bold">{project?.project_name}</h2>
            <h3 className="font-bold">
              <span className="uppercase">{project?.category}</span> Project
            </h3>
          </div>
          <img src={project?.image} alt={project?.project_name} />
          <div className="p-5 space-y-10">
            <div className="text-justify">
              <p className="text-xl font-extrabold mb-2">Project Details</p>
              {project?.details}
            </div>
            <div>
              <p className="text-xl font-extrabold">Features</p>
              <ul className="mt-2 pl-4 space-y-2">
                {project?.features?.map((feature, index) => (
                  <li key={`feature${index}`}>
                    <TiInputChecked className="text-2xl float-left" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xl font-extrabold">Technologies</p>
              <ul className="uppercase flex gap-4 flex-wrap mt-4">
                {project?.techstacks?.map((tech, index) => (
                  <li
                    key={`tech${index}`}
                    className="bg-gray-200 py-1 px-4 rounded-3xl text-sm font-bold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between p-3">
            <div className="flex items-center">
              <button className="cursor-pointer p-2 hover:shadow-black hover:shadow-xl flex justify-center items-center rounded-full">
                <IoHeartSharp className={`text-3xl text-black`} />
              </button>
              <h2 className="text-3xl">{project?.recected}</h2>
            </div>
            <button className="cursor-pointer p-2 hover:shadow-black hover:shadow-xl flex justify-center items-center rounded-full">
              <IoMdShare className="text-3xl text-black" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
