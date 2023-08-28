import React from "react";

export default function Home() {
	return (
		<section id="home">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Hi, I'm Brian.
						<br className="hidden lg:inline-block" />I love to build apps and
						solve problems.
					</h1>
					<p className="mb-4 leading-relaxed">
						Dedicated software engineer with a passion for crafting elegant
						solutions through code, driven by a relentless curiosity to learn,
						create, and innovate.
					</p>
					<p className="mb-4 leading-relaxed">
						Much like breathing, coding is a salient part of my life. I'm pretty
						good at googling, debugging, and figuring out how things work.
					</p>
					<div className="flex justify-center">
						<a
							href="#contact"
							className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
						>
							Work With Me
						</a>
						<a
							href="#projects"
							className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
						>
							My Past Works
						</a>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="./coding.svg"
					/>
				</div>
			</div>
		</section>
	);
}
