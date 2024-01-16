import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "../features/Rent/apartmentsSlice";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SlLocationPin, SlHome } from "react-icons/sl";
import { FiCheckCircle } from "react-icons/fi";

import { useNavigate } from "react-router-dom";


const Listings = () => {
  const scrollRef = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const available_apartments = useSelector(
    (state) => state.apartments.apartments
  );

  useEffect(() => {
    dispatch(fetchApartments());
  }, []);


  const scrollDirection = (direction) => {
    if (direction === "right") {
      scrollRef.current.scrollLeft += 300;
    } else {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  return (
    <section className="bg-white w-full px-2 sm:px-5 lg:px-20 py-20 sm:py-24 flex items-start flex-col lg:flex-row gap-y-14 lg:gap-y-0">
      <div className="w-full sm:w-3/5 lg:w-2/5 space-y-4">
        <h3 className="text-[#059A57] font-bold">Listings</h3>
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="text-black text-2xl sm:text-4xl font-bold">
            Explore amazing spaces on Rently and pay monthly.
          </h1>
          <p className="w-full sm:w-[90%] text-sm text-[#6d6d6e] font-semibold">
            Rently-managed apartments are move-in ready and all bills inclusive.
            When you subscribe, you have complete access to more benefits than
            you can imagine. Living essentials including cooking gas supply, up
            to 24 hours power supply, treated water, waste management and and
            facility maintenance including plumbing, painting and AC repair.
          </p>
          <button
            className="bg-brightBlue py-4 px-10 text-white text-sm font-semibold rounded-full"
            onClick={() => navigate("/spaces")}
          >
            View Listings
          </button>
          <p>
            Looking to list your apartment instead?{" "}
            <a
              href="#"
              className="text-brightBlue underline"
              onClick={() => navigate("/create-account")}
            >
              Sign up as a Host
            </a>
          </p>
          <div className="flex gap-x-5">
            <div
              className="bg-[#E6E9FB] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => scrollDirection("left")}
            >
              <BsChevronLeft
                size={18}
                className="text-brightBlue"
              />
            </div>
            <div
              className="bg-[#E6E9FB] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => scrollDirection("right")}
            >
              <BsChevronRight
                size={18}
                className="text-brightBlue"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full lg:w-3/5 flex items-start overflow-x-scroll hide-x-scrollbar scroll-smooth"
        ref={scrollRef}
      >
        <div className="flex gap-x-5">
          {available_apartments.slice(0, 3).map( (apartment, index) => {
            const {
              id,
              name,
              location,
              apartment_details: { is_space_shared, bath, bed },
              is_all_bills_inclusive,
              rent_details: { rent, service_charge },
              images: {image_1}
            } = apartment; 

            return (
              <div
                key={index}
                className="w-80 sm:w-96 cursor-pointer"
                onClick={() => navigate(`/apartment/${id}`)}
              >
                <div className="w-full h-[300px] sm:h-[350px] rounded-3xl overflow-hidden">
                  <img
                    src={image_1}
                    alt={`${name} house`}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full px-2">
                  <div className="w-full py-4 space-y-2 border-b-[1px] border-brightGrey border-opacity-30">
                    <div className="w-full flex justify-between">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <div className="flex items-center justify-start text-sm text-brightGrey space-x-1">
                        <SlLocationPin />
                        <p>{location}</p>
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center text-sm text-brightGrey">
                      <div className="flex justify-center items-center space-x-2">
                        <p>{bed} bed(s)</p>
                        <span className="w-[6px] h-[6px] rounded full bg-brightGrey"></span>
                        <p>{bath} bath(s)</p>
                      </div>
                      <div className="flex items-center justify-start space-x-1">
                        <SlHome />
                        <p>
                          {is_space_shared ? "Shared space" : "Entire space"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-brightGrey py-4">
                    {is_all_bills_inclusive && (
                      <div className="flex items-center space-x-1">
                        <FiCheckCircle />
                        <p>All bills included</p>
                      </div>
                    )}
                    <p>
                      From{" "}
                      <span className="font-bold text-black">
                        NGN {(rent + service_charge).toLocaleString()}
                      </span>{" "}
                      monthly
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Listings;
