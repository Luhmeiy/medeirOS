"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react/dist/ssr";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="bg-white dark:bg-zinc-900 ring-2 hover:ring-4 ring-zinc-200/60 dark:ring-zinc-800 p-2 cursor-pointer rounded-lg transition-all duration-300"
			aria-label="Toggle theme"
		>
			{theme === "dark" ? (
				<MoonIcon size={28} weight="bold" />
			) : (
				<SunIcon size={28} weight="bold" />
			)}
		</button>
	);
};

export default ThemeToggle;
