import { ReactNode } from "react";

export default function Authlayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col w-screen h-dvh min-h-screen">
			<div className="flex flex-col items-center justify-center w-full h-full ">
				<div className="bg-white/5 p-8 rounded-sm outline  min-w-xs sm:min-w-sm">{children}</div>
			</div>
		</div>
	);
}
