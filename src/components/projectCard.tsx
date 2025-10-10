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
			style={{
				backgroundColor: project.bg_color,
				backgroundImage: `url(${project.thumbnail})`,
			}}
			className={`group ${
				landingPage
					? "w-default row-span-2"
					: "h-tall max-tablet:h-long max-phone:h-long shrink-0 aspect-5/12 max-phone:aspect-square"
			} relative dark:ring-2 dark:ring-zinc-800 flex flex-col justify-end gap-3 ${
				!project.bg_color && "bg-zinc-50 dark:bg-zinc-900"
			} bg-center bg-cover p-9 shadow-md rounded-lg transition-all duration-300`}
		>
			<div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-zinc-50/40 dark:to-zinc-950/90 opacity-80 rounded-lg pointer-events-none transition-colors" />

			<ProjectWindow project={project} />
			<h2 className="z-10 text-zinc-50 text-shadow-sm">
				{project.title}
			</h2>

			<div className="flex gap-2 flex-wrap max-h-16 group-hover:max-h-none overflow-hidden transition-all z-10">
				{project.badges.map(({ alt, url }, index) => (
					<img key={index} src={url} alt={alt} />
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
