// import SideNav from "@/components/ui/SideNav";

import Link from "next/link";
import { ReactNode } from "react";
import {
	ArrowLeftRight,
	BanknoteArrowDown,
	BookUp2,
	LayoutDashboard,
	Repeat2,
} from "lucide-react";

const SideNav = () => {
	"use client";
	return [
		{
			href: "dashboard",
			icon: <LayoutDashboard className="w-5 md:w-4" />,
		},
		{
			href: "transactions",
			icon: <ArrowLeftRight className="w-5 md:w-4" />,
		},
		{
			href: "deposits",
			icon: <Repeat2 className="w-5 md:w-4" />,
		},
		{
			href: "withdrawals",
			icon: <BanknoteArrowDown className="w-5 md:w-4" />,
		},
		{
			href: "investments",
			icon: <BookUp2 className="w-5 md:w-4" />,
		},
	].map((link) => (
		<div key={link.href} className="flex mb-5">
			<Link
				href={
					link.href === "dashboard" ? "/dashboard" : `/dashboard/${link.href}`
				}
				className="capitalize flex ">
				<div className="mr-2">{link.icon}</div>
				<span className="hidden md:block">{link.href}</span>
			</Link>
		</div>
	));
};

export default function UserLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={` antialiased`}>
				<div className="container mx-auto px-2 md:p-0 flex h-dvh">
					<div className="w-1/4 p-4">
						<SideNav />
					</div>
					<div className="w-3/4">{children}</div>
				</div>
			</body>
		</html>
	);
}
