import React, { useState, useEffect } from "react";
import girl_1 from "../Images/girl-left.png";
import girl_2 from "../Images/girl-right.png";

const GirlsBg = () => {
  // State to store the horizontal position of the mouse
  const [mouseX, setMouseX] = useState(0);

  // Function to handle mouse movement
  const handleMouseMove = (event) => {
    const x = event.clientX; // Get horizontal mouse position
    setMouseX(x);
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate the background position based on mouseX
  const backgroundPosition_1 = Math.round(
    ((mouseX / window.innerWidth) * 100) / 7,
    2
  );
  const backgroundPosition_2 = 100 - backgroundPosition_1;

  console.log(backgroundPosition_1, backgroundPosition_2);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${girl_1}), url(${girl_2})`,
        backgroundPosition:
          backgroundPosition_1 +
          "% bottom," +
          backgroundPosition_2 +
          "% bottom",
        backgroundSize: "20%",
        transition: "background-position ease-out",
        backgroundRepeat: "no-repeat"
      }}
    ></div>
  );
};

export default GirlsBg;
