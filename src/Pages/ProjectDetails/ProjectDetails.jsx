import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { TiInputChecked } from "react-icons/ti";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Loading from "../../Components/CommonComponets/Loading";

const ProjectDetails = () => {
  const [like, setLike] = useState(0);
  const [liked, setLiked] = useState(false);
  const params = useParams();
  const location = useLocation();
  const axios = useAxiosPublic();
  const { data: project, isLoading } = useQuery({
    queryKey: ["getsingleproject", params.id],
    queryFn: async () => {
      const res = await axios.get(`/projects/${params.id}`);
      setLike(res.data.recected || 1);
      return res.data;
    },
  });

  const alert = (message) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleLike = () => {
    if (liked) {
      alert("Already Resected");
      return;
    }
    axios
      .put(`/projects/add-like/${params.id}`, { like })
      .then((res) => {
        setLike(like + 1);
        alert("Thanks for Resected");
        setLiked(true);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oooops",
          text: "Something went wrong!",
        });
      });
  };

  const handleShare = () => {
    const link = `https://rakibul-dev.web.app${location.pathname}`;
    navigator.clipboard.writeText(link);
    alert("Link copied for share");
  };

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
              <button
                onClick={handleLike}
                className="cursor-pointer p-2 hover:shadow-black hover:shadow-xl flex justify-center items-center rounded-full"
              >
                {liked ? (
                  <FaHeart className={`text-3xl text-black`} />
                ) : (
                  <FaRegHeart className={`text-3xl text-black`} />
                )}
              </button>
              <h2 className="text-3xl">{like}</h2>
            </div>
            <button
              onClick={handleShare}
              className="cursor-pointer p-2 hover:shadow-black hover:shadow-xl flex justify-center items-center rounded-full"
            >
              <IoMdShare className="text-3xl text-black" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
