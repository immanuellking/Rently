import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openSubMenu, closeSubMenu } from "../features/subMenu/subMenuSlice";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import SubMenuView from "../features/subMenu/SubMenuView";
import MobileSubMenuView from "../features/subMenu/MobileSubMenuView";

const Header = () => {
  const dispatch = useDispatch();

  const [openSidebar, setOpenSidebar] = useState(false);

  const displaySubMenu = (e) => {
    const pageLink = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const left = tempBtn.left;
    const bottom = tempBtn.bottom;
    dispatch(openSubMenu({ pageLink, left, bottom }));
  };

  const closeSubMenuLinks = (e) => {
    if (e.target.classList.contains("header")) {
      dispatch(closeSubMenu());
    }
  };

  const displaySidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <>
      <header
        className="flex w-full lg:justify-between items-center px-2 sm:px-5 lg:px-20 h-20 sm:h-24 bg-black text-white header"
        onClick={closeSubMenuLinks}
        style={{zIndex: 1000}}
      >
        <nav className="sm:flex-1">
          <ul className="hidden sm:flex justify-between">
            <li
              className="hover:text-brightGreen font-medium flex items-center justify-center whitespace-nowrap"
              onClick={displaySubMenu}
            >
              <a
                href="#"
                className="mr-1 lg:mr-2"
              >
                For Renters
              </a>{" "}
              <BsChevronDown className="text-sm font-extrabold" />
            </li>
            <li
              className="hover:text-brightGreen font-medium flex items-center justify-center whitespace-nowrap for-renters"
              onClick={displaySubMenu}
            >
              <a
                href="#"
                className="mr-1 lg:mr-2"
              >
                For Landlords
              </a>{" "}
              <BsChevronDown className="text-sm font-extrabold" />
            </li>
            <li className="hover:text-brightGreen font-medium whitespace-nowrap">
              <a href="#">Contact</a>
            </li>
            {/* <li className="hover:text-brightGreen font-medium whitespace-nowrap">
            <a href="#">About</a>
          </li> */}
          </ul>
          <div
            className="flex sm:hidden text-white"
            onClick={displaySidebar}
          >
            {openSidebar ? <CgClose className="text-white text-4xl font-bold" /> : <HiOutlineMenuAlt1 className="text-white text-4xl font-bold" />}
          </div>
        </nav>
        <div className="flex-1 flex justify-center sm:justify-center header">
          <h1 className="text-4xl font-semibold header cursor-default">
            Rently.
          </h1>
        </div>
        <div className="flex-1 hidden sm:flex justify-end header">
          <button className="hover:text-brightGreen font-medium whitespace-nowrap">
            Log In
          </button>
          <button className="bg-brightBlue py-2 px-4 ml-4 rounded-3xl font-medium whitespace-nowrap">
            Create Account
          </button>
        </div>
      </header>
      <SubMenuView />
      <MobileSubMenuView openSidebar={openSidebar} />
    </>
  );
};

export default Header;
