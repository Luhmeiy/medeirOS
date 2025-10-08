import ProjectCard from "@/components/projectCard";
import { portfolioAPI } from "@/lib/api";

const Projects = async () => {
	const projects = await portfolioAPI.getProjects();

	return (
		<div className="min-w-dvw ml-[calc(-50vw+50%)]">
			<div className="flex gap-9 overflow-y-scroll px-[calc((100vw-var(--spacing-long))/2)]">
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						project={JSON.parse(JSON.stringify(project))}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
