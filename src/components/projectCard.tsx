import CircularButton from "./circularButton";

const ProjectCard = ({
	title,
	link,
	badges,
}: {
	title: string;
	link: string;
	badges: { url: string; alt: string }[];
}) => {
	return (
		<div className="min-w-96 w-96 relative flex flex-col justify-end gap-3 row-span-2 bg-zinc-50 dark:bg-zinc-900 p-9 rounded-lg">
			<CircularButton link={link} top />
			<h2>{title}</h2>

			<div className="flex gap-2 flex-wrap">
				{badges.map(({ url, alt }, index) => (
					<img key={index} src={url} alt={alt} />
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
