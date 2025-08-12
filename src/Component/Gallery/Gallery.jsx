import React from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Gallery = () => {

    const projects = [
        {
            title: "auction_gallery",
            img: "https://i.postimg.cc/V68Wrdgp/Screenshot-371.png",
            link: "https://euphonious-raindrop-da45c7.netlify.app/",
        },
        {
            title: "DevBoard",
            img: "https://i.postimg.cc/QxmdPbtV/Screenshot-374.png",
            link: "https://afroza-nipa13.github.io/assignment-5/",
        },
        {
            title: "English_janala",
            img: "https://i.postimg.cc/rsdDcRY7/Screenshot-375.png",
            link: "https://67d8290d12710835d28af22b--illustrious-frangollo-9de3cd.netlify.app",
        },
        {
            title: "Phudu",
            img: "https://i.postimg.cc/nLR7Jxhj/Screenshot-377.png",
            link: "https://jolly-snickerdoodle-77e1b0.netlify.app/",
        },
        {
            title: "talentTrace",
            img: "https://i.postimg.cc/5NLRN7vN/Screenshot-378.png",
            link: "https://talent-trace-app.web.app/",
        },
    ];
    return (
        <div>
            <section className="py-6">
                <h2 className="text-4xl font-bold mb-4 text-center">Others <span className='text-orange-400'>Projects</span></h2>
                <div className="max-w-11/12 mx-auto px-4 py-8">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className="rounded-lg overflow-hidden"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    to={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={project.title}
                                >
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-[500px] object-cover cursor-pointer hover:opacity-90"
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
