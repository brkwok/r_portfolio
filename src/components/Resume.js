import { DocumentIcon } from "@heroicons/react/solid";
import React from "react";

export default function Resume() {
	return (
		<section id="resume" className="text-gray-400 bg-gray-900 body-font">
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
