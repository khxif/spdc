import { z } from "zod";

export const jobApplyFormSchema = z.object({
  name: z.string().min(1, {
    message: "Enter your Name!",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Enter a valid phone number",
    })
    .max(10, {
      message: "Enter a valid phone number",
    })
    .transform((v) => Number(v) || 0),
  experience: z
    .string()
    .min(1, {
      message: "Enter your experience",
    })
    .transform((v) => Number(v) || 0),
  description: z.string().min(5, {
    message: "Tell us about your skills",
  }),
  resume: z.string().min(1, {
    message: "Upload your resume",
  }),
});
