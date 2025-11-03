import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Skills from '../Skills/Skills';
import TeamProject from '../teamProject/TeamProject';


const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <AboutMe/>
            <Skills/>
            <TeamProject/>
            <Projects/>
            <Contact/>
            <Gallery/>
        </div>
    );
};

export default Home;