interface ISkill {
	icon: string;
	alt: string;
}

export interface ISkillGroup {
	title: string;
	skills: ISkill[];
}
