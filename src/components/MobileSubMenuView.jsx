import React from "react";
import { useSelector } from "react-redux";
import { learnLinks } from "../data";
import { useNavigate } from "react-router-dom";

import { subLinks } from "../data";

const MobileSubMenuView = ({
  openSidebar,
  user_status,
  first_name,
  logOut,
}) => {
  const mobileSubLinks = subLinks;
  const navigate = useNavigate();

  return (
    <section
      className={`w-full block md:hidden bg-black px-6 py-14 fixed left-0 right-0 ${
        openSidebar ? "translate-y-0" : "-translate-y-[1100px]"
      } ease-in-out duration-1000 overflow-y-scroll`}
      style={{ zIndex: 900, height: "95vh" }}
    >
      <div className="space-y-8">
        <p className="mt-0 font-medium whitespace-nowrap text-white text-xl">
          Hi, {first_name}
        </p>
        {mobileSubLinks.map((subLink, index) => {
          const { page, links } = subLink;
          return (
            <article key={index} className="space-y-6">
              <h2 className="text-lg text-[#D1D1D8]">{page}</h2>
              {links.map((link, index) => {
                const { label, icon, bg } = link;
                return (
                  <div className="flex items-center gap-x-4" key={index}>
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl"
                      style={{ background: `#${bg}` }}
                    >
                      <div className="text-white text-base">{icon}</div>
                    </div>
                    <h2 className="text-lg font-semibold text-white hover:text-brightGreen">
                      {label}
                    </h2>
                  </div>
                );
              })}
            </article>
          );
        })}
        <article className="space-y-6">
          <h2 className="text-lg text-[#D1D1D8]">Learn</h2>
          {learnLinks.map((link, index) => {
            const { label, icon, bg } = link;
            return (
              <div className="flex items-center gap-x-4" key={index}>
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ background: `#${bg}` }}
                >
                  <div className="text-white text-base">{icon}</div>
                </div>
                <h2 className="text-lg font-semibold text-white hover:text-brightGreen">
                  {label}
                </h2>
              </div>
            );
          })}
        </article>

        <div className="flex flex-col header gap-y-4">
          {user_status ? (
            <button
              className="text-white text-lg font-semibold bg-red-600 py-3 w-full px-4 rounded-3xl whitespace-nowrap"
              onClick={logOut}
            >
              Sign Out
            </button>
          ) : (
            <>
              <button
                className="bg-brightBlue text-white text-lg font-semibold py-3 w-80 px-4 rounded-3xl whitespace-nowrap"
                onClick={() => navigate("/create-account")}
              >
                Create Account
              </button>
              <button
                className="text-white text-lg font-semibold border-2 border-white py-3 w-80 px-4 rounded-3xl whitespace-nowrap"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MobileSubMenuView;
