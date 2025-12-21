import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import { Link } from "react-router-dom";
import { greeting } from "../../portfolio";

function Header() {
   return (
      <Headroom>
         <header className="header">
            <Link to="/#home" className="logo">
               <span className="logo-name">{greeting.username}</span>
            </Link>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
               <span className="navicon" />
            </label>

            <ul className="menu">
               <li><Link to="/#home">Home</Link></li>
               <li><Link to="/projects">Projects</Link></li>
               <li><Link to="/resume">Resume</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </header>
      </Headroom>
   );
}

export default Header;
