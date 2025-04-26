// "use client";

// import Link from "next/link";

// import {
// 	Table,
// 	TableBody,
// 	TableCaption,
// 	TableCell,
// 	TableFooter,
// 	TableHead,
// 	TableHeader,
// 	TableRow,
// } from "@/components/ui/table";

// interface TransactionProps {
// 	transaction: {
// 		id: number;
// 		description: string;
// 		amount: number;
// 		email: string;
// 		payment: string;
// 		status: string;
// 		createdAt: string;
// 	}[];
// }

// export const myTable = ({ transaction }: TransactionProps) => {
// 	return (
// 		<>
// 			<Table className="w-full">
// 				<TableCaption>Recent transactions</TableCaption>
// 				<TableHeader>
// 					<TableRow>
// 						<TableHead>user</TableHead>
// 						<TableHead>Amount</TableHead>
// 						<TableHead>payment</TableHead>
// 						<TableHead>Description</TableHead>
// 						<TableHead>status</TableHead>
// 						<TableHead>Date</TableHead>
// 					</TableRow>
// 				</TableHeader>
// 				<TableBody>
// 					{transaction.map((tx) => (
// 						<TableRow key={tx.id} className="text-center ">
// 							<TableCell>{tx.email}</TableCell>
// 							<TableCell>{tx.amount} USD</TableCell>
// 							<TableCell>{tx.payment}</TableCell>
// 							<TableCell>{tx.description}</TableCell>
// 							<TableCell>{tx.status}</TableCell>
// 							<TableCell>
// 								{new Date(tx.createdAt).toLocaleDateString()}
// 							</TableCell>
// 							<TableCell>
// 								<Link
// 									href={`/dashboard/transactions/${tx.id}`}
// 									className="text-blue-600 cursor-pointer">
// 									Edit
// 								</Link>
// 							</TableCell>
// 						</TableRow>
// 					))}
// 				</TableBody>
// 			</Table>
// 		</>
// 	);
// };
