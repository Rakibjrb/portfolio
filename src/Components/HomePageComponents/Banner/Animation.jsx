import { useEffect } from "react";

const Animation = () => {
  const makeCircles = 40;
  const arr = [...Array(makeCircles).keys()];

  useEffect(() => {
    const cords = { x: 0, y: 0 };

    const circles = document.querySelectorAll(".circle");
    circles?.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    const animateCircles = () => {
      let x = cords.x;
      let y = cords.y;
      circles?.forEach((circle, index) => {
        circle.style.left = `${x - 4}px`;
        circle.style.top = `${y}px`;
        circle.style.scale = (makeCircles - index) / makeCircles;
        circle.x = x;
        circle.y = y;
        const allCicles = circles[index + 1] || circles[0];
        x += (allCicles.x - x) * 0.3;
        y += (allCicles.y - y) * 0.3;
      });
      requestAnimationFrame(animateCircles);
    };

    window.addEventListener("mousemove", (e) => {
      cords.x = e.clientX;
      cords.y = e.clientY;
    });

    animateCircles();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {arr?.map((element) => (
        <div
          key={`animation-div${element}`}
          className="circle w-5 h-5 rounded-full bg-[#4cf3e0] absolute top-0 left-0 z-[1] hidden lg:block"
        ></div>
      ))}
    </div>
  );
};

export default Animation;
