import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router';
// bg-[url("https://i.postimg.cc/KjYmzRnP/5617352-2927262.jpg")]

const MainLayOut = () => {
    return (
        
       <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] bg-blend-overlay">
  <Navbar />
  
  <div className="flex-grow">
    <Outlet />
  </div>
  
  <Footer />
</div>

        
    );
};

export default MainLayOut;