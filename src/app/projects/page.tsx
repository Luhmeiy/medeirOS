import ProjectCard from "@/components/projectCard";

const badges = [
	{
		url: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
		alt: "React",
	},
	{
		url: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
		alt: "TypeScript",
	},
	{
		url: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
		alt: "MongoDB",
	},
	{
		url: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
		alt: "Express",
	},
];

const Projects = () => {
	return (
		<div className="min-w-dvw ml-[calc(-50vw+50%)] flex-1">
			<div className="h-full flex gap-9 overflow-y-scroll px-[10%]">
				<ProjectCard title="Project name" link="" badges={badges} />
				<ProjectCard title="Project name" link="" badges={badges} />
				<ProjectCard title="Project name" link="" badges={badges} />
				<ProjectCard title="Project name" link="" badges={badges} />
				<ProjectCard title="Project name" link="" badges={badges} />
			</div>
		</div>
	);
};

export default Projects;
