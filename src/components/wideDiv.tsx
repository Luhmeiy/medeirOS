const WideDiv = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<div className="flex flex-col justify-center gap-3 bg-zinc-50 dark:bg-zinc-900 p-9 col-span-2 rounded-lg">
			<h2>{title}</h2>
			{children}
		</div>
	);
};

export default WideDiv;
