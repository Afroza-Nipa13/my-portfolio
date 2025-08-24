import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaHome, FaUserAlt, FaProjectDiagram, FaPhoneAlt, FaLaptopCode } from 'react-icons/fa';

const Navbar = () => {
  const links = <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 transition-colors duration-300 rounded-4xl
        ${isActive ? 'bg-gradient-to-r from-[#B79891] to-[#94716B] text-white' : 'bg-gray-100 text-black'} 
        hover:bg-gradient-to-r hover:from-[#B79891] hover:to-[#94716B] hover:text-white`
      }
    >
      <FaHome /> <li>Home</li>
    </NavLink>

    <NavLink
      to="/skills"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 transition-colors duration-300 rounded-4xl
        ${isActive ? 'bg-gradient-to-r from-[#B79891] to-[#94716B] text-white' : 'bg-gray-100 text-black'} 
        hover:bg-gradient-to-r hover:from-[#B79891] hover:to-[#94716B] hover:text-white`
      }
    >
      <FaLaptopCode /> <li>Skills</li>
    </NavLink>

    <NavLink
      to="/projects"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 transition-colors duration-300 rounded-4xl
        ${isActive ? 'bg-gradient-to-r from-[#B79891] to-[#94716B] text-white' : 'bg-gray-100 text-black'} 
        hover:bg-gradient-to-r hover:from-[#B79891] hover:to-[#94716B] hover:text-white`
      }
    >
      <FaProjectDiagram /> <li>Projects</li>
    </NavLink>

    <NavLink
      to="/about"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 transition-colors duration-300 rounded-4xl
        ${isActive ? 'bg-gradient-to-r from-[#B79891] to-[#94716B] text-white' : 'bg-gray-100 text-black'} 
        hover:bg-gradient-to-r hover:from-[#B79891] hover:to-[#94716B] hover:text-white`
      }
    >
      <FaUserAlt /> <li>About</li>
    </NavLink>

    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 transition-colors duration-300 rounded-4xl
        ${isActive ? 'bg-gradient-to-r from-[#B79891] to-[#94716B] text-white' : 'bg-gray-100 text-black'} 
        hover:bg-gradient-to-r hover:from-[#B79891] hover:to-[#94716B] hover:text-white`
      }
    >
      <FaPhoneAlt /> <li>Contact</li>
    </NavLink>
  </>

  return (
    <div className="navbar fixed w-full mx-auto bg-slate-950/50 backdrop-blur-md top-0 left-0 z-50 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="text-xl">
          <img className='w-40' src='./logo.png' alt="Logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#contact" className='btn bg-gradient-to-r from-[#B79891] to-[#94716B] text-white hover:opacity-90'>Hire Me</a>
      </div>
    </div>
  );
};

export default Navbar;
