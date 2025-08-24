import React, { useRef } from 'react';
import { easeOut, motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_5xgb12r',
                'template_jccjwrp',
                form.current,
                'sWCDFNkvSEK2_XtQo'
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Message sent successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to send the message. Please try again.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            );
    };

    return (
        <div
            id='contact'
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className='my-12 relative'
        >
            <div className=''>
                <div className='h-50 w-50 absolute -z-0 bg-sky-900 top-40 left-50  blur-3xl '>
                </div>
                <div className='h-50 w-50 absolute -z-0 bg-teal-950 top-60 left-30 blur-3xl'>
                </div>
                <div className='h-20 w-20 absolute -z-0 bg-gray-500 top-40 left-60  blur-3xl'>
                </div>
            </div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
                {/* Left side: Contact info and image */}
                <div className="flex flex-col justify-between space-y-8 z-40">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-200">
                            Let's <span className='text-[#B79891]'>Talk!</span>
                        </h2>
                        <p className="text-gray-200 mt-2">
                            You can ask me anything or reach me <br />directly using the contact info below.
                        </p>
                        <hr className='text-gray-200 mt-6' />

                        {/* Contact Information */}
                        <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-600">
                            <div>
                                <strong className='text-gray-200'>Email:</strong>{' '}
                                <a href="mailto:afrozaakter228@gmail.com" className="text-[#B79891] hover:underline">
                                    afrozaakter228@gmail.com
                                </a>
                            </div>
                            <div>
                                <strong className='text-gray-200'>Phone:</strong>{' '}
                                <a href="tel:+880123456789" className="text-[#B79891] hover:underline">
                                    +880 1234 56789
                                </a>
                            </div>
                            <div>
                                <strong className='text-gray-200'>WhatsApp:</strong>{' '}
                                <a href="https://wa.me/880123456789" target="_blank" rel="noopener noreferrer" className="text-[#B79891] hover:underline">
                                    +880 1234 56789
                                </a>
                            </div>
                        </div>
                    </div>

                    <motion.img
                        src="https://i.postimg.cc/K8Xzn1WZ/5333216-2787717-removebg-preview.png"
                        alt="Afroza Akter"
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className=" w-68 h-52 md:h-64 rounded-2xl" />
                </div>

                {/* Right side: Contact form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    noValidate=""
                    className="space-y-5 text-gray-200 lg:mt-20 z-40"
                >
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            required
                            className="w-full p-3 rounded text-gray-800 bg-gray-100 dark:bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="w-full p-3 rounded text-gray-800 bg-gray-100 dark:bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-sm">Subject</label>
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            required
                            className="w-full p-3 text-gray-800 rounded bg-gray-100 dark:bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Write your message"
                            required
                            className="w-full text-gray-800 p-3 rounded bg-gray-100 dark:bg-gray-100"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#B79891] hover:bg-[#94716B] text-gray-100 cursor-pointer dark:bg-violet-600 dark:text-gray-50"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

