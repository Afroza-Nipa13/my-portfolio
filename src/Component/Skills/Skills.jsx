import React from 'react';
import Marquee from "react-fast-marquee";

const Skills = () => {
    return (
        <div

            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className='min-h-screen'>
            <section className="">
                <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-10">
                    <h2 className="text-4xl font-bold">My <span className='text-orange-400'>Skills </span></h2>
                    <div className="flex evenly w-full justify-center lg:justify-between">
                        {/* Marquee Section */}
                        <Marquee pauseOnHover={true} gradient={false} speed={50}>
                            <img className='w-20 h-20 mx-10' src='https://i.postimg.cc/SRg2x52J/html.png' alt="HTML" />
                            <img className='w-20 h-20 mx-10' src='https://i.postimg.cc/VkxSvX6B/css.png' alt="CSS" />
                            <img className='w-20 h-20 mx-10' src='https://i.postimg.cc/9M18RbjR/tailwind.png' alt="tailwind" />
                            <img className='w-20 h-20 mx-10' src='https://i.postimg.cc/Z5mT9jmc/Js.png' alt="JavaScript" />
                            <img className='w-20 h-20 mx-10' src='https://i.postimg.cc/V66pr054/react.png' alt="React" />
                            <img className='w-40 h-20 mx-10' src='https://i.postimg.cc/yYkRQ135/node-js.png' alt="Node.js" />
                            <img className='w-20 h-20 mx-10' src='https://i.postimg.cc/Gt8FLx31/express.png' alt="Node.js" />
                            <img className='w-20 h-20 mx-10' src='https://i.postimg.cc/XvKvvht4/mongo.png' alt="MongoDB" />
                        </Marquee>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;