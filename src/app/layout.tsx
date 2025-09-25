import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["200", "400", "600", "900"],
});

export const metadata: Metadata = {
	title: "medeirOS",
	description: "Luhmeiy's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`h-dvh flex justify-center bg-zinc-950 py-[6.25rem] text-zinc-50 ${poppins.className}`}
			>
				<div className="h-full w-4/5 flex flex-col gap-3">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
