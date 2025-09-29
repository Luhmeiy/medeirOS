"use client";

import { Icon } from "@phosphor-icons/react";

const ControlIcon = ({
	icon: Icon,
	onClick,
}: {
	icon: Icon;
	onClick: () => void;
}) => {
	return (
		<Icon
			size={16}
			weight="bold"
			className="text-zinc-300 hover:text-zinc-950 dark:text-zinc-600 dark:hover:text-zinc-50 cursor-pointer transition-colors"
			onClick={onClick}
		/>
	);
};

export default ControlIcon;
