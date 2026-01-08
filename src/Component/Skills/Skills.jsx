import React from 'react';
import Marquee from "react-fast-marquee";

const Skills = () => {


    const skills = [
       { id: 1, name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 2, name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { id: 3, name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: 4, name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { id: 5, name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' }, // Added Next.js
  { id: 6, name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }, // Updated Tailwind
  { id: 7, name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { id: 8, name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { id: 9, name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ];
    return (
        <div
            id='skills'

            className='mt-8 '>
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
                    <h2
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        className="text-4xl text-gray-200 font-bold">My <span className='text-[#B79891]'>Skills </span></h2>
                    <div className="flex evenly z-40 w-full justify-center lg:justify-between my-40 py-4">
                        <Marquee pauseOnHover={true} gradient={false} speed={50}>
                            {skills.map((skill) => (
                                <div
                                    key={skill.id}
                                    className="w-52 h-52 m-8 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-110 transition-transform duration-300"
                                >
                                    <img
                                        className="w-30 h-30 object-contain p-2"
                                        src={skill.img}
                                        alt={skill.name}
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;