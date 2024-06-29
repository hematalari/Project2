import React from 'react'
import './Course.css'
import courses_info from '../../Data/courses.js';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Courses from '../../Components/Courses/Courses.jsx';
import Footer from '../../Components/Footer/Footer.jsx';


const Course = () => {
  return (
    <div>
        <Navbar />
        <Courses courses={courses_info}/>
        <Footer />
    </div>
  );
};

export default Course