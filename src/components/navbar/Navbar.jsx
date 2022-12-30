import React from "react";

import "./Navbar.css";
import logo from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { useState } from "react";
function Links() {
  return (
    <>
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#pages">Pages</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact Us</a>
      </li>
      <li className="p__opensans">
        <a href="#blog">Blog</a>
      </li>
      <li className="p__opensans">
        <a href="#landing"> Landing</a>
      </li>
    </>
  );
}

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <Links />
      </ul>
      <div className="app__navbar-register">
        <a className="p__opensans app__navbar-register_btn">Log in / registration</a>
        <div className="seperate" />
        <a className="p__opensans app__navbar-register_book">book table</a>
      </div>
      <div className="app__navbar-menu_links">
        {!dropMenu && <GiHamburgerMenu fontSize={27} className="app__navbar-menu_links-open" onClick={() => setDropMenu(true)} />}
        {dropMenu && (
          <ul className="slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="app__navbar-menu_links-close" onClick={() => setDropMenu(false)} />

            <Links />
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
