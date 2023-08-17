import React from "react";
import banner from "../assets/sidekix-media.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[80vh]">
      <div className="absolute inset-0 bg-black opacity-50" style={{zIndex: -1}}></div>
      <div
      className="absolute inset-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      ></div>
    </section>
  );
};

export default HeroBanner;
