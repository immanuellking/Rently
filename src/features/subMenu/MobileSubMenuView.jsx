import React from "react";
import { useSelector } from "react-redux";
import { learnLinks } from "../../data";

const MobileSubMenuView = ({ openSidebar }) => {
  const mobileSubLinks = useSelector((state) => state.subMenu.headerLinks);
  return (
    <section
      className={`w-full block md:hidden bg-black px-6 py-8 space-y-8 fixed left-0 right-0 ${
        openSidebar ? "translate-y-0" : "-translate-y-[1100px]"
      } ease-in-out duration-1000 h-screen overflow-y-auto`}
      style={{zIndex: 900}}
    >
      {mobileSubLinks.map((subLink, index) => {
        const { page, links } = subLink;
        return (
          <article
            key={index}
            className="space-y-6"
          >
            <h2 className="text-lg text-[#D1D1D8]">{page}</h2>
            {links.map((link, index) => {
              const { label, icon, bg } = link;
              return (
                <div
                  className="flex items-center gap-x-4"
                  key={index}
                >
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
            <div
              className="flex items-center gap-x-4"
              key={index}
            >
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
        <button className="bg-brightBlue text-white text-lg font-semibold py-3 w-80 px-4 rounded-3xl whitespace-nowrap">
          Create Account
        </button>
        <button className="text-white text-lg font-semibold border-2 border-white py-3 w-80 px-4 rounded-3xl whitespace-nowrap">
          Sign In
        </button>
      </div>
    </section>
  );
};

export default MobileSubMenuView;
