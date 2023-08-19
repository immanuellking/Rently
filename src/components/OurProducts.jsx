import React, { useState } from "react";
import bence from "../assets/bence-balla.jpg";
import couple from "../assets/couple.jpg";
import laptop from "../assets/laptop.jpg";
import rent from "../assets/rent-space.jpg";
import { SiWindows11 } from "react-icons/si";
import { ImHome3 } from "react-icons/im";
import { RiCoinsFill } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";

const products = [
  {
    page: "FOR TENANTS",
    contents: [
      {
        image: bence,
        icon: <SiWindows11 />,
        bg: "E73A03",
        label: "Marketplace",
        text: "Find an apartment in Nigeria and pay monthly, quarterly or annually. No inspection, agency or legal fees required. Browse from our carefully curated listings, choose a space, pay and move in.",
      },
      {
        image: couple,
        icon: <RiCoinsFill />,
        bg: "442AAC",
        label: "Rent now, Pay Later",
        text: "Rently’s Rent Now Pay Later gives you access to low interest, no collateral loans up to N3,000,000 to finance rent payments.",
      },
    ],
  },
  {
    page: "FOR LANDLORDS",
    contents: [
      {
        image: laptop,
        icon: <RiCoinsFill />,
        label: "Verify your tenant",
        subText: "Tenant verification made easy.",
        text: "Rently Verify is a tenant verification tool for landlord, property managers and real estate investors. The tool helps you carry out due diligence screenings on prospective tenants. No more sleepless nights worrying about your property when your tenant is verified by Rently Verify. Sign up to get started.",
      },
      {
        image: rent,
        icon: <ImHome3 />,
        label: "Rent now, Pay Later",
        text: "Got an empty apartment or a spare room? Earn money from listing your space and reach thousands of prospective tenants. With Rently, you choose from a pool of verified tenants, track your earnings on the host dashboard and get access to 24/7 maintenance support. Get started today.",
      },
    ],
  },
];

const OurProducts = () => {
  const [activePageTab, setActivePageTab] = useState(0);
  const { contents } = products[activePageTab];

  const displayTab = (e) => {
    const tab = e.target.textContent;
    console.log(tab);

    if (tab === "FOR LANDLORDS") {
      setActivePageTab(1);
    } else {
      setActivePageTab(0);
    }
  };

  return (
    <section className="bg-black py-20 px-4 sm:px-8 lg:px-20 space-y-10 sm:space-y-14">
      <div className="flex flex-col items-center space-y-3 sm:space-y-5">
        <h3 className="text-[#059A57] font-bold">OUR PRODUCTS</h3>
        <h1 className="text-white text-center sm:text-left text-2xl sm:text-4xl font-bold">
          Are you looking to rent or lease an apartment? <br className="hidden lg:block" /> We’ve got you
          covered.
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 sm:gap-x-16 lg:gap-x-28">
        <div className="space-x-8 sm:space-x-0 sm:space-y-5 flex flex-row justify-center sm:justify-start sm:flex-col">
          {products.map((product, index) => {
            const { page } = product;
            return (
              <div
                key={index}
                className={`whitespace-nowrap text-sm sm:text-xs font-bold px-5 py-4 sm:py-0 sm:pr-0 sm:pl-4 cursor-pointer ${
                  activePageTab === index ?
                  "text-[#3DDC97] border-[#3DDC97] border-b-2 sm:border-l-2" : "border-b-2 sm:border-l-2 border-l-black text-white"
                }`}
                onClick={displayTab}
              >
                {page}
              </div>
            );
          })}
        </div>
        <div className="flex sm:gap-x-14 sm:overflow-x-scroll w-full sm:hide-x-scrollbar">
          <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-14">
            {contents.map((content, index) => {
              const { image, icon, label, text, bg } = content;
              return (
                <div
                  key={index}
                  className="bg-[#131414] w-full sm:w-[25rem] lg:w-[28rem] overflow-hidden rounded-3xl lg:rounded-2xl"
                >
                  <img
                    src={image}
                    className="w-full h-[15rem] sm:h-[17rem]"
                  />
                  <div className="px-6 py-8 flex flex-col items-start">
                    <div className="flex items-center gap-x-3">
                      <div
                        className="flex items-center justify-center w-9 h-9 rounded-xl"
                        style={{ background: `#${bg}` }}
                      >
                        <div className="text-white text-lg">{icon}</div>
                      </div>
                      <h2 className="text-2xl text-white font-medium">
                        {label}
                      </h2>
                    </div>
                    <div className="my-10 h-[8rem] sm:h-[5rem]">
                      <p className="text-white text-sm">{text}</p>
                    </div>
                    <button className="flex items-center text-[#3DDC97] text-sm font-medium">
                      Learn More{" "}
                      <BsChevronRight className="text-xs ml-2 font-semibold" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
