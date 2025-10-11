import ProjectCard from "@/components/projectCard";
import { portfolioAPI } from "@/lib/api";

const Projects = async () => {
	const projects = await portfolioAPI.getProjects();

	return (
		<div className="min-w-dvw mx-[calc(-50vw+50%)]">
			<div className="grid xs:grid-cols-2 phone:flex max-phone:justify-items-center gap-9 max-phone:gap-4 phone:overflow-y-scroll px-[calc((100vw-var(--spacing-long))/2)] py-1 max-phone:px-4">
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
