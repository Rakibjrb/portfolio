import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import Swal from "sweetalert2";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import Modal from "../../../../Components/CommonComponets/Modal";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";
import "./addproject.css";

const AddProject = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (formData) => {
    const image = formData.image[0];
    const imagesize = image.size / (1024 * 1024);

    if (imagesize > 2) {
      Swal.fire("Select image under 2MB");
      return;
    }

    const features = formData.features.split(",");
    const techstacks = formData.technologies.split(",");

    const imgBody = new FormData();
    imgBody.set("key", import.meta.env.VITE_imgbb_api);
    imgBody.append("image", image);

    setLoading(true);

    const hostImg = async () => {
      const res = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: imgBody,
      });
      return res.data.data.url;
    };

    const imagelink = await hostImg();

    const project = {
      image: imagelink,
      project_name: formData.name,
      details: formData.details,
      features,
      recected: 1,
      techstacks,
      type: "latest",
      category: formData.category,
      live_link: formData.live_link,
      client_code: formData.client_code,
      server_code: formData.server_code || "none",
      date: moment().format("DD-MM-YYYY"),
    };

    axiosPublic
      .post("/projects", project)
      .then(() => {
        document.getElementById("open_modal").showModal();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="main-container font-lato min-h-screen flex justify-center items-center text-4xl px-3 xl:px-0">
        <div className="xl:w-3/5">
          <h1 className="text-5xl text-center mb-10">Add New Project</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-4 gap-5"
          >
            <input
              type="text"
              placeholder="Project Name"
              className="input input-bordered input-info w-full text-xl col-span-4"
              {...register("name", {
                required: true,
                minLength: 5,
              })}
            />
            <select
              className="text-xl input input-bordered input-info"
              {...register("category", {
                required: true,
              })}
            >
              <option value="frontend">Select Category</option>
              <option value="pending">Pending</option>
              <option value="frontend">Frond End</option>
              <option value="mern">MERN stack</option>
              <option value="basic">Basic</option>
            </select>
            <input
              type="file"
              className="file-input file-input-bordered file-input-info w-full col-span-3 text-xl"
              {...register("image", {
                required: true,
              })}
            />
            <textarea
              className="textarea textarea-info col-span-4 text-xl"
              placeholder="Project Description"
              {...register("details", {
                required: true,
                minLength: 5,
              })}
            ></textarea>
            <textarea
              className="textarea textarea-info col-span-2 text-xl"
              placeholder="Project Features"
              {...register("features", {
                required: true,
                minLength: 5,
              })}
            ></textarea>
            <textarea
              className="textarea textarea-info col-span-2 text-xl"
              placeholder="Project Technologies"
              {...register("technologies", {
                required: true,
                minLength: 5,
              })}
            ></textarea>
            <input
              type="text"
              placeholder="Project Live Site Link"
              className="input input-bordered input-info w-full text-xl col-span-2"
              {...register("live_link", {
                required: true,
                minLength: 4,
              })}
            />
            <input
              type="text"
              placeholder="Client Side Code Link"
              className="input input-bordered input-info w-full text-xl"
              {...register("client_code", {
                required: true,
                minLength: 4,
              })}
            />
            <input
              type="text"
              placeholder="Server Side Code Link"
              className="input input-bordered input-info w-full text-xl"
              {...register("server_code", {
                required: true,
                minLength: 4,
              })}
            />
            <button
              type="submit"
              className="col-span-3 text-center btn uppercase bg-[#69f5ff] text-black hover:border hover:border-white hover:text-white"
            >
              {loading ? (
                <ImSpinner9 className="text-xl animate-spin" />
              ) : (
                "Add Now"
              )}
            </button>
            <div
              onClick={() => reset()}
              className="w-full p-3 text-xl bg-red-600 hover:bg-slate-300 rounded-md text-white hover:text-black cursor-pointer text-center uppercase transition-colors"
            >
              Reset
            </div>
          </form>
        </div>
      </div>
      <Modal statusMessage={"Project Successfully Added"} message={false} />
    </>
  );
};

export default AddProject;
