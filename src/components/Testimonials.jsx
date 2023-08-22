import React, { useState, useEffect } from "react";
import test1 from "../assets/ben-tofan.jpg";
import test2 from "../assets/alex-starnes.jpg";
import test3 from "../assets/mark-farias.jpg";

const feedbacks = [
  {
    name: "Ebube",
    status: "RENTLY MEMBER",
    text: "Thoroughly enjoyed my Rently space, ticks all the boxes. 😁",
    image: test1,
  },
  {
    name: "Sharon",
    status: "RENTLY HOST",
    text: "It has been such a pleasure hosting a room in my apartment on the Rently platform and to welcome guests. I have met some great people and made lifelong friendships.",
    image: test2,
  },
  {
    name: "Victor",
    status: "RENTLY MEMBER",
    text: "I travel a lot and I've had different customer service experiences. Rently platform is the first time I'm speaking to a pleasant customer service person in Nigeria or anywhere.",
    image: test3,
  },
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeTab < 2) {
        setActiveTab(activeTab + 1);
      } else {
        setActiveTab(0);
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [activeTab]);

  const { name, status, text, image } = feedbacks[activeTab];
  return (
    <section className="flex flex-col-reverse gap-y-10 sm:gap-y-0 sm:flex-row items-center sm:h-[70vh] lg:h-[90vh] bg-black pb-10 sm:pb-0 sm:pl-10 lg:pl-20">
      <div className="sm:flex-1 space-y-3 px-5 sm:px-0 lg:py-7">
        <h3 className="text-[#059A57] text-sm sm:text-base font-bold">
          TESTIMONIALS
        </h3>
        <div className="space-y-10">
          <div className=" sm:w-[80%] lg:w-[70%] space-y-5">
            <h1 className="text-white text-[1.7rem] sm:text-4xl font-bold">
              Why Customers Love Us
            </h1>
            <p className="text-white text-lg font-medium">{text}</p>
          </div>
          <div className="flex gap-x-2">
            <div
              className={`h-[7px] w-12 bg-[#1E1E1E] ${
                activeTab === 0 && "bg-white"
              }`}
            ></div>
            <div
              className={`h-[7px] w-12 bg-[#1E1E1E] ${
                activeTab === 1 && "bg-white"
              }`}
            ></div>
            <div
              className={`h-[7px] w-12 bg-[#1E1E1E] ${
                activeTab === 2 && "bg-white"
              }`}
            ></div>
          </div>
          <div className="">
            <h4 className="text-white text-lg font-semibold">{name}</h4>
            <p className="text-[#6d6d6e] text-xs font-semibold">{status}</p>
          </div>
        </div>
      </div>
      <div
        className="sm:flex-1 w-full h-[70vh] sm:h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </section>
  );
};

export default Testimonials;
