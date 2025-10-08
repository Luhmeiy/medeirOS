"use client";

import { useEffect, useState } from "react";

const Eye = ({ x, y }: { x: string; y: string }) => (
	<div className="relative w-20 h-40 border-2 border-zinc-500 justify-self-center rounded-full">
		<div
			className="absolute w-10 h-20 bg-zinc-800 rounded-full"
			style={{ transform: `translate(${x}, ${y})` }}
		>
			<div className="bg-zinc-50 w-5 h-5 rounded-full" />
		</div>
	</div>
);

const FollowingEyes = () => {
	const [pupilPosition, setPupilPosition] = useState({ x: "50%", y: "50%" });

	useEffect(() => {
		const updatePupilPosition = (ev: MouseEvent) => {
			const { clientX, clientY } = ev;

			const container = document.getElementById("eyes-container");
			if (!container) return;

			const { left, top, width, height } =
				container.getBoundingClientRect();

			const containerCenterX = left + width / 2;
			const containerCenterY = top + height / 2;

			const normalizedX = (clientX - containerCenterX) / (width / 2);
			const normalizedY = (clientY - containerCenterY) / (height / 2);

			const logistic = (t: number) => 2 / (1 + Math.exp(-t * 1)) - 1;

			const smoothedX = logistic(normalizedX);
			const smoothedY = logistic(normalizedY);

			const relativeX = (smoothedX + 1) * 50;
			const relativeY = (smoothedY + 1) * 50;

			setPupilPosition({
				x: relativeX + "%",
				y: relativeY + "%",
			});
		};

		window.addEventListener("mousemove", updatePupilPosition);

		return () => {
			window.removeEventListener("mousemove", updatePupilPosition);
		};
	}, []);

	return (
		<div
			className="w-default bg-zinc-50 dark:ring-2 dark:ring-zinc-800 grid grid-cols-2 items-center p-9 shadow-md rounded-lg transition-all duration-300 aspect-square"
			id="eyes-container"
		>
			<Eye {...pupilPosition} />
			<Eye {...pupilPosition} />
		</div>
	);
};

export default FollowingEyes;
