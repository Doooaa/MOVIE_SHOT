import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import TitleMovies from "./TitleMovies";
import "../styles/nav.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="header">
      {/* Logo + Title */}
      <div className="logo-title">
        <img src="/images/footer1.png" width={80} height={80} alt="logo" />
        <TitleMovies fontSize="20px" fontSizev="28px" />
      </div>

      {/* Burger icon */}
      <div className="burger-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
      </div>

      {/* Navigation */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink className="nav-link" to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/search" onClick={closeMenu}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
