import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Spaces = () => {
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
          <div className="text-darkGrey backdrop-blur-lg bg-white/20 py-4 px-7 rounded-2xl flex flex-col justify-between space-y-1 basis-[20%] relative">
            <p className="text-xs">TYPE OF SPACE</p>
            <div className="flex justify-between items-end">
              <p>Select Space Type</p>
              <BsChevronDown size={18} color="#fff" />
            </div>
            <div className="absolute top-10 backdrop-blur-lg bg-white/20">
              <div>
                <input type="checkbox" name="space-type-entire" id="space-type-entire" value="entire" />
                <label htmlFor="space-type-entire">
                  <p>Entire Space</p>
                  <p>Have a whole space to yourself</p>
                </label>
              </div>
            </div>
          </div>
          <div className="text-darkGrey backdrop-blur-lg bg-white/20 py-4 px-7 rounded-2xl flex flex-col justify-between space-y-1 basis-[20%]">
            <p className="text-xs">PRICE</p>
            <div className="flex justify-between items-end">
              <p>Select Price Range</p>
              <BsChevronDown size={18} color="#fff" />
            </div>
          </div>
          <div className="text-darkGrey backdrop-blur-lg bg-white/20 py-4 px-7 rounded-2xl flex flex-col justify-between space-y-1 basis-[20%]">
            <p className="text-xs" >DURATION</p>
            <div className="flex justify-between items-end">
              <p>Select Duration</p>
              <BsChevronDown size={18} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
