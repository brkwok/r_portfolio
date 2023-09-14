import { DocumentIcon } from "@heroicons/react/solid";
import React from "react";

export default function Resume() {
	return (
		<section id="resume" className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40">
				<div className="flex flex-col w-full">
					<DocumentIcon className="mx-auto inline-block w-10 mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
						My Résumé
					</h1>
				</div>
			</div>
			<div className="flex justify-center">
				<a
					href="Resume.pdf"
					className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          target="_blank"
				>
					Résumé
				</a>
			</div>
		</section>
	);
}
