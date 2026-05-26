import React from "react";
import "../css/navbar.css";

const Navbar = ({ isBackdrop }) => {
  return (
    <nav className={`navbar ${isBackdrop ? "backdrop" : ""}`}>
      <h1 className="home">
        <a href="#hero">Dario Colaciuri</a>
      </h1>
      <ul className="nav-links">
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#stack">stack</a>
        </li>
        <li>
          <a href="#music">music</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
