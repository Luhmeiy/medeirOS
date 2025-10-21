"use client";

import { cloneElement, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import {
	ArrowsInSimpleIcon,
	SquareIcon,
	XIcon,
} from "@phosphor-icons/react/dist/ssr";
import ControlIcon from "./controlIcon";
import { useWindowManager } from "./windowManagerContext";

const Window = ({
	children,
	button,
}: {
	children: React.ReactNode;
	button: React.ReactElement<{ onClick?: () => void }>;
}) => {
	const nodeRef = useRef(null);
	const { getNewZIndex } = useWindowManager();

	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [zIndex, setZIndex] = useState(100);
	const [isOpen, setIsOpen] = useState(false);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [isPhone, setIsPhone] = useState(false);

	const handleClick = () => {
		const newZIndex = getNewZIndex();
		setZIndex(newZIndex);
	};

	useEffect(() => {
		setIsPhone(window.innerWidth <= 912);
	}, []);

	return (
		<>
			{cloneElement(button, {
				onClick: () => {
					setIsOpen(true);
					handleClick();
				},
			})}

			{isOpen && (
				<Draggable
					nodeRef={nodeRef}
					handle=".handle"
					position={isFullScreen ? { x: 0, y: 0 } : position}
					disabled={isFullScreen || isPhone}
					onStop={(_, { x, y }) => setPosition({ x, y })}
					onMouseDown={handleClick}
				>
					<div
						ref={nodeRef}
						className={`fixed ${
							!isFullScreen &&
							!isPhone &&
							"w-2/3 h-2/3 rounded-lg"
						} bg-zinc-50 dark:bg-zinc-900 ring-2 ring-zinc-200/60 dark:ring-zinc-800 flex flex-col pb-9 inset-0 m-auto transition-colors duration-300`}
						style={{ zIndex }}
					>
						<div className="handle w-full flex gap-3 justify-end pr-5 py-4 cursor-grab active:cursor-grabbing">
							{!isPhone && (
								<ControlIcon
									icon={
										isFullScreen
											? ArrowsInSimpleIcon
											: SquareIcon
									}
									size={16}
									onClick={() =>
										setIsFullScreen(!isFullScreen)
									}
								/>
							)}

							<ControlIcon
								icon={XIcon}
								size={isPhone ? 32 : 16}
								onClick={() => {
									setIsOpen(false);
									setIsFullScreen(false);
									setPosition({ x: 0, y: 0 });
								}}
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
