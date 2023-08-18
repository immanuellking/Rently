import React from "react";
import greeting from "../assets/Greeting-Social.png";
import rent from "../assets/rent.webp"

const EasytoUseTools = () => {
  return (
    <section className="px-1 sm:px-0 py-5 sm:py-14 lg:py-20 space-y-8 sm:space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-y-3">
        <h3 className="font-bold text-[#54A560]">DESIGNED FOR LIVING</h3>
        <h1 className="text-2xl sm:text-4xl font-bold text-center">Easy to use tools for landlord and tenants</h1>
      </div>
      <div className="flex gap-x-3 sm:gap-x-8 h-[30vh] sm:h-[55vh] lg:h-[90vh] w-[95%] lg:w-[80%] mx-auto">
        <div
          className="h-full flex-1 rounded-lg sm:rounded-xl"
          style={{
            backgroundImage: `url(${greeting})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="h-full flex-1 rounded-lg sm:rounded-xl"
          style={{
            backgroundImage: `url(${rent})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
  );
};

export default EasytoUseTools;
