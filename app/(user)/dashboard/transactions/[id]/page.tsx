import { db } from "@/db";
import { transactions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditTransactionPage({
	params,
}: {
	params: { id: number };
}) {
	const { id } = await params;
	const transaction = (
		await db.select().from(transactions).where(eq(transactions.id, id))
	)[0];

	const handleUpdate = async (formData: FormData) => {
		"use server";

		const numberValue = formData.get("amount");
		const status = formData.get("status") as string;
		const email = formData.get("email") as string;

		//Validate and convert the value
		if (numberValue === null || numberValue === "") {
			throw new Error("Number field is required");
		}

		const parsedValue = Number(numberValue); // convert to number

		if (isNaN(parsedValue)) {
			throw new Error("Invalid number provided");
		}

		//Allowed status values
		const validStatuses = ["pending", "success", "failure"] as const;
		type Status = (typeof validStatuses)[number];

		function isValidStatus(value: unknown): value is Status {
			return validStatuses.includes(value as Status);
		}

		if (typeof status !== "string") throw new Error("Status is required");

		if (!isValidStatus(status)) {
			throw new Error(`Invalid status value. Must be one of: ${validStatuses.join(",")}`);
		}
		await db
			.update(transactions)
			.set({
				email,
				amount: parsedValue,
				status,
			})
			.where(eq(transactions.id, id));

		revalidatePath("/");
		redirect("/dashboard/transactions");
		console.log("status updated");
	};

	return (
		<div>
			<form action={handleUpdate} className="space-y-7 max-w-md">
				<div className="flex flex-col">
					<label htmlFor="payment" className="mb-2 font-semibold">
						User
					</label>
					<input type="text" id="email" defaultValue={transaction.email} />
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="amount" className="mb-2 font-semibold">
						Amount
					</label>
					<div className="border flex w-fit justify-between items-center px-1 mb-4">
						<input
							type="text"
							id="amount"
							className="h-8 p-2"
							defaultValue={transaction.amount}
							name="amount"
						/>
						<span className="px-2">USD</span>
					</div>
					<div className="flex flex-col">
						<label htmlFor="status" className="mb-2 font-semibold">
							Status
						</label>
						<select id="status" name="status" className="border p-1 w-fit">
							<option defaultValue={transaction.status}>
								{transaction.status}
							</option>
							<option value="success">{transaction.status}</option>
							<option value="failure">Failure</option>
						</select>
					</div>
				</div>

				<div>
					<button className="bg-blue-600 my-2 block cursor-pointer px-4 py-2">
						Save Changes
					</button>
				</div>
			</form>
		</div>
	);
}
