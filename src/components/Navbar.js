import React from "react";

export default function Navbar() {
	return (
		<header className="bg-gray-800 md:sticky top-0 z-10">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<div className="title-font font-medium text-white mb-4 md:mb-0">
					<a href="#home" className="ml-3 text-xl">
						Brian Kwok
					</a>
				</div>
				<nav className="md:mr-auto md:ml-4 md:py1 md:border-l md:border-gray-700 pl-4	flex flex-wrap items-center text-sm justify-center">
					<a href="#home" className="mr-5 hover:text-white">
						Home
					</a>
					<a href="#projects" className="mr-5 hover:text-white">
						Projects
					</a>
					<a href="#about" className="mr-5 hover:text-white">
						About
					</a>
					<a href="#skills" className="mr-5 hover:text-white">
						Skills
					</a>
					<a href="#contact" className="mr-5 hover:text-white">
						Hire Me
					</a>
				</nav>
				<div className="space-x-2">
					<a href="https://github.com/brkwok" target="_blank" rel="noopener noreferrer">
						<i className="text-2xl devicon-github-original hover:text-white"></i>
					</a>
					<a href="https://www.linkedin.com/in/br-kwok/" target="_blank" rel="noopener noreferrer">
						<i className="text-2xl devicon-linkedin-plain hover:text-white"></i>
					</a>
				</div>
			</div>
		</header>
	);
}
