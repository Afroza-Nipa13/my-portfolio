import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer
			data-aos="fade-up"
			data-aos-anchor-placement="top-bottom"
			className="px-4 py-8 dark:bg-gray-100 dark:text-gray-600"
		>
			<div className="container flex flex-col sm:flex-row items-center justify-between mx-auto gap-6">

				{/* Logo Section */}
				<div className="items-center gap-3">
					<img
						src="./logo.png"
						alt="Logo"
						className="w-32 h-12 object-contain"
					/>
					<span className="text-xl font-bold text-orange-500">My Portfolio</span>
				</div>

				{/* Navigation Links */}
				<ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
					<li>
						<a href="#home" className="hover:text-orange-500 transition-colors">
							Home
						</a>
					</li>
					<li>
						<a href="#projects" className="hover:text-orange-500 transition-colors">
							Projects
						</a>
					</li>
					<li>
						<a href="#skills" className="hover:text-orange-500 transition-colors">
							Skills
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:text-orange-500 transition-colors">
							Contact
						</a>
					</li>
				</ul>

				{/* Social Media Icons */}
				<div className="flex justify-center gap-4 text-orange-500 text-2xl">
					<a
						href="https://www.linkedin.com/in/afroza-nipa"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-400 transition-colors"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/Afroza-Nipa13"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-400 transition-colors"
					>
						<FaGithub />
					</a>
					<a
						href="https://web.facebook.com/umm.yusuf.9674"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-400 transition-colors"
					>
						<FaFacebook />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
