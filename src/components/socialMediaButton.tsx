import Image from "next/image";
import CircularButton from "./circularButton";

const SocialMediaButton = ({
	background,
	socialMedia,
	link,
}: {
	background: string;
	socialMedia: string;
	link: string;
}) => {
	return (
		<div
			className={`w-default relative dark:ring-2 dark:ring-zinc-800 flex justify-center items-center ${background} shadow-md rounded-lg transition-shadow duration-300 aspect-square`}
		>
			<CircularButton link={link} background={background} />
			<Image
				src={`/${socialMedia.toLowerCase()}.svg`}
				alt={`${socialMedia} icon`}
				height={100}
				width={100}
			/>
		</div>
	);
};

export default SocialMediaButton;
