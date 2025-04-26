import { z } from "zod";

export const signUpSchema = z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),

});

export const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});
