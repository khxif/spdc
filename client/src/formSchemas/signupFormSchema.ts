import { z } from "zod";

export const signupFormSchema = z
  .object({
    username: z.string().min(2, {
      message: "Enter a valid Username",
    }),
    email: z.string().email({
      message: "Enter a valid Email!",
    }),
    password: z.string().min(5, {
      message: "Password should contain 5 characters!",
    }),
    confirmPassword: z.string().min(5, {
      message: "Password should contain 5 characters!",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match",
  });
