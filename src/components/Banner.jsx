import React from "react";
import katja from "../assets/katja-rooke.jpg";

const Banner = () => {
  return (
    <section
      className="h-[60vh] lg:h-[80vh]"
      style={{
        backgroundImage: `url(${katja})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></section>
  );
};

export default Banner;
