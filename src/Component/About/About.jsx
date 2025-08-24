import { FaReact, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";

export default function AboutMe() {
  return (
    <section
      id='about'
      className="py-16 w-11/12 mx-auto z-40">
      <div className="mx-auto space-y-10 lg:flex-row items-center">

        {/* Left Side - Photo */}
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="">
          <div 
          
          className="rounded-2xl p-1 grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-[#B79891] via-white to-[#94716B] shadow-2xl">
            <img
              src="https://i.postimg.cc/5jcTjW2m/home-Office.webp"
              alt="Afroza Akter"
              className="w-full h-full object-cover rounded-2xl border-4 border-transparent"
            />
            <img
              src="https://i.postimg.cc/KYH2FVB0/home-Office2.webp"
              alt="Afroza Akter"
              className="w-full h-full object-cover rounded-2xl border-4 border-transparent"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="">
          <h2 className="text-4xl text-gray-200 font-bold">About <span className='text-[#B79891]'>Me </span></h2>
          <p className="mb-4 text-lg text-gray-200 leading-relaxed">
            Hi, I’m <span className="font-semibold">Afroza Akter.</span>
            I’m a passionate MERN Stack Web Developer specializing in <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Node.js</strong>.
            I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </p>
          <p className="mb-4 text-lg text-gray-200 leading-relaxed">
            I’m someone who has always been naturally curious about how things work, and that curiosity led me into the world of programming—a field where creativity and logic come together beautifully. My programming journey began a few years ago with HTML and CSS, creating simple web pages. Over time, I dove deeper into JavaScript and backend technologies, gradually mastering frameworks like React and Node.js. What excites me most about programming is the ability to solve real-world problems and create user-friendly solutions that make everyday life easier. I enjoy work that challenges me to think critically and continuously improve my skills, especially in web development where design and functionality blend seamlessly.
            <br />
            On a personal level, I’m very family-oriented. My family, especially my children, are my greatest source of inspiration and joy. Being able to provide for them and see them happy motivates me every day. I find great peace and comfort in the sound of rain—it refreshes my mind and sparks new energy within me. Traveling is another passion of mine; exploring new places and experiencing different cultures energizes me and broadens my perspective on life.
            <br />
            Besides programming, I have a deep love for painting, which allows me to express my creativity and find relaxation away from the screen. I also enjoy outdoor activities like jogging and walking, which help keep my mind fresh and ready for new challenges. I consider myself a patient and persistent learner, always open to new ideas and eager to grow both technically and personally. Overall, I’m driven by the joy of continuous learning and the excitement of turning ideas into reality through code, all while balancing a rich, fulfilling life beyond programming.
          </p>
          <p className="mb-4 text-lg text-gray-200 leading-relaxed">
            When I’m not coding, I love exploring new tech tools, helping others learn programming, and spending quality time with my family. My dream is to work remotely as a web developer, travel, and keep learning new things every day.
          </p>

          {/* Skills */}
          <h3 className="text-2xl text-gray-200 font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="flex items-center gap-2 bg-sky-500 text-white px-3 py-1 rounded-full">
              <FaReact /> React.js
            </span>
            <span className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-full">
              <FaJs /> JavaScript
            </span>
            <span className="flex items-center gap-2 bg-cyan-400 text-black px-3 py-1 rounded-full">
              <SiTailwindcss /> Tailwind CSS
            </span>
            <span className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full">
              <FaNodeJs /> Node.js
            </span>
            <span className="flex items-center gap-2 bg-gray-700 text-white px-3 py-1 rounded-full">
              <SiExpress /> Express.js
            </span>
            <span className="flex items-center gap-2 bg-green-800 text-white px-3 py-1 rounded-full">
              <SiMongodb /> MongoDB
            </span>
            <span className="flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full">
              <SiFirebase /> Firebase
            </span>
            <span className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded-full">
              <FaDatabase /> Database Design
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a href="#projects" className="btn bg-[#B79891] hover:bg-[#94716B] text-white border-none">View My Work</a>
            <a href="#contact" className="btn btn-outline border-[#B79891] text-[#B79891]">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}