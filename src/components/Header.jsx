import React, { useRef, useState } from "react";
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
  const headerBottom = useRef();

  const displaySubMenu = (e) => {
    const pageLink = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const left = tempBtn.left;
    const bottom = headerBottom.current.getBoundingClientRect().bottom;
    dispatch(openSubMenu({ pageLink, left, bottom }));
  };

  const closeSubMenuLinks = (e) => {
    if (e.target.classList.contains("header")) {
      dispatch(closeSubMenu());
    }
  };

  const displaySidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <header
        className="w-full h-20 sm:h-24 bg-black text-white fixed top-0 left-0 right-0 header"
        onClick={closeSubMenuLinks}
        style={{ zIndex: 1000 }}
        ref={headerBottom}
      >
        <div className="w-full h-full relative flex lg:justify-between items-center px-2 sm:px-5 lg:px-20">
          <nav className="sm:flex-1">
            <ul className="hidden md:flex justify-between">
              <li
                className="hover:text-brightGreen font-medium flex items-center justify-center whitespace-nowrap cursor-pointer"
                onClick={displaySubMenu}
              >
                <p className="mr-1 lg:mr-2">For Renters</p>{" "}
                <BsChevronDown className="text-sm font-extrabold" />
              </li>
              <li
                className="hover:text-brightGreen font-medium flex items-center justify-center whitespace-nowrap for-renters cursor-pointer"
                onClick={displaySubMenu}
              >
                <p className="mr-1 lg:mr-2">For Landlords</p>{" "}
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
              className="flex md:hidden text-white"
              onClick={displaySidebar}
            >
              {openSidebar ? (
                <CgClose className="text-white text-4xl font-bold" />
              ) : (
                <HiOutlineMenuAlt1 className="text-white text-4xl font-bold" />
              )}
            </div>
          </nav>
          <div className="md:flex-1 md:flex absolute left-[40%] md:static md:justify-center header">
            <h1 className="text-4xl font-semibold header cursor-default">
              Rently.
            </h1>
          </div>
          <div className="flex-1 hidden md:flex justify-end header">
            <button className="hover:text-brightGreen font-medium whitespace-nowrap">
              Log In
            </button>
            <button className="bg-brightBlue py-2 px-4 ml-4 rounded-3xl font-medium whitespace-nowrap">
              Create Account
            </button>
          </div>
        </div>
      </header>
      <SubMenuView />
      <MobileSubMenuView openSidebar={openSidebar} />
    </>
  );
};

export default Header;
