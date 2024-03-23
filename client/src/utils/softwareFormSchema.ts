import { z } from "zod";

export const softwareFormSchema = z.object({
    src: z.string().min(2, {
      message: "Add your logo!",
    }),
    name: z.string().min(1, {
      message: "Enter a valid name!",
    }),
    category: z.string().min(1, {
      message: "Select a category!",
    }),
    price: z.string().min(1, {
      message: "Select a Price!",
    }),
  });