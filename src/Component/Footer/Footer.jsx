import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer
			data-aos="fade-up"
			data-aos-anchor-placement="top-bottom"
			className="px-4 py-8 bg-[#10232e]"
		>
			<div className="footer flex flex-col sm:flex-row items-center justify-between mx-auto gap-6">

				{/* Logo Section */}
				<div className="items-center gap-3 flex flex-col sm:flex-row">
					<img
						src="./logo.png"
						alt="Logo"
						className="w-32 h-12 object-contain"
					/>
					<span className="text-xl font-bold bg-gradient-to-r from-[#B79891] to-[#94716B] bg-clip-text text-transparent">
						My Portfolio
					</span>
				</div>

				{/* Navigation Links */}
				<ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
					<li>
						<a
							href="#home"
							className="text-gray-200 transition-colors hover:bg-gradient-to-r hover:from-[#B79891] hover:to-[#94716B] hover:bg-clip-text hover:text-transparent"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className="text-gray-200 transition-colors hover:bg-gradient-to-r hover:from-[#B79891] hover:to-[#94716B] hover:bg-clip-text hover:text-transparent"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#skills"
							className="text-gray-200 transition-colors hover:bg-gradient-to-r hover:from-[#B79891] hover:to-[#94716B] hover:bg-clip-text hover:text-transparent"
						>
							Skills
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="text-gray-200 transition-colors hover:bg-gradient-to-r hover:from-[#B79891] hover:to-[#94716B] hover:bg-clip-text hover:text-transparent"
						>
							Contact
						</a>
					</li>
				</ul>

				{/* Social Media Icons */}
				<div className="flex justify-center gap-4 text-2xl">
					<div className="bg-gradient-to-r from-[#B79891] to-[#94716B] rounded-full p-2">
						<a
							href="https://www.linkedin.com/in/afroza-nipa"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-clip-text hover:opacity-80 transition-opacity"
						>
							<FaLinkedin />
						</a>
					</div>
					<div className="bg-gradient-to-r from-[#B79891] to-[#94716B] rounded-full p-2">
						<a
							href="https://github.com/Afroza-Nipa13"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-clip-text hover:opacity-80 transition-opacity"
						>
							<FaGithub />
						</a>
					</div>
					<div className="bg-gradient-to-r from-[#B79891] to-[#94716B] rounded-full p-2">
						<a
							href="https://web.facebook.com/umm.yusuf.9674"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-clip-text hover:opacity-80 transition-opacity"
						>
							<FaFacebook />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;