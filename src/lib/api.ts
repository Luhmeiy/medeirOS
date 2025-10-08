import { IProject } from "@/interfaces/Project";
import { ISkill, ISkillGroup } from "@/interfaces/Skill";

const baseUrl = `${process.env.API_URL}/api`;

const get = <T>(endpoint: string): Promise<T> =>
	fetch(`${baseUrl}${endpoint}`).then((res) => res.json());

export const portfolioAPI = {
	getProjects: () => get<IProject[]>("/projects"),
	getProjectById: (id: string) => get<IProject>(`/projects/${id}`),
	getSkills: () =>
		get<{ categories: ISkillGroup[]; skills: ISkill[] }>("/skills"),
	getTranslations: (locale: string) => get<any>(`/translations/${locale}`),
};
