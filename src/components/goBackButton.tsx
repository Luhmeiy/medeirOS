"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

const GoBackButton = () => {
	const path = usePathname();
	const isProjectsPage = path === "/projects";

	const t = useTranslations("Footer");

	return (
		<>
			{isProjectsPage ? (
				<Link
					href="/"
					className="bg-white dark:bg-zinc-900 ring-2 hover:ring-4 ring-zinc-200/60 dark:ring-zinc-800 flex items-center gap-2 px-3 cursor-pointer rounded-lg text-[1.75rem] font-extralight outline-none transition-all duration-300"
				>
					<ArrowLeftIcon size={24} />
					{t("back")}
				</Link>
			) : (
				<span />
			)}
		</>
	);
};

export default GoBackButton;
