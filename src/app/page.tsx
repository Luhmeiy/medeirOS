import Image from "next/image";
import { useTranslations } from "next-intl";
import CircularButton from "@/components/circularButton";
import RectangularButton from "@/components/rectangularButton";
import SocialMediaButton from "@/components/socialMediaButton";
import WideDiv from "@/components/wideDiv";

export default function Home() {
	const t = useTranslations("HomePage");

	return (
		<div className="grid grid-cols-4 grid-rows-3 gap-6">
			<div className="flex justify-center items-center bg-zinc-50 rounded-lg">
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

			<div className="relative flex flex-col justify-end gap-3 row-span-2 bg-zinc-50 dark:bg-zinc-900 p-9 rounded-lg">
				<h2>Project name</h2>
				<CircularButton link="" top />
			</div>

			<WideDiv title={t("projects.title")}>
				<RectangularButton text={t("projects.button")} />
			</WideDiv>

			<SocialMediaButton
				background="bg-zinc-900"
				socialMedia="GitHub"
				link="https://github.com/Luhmeiy"
			/>

			<div className="flex justify-center items-center bg-zinc-50 dark:bg-zinc-900 p-9 rounded-lg">
				<Image
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
					alt="React icon"
					height={140}
					width={140}
				/>
			</div>

			<SocialMediaButton
				background="bg-[#0A66C2]"
				socialMedia="LinkedIn"
				link="https://www.linkedin.com/in/luhmeiy/"
			/>

			<WideDiv title={t("social.title")}>
				<p>{t("social.text")}</p>
				<RectangularButton text={t("social.button")} />
			</WideDiv>
		</div>
	);
}
