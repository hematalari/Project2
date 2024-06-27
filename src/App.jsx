import './App.css'
import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import {slider} from './assets/Data/data.json';
import Hero from './assets/Components/Hero/Hero';
import courses_info from './assets/Data/courses.js';
import Courses from './assets/Components/Courses/Courses';
import Footer from './assets/Components/Footer/Footer.jsx';


function App() {

  return (
    <>
        <Navbar />
        <Hero data={slider}/>
        <Courses courses={courses_info}/>
        <Footer />
    </>
  )
}

export default App
