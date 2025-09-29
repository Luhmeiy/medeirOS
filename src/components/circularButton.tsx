import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const CircularButton = ({ link }: { link: string }) => {
	return (
		<a
			href={link}
			target="_blank"
			className="absolute left-3 bottom-3 bg-zinc-50 p-3 rounded-full"
		>
			<ArrowUpRightIcon size={20} weight="bold" color="black" />
		</a>
	);
};

export default CircularButton;
