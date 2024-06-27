import React from 'react'
import './Courses.css'
import { TbCertificate } from "react-icons/tb";

const Courses = ({courses}) => {
  return (
    <div className='course-container'>
        {courses.map((item,idx)=>{
            return <div className="course-box" >
                <div key={idx} className="course-image">
                <img src={item.src} alt="" />
                </div>
                <div className="course-info">
                    <h3>{item.name}</h3>
                    <h2><TbCertificate style={{fontSize:"20px",marginRight:"10px",marginTop:"10px"}} />
                    {item.cert}</h2> 
                </div>
                <button type='submit'>see details</button>
            </div>
        })}
    </div>
  )
}

export default Courses