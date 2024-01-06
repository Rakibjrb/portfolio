import { useForm } from "react-hook-form";
import moment from "moment";
import SectionHeader from "../../Components/CommonComponets/SectionHeader/SectionHeader";
import woman from "../../assets/icons/woman.svg";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Swal from "sweetalert2";

const Contact = () => {
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
    };

    axios
      .post("/contacts", formData)
      .then((res) => {
        res.data && document.getElementById("open_modal").showModal();
        reset();
      })
      .catch(() => {
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
        className="max-w-7xl mx-auto px-3 xl:px-0 h-[800px] md:h-[600px] flex justify-center items-center bg-gradient-to-b from-[#75e6f033] md:from-black to-[#75e6f0] md:to-[#75e6f0] rounded-b-full"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="font-lato">
          <SectionHeader title={"Get In Touch"} />
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
                    maxLength: 30,
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
                className="btn uppercase hover:bg-[#4cbec6] text-white hover:border hover:border-white hover:text-white"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <dialog
        id="open_modal"
        className="modal modal-bottom sm:modal-middle text-black font-lato"
      >
        <div className="modal-box bg-white">
          <div className="flex justify-center">
            <img className="w-[200px] mt-3 mb-5" src={woman} alt="woman pic" />
          </div>
          <h3 className="font-bold text-center text-3xl">Submit Success!!!</h3>
          <p className="pt-4 text-xl text-center">
            Thanks for submit your information ...
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Contact;
