import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_5xgb12r',      // Replace with your EmailJS service ID
                'template_jccjwrp',     // Replace with your EmailJS template ID
                form.current,
                'sWCDFNkvSEK2_XtQo'    // Replace with your EmailJS public key
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
        >
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">

                {/* Left side: Contact info and image */}
                <div className="flex flex-col justify-between space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold">
                            Let's <span className='text-orange-400'>Talk!</span>
                        </h2>
                        <p className="dark:text-gray-600 mt-2">
                            You can ask me anything or reach me directly using the contact info below.
                        </p>

                        {/* Contact Information */}
                        <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-600">
                            <div>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:afrozaakter228@gmail.com" className="text-orange-400 hover:underline">
                                    afrozaakter228@gmail.com
                                </a>
                            </div>
                            <div>
                                <strong>Phone:</strong>{' '}
                                <a href="tel:+880123456789" className="text-orange-400 hover:underline">
                                    +880 1234 56789
                                </a>
                            </div>
                            <div>
                                <strong>WhatsApp:</strong>{' '}
                                <a href="https://wa.me/880123456789" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
                                    +880 1234 56789
                                </a>
                            </div>
                        </div>
                    </div>

                    <img
                        src="https://i.postimg.cc/tCp5RCxt/vecteezy-ai-generated-a-girl-in-a-hoodie-and-backpack-36706533.png"
                        alt="Afroza Akter"
                        className="p-6 w-68 h-52 md:h-64"
                    />
                </div>

                {/* Right side: Contact form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    noValidate=""
                    className="space-y-5"
                >
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            required
                            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-sm">Subject</label>
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            required
                            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Write your message"
                            required
                            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-100"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-400 text-gray-100 cursor-pointer dark:bg-violet-600 dark:text-gray-50"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;


