// import { easeOut, motion } from "framer-motion";
// import React from "react";
// import { FaDownload } from "react-icons/fa";
// import { ReactTyped } from "react-typed";
// export default function Banner() {
//   const cvUrl = "/Afroza_Akter_CV.pdf";

//   const handleDownloadCV = () => {
//     const link = document.createElement("a");
//     link.href = cvUrl;
//     link.download = "Afroza_Akter_CV.pdf";
//     link.click();
//   };

//   return (
//     <section className="relative  pt-10">
//       <div className=''>
//       <div className='h-100 w-100 absolute -z-0 bg-sky-900 top-10 right-40  blur-3xl '>
// </div>
//     <div className='h-50 w-50 absolute -z-0 bg-pink-950 top-20 right-20 blur-3xl'>
// </div>
//     <div className='h-80 w-80 absolute -z-0 bg-gray-500 top-10 right-40  blur-3xl'>
// </div>
//     </div>
//       <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
//         {/* Left Side - Text */}
//         <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left z-40">
          
//           <h1 className="text-5xl text-gray-200 font-bold leading-none sm:text-6xl">
//             Hi, I'm <br /><span className="bg-gradient-to-r from-[#f1c9c0] via-white to-[#94716B] bg-clip-text text-transparent uppercase">Afroza Akter</span>
//           </h1>

//           <h1 className="text-4xl font-bold text-white">
//             <ReactTyped
//               strings={["Welcome to My Website!", "I am a Frontend Developer...", "I love React!", "I love NextJs!"]}
//               typeSpeed={90}
//               backSpeed={30}
//               loop
//             />
//           </h1>
//           <p className="mt-6 mb-8 text-lg text-gray-200 sm:mb-12">
//             A passionate Web Developer specializing in <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Node.js</strong>.
//             I love building interactive, user-friendly, and modern web applications.
//           </p>

//           {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
//             <button
//               onClick={handleDownloadCV}
//               className="bg-gradient-to-r from-[#B79891] via-white to-[#94716B] text-gray-900 cursor-pointer px-8 py-3 text-lg font-semibold rounded"
//             >
//               Download CV
//             </button>
//             <a
//               href="#projects"
//               className="px-3 py-3 text-lg font-semibold rounded border-2 border-[#94716B] text-[#B79891]"
//             >
//               View Projects
//             </a>
//           </div> */}

//           <div className="card-wrapper h-[60px] w-[160px] mx-auto">
//       <button
//         onClick={handleDownloadCV}
//         className="card-content text-gray-300 flex cursor-pointer justify-center items-center font-bold"
//       >
//         <FaDownload className="mr-2 text-sm" />
//         Resume
//       </button>
//     </div>
//         </div>

//         {/* Right Side - Image */}
//         {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 z-40">
//           <img
//             src="https://i.ibb.co.com/bjZjqqj9/newNipa.png"
//             alt="Afroza Akter"
           
//             className="max-w-sm w-164 rounded-full border-l-4 border-b-4 border-[#94716B] shadow-2xl" />
//         </div> */}
        
//       </div>
      
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  FaDownload,
  FaArrowRight,
  FaReact,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiShadcnui 
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Banner() {
  const cvUrl = "/Afroza_Akter_CV.pdf";

  return (
    <section
      id="home"
      className="relative isolate min-h-[90vh] overflow-hidden bg-[#080d1b] text-white"
    >
      {/* Background glow effects */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-blue-600/25 blur-[120px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]"
      />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center gap-16 px-6 py-20 md:px-10 lg:flex-row lg:gap-12">
        {/* Left: Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 w-full text-center lg:w-1/2 lg:text-left"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Frontend Developer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Hi, I'm
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 bg-clip-text pb-2 text-transparent">
              Afroza Akter
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-5 min-h-[2.5rem] text-xl font-semibold text-gray-200 sm:text-2xl"
          >
            <ReactTyped
              strings={[
                "React Developer",
                "Frontend Developer",
                "Web Application Developer",
                "UI Enthusiast",
              ]}
              typeSpeed={55}
              backSpeed={30}
              backDelay={1400}
              loop
            />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0"
          >
            I build responsive, interactive, and user-friendly web
            applications with modern web technologies. I enjoy turning
            creative ideas into clean, accessible, and engaging digital
            experiences.
          </motion.p>

          {/* Technology badges */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
           
<motion.div
  variants={itemVariants}
  className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
>
  <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
    <FaReact className="text-cyan-400" />
    React
  </span>

  <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
    <SiNextdotjs className="text-white" />
    Next.js
  </span>

  <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
    <SiTypescript className="text-blue-400" />
    TypeScript
  </span>

  <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
    <SiTailwindcss className="text-sky-400" />
    Tailwind CSS
  </span>

  <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
    <SiNodedotjs className="text-green-400" />
    Node.js
  </span>

  <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
    <SiFramer className="text-pink-400" />
    Framer Motion
  </span>
  <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
  <SiShadcnui className="text-white" />
  shadcn/ui
</span>
</motion.div>

          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.a
              href={cvUrl}
              download="Afroza_Akter_CV.pdf"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-shadow hover:shadow-blue-500/40 sm:w-auto"
            >
              <FaDownload />
              Download Resume
            </motion.a>

       

            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-gray-200 transition-colors hover:border-sky-400/50 hover:bg-white/10 sm:w-auto"
            >
              View Projects
              <FaArrowRight className="text-sm" />
            </motion.a>
          </motion.div>
          
        </motion.div>

        {/* Right: Animated developer code card */}
        <motion.div
          initial={{ opacity: 0, x: 45, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 w-full max-w-lg lg:w-1/2"
        >
          {/* Decorative ring */}
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-5 rounded-[2rem] border border-dashed border-sky-400/20"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#10182a]/90 shadow-2xl shadow-blue-950/50 backdrop-blur-xl"
          >
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-gray-500">
                about-me.jsx
              </span>

              <FaCode className="text-sky-400" />
            </div>

            {/* Code preview */}
            <div className="overflow-x-auto p-5 text-sm leading-8 sm:p-7 sm:text-base">
              <p className="text-gray-500">
                01 <span className="ml-4 text-purple-300">const</span>{" "}
                <span className="text-sky-300">developer</span> = {"{"}
              </p>

              <p className="text-gray-500">
                02 <span className="ml-4 text-sky-300">name</span>:{" "}
                <span className="text-emerald-300">
                  "Afroza Akter"
                </span>
                ,
              </p>

              <p className="text-gray-500">
                03 <span className="ml-4 text-sky-300">role</span>:{" "}
                <span className="text-emerald-300">
                  "Frontend Developer"
                </span>
                ,
              </p>

              <p className="text-gray-500">
                04 <span className="ml-4 text-sky-300">skills</span>: [
              </p>

              <p className="text-gray-500">
                05 <span className="ml-8 text-emerald-300">"React"</span>,
              </p>

              <p className="text-gray-500">
                06 <span className="ml-8 text-emerald-300">
                  "Tailwind CSS"
                </span>,
              </p>

              <p className="text-gray-500">
                07 <span className="ml-8 text-emerald-300">"Node.js"</span>
              </p>

              <p className="text-gray-500">
                08 <span className="ml-4">],</span>
              </p>

              <p className="text-gray-500">
                09 <span className="ml-4 text-sky-300">passion</span>:{" "}
                <span className="text-emerald-300">
                  "Building for the web"
                </span>
              </p>

              <p className="text-gray-500">10 {"}"};</p>

              <motion.p
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="mt-3 text-sky-300"
              >
                // Turning ideas into reality ✨
              </motion.p>
            </div>

            {/* Card footer */}
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
              <span className="text-xs text-gray-500">
                Always learning. Always building.
              </span>
              <span className="text-xs font-medium text-emerald-400">
                ● Ready to build
              </span>
            </div>
          </motion.div>

          {/* Floating code icon */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 -top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#17243d] text-2xl text-sky-300 shadow-xl sm:-right-5"
          >
            <FaCode />
          </motion.div>

          {/* Floating status card */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-7 -left-3 rounded-xl border border-white/10 bg-[#17243d] px-4 py-3 shadow-xl sm:-left-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                <FaReact />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Modern Web
                </p>
                <p className="text-xs text-gray-400">
                  Clean & responsive UI
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
