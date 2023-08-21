import React from "react";
import {
  BsClockFill,
  BsFillBriefcaseFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";

const offers = [
  {
    icon: <BsClockFill />,
    bg: "E73A03",
    label: "Fully furnished apartments",
    text: "Find fully furnished apartments suited to the duration of your stay, a few months or a couple of years.",
  },
  {
    icon: <BsFillBriefcaseFill />,
    bg: "2E48DA",
    label: "Flexible payment",
    text: "Rently  offers monthly, quarterly or annual payment terms to fit your unique schedule.",
  },
  {
    icon: <MdPeopleAlt />,
    bg: "703DDC",
    label: "Co-sharing option",
    text: "Choose between having the space to yourself or flat-sharing with verified housemates",
  },
  {
    icon: <BsFillEyeSlashFill />,
    bg: "E78C03",
    label: "No hidden charges",
    text: "For homes at Rently, there are no extra hidden charges. No viewing or inspection fees. Pay once, pay all.",
  },
];

const WhyRently = () => {
  return (
    <section className="bg-[#F9FAFD] px-2 sm:px-5 lg:px-20 py-14 sm:py-20 space-y-20">
      <div>
        <div className="space-y-4">
          <h3 className="text-[#059A57] font-bold">WHY RENTLY</h3>
          <div className="flex flex-col lg:flex-row justify-between gap-y-4 sm:gap-y-6 lg:gap-x-20">
            <h1 className="text-black text-2xl sm:text-4xl font-bold">
              Quality apartments.
              <br className="hidden sm:block" /> Trusted by millions of
              <br className="hidden sm:block lg:hidden" /> renters.
            </h1>
            <p className="w-full sm:w-[35rem] lg:w-[40rem] text-sm text-[#6d6d6e] font-medium">
              We offer you access to premium residential solutions, with as
              little as possible. Filter by price, location, apartment type and
              duration to find your next home.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-60 lg:gap-x-0 gap-y-16 px-6 sm:px-10 lg:px-0">
        {offers.map((item, index) => {
          const { icon, bg, label, text } = item;
          return (
            <div
              className="space-y-4 w-[16rem]"
              key={index}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-3xl"
                style={{ background: `#${bg}` }}
              >
                <div className="text-white text-2xl">{icon}</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-semibold text-xl">{label}</h3>
                <p className="text-sm text-[#6d6d6e] font-medium">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyRently;
