import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { fetchSingleApartment } from "../features/Rent/apartmentsSlice";

const SpaceDetailsPage = () => {
  const { singleApartment, loading, error } = useSelector(
    (state) => state.apartments
  );

  const dispatch = useDispatch();

  const { spaceId } = useParams();

  useEffect(() => {
      dispatch(fetchSingleApartment(spaceId));
  }, []);

  console.log("SINGLE AaAAAPP", singleApartment);
  const image_1 = singleApartment?.images?.image_1;
  const image_2 = singleApartment?.images?.image_2;
  const image_3 = singleApartment?.images?.image_3;

  return (
    <div className="w-full pt-28 sm:pt-32 ">
      {singleApartment && (
        <div className="grid grid-cols-6 md:grid-cols-5 grid-rows-2 gap-4 w-full h-[27rem]">
          <div className="w-full col-span-6 md:col-span-3 md:row-span-2 rounded-2xl overflow-hidden">
            <img
              src={image_1}
              alt="image"
              className="w-full h-full"
            />
          </div>
          <div className="w-full col-span-3 md:col-span-2 rounded-2xl overflow-hidden">
            <img
              src={image_2}
              alt="image"
              className="w-full h-full"
            />
          </div>
          <div className="w-full col-span-3 md:col-span-2 rounded-2xl overflow-hidden">
            <img
              src={image_3}
              alt="image"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaceDetailsPage;
