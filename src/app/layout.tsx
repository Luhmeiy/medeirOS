import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";

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
		<html lang="en" suppressHydrationWarning>
			<body
				className={`h-dvh flex justify-center bg-zinc-100 dark:bg-zinc-950 py-[6.25rem] text-zinc-950 dark:text-zinc-50 ${poppins.className}`}
			>
				<div className="h-full w-4/5 flex flex-col gap-3">
					<ThemeProvider attribute="class" defaultTheme="dark">
						<Header />
						{children}
						<Footer />
					</ThemeProvider>
				</div>
			</body>
		</html>
	);
}
