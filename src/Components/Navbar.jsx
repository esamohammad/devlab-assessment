import React from "react";
import "../../src/App.css";
import { GiGrapes } from "react-icons/gi";
import { IoSearchCircleOutline } from "react-icons/io5";





const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <span>
          <GiGrapes />
        </span>
        <h1 className="logo-text">grapeslab</h1>
      </div>

      <ul>
        <li href="#">Home</li>
        <li href="#">
          Tracks <select name="" id=""></select>
        </li>
        <li href="#">
          Course <select name="" id=""></select>
        </li>
        <li href="#">
          Workshops <select name="" id=""></select>
        </li>
      </ul>

      <ul className="btn-sec">
        <li>Sign Up</li>
        <li>
          <button className="middle-button"> Sign In</button>
        </li>
        <li className="search-icon">
          <IoSearchCircleOutline />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
