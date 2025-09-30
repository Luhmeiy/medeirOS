"use client";

import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import {
	ArrowsInSimpleIcon,
	SquareIcon,
	XIcon,
} from "@phosphor-icons/react/dist/ssr";
import ControlIcon from "./controlIcon";

const Window = ({
	children,
	button,
}: {
	children: React.ReactNode;
	button: React.ReactElement<{ onClick?: () => void }>;
}) => {
	const nodeRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false);
	const [isFullScreen, setIsFullScreen] = useState(false);

	return (
		<>
			{React.cloneElement(button, {
				onClick: () => setIsOpen(true),
			})}

			{isOpen && (
				<Draggable
					nodeRef={nodeRef}
					handle=".handle"
					position={isFullScreen ? { x: 0, y: 0 } : undefined}
					disabled={isFullScreen}
				>
					<div
						ref={nodeRef}
						className={`fixed ${
							!isFullScreen && "w-6xl h-2/3 rounded-lg"
						} bg-zinc-50 dark:bg-zinc-900 ring-2 ring-zinc-200/60 dark:ring-zinc-800 flex flex-col pb-9 inset-0 m-auto z-30 transition-all duration-300`}
					>
						<div className="handle w-full flex gap-3 justify-end pr-5 py-4">
							<ControlIcon
								icon={
									isFullScreen
										? ArrowsInSimpleIcon
										: SquareIcon
								}
								onClick={() => setIsFullScreen(!isFullScreen)}
							/>

							<ControlIcon
								icon={XIcon}
								onClick={() => setIsOpen(false)}
							/>
						</div>

						<div className="h-full px-9 overflow-auto">
							{children}
						</div>
					</div>
				</Draggable>
			)}
		</>
	);
};

export default Window;
