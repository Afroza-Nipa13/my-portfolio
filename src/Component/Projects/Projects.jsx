import React, { useState } from "react";

const projects = [
    {
        id: 1,
        name: "Zahaba Tours – A Tour Booking Platform",
        image: "https://i.postimg.cc/SsNgsnDd/Screenshot-346.png",
        techStack: "MERN Stack, Firebase Auth, JWT",
        brief:
            "Browse, book, and manage travel packages with separate dashboards for users and tour guides.",
        liveLink: "https://zahaba-tours.netlify.app",
        githubClient: "https://github.com/username/zahaba-tours-client",
        challenges:
            "Managing user roles and authentication across multiple dashboards was challenging. Handling real-time data syncing was also complex.",
        improvements:
            "Plan to add better notifications, offline support, and improve UI responsiveness on small devices.",
    },
    {
        id: 2,
        name: "FIRST Life Insurance Web App",
        image: "https://i.postimg.cc/Sx6XXJzB/Screenshot-345.png",
        techStack: "MERN Stack, Stripe Payments, JWT Authentication",
        brief:
            "Role-based dashboards for Admin, Agent, and Customer with Stripe payments and secure JWT authentication.",
        liveLink: "https://last-assignment-project.web.app/",
        githubClient: "https://github.com/username/first-life-insurance-client",
        challenges:
            "Integrating Stripe securely and managing complex role-based access were difficult.",
        improvements:
            "Working on adding more detailed analytics and improving payment success/failure handling.",
    },
    {
        id: 3,
        name: "Plant Manager",
        image: "https://i.postimg.cc/xyz/plant-manager.png", // replace with actual image
        techStack: "React, Tailwind CSS, Firebase",
        brief:
            "An app to manage your plants, track watering schedules, and get care reminders.",
        liveLink: "https://plant-manager.example.com",
        githubClient: "https://github.com/username/plant-manager-client",
        challenges:
            "Implementing efficient notifications and syncing data between devices was challenging.",
        improvements:
            "Planning to add AI-based plant care tips and multi-user collaboration.",
    },
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id="projects">
            
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    {/* Section Title */}
                    <div className="space-y-2 text-center">
                        <h2 className="text-4xl text-gray-200 font-bold">
                            My <span className="text-[#B79891]">Projects</span>
                        </h2>
                        <p className="font-serif text-sm dark:text-gray-600 text-gray-100">
                            A selection of my recent works built with passion and modern web
                            technologies.
                        </p>
                    </div>

                    {/* Project Cards */}
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                data-aos="fade-up"
                                className="hover:bg-[#B79891]/10 shadow-lg border border-gray-100 rounded-2xl flex flex-col dark:bg-gray-50"
                            >
                                <img
                                    alt={`${project.name} Screenshot`}
                                    className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-2xl"
                                    src={project.image}
                                />
                                <div className="flex flex-col flex-1 p-6">
                                    <span className="text-xs tracking-wider text-gray-50 uppercase hover:underline dark:text-violet-600 mb-2">
                                        {project.techStack}
                                    </span>
                                    <h3 className="flex-1 py-2 text-lg text-gray-100 font-semibold leading-snug">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-gray-100 mb-4">{project.brief}</p>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="self-start px-4 py-2 text-white bg-[#B79891] rounded hover:bg-[#94716B] focus:outline-none focus:ring-2 focus:ring-[#B79891] cursor-pointer"
                                    >
                                        View More
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Modal for project details */}
                    {selectedProject && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
                            onClick={() => setSelectedProject(null)}
                        >
                            <div
                                className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full p-6 relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                    aria-label="Close modal"
                                >
                                    ✕
                                </button>

                                <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    className="w-full h-56 object-cover rounded mb-4"
                                />
                                <p>
                                    <strong>Main Technology Stack: </strong>
                                    {selectedProject.techStack}
                                </p>
                                <p className="mt-3">
                                    <strong>Description: </strong>
                                    {selectedProject.brief}
                                </p>
                                <p className="mt-3">
                                    <strong>Live Project: </strong>
                                    <a
                                        href={selectedProject.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#B79891] hover:underline"
                                    >
                                        {selectedProject.liveLink}
                                    </a>
                                </p>
                                <p className="mt-3">
                                    <strong>GitHub (Client): </strong>
                                    <a
                                        href={selectedProject.githubClient}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#B79891] hover:underline"
                                    >
                                        {selectedProject.githubClient}
                                    </a>
                                </p>
                                <p className="mt-3">
                                    <strong>Challenges Faced: </strong>
                                    {selectedProject.challenges}
                                </p>
                                <p className="mt-3 mb-6">
                                    <strong>Potential Improvements & Future Plans: </strong>
                                    {selectedProject.improvements}
                                </p>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="px-4 py-2 bg-[#B79891] hover:bg-[#94716B] text-white rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProjectsSection;
