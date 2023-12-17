import image from "../../../assets/images/mypic2.jpg";

const About = () => {
  return (
    <div className="mt-24 max-w-7xl mx-auto px-3 xl:px-0 font-lato">
      <div className="mt-5 flex gap-10">
        <div className="w-1/3">
          <img className="rounded-xl" src={image} alt="about section pic" />
        </div>
        <div className="text-white w-2/3">
          <h2 className="text-5xl font-semibold mb-10">About Me</h2>
          <p className="text-xl">
            Hello, I am Rakibul Hasan, a passionate Front End and MERN stack web
            developer with a keen eye for design and a love for crafting
            seamless user experiences. My journey in the world of web
            development has been an exciting adventure, marked by continuous
            learning and a commitment to delivering high-quality solutions.
          </p>
          <p className="text-xl mt-5">
            I am fueled by the intersection of creativity and technology,
            constantly seeking innovative ways to bring ideas to life through
            code. With a strong foundation in HTML, CSS, and JavaScript, I
            specialize in building dynamic and responsive web applications using
            the MERN (MongoDB, Express.js, React, Node.js) stack.
          </p>
          <button className="btn text-black hover:text-white bg-[#23c0d2] uppercase mt-10 hover:border hover:border-white">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
