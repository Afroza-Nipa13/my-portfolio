import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router';


const MainLayOut = () => {
    return (
        
        <div className='flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50'>
            <Navbar/>

        
            <Outlet></Outlet>
    
        
            <Footer/>
        </div>
        
    );
};

export default MainLayOut;