import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { Link } from "react-router-dom";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="/#home" className="logo"> ... </Link>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>

      </header>
    </Headroom>
  );
}

export default Header;
