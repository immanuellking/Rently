import React from "react";
import banner from "../assets/sidekix-media.jpg";
import { useDispatch } from "react-redux";
import { closeSubMenu } from "../features/subMenu/subMenuSlice";

const HeroBanner = () => {
  const dispatch = useDispatch();
  return (
    <section
      className="relative w-full h-[80vh]"
      onClick={() => dispatch(closeSubMenu())}
    >
      <div
        className="absolute inset-0 bg-black opacity-70"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      ></div>
      <div className="absolute flex flex-col gap-y-3 justify-center items-center inset-0">
        <h2 className="text-white font-bold text-6xl">
          The better way to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-brightBlue to-brightGreen ">
            Rent
          </span>
        </h2>
        <p className="w-[46rem] text-white text-lg font-medium text-center">
          Rently provides an all-inclusive rental management platform tailored
          for African landlords and tenants. Easily list your apartment at no
          cost, rent with flexibility, streamline tenant verification, and
          automate rent collection through our efficient management tools.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
