import { getTranslations } from "next-intl/server";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import ProjectCard from "@/components/projectCard";
import RectangularButton from "@/components/rectangularButton";
import SkillsWindow from "@/components/skillsWindow";
import SocialMediaButton from "@/components/socialMediaButton";
import WideDiv from "@/components/wideDiv";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";

const getProjectById = async (id: string) => {
	try {
		await dbConnect();

		const project = await Project.findById(id).populate("badges");

		return project;
	} catch (error) {
		console.error("Error fetching projects:", error);
		return [];
	}
};

const Home = async () => {
	const t = await getTranslations("HomePage");
	const project = await getProjectById(t("highlight_project"));

	return (
		<div className="grid grid-cols-4 grid-rows-3 gap-4">
			<div className="w-default bg-zinc-50 dark:ring-2 dark:ring-zinc-800 flex justify-center items-center shadow-md rounded-lg transition-all duration-300 aspect-square">
				<p className="text-6xl">👀</p>
			</div>

			<WideDiv title={t("about.title")}>
				<p>
					{t.rich("about.text", {
						span: (chunks) => (
							<span className="font-semibold">{chunks}</span>
						),
					})}
				</p>
			</WideDiv>

			<ProjectCard
				project={JSON.parse(JSON.stringify(project))}
				landingPage
			/>

			<WideDiv title={t("projects.title")}>
				<RectangularButton href="/projects" isLink>
					{t("projects.button")}
					<ArrowUpRightIcon
						size={16}
						weight="bold"
						className="group-hover:rotate-45 transition-transform duration-300"
					/>
				</RectangularButton>
			</WideDiv>

			<SocialMediaButton
				background="bg-zinc-900"
				socialMedia="GitHub"
				link="https://github.com/Luhmeiy"
			/>

			<SkillsWindow />

			<SocialMediaButton
				background="bg-[#0A66C2]"
				socialMedia="LinkedIn"
				link="https://www.linkedin.com/in/luhmeiy/"
			/>

			<WideDiv title={t("social.title")}>
				<p>{t("social.text")}</p>

				<RectangularButton href="mailto:medeiros.luizhenrique@proton.me">
					{t("social.button")}
					<ArrowUpRightIcon
						size={16}
						weight="bold"
						className="group-hover:rotate-45 transition-transform duration-300"
					/>
				</RectangularButton>
			</WideDiv>
		</div>
	);
};

export default Home;
