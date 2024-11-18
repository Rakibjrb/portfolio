import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import moment from "moment";
import { ImSpinner9 } from "react-icons/im";
import SectionHeader from "../../Components/CommonComponets/SectionHeader/SectionHeader";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Modal from "../../Components/CommonComponets/Modal";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      date: moment().format("D MMMM YYYY"),
      time: moment().format("h:mm a"),
      status: "toview",
    };

    setLoading(true);

    axios
      .post("/contacts", formData)
      .then((res) => {
        res.data && document.getElementById("open_modal").showModal();
        setLoading(false);
        reset();
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong !!!",
        });
      });
  };

  return (
    <>
      <div
        className="max-w-7xl mx-auto px-3 xl:px-0 h-[800px] md:h-[600px] flex justify-center items-center bg-gradient-to-b from-[#75e6f033] md:from-black to-[#75e6f0] md:to-[#75e6f0] rounded-b-full mb-10"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="font-lato">
          <SectionHeader title={"Contact Me"} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="space-y-6 flex-1">
                <input
                  className={`bg-white text-xl py-2 px-4 rounded-md w-full placeholder:text-black text-black outline-none ${
                    errors.name && "border-2 border-red-600"
                  }`}
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                />
                <input
                  className={`bg-white text-xl py-2 px-4 rounded-md w-full placeholder:text-black text-black outline-none ${
                    errors.email && "border-2 border-red-600"
                  }`}
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: true,
                    minLength: 4,
                    maxLength: 30,
                  })}
                />
                <input
                  className={`bg-white text-xl py-2 px-4 rounded-md w-full placeholder:text-black text-black outline-none ${
                    errors.subject && "border-2 border-red-600"
                  }`}
                  type="text"
                  placeholder="Subject"
                  {...register("subject", {
                    required: true,
                    minLength: 5,
                    maxLength: 50,
                  })}
                />
              </div>
              <textarea
                className={`bg-white placeholder:text-black text-black flex-1 text-xl w-full rounded-md outline-none px-4 py-2 ${
                  errors.message && "border-2 border-red-600"
                }`}
                rows="6"
                placeholder="Write Your Message Here ..."
                {...register("message", {
                  required: true,
                  minLength: 5,
                })}
              ></textarea>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="text-center btn uppercase hover:bg-[#4cbec6] text-white hover:border hover:border-white hover:text-white"
              >
                {loading ? (
                  <ImSpinner9 className="text-xl animate-spin" />
                ) : (
                  "Submit Now"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal statusMessage={"Submit Success"} message={true} />
    </>
  );
};

export default Contact;
