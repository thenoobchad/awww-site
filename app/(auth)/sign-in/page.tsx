"use client";

import { AuthForm } from "@/components/AuthForm";
import { signInSchema } from "@/validations";

export default function SignIn() {
	return (
		<AuthForm
			type="SIGN_IN"
			schema={signInSchema}
			defaultValues={{
				email: "",
				password: "",
			}}
			onSubmit={() => {}}
		/>
	);
}
