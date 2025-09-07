import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router';
// bg-[url("https://i.postimg.cc/KjYmzRnP/5617352-2927262.jpg")]
// min-h-screen box-border  bg-gradient-to-b from-[#0f0c29] via-[#141327] to-[#15202f] bg-blend-overlay
const MainLayOut = () => {
    return (
        <div>
  <Navbar />
  
  <div className="">
    <Outlet />
    
  </div>
  <Footer />
</div>
 );
};

export default MainLayOut;
