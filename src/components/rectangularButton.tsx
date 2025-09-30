import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const RectangularButton = ({ text }: { text: string }) => {
	return (
		<button className="bg-white ring-2 hover:ring-4 ring-zinc-200/60 flex items-center gap-2 px-4 py-2 cursor-pointer text-zinc-950 self-start rounded transition-shadow duration-300">
			{text} <ArrowUpRightIcon size={16} weight="bold" />
		</button>
	);
};

export default RectangularButton;
