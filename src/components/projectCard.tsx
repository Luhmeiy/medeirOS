import ProjectWindow from "./projectWindow";
import { IProject } from "@/interfaces/Project";

const ProjectCard = ({
	project,
	landingPage,
}: {
	project: IProject;
	landingPage?: boolean;
}) => {
	return (
		<div
			style={{ backgroundColor: project.bg_color }}
			className={`group ${
				landingPage
					? "row-span-2"
					: "min-w-96 w-96 hover:w-[36rem] flex-shrink-0"
			} relative flex flex-col justify-end gap-3 ${
				!project.bg_color && "bg-zinc-50 dark:bg-zinc-900"
			}  p-9 rounded-lg transition-all`}
		>
			<div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-zinc-950/90 opacity-80 rounded-lg pointer-events-none"></div>

			<ProjectWindow project={project} />
			<h2 className="z-10 text-zinc-50">{project.title}</h2>

			<div
				className={`${
					!landingPage && "w-80"
				} flex gap-2 flex-wrap max-h-16 group-hover:max-h-none overflow-hidden transition-all z-10`}
			>
				{project.badges.map(({ alt, url }, index) => (
					<img key={index} src={url} alt={alt} />
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
