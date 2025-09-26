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
			className="bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 p-2 cursor-pointer rounded-lg transition-colors"
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
