import React from "react";
import { InformationCircleIcon } from "@heroicons/react/solid";

export default function About() {
	return (
		<section id="about">
			<div className="container px-5 py-10 mx-auto">
				<div className="text-center mb-20">
					<InformationCircleIcon className="w-10 inline-block mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
						About Me
					</h1>
				</div>
				<div className="flex flex-wrap justify-center text-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					<p className="mb-4 leading-relaxed">
						From studying pharmaceuticals at university, to supervising ramp
						safety at an airport (safety first, right?), life took me on an
						unexpected adventure. It turns out, a lab coat wasn't my superhero
						suit. So, I bravely waved goodbye to pharmaceuticals and embraced
						the world of airports, all while keeping a curious eye on the world
						of computers.
					</p>
					<p className="mb-4 leading-relaxed">
						Surrounded by takeoffs and landings, I realized the skies weren't
						the limit—I was. The path I was on didn't promise a stellar future,
						and with a heart that always beat to the rhythm of bytes and
						algorithms, I decided to dive headfirst into the realm of computer
						science.
					</p>
					<p className="mb-4 leading-relaxed">
						That's when I stumbled upon App Academy, a coding bootcamp that
						promised to transform dreams into lines of code. They say coding is
						a journey; little did I know it would lead me from zeros and ones to
						full-stack software engineering at Wayfair, the hub of home décor
						dreams. But even the grandest designs sometimes have hiccups. A
						layoff served as a plot twist, leading me to a crossroads. Was it a
						setback or a setup? The answer was clear: back to school, armed with
						a degree, and a fire to fuse theory with practice.
					</p>
					<p className="mb-4 leading-relaxed">
						Now, with a degree in hand and a passion for coding that's burning
						brighter than ever, I'm on the hunt for a place to grow, learn, and
						create—where every keystroke is a step forward on this extraordinary
						journey.
					</p>
				</div>
			</div>
		</section>
	);
}
