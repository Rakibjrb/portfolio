import Education from "../../Components/HomePageComponents/Education/Education";

const semesters = [
  {
    passed: "Completed",
    gpa: "3.30",
  },
  {
    passed: "Completed",
    gpa: "3.35",
  },
  {
    passed: "Completed",
    gpa: "Pending",
  },
  {
    passed: "Running",
    gpa: "Running",
  },
  {
    passed: "Incomming",
    gpa: "Incomming",
  },
  {
    passed: "Incomming",
    gpa: "Incomming",
  },
  {
    passed: "Incomming",
    gpa: "Incomming",
  },
  {
    passed: "Incomming",
    gpa: "Incomming",
  },
];

const placeTo = [
  "justify-start",
  "justify-center",
  "justify-end",
  "justify-center",
  "justify-start",
  "justify-center",
  "justify-end",
  "justify-center",
];

const MyEducation = () => {
  return (
    <div className="my-8 lg:my-12">
      <Education />
      <div className="max-w-screen-lg mx-auto mt-16 px-4 xl:px-0">
        <h2 className="text-4xl md:text-5xl text-center text-white">
          Semesters
        </h2>

        <div className="mt-10 space-y-10 flex flex-col">
          {semesters?.map((sem, index) => (
            <div
              key={sem + index + "semestercard"}
              className={`flex ${placeTo[index]}`}
            >
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className={`text-center space-y-3 py-14 px-6 w-80 text-white rounded-md ${
                  (sem?.passed === "Completed" &&
                    "bg-green-700 hover:bg-green-800") ||
                  (sem?.passed === "Running" &&
                    "bg-blue-700 hover:bg-blue-800") ||
                  (sem?.passed === "Incomming" && "bg-red-700 hover:bg-red-800")
                } transition-all duration-300 cursor-pointer`}
              >
                <h3 className="text-3xl">
                  {index + 1}
                  <sup>
                    {(index === 0 && "st") ||
                      (index === 1 && "nd") ||
                      (index === 2 && "rd") ||
                      (index > 2 && "th")}
                  </sup>{" "}
                  semester
                </h3>
                <p className="text-green-400 text-xl">{sem?.passed}</p>
                <p>
                  GPA : <span className="text-green-400">{sem?.gpa}</span> out
                  of 4.00
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
