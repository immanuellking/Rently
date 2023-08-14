import React from "react";

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center px-20 h-24 bg-black text-white">
      <nav className="flex-1">
        <ul className="flex justify-between">
          <li className="hover:text-brightGreen font-medium">
            <a href="#">For Renters</a>
          </li>
          <li className="hover:text-brightGreen font-medium">
            <a href="#">About</a>
          </li>
          <li className="hover:text-brightGreen font-medium">
            <a href="#">Blog</a>
          </li>
          <li className="hover:text-brightGreen font-medium">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex-1 flex justify-center">
        <h1 className="text-4xl font-semibold">Rently.</h1>
      </div>
      <div className="flex-1 flex justify-end">
        <button className="hover:text-brightGreen font-medium">Log In</button>
        <button className="bg-brightBlue py-2 px-4 ml-4 rounded-3xl font-medium">Create Account</button>
      </div>
    </header>
  );
};

export default Header;
