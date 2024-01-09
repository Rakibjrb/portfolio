import { useEffect } from "react";

const Animation = () => {
  const arr = [...Array(10).keys()];

  useEffect(() => {
    const cords = { x: 0, y: 0 };

    const circles = document.querySelectorAll(".circle");
    circles?.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    const animateCircles = () => {
      circles?.forEach((circle) => {
        circle.style.left = `${cords.x - 4}px`;
        circle.style.top = `${cords.y}px`;
      });
    };

    window.addEventListener("mousemove", (e) => {
      cords.x = e.clientX;
      cords.y = e.clientY;
      animateCircles();
    });
  }, []);

  return (
    <>
      {arr?.map((element) => (
        <div
          key={`animation-div${element}`}
          className="circle w-5 h-5 rounded-full bg-[#4cf3e0] absolute top-0 left-0 z-[1]"
        ></div>
      ))}
    </>
  );
};

export default Animation;
