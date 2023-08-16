import React from "react";
import { useSelector } from "react-redux";
import { learnLinks } from "../../data";

const MobileSubMenuView = () => {
  const mobileSubLinks = useSelector((state) => state.subMenu.headerLinks);
  return (
    <section className="w-full bg-black px-4 py-2 space-y-8">
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
      <article className="space-y-6" >
        <h2 className="text-lg text-[#D1D1D8]">Learn</h2>
        {learnLinks.map((link, index) => {
          const { label, icon, bg } = link;
          return (
            <div className="flex items-center gap-x-4">
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
    </section>
  );
};

export default MobileSubMenuView;
