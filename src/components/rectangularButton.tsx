import Link from "next/link";

const RectangularButton = ({
	children,
	href,
	isLink,
}: {
	children: React.ReactNode;
	href: string;
	isLink?: boolean;
}) => {
	const Tag = isLink ? Link : "a";
	const props = { target: "_blank" };

	return (
		<Tag
			href={href}
			className="group bg-white dark:bg-zinc-900 ring-2 hover:ring-4 ring-zinc-200/60 dark:ring-zinc-800 flex items-center gap-2 hover:gap-3 px-4 py-2 self-start cursor-pointer rounded transition-color duration-300"
			{...(!isLink && props)}
		>
			{children}
		</Tag>
	);
};

export default RectangularButton;
