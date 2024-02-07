import React, { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import AvailableSpaces from "../components/AvailableSpaces";


const SpacesPage = () => {
  const [spaceOpen, setSpaceOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(false);
  const [duration, setDuration] = useState(false);

  const [range, setRange] = useState({ from: "", to: "" });

  const dropDown = (tag) => {
    if (tag === "space") {
      setPriceRange(false);
      setDuration(false);
      setSpaceOpen(!spaceOpen);
    }
    if (tag === "range") {
      setSpaceOpen(false);
      setDuration(false);
      setPriceRange(!priceRange);
    }
    if (tag === "duration") {
      setSpaceOpen(false);
      setPriceRange(false);
      setDuration(!duration);
    }
  };

  const closeDropDowns = () => {
    setSpaceOpen(false);
    setPriceRange(false);
    setDuration(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="w-full">
        <div className="w-screen pt-28 sm:pt-32 pb-10 sm:pb-14 lg:pb-20 px-5 lg:px-20">
          <div className="space-y-2 sm:space-y-4">
            <h3 className="text-darkGreen font-bold">Explore Rently</h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Available Spaces
            </h1>
          </div>

          <div className="mt-5 flex flex-wrap  w-full gap-5">
            <div
              className={`text-darkGrey backdrop-blur-lg bg-white/10 h-20  px-7 rounded-2xl flex flex-col justify-center ${
                spaceOpen || priceRange || duration
                  ? "w-full lg:w-[20rem] "
                  : "w-full lg:w-[24rem]"
              }`}
            >
              <label htmlFor="spaces-search" className="text-xs">
                LOCATION
              </label>
              <div className="flex items-end gap-x-2">
                <input
                  type="text"
                  name=""
                  id="spaces-search"
                  placeholder="Where would you love to Stay?"
                  className="bg-transparent h-8 w-full border-0 outline-0 font-medium text-darkGrey"
                />
                <FiSearch size={35} color="#fff" />
              </div>
            </div>

            <div
              className={`text-darkGrey backdrop-blur-lg bg-white/10 h-20 px-6 rounded-2xl flex flex-col justify-center space-y-2 ${
                spaceOpen
                  ? "w-full sm:w-[18rem] lg:w-[18rem]"
                  : "w-full sm:w-[18rem] lg:w-[15rem]"
              } relative`}
              style={{ zIndex: spaceOpen ? 2 : 1 }}
            >
              <p className="text-xs">TYPE OF SPACE</p>
              <div
                className="flex justify-between items-end cursor-pointer"
                onClick={() => dropDown("space")}
              >
                <p>Select Space Type</p>
                <BsChevronDown size={18} color="#fff" />
              </div>
              <div
                className={`absolute top-[4.5rem] left-0 w-full ${
                  spaceOpen ? "flex" : "hidden"
                } `}
              >
                <div className="bg-[#282828] w-full mx-4 py-5 px-4 space-y-5 rounded-b-2xl">
                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      name="space-type-entire"
                      id="space-type-entire"
                      value="entire"
                      className="border-[0.5px] border-white h-6 w-6 rounded-2xl cursor-pointer"
                      style={{ background: "transparent" }}
                    />
                    <label htmlFor="space-type-entire">
                      <p className="text-sm font-bold text-white">Entire Space</p>
                      <p className="text-sm ">Have a whole space to yourself</p>
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      name="space-type-shared"
                      id="space-type-entire"
                      value="shared"
                      className="border-[0.5px] border-white h-6 w-6 rounded-2xl cursor-pointer"
                      style={{ background: "transparent" }}
                    />
                    <label htmlFor="space-type-entire">
                      <p className="text-sm font-bold text-white">Shared Space</p>
                      <p className="text-sm ">Have a whole space to yourself</p>
                    </label>
                  </div>
                  <div className="w-full flex justify-end gap-x-3 text-white">
                    <button className="py-3 px-2 text-center ">Clear</button>
                    <button className="py-3 px-8 text-center rounded-[5rem] bg-brightBlue">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`text-darkGrey backdrop-blur-lg bg-white/10 h-20 px-7 rounded-2xl flex flex-col justify-center space-y-3 ${
                priceRange
                  ? "w-full sm:w-[18rem] lg:w-[20rem]"
                  : "w-full sm:w-[18rem] lg:w-[15rem]"
              } relative`}
              style={{ zIndex: priceRange ? 2 : 1 }}
            >
              <p className="text-xs">PRICE</p>
              <div
                className="flex justify-between items-end cursor-pointer"
                onClick={() => dropDown("range")}
              >
                <p>Select Price Range</p>
                <BsChevronDown size={18} color="#fff" />
              </div>
              <div
                className={`absolute top-[4.3rem] left-0 w-full ${
                  priceRange ? "flex" : "hidden"
                } `}
              >
                <div className="bg-[#282828] w-full mx-4 py-6 px-5 space-y-5 rounded-b-2xl">
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="range-from" className="text-xs">
                        From
                      </label>
                      <input
                        type="text"
                        name="range-from"
                        id="range-from"
                        placeholder="0"
                        value={range.from}
                        onChange={(e) =>
                          setRange((prev) => ({
                            from: e.target.value,
                            to: prev.to,
                          }))
                        }
                        className="w-24 px-2 h-11 bg-[#4B4B4B] border-[0.5px] border-gray-400 outline-none rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="range-to" className="text-xs">
                        To
                      </label>
                      <input
                        type="text"
                        name="range-to"
                        id="range-to"
                        placeholder="0"
                        value={range.to}
                        onChange={(e) =>
                          setRange((prev) => ({
                            from: prev.from,
                            to: e.target.value,
                          }))
                        }
                        className="w-24 px-2 h-11 bg-[#4B4B4B] border-[0.2px] border-gray-400 outline-none rounded-sm"
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-end gap-x-3 text-white">
                    <button className="py-3 px-2 text-center ">Clear</button>
                    <button className="py-3 px-8 text-center rounded-[5rem] bg-brightBlue">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`text-darkGrey backdrop-blur-lg bg-white/10 h-20 px-7 rounded-2xl flex flex-col justify-center space-y-3 ${
                duration
                  ? "w-full sm:w-[18rem] lg:w-[20rem]"
                  : "w-full sm:w-[18rem] lg:w-[15rem]"
              } relative`}
              style={{ zIndex: duration ? 2 : 1 }}
            >
              <p className="text-xs">DURATION</p>
              <div
                className="flex justify-between items-end cursor-pointer"
                onClick={() => dropDown("duration")}
              >
                <p>Select Duration</p>
                <BsChevronDown size={18} color="#fff" />
              </div>

              <div
                className={`absolute top-[4.3rem] left-0 w-full ${
                  duration ? "flex" : "hidden"
                } `}
              >
                <div className="bg-[#282828] w-full mx-4 py-6 px-5 space-y-5 rounded-b-2xl">
                  <div className="flex items-center gap-x-4">
                    <input
                      type="checkbox"
                      name="space-duration-monthly"
                      id="space-duration-monthly"
                      value="duration-monthly"
                      className="border-[0.5px] border-white h-6 w-6 rounded-2xl cursor-pointer"
                      style={{ background: "transparent" }}
                    />
                    <label
                      htmlFor="space-duration-monthly"
                      className="text-sm font-bold text-white"
                    >
                      Monthly
                    </label>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <input
                      type="checkbox"
                      name="space-duration-annual"
                      id="space-duration-annual"
                      value="duration-monthly"
                      className="border-[0.5px] border-white h-6 w-6 rounded-2xl cursor-pointer"
                      style={{ background: "transparent" }}
                    />
                    <label
                      htmlFor="space-duration-annual"
                      className="text-sm font-bold text-white"
                    >
                      Annual
                    </label>
                  </div>

                  <div className="w-full flex justify-end gap-x-3 text-white">
                    <button className="py-3 px-2 text-center ">Clear</button>
                    <button className="py-3 px-8 text-center rounded-[5rem] bg-brightBlue">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AvailableSpaces />

        {/* <Footer /> */}
      </section>
    </>
  );
};

export default SpacesPage;
