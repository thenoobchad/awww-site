import Link from "next/link";
import { BanknoteArrowUp, HandCoins, WalletMinimal } from "lucide-react";

const user = {
	id: 1,
	mainBalance: 5000,
	profitBalance: 5505,
};

const transactions = [
	{
		id: 1,
		type: "deposit",
		userId: "1",
		amount: 7654,
		status: "pending",
	},
	{
		id: 2,
		type: "withdrawal",
		userId: "1",
		amount: 1654,
		status: "success",
	},
	{
		id: 3,
		type: "investment",
		userId: "1",
		amount: 1654,
		status: "success",
	},
];

export default function DashboardPage() {
	return (
		<main>
			<div className="w-full overflow-hidden mt-4">
				{/* WALLET DISPLAY CARD */}
				<div className="flex p-4 flex-col border rounded-sm w-full max-w-md">
					<div className="flex justify-between mb-3">
						<h1>Account Balance</h1>
						<h2 className="p-1 px-2 bborder rounded-sm flex">
							Wallet
							<WalletMinimal className="h-5 self-center" />
						</h2>
					</div>
					<div className="flex justify-between">
						<p>Main Wallet</p>
						<p>
							$5000,00 <span>USD</span>
						</p>
					</div>
					<div className="flex justify-between">
						<p>Profit Wallet</p>
						<p>
							$5000,00 <span>USD</span>
						</p>
					</div>
				</div>

				{/* ACTION BUTTONS*/}

				<div className="flex mt-2 space-x-2 justify-between max-w-md">
					<Link
						className="w-full border-2 border-black rounded-sm  py-2 flex justify-center"
						href={`/dashboard/deposits`}>
						<BanknoteArrowUp className="w-5 mr-2 md:w-4" /> Deposit
					</Link>
					<Link
						className="w-full border-2 border-black rounded-sm py-2 flex justify-center"
						href={`/dashboard/deposits`}>
						<HandCoins className="w-5 mr-2 md:w-4" /> Invest Now
					</Link>
				</div>
				{/* TRANSACTION SECTION*/}
				<section className="py-8">
					<h1 className="text-lg font-semibold">Transactions</h1>
					{/* TRANSACTION TABLE*/}
					<div>
						<table className="w-full">
							<tr className="capitalize ">
								<th>id</th>
								<th>user</th>
								<th>Amount</th>
								<th>status</th>
							</tr>

							{transactions.map((tx) => (
								<tr
									key={tx.id}
									className="text-center border-b border-gray-700">
									<td>{tx.id}</td>
									<td>{tx.userId}</td>
									<td>{tx.amount}</td>
									<td>{tx.status}</td>
								</tr>
							))}
						</table>
					</div>
				</section>
			</div>
		</main>
	);
}
