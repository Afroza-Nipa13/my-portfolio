import React from 'react';
import Marquee from "react-fast-marquee";

const Skills = () => {
    return (
        <div

            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className='my-40 '>
            <section className="">
                <div className="container relative  p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-10">
                    <div className=''>
                <div className='h-50 w-50 absolute -z-0 bg-sky-900 top-40 left-50  blur-3xl '>
                </div>
                <div className='h-50 w-50 absolute -z-0 bg-teal-950 top-60 left-30 blur-3xl'>
                </div>
                <div className='h-20 w-20 absolute -z-0 bg-gray-500 top-40 left-60  blur-3xl'>
                </div>
            </div>
                    <h2 className="text-4xl text-gray-200 font-bold">My <span className='text-[#B79891]'>Skills </span></h2>
                    <div className="flex evenly z-40 w-full justify-center lg:justify-between mt-20">
                        {/* Marquee Section */}
                        <Marquee pauseOnHover={true} gradient={false} speed={50}>
                            <img className='w-30 h-30 mx-10 rounded-full' src='https://i.postimg.cc/SRg2x52J/html.png' alt="HTML" />
                            <img className='w-30 h-30 mx-10 rounded-full' src='https://i.postimg.cc/VkxSvX6B/css.png' alt="CSS" />
                            <img className='w-30 h-30 mx-10 rounded-full' src='https://i.postimg.cc/9M18RbjR/tailwind.png' alt="tailwind" />
                            <img className='w-30 h-30 mx-10' src='https://i.postimg.cc/Z5mT9jmc/Js.png' alt="JavaScript" />
                            <img className='w-30 h-30 mx-10 rounded-full' src='https://i.postimg.cc/V66pr054/react.png' alt="React" />
                            <img className='w-40 h-20 mx-10' src='https://i.postimg.cc/yYkRQ135/node-js.png' alt="Node.js" />
                            <img className='w-30 h-30 mx-10 rounded-full' src='https://i.postimg.cc/Gt8FLx31/express.png' alt="express.js" />
                            <img className='w-30 h-30 mx-10 rounded-full' src='https://i.postimg.cc/XvKvvht4/mongo.png' alt="MongoDB" />
                        </Marquee>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;