import Image from "next/image";
import { ISkill } from "@/interfaces/Skill";

const SkillsMap = ({ skills }: { skills: ISkill[] }) => (
	<div className="group-hover:animate-pause flex gap-8 animate-scroll pr-[49.75rem]">
		{skills.map((skill) => (
			<Image
				key={skill.alt}
				src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
				alt={`${skill.alt} icon`}
				height={64}
				width={64}
			/>
		))}
	</div>
);

const SkillsCarousel = ({ skills }: { skills: ISkill[] }) => {
	return (
		<div className="flex">
			<SkillsMap skills={skills} />
			<SkillsMap skills={skills} />
		</div>
	);
};

export default SkillsCarousel;
