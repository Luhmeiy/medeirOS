"use client";

import { createContext, useContext, useState } from "react";

const WindowManagerContext = createContext({
	getNewZIndex: (): number => 100,
});

export function WindowManagerProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [zIndex, setZIndex] = useState(100);

	const getNewZIndex = () => {
		const newZIndex = zIndex + 1;
		setZIndex(newZIndex);

		return newZIndex;
	};

	return (
		<WindowManagerContext value={{ getNewZIndex }}>
			{children}
		</WindowManagerContext>
	);
}

export const useWindowManager = () => useContext(WindowManagerContext);
