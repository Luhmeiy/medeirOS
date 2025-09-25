import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const CircularButton = ({ link, top }: { link: string; top?: boolean }) => {
	return (
		<a
			href={link}
			target="_blank"
			className={`absolute ${
				top ? "right-3 top-3" : "left-3 bottom-3"
			} bg-zinc-50 p-3 rounded-full`}
		>
			<ArrowUpRightIcon size={20} weight="bold" color="black" />
		</a>
	);
};

export default CircularButton;
