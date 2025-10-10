import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { WindowManagerProvider } from "@/components/windowManagerContext";

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
		<html suppressHydrationWarning>
			<body
				className={`min-h-dvh flex justify-center items-center bg-zinc-100 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 ${poppins.className} py-3 transition-colors duration-300 overflow-x-hidden`}
			>
				<div className="h-full flex flex-col justify-center gap-3">
					<ThemeProvider attribute="class" defaultTheme="dark">
						<NextIntlClientProvider>
							<WindowManagerProvider>
								<Header />
								{children}
								<Footer />
							</WindowManagerProvider>
						</NextIntlClientProvider>
					</ThemeProvider>
				</div>
			</body>
		</html>
	);
}
