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
    path: "/Project_2",
    element: <App />,
  },
  {
    path: "/Project_2",
    element: <App />,
  },
  {
    path: "/Project_2/Branches",
    element: <Branches />,
  },
  {
    path: "/Project_2",
    element: <Ocourses />,
  },
  {
    path: "/Project_2/Course",
    element: <Course />,
  },
  {
    path: "/Project_2/Aboutus",
    element: <Aboutus />,
  },
  {
    path: "/Project_2/Contact",
    element: <Contact />,
  },
  {
    path: "/Project_2",
    element: <Enroll />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)



