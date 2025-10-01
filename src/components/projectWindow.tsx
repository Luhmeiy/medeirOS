import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowUpRightIcon, MonitorIcon } from "@phosphor-icons/react/dist/ssr";
import Window from "./window";
import { IProject } from "@/interfaces/Project";

const ProjectWindow = ({ project }: { project: IProject }) => {
	const locale = useLocale() as "en" | "pt";

	return (
		<Window
			button={
				<button
					style={
						{
							"--background-color": project.bg_color,
						} as React.CSSProperties
					}
					className="inverted-tr-corners group/button absolute -right-1 -top-1 bg-zinc-100 dark:bg-zinc-950 border-t-4 border-r-4 border-t-zinc-100 dark:border-t-zinc-950 border-r-zinc-100 dark:border-r-zinc-950 p-5 text-black dark:text-white rounded-bl-lg cursor-pointer transition-colors duration-300"
				>
					<ArrowUpRightIcon
						size={24}
						weight="bold"
						className="group-hover/button:rotate-45 transition-transform duration-300"
					/>
				</button>
			}
		>
			<div className="flex flex-col gap-4">
				<div>
					<h1 className="text-[1.75rem] font-black pb-1">
						{project.title}
					</h1>

					<div className="flex flex-wrap gap-2">
						{project.badges.map(({ alt, url }, index) => (
							<img key={index} src={url} alt={alt} />
						))}
					</div>
				</div>

				<hr className="border-zinc-200 dark:border-zinc-700 border-2 transition-colors duration-300" />

				<div className="grid grid-cols-2 gap-9">
					<div className="flex flex-col gap-4">
						<p className="font-semibold">
							{project.translations[locale].summary}
						</p>

						<div className="flex gap-3">
							<a
								href={project.github}
								target="_blank"
								className="bg-white ring-2 hover:ring-4 ring-zinc-200/60 flex gap-2 px-3 py-1 text-zinc-950 rounded transition-shadow duration-300"
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
									className="bg-white ring-2 hover:ring-4 ring-zinc-200/60 flex gap-2 px-3 py-1 text-zinc-950 rounded transition-shadow duration-300"
								>
									<MonitorIcon size={24} weight="bold" />
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
		</Window>
	);
};

export default ProjectWindow;
