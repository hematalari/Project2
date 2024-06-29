import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Branches from './assets/Pages/Branchs/Branches.jsx'
import Ocourses from './assets/Pages/Onlinecourses/Ocourses.jsx'
import Course from './assets/Pages/Courses/Course.jsx'
import Aboutus from './assets/Pages/Aboutus/Aboutus.jsx'
import Contact from './assets/Pages/Contactus/Contact.jsx'
import Enroll from './assets/Pages/Enroll/Enroll.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "Home",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Branches",
    element: <Branches />,
  },
  {
    path: "Ocourses",
    element: <Ocourses />,
  },
  {
    path: "Course",
    element: <Course />,
  },
  {
    path: "Aboutus",
    element: <Aboutus />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Enroll",
    element: <Enroll />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)



