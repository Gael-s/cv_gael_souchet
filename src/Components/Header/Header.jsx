import React from "react";

import { Link } from "react-router-dom";

import SideBar from "../SideMenu/SideBar";

import linkedin from "../Images/Reseaux_sociaux/linkedin.svg";
import github from "../Images/Reseaux_sociaux/github-black.svg";

function Header() {
  return (
    <div>
      <header className="header">
        <SideBar />

        
        
          <h1><Link to="/">Gaël SOUCHET</Link></h1>
        <div className="header__reseaux">
          <a
            href="https://www.linkedin.com/in/gaelsouchet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/Gael-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
