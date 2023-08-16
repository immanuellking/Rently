import { BsChevronDown } from "react-icons/bs";
import { SiWindows11 } from "react-icons/si";
import { RiCoinsFill } from "react-icons/ri";
import { PiShieldCheckFill } from "react-icons/pi";
import { ImHome3 } from "react-icons/im";

export const subLinks = [
  {
    page: "For Renters",
    links: [
      {
        label: "Marketplace",
        text: "Search for properties",
        icon: <SiWindows11 />,
        bg: "E73A03",
      },
      {
        label: "Rent now, Pay Later",
        text: "Request for a loan",
        icon: <RiCoinsFill />,
        bg: "442AAC",
      },
    ],
  },
  {
    page: "For Landlords",
    links: [
      {
        label: "Verify a tenants identity",
        text: "Confirm identity",
        icon: <PiShieldCheckFill />,
        bg: "47BB34",
      },
      {
        label: "List your space",
        text: "Rent out property",
        icon: <ImHome3 />,
        bg: "2E48DA",
      },
      {
        label: "Renty Facility Limited",
        text: "Manage your property",
        icon: <RiCoinsFill />,
        bg: "442AAC",
      },
    ],
  },
];
