import { getTranslations } from "next-intl/server";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import FollowingEyes from "@/components/followingEyes";
import ProjectCard from "@/components/projectCard";
import RectangularButton from "@/components/rectangularButton";
import SkillsWindow from "@/components/skillsWindow";
import SocialMediaButton from "@/components/socialMediaButton";
import WideDiv from "@/components/wideDiv";
import { portfolioAPI } from "@/lib/api";

const Home = async () => {
	const t = await getTranslations("HomePage");
	const project = await portfolioAPI.getProjectById(t("highlight_project"));

	return (
		<div className="grid grid-cols-4 max-phone:grid-cols-2 grid-rows-3 max-tablet:grid-rows-4 max-phone:grid-rows-8 gap-4">
			<FollowingEyes />

			<WideDiv
				title={t("about.title")}
				additionalStyles="max-tablet:row-span-2 max-tablet:row-start-1 max-tablet:aspect-square"
			>
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

			<WideDiv
				title={t("projects.title")}
				additionalStyles="max-phone:row-start-5"
			>
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
				additionalStyles="max-tablet:row-start-2 max-tablet:col-start-3 max-phone:row-start-3 max-phone:col-start-1"
			/>

			<SkillsWindow />

			<SocialMediaButton
				background="bg-[#0A66C2]"
				socialMedia="LinkedIn"
				link="https://www.linkedin.com/in/luhmeiy/"
			/>

			<WideDiv
				title={t("social.title")}
				additionalStyles="max-tablet:row-span-2 max-tablet:row-start-3 max-tablet:col-start-3 max-tablet:aspect-square max-phone:row-start-7 max-phone:col-start-1"
			>
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
