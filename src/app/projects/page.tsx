import ProjectCard from "@/components/projectCard";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";

const getProjects = async () => {
	try {
		await dbConnect();

		const projects = await Project.find().populate("badges");

		return projects;
	} catch (error) {
		console.error("Error fetching projects:", error);
		return [];
	}
};

const Projects = async () => {
	const projects = await getProjects();

	return (
		<div className="min-w-dvw ml-[calc(-50vw+50%)] flex-1">
			<div className="h-full flex gap-9 overflow-y-scroll px-[10%]">
				{projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
