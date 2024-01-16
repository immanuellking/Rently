import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import MobileSubMenuView from "./MobileSubMenuView";
import { useNavigate } from "react-router-dom";

import useGetUserInfo from "../features/user/useGetUserInfo";

import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { SiWindows11 } from "react-icons/si";
import { RiCoinsFill } from "react-icons/ri";
import { PiShieldCheckFill } from "react-icons/pi";
import { ImHome3 } from "react-icons/im";

const Header = () => {
  const navigate = useNavigate();

  const [openSidebar, setOpenSidebar] = useState(false);

  const displaySidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const logOut = () => {
    signOut(auth);
    navigate("/");
    window.location.reload();
  };

  const { user_status, first_name } = useGetUserInfo();

  return (
    <>
      <header
        className="w-full h-20 sm:h-24 bg-black text-white fixed top-0 left-0 right-0 header"
        style={{ zIndex: 1000 }}
      >
        <div className="w-full h-full relative flex lg:justify-between items-center px-2 sm:px-5 lg:px-20">
          <nav className="sm:flex-1">
            <ul className="hidden md:flex space-x-4">
              <li className="group hover:text-brightGreen">
                <div className="flex items-center justify-center whitespace-nowrap cursor-pointer">
                  <p className="mr-1 lg:mr-2 hover:text-brightGreen font-medium">
                    For Renters
                  </p>{" "}
                  <BsChevronDown className="text-sm font-extrabold text-white" />
                </div>

                <div className="bg-[#060606] hidden group-hover:fixed group-hover:sm:grid grid-cols-2 px-8 py-8 pt-12 gap-12 top-14">
                  <div className="flex justify-start items-center gap-x-3 cursor-pointer">
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-xl"
                      style={{ background: "#E73A03" }}
                    >
                      <div className="text-white text-2xl">
                        <SiWindows11 />
                      </div>
                    </div>
                    <div className="text-white">
                      <h2 className="font-semibold hover:text-brightGreen">
                        Marketplace
                      </h2>
                      <p className="text-sm text-[#D1D1D8]">
                        Search for properties
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-x-3 cursor-pointer">
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-xl"
                      style={{ background: "#442AAC" }}
                    >
                      <div className="text-white text-2xl">
                        <RiCoinsFill />
                      </div>
                    </div>
                    <div className="text-white">
                      <h2 className="font-semibold hover:text-brightGreen">
                        Rent now, Pay Later
                      </h2>
                      <p className="text-sm text-[#D1D1D8]">
                        Request for a loan
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="group hover:text-brightGreen">
                <div className="flex items-center justify-center whitespace-nowrap cursor-pointer">
                  <p className="mr-1 lg:mr-2 hover:text-brightGreen font-medium">
                    For Landlords
                  </p>{" "}
                  <BsChevronDown className="text-sm font-extrabold text-white" />
                </div>

                <div className="bg-[#060606] hidden group-hover:fixed group-hover:sm:grid grid-cols-2 px-8 py-8 pt-12 gap-12 top-14">
                  <div className="flex justify-start items-center gap-x-3 cursor-pointer">
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-xl"
                      style={{ background: "#47BB34" }}
                    >
                      <div className="text-white text-2xl">
                        <PiShieldCheckFill />
                      </div>
                    </div>
                    <div className="text-white">
                      <h2 className="font-semibold hover:text-brightGreen">
                        Verify a tenants identity
                      </h2>
                      <p className="text-sm text-[#D1D1D8]">Confirm identity</p>
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-x-3 cursor-pointer">
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-xl"
                      style={{ background: "#2E48DA" }}
                    >
                      <div className="text-white text-2xl">
                        <ImHome3 />
                      </div>
                    </div>
                    <div className="text-white">
                      <h2 className="font-semibold hover:text-brightGreen">
                        List your space
                      </h2>
                      <p className="text-sm text-[#D1D1D8]">
                        Rent out property
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-x-3 cursor-pointer">
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-xl"
                      style={{ background: "#442AAC" }}
                    >
                      <div className="text-white text-2xl">
                        <RiCoinsFill />
                      </div>
                    </div>
                    <div className="text-white">
                      <h2 className="font-semibold hover:text-brightGreen">
                        Renty Facility Limited
                      </h2>
                      <p className="text-sm text-[#D1D1D8]">
                        Manage your property
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hover:text-brightGreen font-medium whitespace-nowrap">
                <p className="cursor-pointer">Contact</p>
              </li>
              {/* <li className="hover:text-brightGreen font-medium whitespace-nowrap">
            <a href="#">About</a>
          </li> */}
            </ul>
            <div className="flex md:hidden text-white" onClick={displaySidebar}>
              {openSidebar ? (
                <CgClose className="text-white text-4xl font-bold" />
              ) : (
                <HiOutlineMenuAlt1 className="text-white text-4xl font-bold" />
              )}
            </div>
          </nav>
          <div className="md:flex-1 md:flex absolute left-[40%] md:static md:justify-center header">
            <h1
              className="text-4xl font-semibold header cursor-default"
              onClick={() => navigate("/")}
              style={{ zIndex: 1000 }}
            >
              Rently.
            </h1>
          </div>
          <div className="flex-1 hidden md:flex justify-end header">
            {user_status ? (
              <>
                <p className="py-2 px-6 ml-4 font-medium whitespace-nowrap">
                  Hi, {first_name}
                </p>
                <button
                  className="bg-red-600 py-2 px-6 rounded-3xl font-medium whitespace-nowrap"
                  onClick={logOut}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  className="hover:text-brightGreen font-medium whitespace-nowrap"
                  onClick={() => navigate("/login")}
                >
                  Log In
                </button>
                <button
                  className="bg-brightBlue py-2 px-4 ml-4 rounded-3xl font-medium whitespace-nowrap"
                  onClick={() => navigate("/create-account")}
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      {/* <SubMenuView /> */}
      <MobileSubMenuView
        openSidebar={openSidebar}
        user_status={user_status}
        first_name={first_name}
        logOut={logOut}
      />
    </>
  );
};

export default Header;
