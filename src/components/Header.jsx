import React from "react";
import { useDispatch } from "react-redux";
import { openSubMenu } from "../features/subMenu/subMenuSlice";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();

  const displaySubMenu = (e) => {
    const pageLink = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const left = tempBtn.left;
    const bottom = tempBtn.bottom;
    dispatch(openSubMenu({pageLink,left, bottom}))
  };

  return (
    <header className="flex w-full justify-between items-center px-20 h-24 bg-black text-white">
      <nav className="flex-1">
        <ul className="flex justify-between">
          <li
            className="hover:text-brightGreen font-medium flex items-center justify-center whitespace-nowrap"
            onClick={displaySubMenu}
          >
            <a href="#" className="mr-2">For Renters</a> <BsChevronDown className="text-sm font-extrabold" />
          </li>
          <li className="hover:text-brightGreen font-medium flex items-center whitespace-nowrap" onClick={displaySubMenu}>
            <a href="#" className="mr-2">For Landlords</a> <BsChevronDown className="text-sm font-extrabold" />
          </li>
          <li className="hover:text-brightGreen font-medium whitespace-nowrap">
            <a href="#">Contact</a>
          </li>
          <li className="hover:text-brightGreen font-medium whitespace-nowrap">
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
      <div className="flex-1 flex justify-center">
        <h1 className="text-4xl font-semibold">Rently.</h1>
      </div>
      <div className="flex-1 flex justify-end">
        <button className="hover:text-brightGreen font-medium">Log In</button>
        <button className="bg-brightBlue py-2 px-4 ml-4 rounded-3xl font-medium">
          Create Account
        </button>
      </div>
    </header>
  );
};

export default Header;
