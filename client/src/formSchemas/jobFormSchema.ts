import { z } from "zod";

export const jobFormSchema = z.object({
  title: z.string().min(2, {
    message: "Enter a valid job Title!",
  }),
  jobType: z.string().min(1, {
    message: "Select a job Type!",
  }),
  workMode: z.string().min(1, {
    message: "Select a work mode!",
  }),
  description: z.string().min(8, {
    message: "Enter a valid description!",
  }),
});
