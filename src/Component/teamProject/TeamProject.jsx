import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import fastFeast1 from "/fast-feast.png";
import fastFeast2 from "/fastfeast-blog.png";
import fastFeast3 from "/fastfeast-review.png";
import fastFeast4 from "/fastfeast-career.png";

const images = [fastFeast1, fastFeast2, fastFeast3, fastFeast4];
const TeamProject = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [index, setIndex] = useState(0);


//  useEffect(() => {
//     let interval;
//     if (isHovered) {
//       interval = setInterval(() => {
//         setIndex((prev) => (prev + 1) % images.length);
//       }, 1000); // change every 1 second
//     } else {
//       setIndex(0); // reset to first image when hover ends
//     }
//     return () => clearInterval(interval);
//   }, [isHovered]);

    useEffect(()=>{
        let interval;
        if(isHovered){
            interval=setInterval(() => {
              setIndex((prev)=>(prev+1) % images.length )  
            },2000);
        }else{
            setIndex(0)
        }
        return ()=>clearInterval(interval)
    },[isHovered])
  return (
      <section className="py-16">
      {/* Section Header */}
      <div
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1200"
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold text-gray-300 mb-2">
          My Team <span className="text-[#aa8178]">Projects</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Highlighting my contribution to a collaborative food delivery platform
        </p>
      </div>

      {/* Project Card */}
      <div className="p-8 rounded-3xl shadow-lg mx-auto border lg:w-7xl md:w-4xl border-gray-600 hover:shadow-xl transition-shadow duration-300">
        {/* Image Slideshow on Hover */}
        <div
          className="relative overflow-hidden rounded-2xl mb-6 w-full h-72 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`FastFeast Screenshot ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            />
          </AnimatePresence>
        </div>

        {/* Title & Role */}
        <h2 className="text-3xl font-bold text-gray-400 mb-2">
          FastFeast Food Delivery System
        </h2>
        <p className="text-gray-300 mb-6">
          <span className="font-semibold">Team Size:</span> 7 members |{" "}
          <span className="font-semibold">Role:</span> Frontend Developer
        </p>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-8">
          <strong>FastFeast</strong> is a responsive food delivery platform
          that allows users to browse restaurants, order meals, and track
          deliveries in real time. I focused on developing and refining
          customer-facing components and enhancing UI/UX.
        </p>

        {/* Contributions */}
        <h3 className="text-2xl font-semibold text-gray-300 mb-3">
          My Contributions
        </h3>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li>Developed the <strong>Blog Page</strong> for articles and updates.</li>
          <li>Implemented a <strong>Newsletter Section</strong> for subscriptions.</li>
          <li>Built the <strong>Customer Review Page</strong> for dynamic reviews.</li>
          <li>Created the <strong>Career Page</strong> with job listings.</li>
        </ul>

        {/* Skills */}
        <h3 className="text-2xl font-semibold text-gray-300 mb-3">
          Skills & Tools
        </h3>
        <p className="text-gray-300 mb-10">
          Next.js,React js, Tailwind CSS, HTML, Git, GitHub, Framer Motion, API Integration, Redux, Mongodb, Mongoose,Stripe.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://fastfeastt.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#94716B] text-white px-5 py-3 rounded-xl hover:bg-[#c2a6a1] hover:shadow-md transition-all duration-300 font-medium"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          <a
            href="https://github.com/MdImranHossen01/FastFeast"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-gray-300 px-5 py-3 rounded-xl hover:bg-gray-800 hover:shadow-md transition-all duration-300 font-medium"
          >
            <Github size={18} />
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamProject;
