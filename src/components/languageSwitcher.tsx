"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react/dist/ssr";
import { Content, Portal, Root, Trigger } from "@radix-ui/react-popover";

const languagesAbbr = ["en", "pt"];

const LanguageSwitcher = () => {
	const router = useRouter();
	const locale = useLocale();

	const t = useTranslations("Footer");

	const [isOpen, setIsOpen] = useState(false);

	function switchLanguage(newLocale: string) {
		setIsOpen(false);

		document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;

		router.refresh();
	}

	return (
		<Root open={isOpen}>
			<Trigger asChild>
				<button
					className="bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center gap-1 px-3 cursor-pointer rounded-lg text-[1.75rem] font-extralight outline-none transition-colors"
					onClick={() => setIsOpen(!isOpen)}
				>
					{t(`languages.${locale}`)}
					{isOpen ? (
						<CaretUpIcon size={24} />
					) : (
						<CaretDownIcon size={24} />
					)}
				</button>
			</Trigger>

			<Portal>
				<Content
					side="top"
					align="end"
					sideOffset={5}
					className="bg-zinc-50 dark:bg-zinc-900 flex flex-col px-2 py-2 rounded-lg text-[1.75rem] font-extralight transition-colors"
				>
					{languagesAbbr.map((language) => (
						<button
							key={language}
							onClick={() => switchLanguage(language)}
							className="text-start hover:bg-zinc-200 dark:hover:bg-zinc-800 px-2 outline-none cursor-pointer transition-colors"
						>
							{t(`languages.${language}`)}
						</button>
					))}
				</Content>
			</Portal>
		</Root>
	);
};

export default LanguageSwitcher;
