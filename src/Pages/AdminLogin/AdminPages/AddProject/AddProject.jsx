import { useForm } from "react-hook-form";
import Modal from "../../../../Components/CommonComponets/Modal";
import "./addproject.css";

const AddProject = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    document.getElementById("open_modal").showModal();
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
            <button
              type="submit"
              className="col-span-3 w-full p-3 text-xl bg-[#55daff] hover:bg-slate-300 rounded-md text-black uppercase text-center transition-colors"
            >
              Add Now
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
