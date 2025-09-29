"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

const GoBackButton = () => {
	const path = usePathname();
	const isProjectsPage = path === "/projects";

	return (
		<>
			{isProjectsPage ? (
				<Link
					href="/"
					className="bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center gap-2 px-3 cursor-pointer rounded-lg text-[1.75rem] font-extralight outline-none transition-colors"
				>
					<ArrowLeftIcon size={24} />
					Go back
				</Link>
			) : (
				<span />
			)}
		</>
	);
};

export default GoBackButton;
