import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const RectangularButton = ({ text }: { text: string }) => {
	return (
		<button className="bg-zinc-50 flex items-center gap-2 px-4 py-2 cursor-pointer text-zinc-950 self-start rounded">
			{text} <ArrowUpRightIcon size={16} weight="bold" />
		</button>
	);
};

export default RectangularButton;
