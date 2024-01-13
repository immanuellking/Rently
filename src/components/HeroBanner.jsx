import React from "react";
import banner from "../assets/sidekix-media.jpg";
import { useDispatch } from "react-redux";
import { closeSubMenu } from "../features/subMenu/subMenuSlice";
import { FiSearch } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-[80vh] sm:h-[70vh] lg:h-[95vh] mt-20 sm:mt-24"
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
      <div className="absolute flex flex-col gap-y-5 sm:gap-y-10 justify-center items-center inset-0">
        <h2 className="text-white font-bold text-4xl sm:text-6xl text-center">
          The better way to <br className="block sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-brightBlue to-brightGreen ">
            Rent
          </span>
        </h2>
        <p className="w-[95%] sm:w-[46rem] text-white text-base sm:text-lg font-medium text-center">
          Rently provides an all-inclusive rental management platform tailored
          for African landlords and tenants. Easily list your apartment at no
          cost, rent with flexibility, streamline tenant verification, and
          automate rent collection through our efficient management tools.
        </p>
        <div className="w-[90%] sm:w-[46rem] flex items-center justify-center h-16 sm:h-20 px-6 bg-[#2b2b2b] rounded-full">
          <div className="flex justify-center items-center z-50 w-full h-12 gap-x-2">
            <FiSearch className="text-white text-4xl font-thin" />
            <input
              type="search"
              placeholder="Where would you love to stay?"
              className="flex-1 outline-none border-o bg-transparent text-[rgb(143,148,143)]"
            />
            <button className="bg-brightBlue text-white h-full w-16 sm:w-52 lg:px-16 rounded-full font-semibold text-center flex justify-center items-center">
              <span
                className="hidden sm:flex whitespace-nowrap"
                onClick={() => navigate("/spaces")}
              >
                Find a home
              </span>
              <BsArrowRight className="block sm:hidden font-extrabold text-2xl" />
            </button>
          </div>
        </div>
        <button className="sm:hidden bg-brightBlue text-white text-lg font-semibold py-3 w-52 px-4 rounded-3xl whitespace-nowrap">
          Create Account
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
