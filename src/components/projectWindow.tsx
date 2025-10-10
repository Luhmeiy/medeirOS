import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRightIcon, MonitorIcon } from "@phosphor-icons/react/dist/ssr";
import RectangularButton from "./rectangularButton";
import Window from "./window";
import { IProject } from "@/interfaces/Project";

const ProjectWindow = ({ project }: { project: IProject }) => {
	const locale = useLocale() as "en" | "pt";
	const t = useTranslations("Project");

	return (
		<Window
			button={
				<button className="inverted-tr-corners group/button absolute -right-1 -top-1 bg-zinc-100 dark:bg-zinc-950 border-t-4 border-r-4 border-t-zinc-100 dark:border-t-zinc-950 border-r-zinc-100 dark:border-r-zinc-950 p-5 text-black dark:text-white rounded-bl-lg cursor-pointer transition-colors duration-300">
					<ArrowUpRightIcon
						size={24}
						weight="bold"
						className="group-hover/button:rotate-45 transition-transform duration-300"
					/>
				</button>
			}
		>
			<div className="flex flex-col gap-4">
				<div>
					<h1 className="text-[1.75rem] font-black pb-1">
						{project.title}
					</h1>

					<div className="flex flex-wrap gap-2">
						{project.badges.map(({ alt, url }, index) => (
							<img key={index} src={url} alt={alt} />
						))}
					</div>
				</div>

				<hr className="border-zinc-200 dark:border-zinc-700 border-2 transition-colors duration-300" />

				<div className="grid xs:grid-cols-2 gap-9 max-xs:gap-6">
					<div className="flex flex-col max-xs:items-center gap-4">
						<p className="font-semibold">
							{project.translations[locale].summary}
						</p>

						<div className="flex gap-3">
							<RectangularButton href={project.github}>
								<Image
									src="/github.svg"
									alt="GitHub icon"
									height={20}
									width={20}
									className="invert dark:invert-0"
								/>
								{t("github")}
							</RectangularButton>

							{project.preview && (
								<RectangularButton href={project.preview}>
									<MonitorIcon size={24} weight="bold" />
									{t("preview")}
								</RectangularButton>
							)}
						</div>
					</div>

					<p className="whitespace-pre-wrap">
						{project.translations[locale].text}
					</p>
				</div>
			</div>
		</Window>
	);
};

export default ProjectWindow;
