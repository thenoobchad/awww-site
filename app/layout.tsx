import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";

export const metadata: Metadata = {
	title: {
		template: "%s | ",
		default: "Investment platform",
	},
	description: "The world's most accessible crypto hub",
	applicationName: "Invest im real time",
};

export const myFont = localFont({
	src: "../public/fonts/Geist-Regular.ttf",
	variable: "--font-myFont",
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`dark ${myFont.className} ${myFont.style} antialiased`}>
				{children}
			</body>
		</html>
	);
}
