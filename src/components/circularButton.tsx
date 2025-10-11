import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const CircularButton = ({ link }: { link: string }) => {
	return (
		<a
			href={link}
			target="_blank"
			className="inverted-bl-corners group/button absolute -left-1 -bottom-2 bg-zinc-100 dark:bg-zinc-950 border-b-8 border-l-4 border-b-zinc-100 dark:border-b-zinc-950 border-l-zinc-100 dark:border-l-zinc-950 p-5 text-black dark:text-white rounded-tr-lg dark:border-t-2 dark:border-t-zinc-800 dark:border-r-2 dark:border-r-zinc-800 cursor-pointer transition-colors duration-300"
		>
			<ArrowUpRightIcon
				size={24}
				weight="bold"
				className="group-hover/button:rotate-45 transition-transform duration-300"
			/>
		</a>
	);
};

export default CircularButton;
