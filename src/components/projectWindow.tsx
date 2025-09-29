"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRef, useState } from "react";
import Draggable from "react-draggable";
import {
	ArrowsInSimpleIcon,
	ArrowUpRightIcon,
	MonitorIcon,
	SquareIcon,
	XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { IProject } from "@/interfaces/Project";
import ControlIcon from "./controlIcon";

const ProjectWindow = ({ project }: { project: IProject }) => {
	const nodeRef = useRef(null);
	const locale = useLocale() as "en" | "pt";

	const [isOpen, setIsOpen] = useState(false);
	const [isFullScreen, setIsFullScreen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="absolute right-3 top-3 bg-zinc-50 p-3 rounded-full cursor-pointer"
			>
				<ArrowUpRightIcon size={20} weight="bold" color="black" />
			</button>

			{isOpen && (
				<Draggable
					nodeRef={nodeRef}
					handle=".handle"
					position={isFullScreen ? { x: 0, y: 0 } : undefined}
					disabled={isFullScreen}
				>
					<div
						ref={nodeRef}
						className={`fixed ${
							!isFullScreen && "w-6xl h-2/3 rounded-lg"
						} flex flex-col bg-zinc-50 dark:bg-zinc-900 pb-9 inset-0 m-auto z-30`}
					>
						<div className="handle w-full flex gap-3 justify-end pr-5 py-4">
							<ControlIcon
								icon={
									isFullScreen
										? ArrowsInSimpleIcon
										: SquareIcon
								}
								onClick={() => setIsFullScreen(!isFullScreen)}
							/>

							<ControlIcon
								icon={XIcon}
								onClick={() => setIsOpen(false)}
							/>
						</div>

						<div className="flex flex-col gap-4 px-9">
							<div>
								<h1 className="text-[1.75rem] font-black pb-1">
									{project.title}
								</h1>

								<div className="flex flex-wrap gap-2">
									{project.badges.map(
										({ alt, url }, index) => (
											<img
												key={index}
												src={url}
												alt={alt}
											/>
										)
									)}
								</div>
							</div>

							<hr className="border-zinc-200 dark:border-zinc-700 border-2" />

							<div className="grid grid-cols-2 gap-9">
								<div className="flex flex-col gap-4">
									<p className="font-semibold">
										{project.translations[locale].summary}
									</p>

									<div className="flex gap-3">
										<a
											href={project.github}
											target="_blank"
											className="bg-zinc-50 flex gap-2 px-3 py-1 text-zinc-950 rounded"
										>
											<Image
												src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
												alt="GitHub icon"
												height={20}
												width={20}
											/>
											Source code
										</a>

										{project.preview && (
											<a
												href={project.preview}
												target="_blank"
												className="bg-zinc-50 flex gap-2 px-3 py-1 text-zinc-950 rounded"
											>
												<MonitorIcon
													size={24}
													weight="bold"
												/>
												Live preview
											</a>
										)}
									</div>
								</div>

								<p className="whitespace-pre-wrap">
									{project.translations[locale].text}
								</p>
							</div>
						</div>
					</div>
				</Draggable>
			)}
		</>
	);
};

export default ProjectWindow;
