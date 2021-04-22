import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

const SideBarData = [
  {
    title: "Cv",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // {
  //   title: "Modélisation Numérique",
  //   path: "/modelisation",
  //   icon: <FaIcons.FaCarSide />,
  //   cName: "nav-text",
  // },
  {
    title: "Architecture",
    path: "/architecture",
    icon: <RiIcons.RiCommunityLine />,
    cName: "nav-text",
  },

  {
    title: "Developpement Web",
    path: "/developpementweb",
    icon: <FaIcons.FaReact />,
    cName: "nav-text",
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelope />,
    cName: "nav-text",
  },
];

export default SideBarData;
