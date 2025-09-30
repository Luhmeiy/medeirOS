import Image from "next/image";
import Window from "./window";
import { ISkillGroup } from "@/interfaces/Skill";
import dbConnect from "@/lib/dbConnect";
import Skill from "@/models/Skill";

const getSkills = async () => {
	try {
		await dbConnect();

		return await Skill.aggregate([
			{
				$facet: {
					frontend: [
						{ $match: { category: "frontend" } },
						{ $sort: { order: 1 } },
					],
					backend: [
						{ $match: { category: "backend" } },
						{ $sort: { order: 1 } },
					],
					tools: [
						{ $match: { category: "tools" } },
						{ $sort: { order: 1 } },
					],
				},
			},
			{
				$project: {
					categories: [
						{
							title: "Frontend",
							skills: "$frontend",
						},
						{
							title: "Backend",
							skills: "$backend",
						},
						{
							title: "Tools",
							skills: "$tools",
						},
					],
				},
			},
		]);
	} catch (error) {
		console.error("Error fetching skills:", error);
		return [];
	}
};

const SkillsWindow = async () => {
	const { categories } = (
		(await getSkills()) as { categories: ISkillGroup[] }[]
	)[0];

	return (
		<div className="group relative flex justify-center items-center bg-zinc-50 dark:bg-zinc-900 p-9 rounded-lg">
			<Image
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
				alt="React icon"
				height={140}
				width={140}
			/>

			<div className="group-hover:bg-zinc-50/80 group-hover:dark:bg-zinc-900/80 absolute bg-transparent inset-0 pointer-events-none transition-colors" />

			<Window
				button={
					<button className="group-hover:flex absolute hidden items-center justify-center inset-0 font-semibold cursor-pointer">
						Click me
					</button>
				}
			>
				<div className="h-full flex flex-col items-center justify-center">
					<h1 className="text-4xl text-center font-black pb-4">
						Skills
					</h1>

					<div className="grid grid-cols-2 gap-x-12 gap-y-8">
						{categories.map((category) => (
							<div
								key={category.title}
								className="flex flex-col gap-1"
							>
								<h1 className="text-[1.75rem] font-black pb-1">
									{category.title}
								</h1>

								<div className="grid grid-cols-4 gap-4">
									{category.skills.map((skill) => (
										<div
											key={skill.alt}
											className="flex flex-col items-center gap-1"
										>
											<Image
												src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
												alt={`${skill.alt} icon`}
												height={64}
												width={64}
											/>

											<p className="font-semibold text-zinc-400 dark:text-zinc-600">
												{skill.alt}
											</p>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</Window>
		</div>
	);
};

export default SkillsWindow;
