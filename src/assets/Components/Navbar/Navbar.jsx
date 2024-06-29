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
            <Link to="/Project_2"  onClick={() => setMenu("home")}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Project_2/Branches" >Branches</Link>
          </li>
          <li className="nav-item">
            <Link to="/Project_2">Online-Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/Project_2/Course">Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/Project_2/Aboutus">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/Project_2/Contact">Contact</Link>
          </li>
        </ul>
        <span className="certification">
          <Link to="/Project_2">Enroll Now</Link>
        </span>
      </nav>
  );
};

export default Navbar;
