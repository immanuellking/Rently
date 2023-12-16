import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { FaCheckCircle } from "react-icons/fa";

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

  const {
    name,
    location,
    apartment_details,
    apartment_availabilty,
    apartment_description,
    amenities,
    house_rules,
    rent_details,
  } = singleApartment;
  // const { bed, is_bathroom_shared, is_furnished, power, is_space_shared} = apartment_details;

  return (
    <>
      {singleApartment && (
        <div className="w-full pt-28 sm:pt-32 pb-10 sm:pb-14 lg:pb-20 bg-white">
          <div className="grid grid-cols-6 md:grid-cols-5 grid-rows-2 gap-4 w-full h-[27rem] px-5 lg:px-20">
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

          <div className="pt-10 px-5 lg:px-20 flex space-x-10">
            <div className="basis-[50%]">
              <div>
                <h1 className="text-4xl font-extrabold text-[000628]">
                  {name}
                </h1>
                <h2 className="text-lg text-brightGrey">{location}</h2>
                <div className="mt-2 flex text-brightGrey gap-x-5">
                  <p>{apartment_details?.bed} bed(s)</p>
                  <p>{apartment_details?.bath} bath(s)</p>
                  {apartment_details?.is_space_shared ? (
                    <p>Shared space</p>
                  ) : null}
                  {apartment_details?.is_bathroom_shared ? (
                    <p>Shared bathroom</p>
                  ) : null}
                  {apartment_details?.is_furnished ? <p>Furnished</p> : null}
                  <p>{apartment_details?.power_supply} hrs power</p>
                </div>
              </div>
              <div className="border-[1px] border-x-0 flex items-center gap-x-8 font-semibold py-3 my-5">
                <p className="text-brightGrey text-sm">
                  APARTMENT AVAILABLE FROM
                </p>
                <p className="text-black text-base">{apartment_availabilty}</p>
              </div>
              <div>
                <p className="font-semibold">{apartment_description}</p>
              </div>
              <div className="border-[1px] border-x-0 my-5 py-4">
                <h1 className="font-semibold">Amenities</h1>
                <div className="grid grid-cols-2 gap-y-5 pt-8">
                  {amenities?.map((item, index) => (
                    <p
                      key={index}
                      className="text-brightGrey"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border-[1px] border-t-0 border-x-0 my-5 py-4 pb-8">
                <h1 className="font-semibold">House Rules</h1>
                <div className="grid grid-cols-2 gap-y-5 pt-8">
                  {house_rules?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-x-2"
                    >
                      <FaCheckCircle
                        color="#2E48DA"
                        size={20}
                      />
                      <p className="text-brightGrey leading-5">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="basis-[50%] border-[1px] p-10 flex justify-center items-center">
              <div className="w-full">
                <h4 className="text-base font-bold">Rent Price</h4>
                <h1 className="text-4xl font-bold">
                  NGN{" "}
                  {(
                    rent_details?.rent + rent_details?.service_charge
                  ).toLocaleString()}{" "}
                  <span className="text-sm">/Year</span>
                </h1>

                <div className="mt-10 space-y-5 border-b-[1px] pb-4">
                  <div className="flex justify-between">
                    <p className="font-semibold">Rent</p>
                    <p>NGN {rent_details?.rent.toLocaleString()} yearly</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Service Charge</p>
                    <p>NGN {rent_details?.service_charge.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Refundable security deposit</p>
                    <p>
                      NGN{" "}
                      {rent_details?.refundable_security_deposit.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">One-time booking fee</p>
                    <p>NGN {rent_details?.booking_fee.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">VAT</p>
                    <p>NGN {rent_details?.vat.toLocaleString()}</p>
                  </div>
                </div>
                <div className="py-4 space-y-5">
                  <div className="flex justify-between">
                    <p className="font-semibold">Total</p>
                    <p className="text-2xl font-bold">
                      NGN{" "}
                      {(
                        rent_details?.rent +
                        rent_details?.service_charge +
                        rent_details?.refundable_security_deposit +
                        rent_details?.booking_fee +
                        rent_details?.vat
                      ).toLocaleString()}
                    </p>
                  </div>
                  
                  <button className="w-full py-4 bg-brightBlue rounded-3xl font-bold text-white">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpaceDetailsPage;
