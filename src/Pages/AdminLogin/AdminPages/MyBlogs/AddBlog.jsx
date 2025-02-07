import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { uploadImage } from "../../../../utils/upload-image";
import moment from "moment";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";
import Modal from "../../../../Components/CommonComponets/Modal";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const postBlog = async (blog) => {
    setLoading(true);
    const uploadedImage = await uploadImage(blog.image[0]);

    const data = {
      title: blog.title,
      description: blog.description,
      author: {
        name: "Rakibul Hasan",
        published_date: moment().format("DD-MM-YYYY"),
      },
      thumbnail_image: uploadedImage.url,
      like: 1,
      comments: [
        {
          commenter: {
            name: "Rakibul Hasan",
            comment: "This comment by Rakibul Hasan",
            published_date: moment().format("DD-MM-YYYY"),
          },
        },
      ],
      type: "latest",
    };

    axiosPublic
      .post("/blogs", data)
      .then(() => {
        document.getElementById("open_modal").showModal();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(postBlog)}
        className="mt-6 p-4 rounded-lg grid md:grid-cols-3 gap-5"
      >
        <div className="md:col-span-2">
          <h3 className="text-2xl mb-3">Write a title</h3>
          <input
            className="p-2 border border-white text-xl w-full rounded-lg bg-transparent outline-none"
            type="text"
            placeholder="write here ..."
            {...register("title", {
              required: true,
            })}
          />
        </div>
        <div>
          <h3 className="text-2xl mb-3">Upload a picture</h3>
          <input
            type="file"
            className="file-input file-input-bordered file-input-info w-full text-xl"
            {...register("image", {
              required: true,
            })}
          />
        </div>
        <div className="md:col-span-3">
          <h3 className="text-2xl mb-3">Write a description</h3>
          <textarea
            className=" p-2 border border-white text-xl w-full rounded-lg bg-transparent outline-none"
            name="blog-description"
            placeholder="write description here ..."
            {...register("description", {
              required: true,
            })}
            rows={10}
          ></textarea>
        </div>
        <div className="w-full md:col-span-3 grid gap-5 md:grid-cols-2">
          <div
            onClick={() => reset()}
            className="w-full p-3 text-xl bg-red-600 hover:bg-slate-300 rounded-md text-white hover:text-black cursor-pointer text-center uppercase transition-colors"
          >
            Reset
          </div>
          <button
            type="submit"
            className="w-full text-center btn uppercase bg-[#69f5ff] text-black hover:border hover:border-white hover:text-white"
          >
            {loading ? (
              <ImSpinner9 className="text-xl animate-spin" />
            ) : (
              "Post Now"
            )}
          </button>
        </div>
      </form>

      <Modal statusMessage={"Blog Successfully Posted"} message={false} />
    </>
  );
};

export default AddBlog;
