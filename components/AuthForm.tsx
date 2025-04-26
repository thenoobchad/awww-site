"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
	DefaultValues,
	FieldValues,
	Path,
	SubmitHandler,
	useForm,
	UseFormReturn,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

interface Props<T extends FieldValues> {
	schema: ZodType<T>;
	defaultValues: T;
	onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
	type: "SIGN_IN" | "SIGN_UP";
}

export const AuthForm = <T extends FieldValues>({
	type,
	schema,
	defaultValues,
	onSubmit,
}: Props<T>) => {
	const isSignIn = type === "SIGN_IN";
	const form: UseFormReturn<T> = useForm({
		resolver: zodResolver(schema),
		defaultValues: defaultValues as DefaultValues<T>,
	});

	const handleSubmit: SubmitHandler<T> = async (data) => {};
	return (
		<div className="flex flex-col w-full gap-4">
			<h1 className="text-xl font-semibold text-center w-full">
				{isSignIn ? "Welcome back to Bitwise" : "Create your account"}
			</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 w-full">
					{Object.keys(defaultValues).map((field) => (
						<FormField
							key={field}
							control={form.control}
							name={field as Path<T>}
							render={({ field }) => (
								<FormItem>
									<FormLabel className="capitalize">
										{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
									</FormLabel>
									<FormControl>
										<Input
											required
											type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
											{...field}
											className="input-auth"
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					))}

					<Button type="submit">Submit</Button>
				</form>
			</Form>

			<p className="text-center text-white/70 text-sm font-medium">
				{isSignIn ? "New to Bitwise?" : "Already have an account?"}

				<Link href={isSignIn ? "/sign-up" : "/sign-in"} className="font-bold">
					{isSignIn ? " Create your account" : " Sign in"}
				</Link>
			</p>
		</div>
	);
};
