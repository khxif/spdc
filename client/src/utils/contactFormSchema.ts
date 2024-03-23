import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must contain 3 letters.",
    })
    .max(50),
  email: z.string().email(),
  message: z.string().min(4, {
    message: "Enter a valid Message!",
  }),
});
