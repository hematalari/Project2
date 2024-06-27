import React from 'react'
import './Navabar.css'
import Logo from '../../Images/SKILL DEVELOP LOGO.png';


const Navbar = () => {
  return (
    <>
    <nav className="Navbar">
            <img className="Navbar-logo" src={Logo} alt="Logo" />
            <ul className="Navbar-menu">
                <li><a href='#Home' className='Home'>Home</a></li>
                <li><a href='#Branches' className='Branches'>Branches</a></li>
                <li><a href='#OnlineCourses' className='Online Courses'>Online Courses</a></li>
                <li><a href='#Courses' className='Courses'>Courses</a></li>
                <li><a href='#Aboutus' className='About-us'>About Us</a></li>
                <li><a href='#Contactus' className='Contact-us'>Contact Us</a></li>
            </ul>
            <span><a href='#Certificate' className='certification'>Get Certificate</a></span>
    </nav>
    </>
  )
}

export default Navbar