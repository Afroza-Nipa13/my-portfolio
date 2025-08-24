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
  
  <div className="relative">
    <Outlet />
    <div className=''>
      <div className='h-100 w-100 absolute -z-0 bg-sky-900 top-10 right-40  blur-3xl '>
</div>
    <div className='h-50 w-50 absolute -z-0 bg-pink-950 top-20 right-20 blur-3xl'>
</div>
    <div className='h-80 w-80 absolute -z-0 bg-gray-500 top-10 right-40  blur-3xl'>
</div>
    </div>
  </div>
  <Footer />
</div>
 );
};

export default MainLayOut;
