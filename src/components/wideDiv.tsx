const WideDiv = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<div className="w-double bg-zinc-50 dark:bg-zinc-900 dark:ring-2 dark:ring-zinc-800 flex flex-col justify-center gap-3 p-9 shadow-md col-span-2 rounded-lg transition-all duration-300">
			<h2>{title}</h2>
			{children}
		</div>
	);
};

export default WideDiv;
