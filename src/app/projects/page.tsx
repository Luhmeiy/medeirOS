import ProjectCard from "@/components/projectCard";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";

const getProjects = async () => {
	try {
		await dbConnect();

		const projects = await Project.find().sort("order").populate("badges");

		return projects;
	} catch (error) {
		console.error("Error fetching projects:", error);
		return [];
	}
};

const Projects = async () => {
	const projects = await getProjects();

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
