import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "../features/Rent/apartmentsSlice";
import Space from "./Space";

import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const AvailableSpaces = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const available_apartments = useSelector(
    (state) => state.apartments.apartments
  );

  const dispatch = useDispatch();

  const totalSpace = available_apartments.length;
  const spacePerPage = 6;
  const pages = Math.ceil(totalSpace / spacePerPage);

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };

  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, pages);
    setCurrentPage(nextPage);
  };

  const goToPage = (no) => {
    setCurrentPage(no);
  };

  const start = spacePerPage * (currentPage - 1);
  const end = spacePerPage * currentPage;
  const apartments = available_apartments.slice(start, end);

  const pageButtons = Array.from({ length: pages });
  console.log(pageButtons);

  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  return (
    <div className="w-full bg-[#F4F4F4] px-5 lg:px-14 py-14 lg:py-16">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 pb-14 lg:pb-16">
        {apartments.map((apartment, index) => {
          return <Space key={index} {...apartment} />;
        })}
      </div>
      <div className=" w-full flex items-center justify-center gap-x-2">
        <div
          className="w-10 h-10 border-[1.5px] border-gray-300 rounded-full flex items-center justify-center cursor-pointer text-gray-500 font-semibold hover:bg-brightBlue hover:border-brightBlue hover:text-white duration-300 ease-in-out"
          onClick={goToPrev}
        >
          <FaLessThan />
        </div>
        <div className="flex items-center gap-x-2">
          {pageButtons.map((_, index) => {
            return (
              <div
                className={`${
                  currentPage === index + 1
                    ? "bg-brightBlue border-brightBlue text-white"
                    : "border-gray-300 bg-transparent text-gray-500"
                } w-10 h-10 border-[1.5px] rounded-full flex items-center justify-center cursor-pointer font-semibold hover:bg-brightBlue hover:border-brightBlue hover:text-white duration-300 ease-in-out`}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
        <div
          className="w-10 h-10 border-[1.5px] border-gray-300 rounded-full flex items-center justify-center cursor-pointer text-gray-500 font-semibold hover:bg-brightBlue hover:border-brightBlue hover:text-white duration-300 ease-in-out"
          onClick={goToNext}
        >
          <FaGreaterThan />
        </div>
      </div>
    </div>
  );
};

export default AvailableSpaces;
