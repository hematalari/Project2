import React from "react";
import './Footer.css'
import logo from '/assets/Images/LOGO.jpeg'
import { FaRegCopyright,FaFacebook, FaYoutube,FaInstagramSquare,FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-right">
          <img src={logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          maiores culpa? Soluta dolor rerum,
        </p>
      </div>
      <div className="footer-center">
        <h2>Services</h2>
        <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Career</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
      </div>
      <div className="footer-left">
        <h2>Contact Now</h2>
        <p>+91 81251 75623</p>
        <p>nithyatch.vja@gmail.com</p>
      </div>
    </div>
    <div className="footer-bottom">
        <p><FaRegCopyright />2019.All Rights Are Reserved To NITHYA TECHNOLOGIES</p>
        <div className="social-icon">
        <FaFacebook className="facebook"/>
        <br />
        <FaYoutube className="youtube" />
        <br />
        <FaInstagramSquare className="insta" />
        <br />
        <FaTwitter className="twitter" />
        </div>
    </div>
    </>
  );
};

export default Footer;
