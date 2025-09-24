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
				className={`h-dvh flex flex-col justify-between bg-zinc-950 px-[11.25rem] py-[6.25rem] text-zinc-50 ${poppins.className}`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
