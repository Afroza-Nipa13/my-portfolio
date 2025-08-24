import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOut from './LayOut/MainLayOut.jsx';
import Home from './Component/Home/Home.jsx';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Contact from './Component/Contact/Contact.jsx';
import ProjectsSection from './Component/Projects/Projects.jsx';
import AboutMe from './Component/About/About.jsx';
import Skills from './Component/Skills/Skills.jsx';


Aos.init()
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/contact',
        Component:Contact
      },
      {
        path:'/projects',
        Component:ProjectsSection
      },
      {
        path:'/about',
        Component:AboutMe
      },
      {
        path:'/skills',
        Component:Skills
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)
