import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "../features/Rent/apartmentsSlice";
import Space from "./Space";

const AvailableSpaces = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const available_apartments = useSelector(
    (state) => state.apartments.apartments
  );

  const dispatch = useDispatch();

  const totalSpace = available_apartments.length;
  const spacePerPage = 6;
  const pages = Math.floor(totalSpace / spacePerPage);

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };

  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, pages);
    setCurrentPage(nextPage);
  };

  const start = spacePerPage * (currentPage - 1);
  const end = spacePerPage * currentPage;
  const apartments = available_apartments.slice(start, end);

  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 bg-[#F4F4F4] px-5 lg:px-14 py-14 lg:py-16">
      {apartments.map((apartment, index) => {
        return <Space key={index} {...apartment} />;
      })}
    </div>
  );
};

export default AvailableSpaces;
