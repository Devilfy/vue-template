import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "input.required" })
        .email({ message: "input.email_invalid" }),
    password: z.string().min(6, { message: "input.min" }).max(32, { message: "input.max" }),
});

export const registerSchema = z.object({
    email: z
        .string()
        .min(1, { message: "input.required" })
        .email({ message: "input.email_invalid" }),
    password: z.string().min(6, { message: "input.min" }).max(32, { message: "input.max" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
