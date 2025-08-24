import { easeOut, motion } from "framer-motion";
import React from "react";
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
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl text-gray-200 font-bold leading-none sm:text-6xl">
            Hi, I'm <span className="bg-gradient-to-r from-[#B79891] via-white to-[#94716B] bg-clip-text text-transparent uppercase">Afroza Akter</span>
          </h1>

          <h1 className="text-4xl font-bold text-white">
            <ReactTyped
              strings={["Welcome to My Website", "I am a Web Developer", "I love React!"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <p className="mt-6 mb-8 text-lg text-gray-200 sm:mb-12">
            A passionate Web Developer specializing in <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Node.js</strong>.
            I love building interactive, user-friendly, and modern web applications.
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-[#B79891] via-white to-[#94716B] text-gray-900 cursor-pointer px-8 py-3 text-lg font-semibold rounded"
            >
              Download CV
            </button>
            <a
              href="#projects"
              className="px-8 py-3 text-lg font-semibold rounded border-2 border-[#94716B] text-[#B79891]"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 z-40">
          <motion.img
            src="https://i.postimg.cc/m2v7cXvN/hijabi.png"
            alt="Afroza Akter"
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-164 rounded-full border-l-4 border-b-4 border-[#94716B] shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
