import { db } from "@/db";
import { transactions } from "@/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default async function TransactionPage() {
	const transaction = await db
		.select()
		.from(transactions)
		.orderBy(desc(transactions.id));
	return (
		<section className="py-4 m-2 w-full outline rounded-sm px-2">
			<h1 className="text-sm text-white/50 pb-6 font-semibold">
				Recent Transactions
			</h1>
			{/* TRANSACTION TABLE*/}

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>user</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead>payment</TableHead>
						<TableHead>Description</TableHead>
						<TableHead>status</TableHead>
						<TableHead>Date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{transaction.map((tx) => (
						<TableRow key={tx.id}>
							<TableCell>{tx.email}</TableCell>
							<TableCell>{tx.amount} USD</TableCell>
							<TableCell>{tx.payment}</TableCell>
							<TableCell>{tx.description}</TableCell>
							<TableCell>{tx.status}</TableCell>
							<TableCell>
								{new Date(tx.createdAt).toLocaleDateString()}
							</TableCell>
							<TableCell>
								<Link
									href={`/dashboard/transactions/${tx.id}`}
									className="text-blue-600 cursor-pointer">
									Edit
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
}
