import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "../features/Rent/apartmentsSlice";

const AvailableSpaces = () => {
  const dispatch = useDispatch();
  const available_apartments = useSelector(
    (state) => state.apartments.apartments
  );
  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  return <div className="w-full bg-white h-[100vh]"></div>;
};

export default AvailableSpaces;
