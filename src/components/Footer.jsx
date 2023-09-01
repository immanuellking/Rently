import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const footerContents = [
  {
    heading: "WHY RENTLY",
    links: [
      "Rent a Home",
      "List Your Space For Free",
      "Tenant Verification",
      "Rent Now Pay Later",
    ],
  },
  {
    heading: "COMPANY",
    links: ["About Us", "FAQs", "Careers", "Support"],
  },
  {
    heading: "GET IN TOUCH",
    links: [
      "rently@rently.com",
      "+444 444 4444",
      "72, Winstanly Close, off Todd Boehly Road, London, United Kingdom.",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="text-white px-20 pt-20 pb-10">
      <div className="flex justify-between space-x-20 pb-10 border-b-[0.5px] border-b-[#3e3e3f]">
        <div className="flex-[30%] flex flex-col justify-between">
          <h1 className="text-4xl font-semibold header cursor-default">
            Rently.
          </h1>
          <p className="text-sm font-semibold">
            Rently’s mission is a future where landlords and tenants in Nigeria
            experience efficient and affordable rental management. Our products
            help you to find an apartment and pay monthly, carry out due
            diligence and verify your tenants, request facility management for
            your property and apply for rental loans. How can we help you today?
          </p>
        </div>
        <div className="flex justify-between flex-[60%]">
          {footerContents.map((footerContent, index) => {
            const { heading, links } = footerContent;
            return (
              <div
                key={index}
                className="flex-1 space-y-6"
              >
                <h3 className="text-sm font-semibold">{heading}</h3>
                {links.map((link, lindex) => (
                  <p
                    key={link}
                    className={`text-sm font-semibold w-fit cursor-pointer ${
                      heading === "GET IN TOUCH" && lindex === 2
                        ? "hover:text-white"
                        : "hover:text-brightGreen"
                    }`}
                  >
                    {link}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between mt-10 px-12">
        <div className="flex gap-x-20">
          <p className="text-sm font-semibold cursor-pointe">
            &copy;Rently Inc, 2023
          </p>
          <p className="text-sm font-semibold cursor-pointer hover:text-brightGreen">
            Terms of Service
          </p>
          <p className="text-sm font-semibold cursor-pointer hover:text-brightGreen">
            Privacy Policy
          </p>
        </div>
        <div className="flex gap-x-5">
          <AiFillInstagram className="text-white" size={30} />
          <FaLinkedin className="text-white" size={29} />
          <BsTwitter className="text-white" size={29} />
          <AiFillFacebook className="text-white" size={29} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
