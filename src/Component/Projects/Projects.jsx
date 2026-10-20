
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

import ass12 from "/ass12.png";
import ass11 from "/ass11.png";
import ass10 from "/ass10.png";

const projects = [
  {
    id: 1,
    name: "Zahaba Tours",
    subtitle: "Tour Booking Platform",
    category: "Full-Stack Development",
    image: ass11,
    techStack: ["MERN Stack", "Firebase Auth", "JWT"],
    brief:
      "A tour booking platform where users can explore travel packages, make bookings, and manage their trips through dedicated dashboards.",
    liveLink: "https://tour-booking-client.web.app",
    githubClient: "https://github.com/Afroza-Nipa13/tour_booking",
    challenges:
      "Managing user roles and authentication across multiple dashboards was challenging. Keeping booking data consistent across different user experiences also required careful state and API management.",
    improvements:
      "I plan to introduce improved booking notifications, offline-friendly features, and a more refined mobile experience.",
  },
  {
    id: 2,
    name: "FIRST Life Insurance",
    subtitle: "Insurance Management Platform",
    category: "Full-Stack Development",
    image: ass12,
    techStack: ["MERN Stack", "Stripe", "JWT Authentication"],
    brief:
      "A role-based insurance management application featuring dedicated dashboards for administrators, agents, and customers, along with policy management and Stripe payments.",
    liveLink: "https://last-assignment-project.web.app",
    githubClient: "https://github.com/Afroza-Nipa13/first-insurance",
    challenges:
      "Implementing secure payment workflows and managing role-based access for different types of users required careful backend validation and authentication.",
    improvements:
      "Future plans include detailed analytics, improved payment status handling, and more comprehensive customer insights.",
  },
  {
    id: 3,
    name: "Plant Diary",
    subtitle: "Smart Plant Care Application",
    category: "Frontend Development",
    image: ass10,
    techStack: ["React", "Tailwind CSS", "Firebase"],
    brief:
      "A plant care application that helps users organize their plants, track watering schedules, and keep essential plant care information in one place.",
    liveLink: "https://my-plant-diary.netlify.app",
    githubClient: "https://github.com/Afroza-Nipa13/plant_diary",
    challenges:
      "Designing a smooth plant management experience and planning reliable reminders and cross-device data synchronization were important challenges.",
    improvements:
      "I would like to introduce personalized plant care recommendations, richer plant profiles, and collaborative plant management features.",
  },
];

const accent = "#B79891";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const reveal = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: cardVariants,
      };

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#050505] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 -z-10 h-80 w-80 rounded-full bg-[#94716B]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[45%] -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.07] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          {...reveal}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B79891]/25 bg-[#B79891]/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D7B8AF]">
            <FaCode />
            Selected Work
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Projects that bring{" "}
            <span className="bg-gradient-to-r from-[#E5C4BB] via-[#B79891] to-[#F0DAD4] bg-clip-text text-transparent">
              ideas to life.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of web applications built with modern technologies,
            thoughtful design, and a focus on solving real-world problems.
          </p>

          <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-[#B79891] to-transparent" />
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              {...reveal}
              transition={
                reduceMotion
                  ? {}
                  : {
                      ...cardVariants.visible.transition,
                      delay: index * 0.12,
                    }
              }
              whileHover={reduceMotion ? undefined : { y: -7 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#151515] to-[#0A0A0A] shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-[#B79891]/50 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
            >
              {/* Image */}
              <div className="relative m-3 mb-0 overflow-hidden rounded-xl border border-white/[0.07] bg-[#111]">
                <div className="aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={`${project.name} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                    whileHover={reduceMotion ? undefined : { scale: 1.045 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-200 backdrop-blur-md sm:text-xs">
                  {project.category}
                </span>

                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors group-hover:border-[#B79891] group-hover:text-[#E5C4BB]">
                  <FaArrowRight className="-rotate-45 text-sm transition-transform group-hover:rotate-0" />
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 pt-5 sm:p-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#B79891] sm:text-xs">
                  Project {String(project.id).padStart(2, "0")}
                </p>

                <h3 className="text-xl font-bold tracking-tight text-gray-100 transition-colors group-hover:text-[#E5C4BB] sm:text-2xl">
                  {project.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {project.subtitle}
                </p>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                  {project.brief}
                </p>

                {/* Technology badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[11px] font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#B79891] to-[#94716B] px-3 py-2.5 text-sm font-semibold text-[#100C0B] transition-all hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C4BB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111]"
                  >
                    Explore Project
                    <FaArrowRight className="text-xs" />
                  </button>

                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code on GitHub`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.035] text-gray-300 transition-all hover:border-[#B79891]/50 hover:bg-[#B79891]/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B79891]"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          {...reveal}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-gray-500">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D7B8AF] transition-colors hover:text-white"
          >
            Let&apos;s talk about your project
            <FaArrowRight className="text-xs" />
          </a>
        </motion.div>
      </div>

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-modal"
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md sm:p-6"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
            onTouchStart={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[#B79891]/25 bg-[#101010] shadow-[0_25px_100px_rgba(0,0,0,0.65)]"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 12, scale: 0.98 }
              }
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {/* Modal header image */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.name} preview`}
                  className="h-48 w-full object-cover object-top sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/10 to-black/30" />

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition-colors hover:bg-[#B79891] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <FaTimes />
                </button>

                <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C4BB]">
                    {selectedProject.category}
                  </span>
                  <h3
                    id="project-modal-title"
                    className="mt-2 text-2xl font-bold text-white sm:text-3xl"
                  >
                    {selectedProject.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal content */}
              <div className="max-h-[55vh] overflow-y-auto px-5 pb-6 pt-3 sm:px-7 sm:pb-7">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-gray-100">
                    <FaCode className="text-[#B79891]" />
                    About the project
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {selectedProject.brief}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-100">
                    Technologies used
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-[#B79891]/20 bg-[#B79891]/[0.08] px-3 py-2 text-xs font-medium text-[#E5C4BB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                  <h4 className="flex items-center gap-2 font-semibold text-gray-100">
                    <FaLightbulb className="text-[#B79891]" />
                    Challenges & learning
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {selectedProject.challenges}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                  <h4 className="flex items-center gap-2 font-semibold text-gray-100">
                    <FaRocket className="text-[#B79891]" />
                    Future improvements
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {selectedProject.improvements}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:flex-row">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#B79891] to-[#94716B] px-4 py-3 text-sm font-semibold text-[#100C0B] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C4BB]"
                  >
                    View Live Project
                    <FaExternalLinkAlt className="text-xs" />
                  </a>

                  <a
                    href={selectedProject.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-sm font-semibold text-gray-200 transition hover:border-[#B79891]/50 hover:bg-[#B79891]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B79891]"
                  >
                    <FaGithub className="text-base" />
                    Source Code
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
