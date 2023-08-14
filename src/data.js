import { BsChevronDown } from "react-icons/bs";
import { SiWindows11 } from "react-icons/si";
import { RiCoinsFill } from "react-icons/ri";
import { PiShieldCheckFill } from "react-icons/pi";
import { ImHome3 } from "react-icons/im";

const subLinks = [
  {
    page: `For Rentals ${(<BsChevronDown />)}`,
    links: [
      {
        label: "Marketplace",
        text: "Search for properties",
        icons: <SiWindows11 />,
      },
      {
        label: "Rent now, Pay Later",
        text: "Request for a loan",
        icons: <RiCoinsFill />,
      },
    ],
  },
  {
    page: `For Landlords ${(<BsChevronDown />)}`,
    links: [
      {
        label: "Verify a tenants identity",
        text: "Confirm identity",
        icons: <PiShieldCheckFill />,
      },
      {
        label: "List your space",
        text: "Rent out property",
        icons: <ImHome3 />,
      },
      {
        label: "Renty Facility Limited",
        text: "Manage your property",
        icons: <RiCoinsFill />,
      },
    ],
  },
];
