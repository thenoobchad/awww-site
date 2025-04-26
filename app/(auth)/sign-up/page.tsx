"use client";

import { AuthForm } from "@/components/AuthForm";
import { signUpSchema } from "@/validations";

export default function SignIn() {
	return (
		<AuthForm
			type="SIGN_UP"
			schema={signUpSchema}
			defaultValues={{
				email: "",
				password: "",
				fullName: "",
			}}
			onSubmit={() => {
				console.log("hi");
			}}
		/>
	);
}
