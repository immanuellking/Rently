import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { SlLocationPin, SlHome } from "react-icons/sl";
import { FiCheckCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";


const Space = ({
  images,
  location,
  is_all_bills_inclusive,
  apartment_details,
  rent_details,
  name,
  id,
}) => {
  const { image_1, image_2, image_3 } = images;
  const { is_space_shared, bath, bed } = apartment_details;
  const { rent, service_charge } = rent_details;

  const navigate = useNavigate();


  return (
    <div className="w-full col-span-1 row-span-1 bg-white p-2 rounded-lg ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[250px] sm:h-[270px] xl:h-[300px]"
      >
        <SwiperSlide
          className="w-full h-full"
          style={{ margin: "0px", width: "100%" }}
        >
          <img
            className="w-full h-full object-fill"
            src={image_1}
            alt="available_space"
          />
        </SwiperSlide>
        <SwiperSlide
          className="w-full h-full"
          style={{ margin: "0px", width: "100%" }}
        >
          <img
            className="w-full h-full object-fill"
            src={image_2}
            alt="available_space"
          />
        </SwiperSlide>
        <SwiperSlide
          className="w-full h-full"
          style={{ margin: "0px", width: "100%" }}
        >
          <img
            className="w-full h-full object-fill"
            src={image_3}
            alt="available_space"
          />
        </SwiperSlide>
      </Swiper>

      <div
        className="w-full px-2 cursor-pointer"
        onClick={() => navigate(`/apartment/${id}`)}
      >
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
              <p>{is_space_shared ? "Shared space" : "Entire space"}</p>
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
              NGN {rent + service_charge}
            </span>{" "}
            monthly
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .swiper {
          width: 100%;
        }
        .swiper-slide {
          margin: 0;
        }
        .swiper-img {
          width: 100%;
          height: 100%;
          object-fit: fill;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Space;
