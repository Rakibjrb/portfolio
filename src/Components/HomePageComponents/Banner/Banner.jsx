import { useEffect } from "react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Typewriter from "typewriter-effect/dist/core";
import bgshape from "../../../assets/images/bgshape.png";
import myimage from "../../../assets/images/myimage.png";
import "./banner.css";

const Banner = () => {
  useEffect(() => {
    const bannerTitle = document.getElementById("writing-effect");
    new Typewriter(bannerTitle, {
      strings: ["Web Developer", "Front End Developer", "MERN Stack Developer"],
      autoStart: true,
      loop: true,
      delay: 75,
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full h-[768px] md:h-[600px] lg:h-[calc(100vh-64px)] font-lato bg-gradient-to-b from-[#000] to-[#23c0d2]">
      <div className="max-w-7xl mx-auto px-5 py-10 md:py-0 xl:px-0 h-full flex flex-col-reverse md:flex-row gap-5 items-center justify-center md:justify-between">
        <div className="lg:w-[70%] text-white space-y-4 text-center md:text-left mt-5 md:mt-0">
          <h3 className="text-3xl lg:text-4xl">Hello, {"I'ts"} Me</h3>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold">
            Rakibul Hasan
          </h1>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl">
            I am a{" "}
            <span className="text-[#23c0d2]" id="writing-effect">
              Front End Developer
            </span>
          </h2>
          <div className="flex justify-center md:justify-start gap-3">
            <a className="cursor-pointer">
              <FaLinkedinIn className=" hover:text-white border border-[#23c0d2] w-12 h-12 p-3 rounded-full hover:bg-[#0077b5] hover:border-none transition-all duration-500" />
            </a>
            <a className="cursor-pointer">
              <MdOutlineEmail className=" hover:text-white border border-[#23c0d2] w-12 h-12 p-3 rounded-full hover:bg-red-400 hover:border-none transition-all duration-500" />
            </a>
            <a className="cursor-pointer">
              <FaFacebookF className=" hover:text-white border border-[#23c0d2] w-12 h-12 p-3 rounded-full hover:bg-[#3b5998] hover:border-none transition-all duration-500" />
            </a>
          </div>
          <button className="btn uppercase bg-[#23c0d2] text-black hover:text-white transition-all duration-300">
            Hire Me
          </button>
        </div>
        <div className="relative">
          <div>
            <img
              className="spin-animation w-[300px] lg:w-[380px]"
              src={bgshape}
              alt="background shape"
            />
            <img
              className="absolute top-0 right-[70px] w-[160px] lg:w-[200px] lg:right-[85px] animate-pic"
              src={myimage}
              alt="my image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
