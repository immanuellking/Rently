import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Spaces = () => {
  const [spaceOpen, setSpaceOpen] = useState(false);

  return (
    <section className="w-full">
      <div className="w-full mt-24 px-20">
        <div className="space-y-4">
          <h3 className="text-darkGreen font-bold">Explore Rently</h3>
          <h1 className="text-4xl font-extrabold text-white">
            Available Spaces
          </h1>
        </div>
        <div className="mt-5 flex w-full gap-x-5">
          <div className="text-darkGrey backdrop-blur-lg bg-white/20 py-4 px-7 rounded-2xl flex flex-col justify-between space-y-1 basis-[40%]">
            <label
              htmlFor="spaces-search"
              className="text-xs"
            >
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
              <FiSearch
                size={35}
                color="#fff"
              />
            </div>
          </div>
          <div
            className={`text-darkGrey backdrop-blur-lg bg-white/10 py-4 px-7 rounded-2xl flex flex-col justify-between space-y-1 ${
              spaceOpen ? "basis-[40%]" : "basis-[20%]"
            } relative`}
          >
            <p className="text-xs">TYPE OF SPACE</p>
            <div className="flex justify-between items-end">
              <p>Select Space Type</p>
              <BsChevronDown
                size={18}
                color="#fff"
                onClick={() => setSpaceOpen(!spaceOpen)}
              />
            </div>
            <div
              className={`absolute top-[6rem] left-0 w-full ${
                spaceOpen ? "flex" : "hidden"
              } `}
            >
              <div className="backdrop-blur-lg bg-white/20 w-full mx-4 py-6 px-5 space-y-4">
                <div className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    name="space-type-entire"
                    id="space-type-entire"
                    value="entire"
                    className="border-[0.5px] border-white h-6 w-6 rounded-2xl"
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
                    className="border-[0.5px] border-white h-6 w-6 rounded-2xl"
                    style={{ background: "transparent" }}
                  />
                  <label htmlFor="space-type-entire">
                    <p className="text-sm font-bold text-white">Shared Space</p>
                    <p className="text-sm ">Have a whole space to yourself</p>
                  </label>
                </div>
                <div className="w-full flex justify-end gap-x-3 text-white">
                  <button className="py-3 px-2 text-center ">Clear</button>
                  <button className="py-3 px-8 text-center rounded-[5rem] bg-brightBlue">Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-darkGrey backdrop-blur-lg bg-white/20 py-4 px-7 rounded-2xl flex flex-col justify-between space-y-1 basis-[20%]">
            <p className="text-xs">PRICE</p>
            <div className="flex justify-between items-end">
              <p>Select Price Range</p>
              <BsChevronDown
                size={18}
                color="#fff"
              />
            </div>
          </div>
          <div className="text-darkGrey backdrop-blur-lg bg-white/20 py-4 px-7 rounded-2xl flex flex-col justify-between space-y-1 basis-[20%]">
            <p className="text-xs">DURATION</p>
            <div className="flex justify-between items-end">
              <p>Select Duration</p>
              <BsChevronDown
                size={18}
                color="#fff"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
