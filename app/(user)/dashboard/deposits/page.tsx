import { db } from "@/db";
import { transactions } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function DepositPage() {
	const handleSubmit = async (formData: FormData) => {
		"use server";
try {
	const pAmount = formData.get("amount") as string;
	const payment = formData.get("payment") as string;

	//convert string to number from form
	const amount = Number.parseInt(pAmount);
	console.log({ amount, payment });

	await db.insert(transactions).values({
		description: "withdrawal",
		amount,
		email: "gracedi@gmail.com",
		payment,
		status: "pending",
	});

	revalidatePath("/dashboard/trasactions");
	redirect("/dashboard/trasactions");
} catch (error) {
	console.log(error);
}
	};

	return (
		<div>
			<h1 className="mb-4">Deposit Page</h1>

			<div>
				<form action={handleSubmit} className="space-y-7 max-w-md">
					<div className="flex flex-col">
						<label htmlFor="payment" className="mb-2">
							Payment Method
						</label>
						<select name="payment" id="payment">
							<option defaultChecked>Choose Payment</option>
							<option value="BTC">BTC</option>
							<option value="ETH">ETH</option>
						</select>
					</div>
					<div className="flex flex-col mb-5">
						<label htmlFor="amount" className="mb-2">
							Enter Amount
						</label>
						<div className="border flex w-fit justify-between items-center px-1">
							<input
								type="text"
								name="amount"
								id="amount"
								className="h-8 p-2"
							/>
							<span className="px-2">USD</span>
						</div>

						<button className="border-black/80 border-2 my-2 block w-fit cursor-pointer rounded-md px-4 py-2">
							Make Payment
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
