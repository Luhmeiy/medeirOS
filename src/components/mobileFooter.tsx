"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Icon } from "@phosphor-icons/react";
import {
	FoldersIcon,
	HouseIcon,
	SquaresFourIcon,
	XIcon,
} from "@phosphor-icons/react/dist/ssr";
import LanguageSwitcher from "./languageSwitcher";
import ThemeToggle from "./themeToggle";

const FooterButton = ({
	icon: Icon,
	text,
	href = "/",
}: {
	icon: Icon;
	text: string;
	href?: string;
}) => (
	<>
		<Link
			href={href}
			className="bg-white dark:bg-zinc-900 ring-2 hover:ring-4 ring-zinc-200/60 dark:ring-zinc-800 p-2 cursor-pointer rounded-lg transition-all duration-300"
		>
			<Icon size={28} weight="bold" />
		</Link>
		<span>{text}</span>
	</>
);

const MobileFooter = () => {
	const path = usePathname();
	const isProjectsPage = path === "/projects";

	const t = useTranslations("Footer");

	const [toggle, setToggle] = useState(false);

	return (
		<div className="fixed bottom-0 left-0 w-full bg-zinc-50 dark:bg-zinc-900 dark:ring-2 dark:ring-zinc-800 flex justify-between items-center px-6 py-4 shadow-md rounded-lg z-10 phone:hidden">
			<p className="text-[1.75rem] font-extralight">
				medeir<span className="font-black">OS</span>
			</p>

			<SquaresFourIcon
				size={32}
				className="cursor-pointer"
				onClick={() => setToggle(true)}
			/>

			<AnimatePresence>
				{toggle && (
					<motion.div
						initial={{ bottom: -200 }}
						animate={{ bottom: 0 }}
						exit={{ bottom: -200 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
						className="absolute bottom-0 left-0 w-full bg-zinc-50 dark:bg-zinc-900 dark:ring-2 dark:ring-zinc-800 z-20 px-6 pt-16 pb-8 shadow-md rounded-lg"
					>
						<ul className="grid grid-cols-3 uppercase font-bold">
							<li className="flex flex-col items-center gap-1">
								{isProjectsPage ? (
									<FooterButton
										icon={HouseIcon}
										text={t("home")}
									/>
								) : (
									<FooterButton
										icon={FoldersIcon}
										text={t("projects")}
										href="/projects"
									/>
								)}
							</li>

							<li className="flex flex-col items-center gap-1">
								<ThemeToggle />
								<span>{t("theme")}</span>
							</li>

							<li className="flex flex-col items-center gap-1">
								<LanguageSwitcher />
								<span>{t("language")}</span>
							</li>
						</ul>

						<XIcon
							size={32}
							weight={"bold"}
							className="absolute top-4 right-6 text-zinc-300 hover:text-zinc-950 dark:text-zinc-600 dark:hover:text-zinc-50 cursor-pointer transition-colors duration-300"
							onClick={() => setToggle(false)}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MobileFooter;
