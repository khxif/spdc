import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid Email!",
  }),
  password: z.string().min(5, {
    message: "Password should contain 5 characters!",
  }),
});
