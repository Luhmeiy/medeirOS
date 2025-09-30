import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const CircularButton = ({ link }: { link: string }) => {
	return (
		<a
			href={link}
			target="_blank"
			className="absolute left-3 bottom-3 bg-white hover:ring-4 ring-white/60 p-3 rounded-full transition-shadow duration-300"
		>
			<ArrowUpRightIcon size={20} weight="bold" color="black" />
		</a>
	);
};

export default CircularButton;
