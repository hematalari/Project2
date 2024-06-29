import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import './Branches.css'

const Branches = () => {
  return (
    <div>
      <Navbar />
      <div className="branches">
        <div className="branches-name">
         <h3>VIJAYWADA</h3>
         <hr />
        </div>
        <div className="branches-address">
          <p>flat.No:101, Venkat Krishna Enclave, Nidamanur, Vijaywada,
            AndhraPradesh, 521104
          </p>
          <div className="branches-address icon">
           <FaMapLocationDot/>
          </div>
        </div>
        <hr />
        <div className="branches-contact">
          <a href="+91 81251 75623">+91 81251 75623</a>
          <div className="branches-contact icon">
           <FaPhone /> 
          </div>
        </div>
        <hr />
        <div className="branches-map">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.421487130525!2d80.71705527388418!3d16.50480562763263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb5787f0432d%3A0x4ecdce8dd4150f72!2sNidamanuru%2C%20Vijayawada%2C%20Andhra%20Pradesh%20521104!5e0!3m2!1sen!2sin!4v1719652415979!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Branches;
