import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { SiWindows11 } from "react-icons/si";

const SubMenuView = () => {
  const [links, setLink] = useState({});
  const container = useRef();

  const subMenu = useSelector((state) => state.subMenu);
  const { headerSubLinks, location, isSubMenuOpen } = subMenu;

  useEffect(() => {
    if (headerSubLinks && headerSubLinks.links) {
      const { links: linksObj } = headerSubLinks;
      setLink(linksObj);
    }
    const { left, bottom } = location;

    const subHeader = container.current;
    subHeader.style.left = `${left}px`;
  }, [headerSubLinks]);

  console.log(links);

  return (
    <div
      className={`bg-[#060606] absolute ${
        !isSubMenuOpen ? "hidden" : "hidden sm:grid"
      } grid-cols-2 px-12 py-12 gap-12 z-50`}
      ref={container}
    >
      {links.length > 1 &&
        links.map((link, index) => {
          const { label, text, icon, bg } = link;

          return (
            <div
              className="flex justify-start items-center gap-x-3 cursor-pointer"
              key={index}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl"
                style={{ background: `#${bg}` }}
              >
                <div className="text-white text-2xl">{icon}</div>
              </div>
              <div className="text-white">
                <h2 className="font-semibold hover:text-brightGreen">
                  {label}
                </h2>
                <p className="text-sm text-[#D1D1D8]">{text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SubMenuView;
