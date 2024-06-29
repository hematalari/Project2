import React from "react";
import "./Navabar.css";
import Logo from "../../Images/LOGO.jpeg";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="Navbar">
        <img src={Logo} alt="Logo" />
        <ul className="Navbar-item">
          <li className="nav-item">
            <Link to="/"  onClick={() => setMenu("home")}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Branches" >Branches</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Online-Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/Course">Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/Aboutus">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <span className="certification">
          <Link to="/">Enroll Now</Link>
        </span>
      </nav>
  );
};

export default Navbar;
