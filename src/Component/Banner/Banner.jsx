import { easeOut, motion } from "framer-motion";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";
export default function Banner() {
  const cvUrl = "/Afroza_Akter_CV.pdf";

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Afroza_Akter_CV.pdf";
    link.click();
  };

  return (
    <section className="relative  pt-10">
      <div className=''>
      <div className='h-100 w-100 absolute -z-0 bg-sky-900 top-10 right-40  blur-3xl '>
</div>
    <div className='h-50 w-50 absolute -z-0 bg-pink-950 top-20 right-20 blur-3xl'>
</div>
    <div className='h-80 w-80 absolute -z-0 bg-gray-500 top-10 right-40  blur-3xl'>
</div>
    </div>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left z-40">
          <h1 className="text-5xl text-gray-200 font-bold leading-none sm:text-6xl">
            Hi, I'm <br /><span className="bg-gradient-to-r from-[#f1c9c0] via-white to-[#94716B] bg-clip-text text-transparent uppercase">Afroza Akter</span>
          </h1>

          <h1 className="text-4xl font-bold text-white">
            <ReactTyped
              strings={["Welcome to My Website!", "I am a Web Developer...", "I love React!"]}
              typeSpeed={90}
              backSpeed={30}
              loop
            />
          </h1>
          <p className="mt-6 mb-8 text-lg text-gray-200 sm:mb-12">
            A passionate Web Developer specializing in <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Node.js</strong>.
            I love building interactive, user-friendly, and modern web applications.
          </p>

          {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-[#B79891] via-white to-[#94716B] text-gray-900 cursor-pointer px-8 py-3 text-lg font-semibold rounded"
            >
              Download CV
            </button>
            <a
              href="#projects"
              className="px-3 py-3 text-lg font-semibold rounded border-2 border-[#94716B] text-[#B79891]"
            >
              View Projects
            </a>
          </div> */}

          <div className="card-wrapper h-[60px] w-[160px]">
      <button
        onClick={handleDownloadCV}
        className="card-content text-gray-300 flex justify-center items-center font-bold"
      >
        <FaDownload className="mr-2 text-sm" />
        Resume
      </button>
    </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 z-40">
          <img
            src="https://i.ibb.co.com/bjZjqqj9/newNipa.png"
            alt="Afroza Akter"
           
            className="max-w-sm w-164 rounded-full border-l-4 border-b-4 border-[#94716B] shadow-2xl" />
        </div>
        
      </div>
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='hidden lg:block'  >
  <defs>
    {/* Gradient definition */}
    <linearGradient id="waveGradient" x1="20%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: "#6c757d", stopOpacity: 1 }} />
      <stop offset="47%" style={{ stopColor: "#0d1321", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#000814", stopOpacity: 1 }} />
    </linearGradient>
  </defs>

  <path
    fill="url(#waveGradient)"
    d="M0,256L30,266.7C60,277,120,299,180,282.7C240,267,300,213,360,197.3C420,181,480,203,540,229.3C600,256,660,288,720,293.3C780,299,840,277,900,229.3C960,181,1020,107,1080,117.3C1140,128,1200,224,1260,234.7C1320,245,1380,171,1410,133.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
  />
</motion.svg>
    </section>
  );
}
