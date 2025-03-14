import { Link, useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaCode, FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { TiInputChecked } from "react-icons/ti";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Loading from "../../Components/CommonComponets/Loading";
import { CgWebsite } from "react-icons/cg";

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
      .then(() => {
        setLike(like + 1);
        alert("Thanks for Resected");
        setLiked(true);
      })
      .catch(() => {
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
    <div className="bg-gradient-to-b from-[#cbcbcb] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-3 xl:px-0 font-lato">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="rounded-md text-black">
            <div className="flex justify-between py-6">
              <h2 className="text-2xl font-bold">{project?.project_name}</h2>
              <h3 className="font-bold uppercase">{project?.category}</h3>
            </div>
            <img
              className="rounded-lg"
              src={project?.image}
              alt={project?.project_name}
            />
            <div className="py-10 space-y-10">
              <div className="text-justify">
                <div className="mb-2 flex justify-between">
                  <h3 className="text-xl md:text-2xl font-extrabold">
                    Project Details
                  </h3>
                  <h3 className="text-red-600">Date : {project?.date}</h3>
                </div>
                <div className="md:text-xl">{project?.details}</div>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-extrabold">Features</p>
                <ul className="mt-2 pl-4 space-y-2">
                  {project?.features?.map((feature, index) => (
                    <li key={`feature${index}`}>
                      <TiInputChecked className="text-2xl float-left" />
                      <div className="md:text-xl">{feature}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xl font-extrabold md:text-2xl">
                  Technologies
                </p>
                <ul className="uppercase flex gap-4 flex-wrap mt-4">
                  {project?.techstacks?.map((tech, index) => (
                    <li
                      key={`tech${index}`}
                      className="bg-gray-200 py-1 px-4 rounded-3xl text-sm font-bold"
                    >
                      <div className="md:text-xl">{tech}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-extrabold">
                  Additional Project Links
                </p>
                <ul className="uppercase flex gap-20 flex-wrap mt-4">
                  <li className="pb-5 px-10 rounded-3xl text-sm">
                    <div
                      className="tooltip tooltip-bottom tooltip-open"
                      data-tip="Visit Live Site"
                    >
                      <Link to={project?.live_link} target="blank">
                        <CgWebsite className="text-4xl" />
                      </Link>
                    </div>
                  </li>
                  <li className="pb-5 rounded-3xl text-sm">
                    <div
                      className="tooltip tooltip-bottom tooltip-open"
                      data-tip="Client Code"
                    >
                      <Link to={project?.client_code} target="blank">
                        <FaCode className="text-4xl" />
                      </Link>
                    </div>
                  </li>
                  <li className="pb-5 px-10 rounded-3xl text-sm">
                    <div
                      className="tooltip tooltip-bottom tooltip-open"
                      data-tip="Server Code"
                    >
                      <Link to={project?.server_code} target="blank">
                        <FaCode className="text-4xl" />
                      </Link>
                    </div>
                  </li>
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
    </div>
  );
};

export default ProjectDetails;
