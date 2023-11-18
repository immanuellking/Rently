import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "../features/Rent/apartmentsSlice";
import Space from "./Space";


const AvailableSpaces = () => {
  const dispatch = useDispatch();
  const available_apartments = useSelector(
    (state) => state.apartments.apartments
  );
  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  return <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 bg-[#F4F4F4] px-5 lg:px-14 py-14 lg:py-24">
    {available_apartments.map((apartment, index) => {
      return <Space key={index} {...apartment} />
    })}
  </div>;
};

export default AvailableSpaces;
