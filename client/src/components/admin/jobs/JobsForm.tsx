"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import JobTypeSelect from "./JobTypeSelect";
import WorkModeSelect from "./WorkModeSelect";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(4, {
    message: "Enter a valid job Title!",
  }),
  type: z.string().min(1, {
    message: "Select a job Type!",
  }),
  workMode: z.string().min(1, {
    message: "Select a work mode!",
  }),
  description: z.string().min(8, {
    message: "Enter a valid description!",
  }),
});

export default function JobsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      type: "",
      workMode: "",
      description: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="w-full px-4 sm:px-6 lg:px-24 py-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 w-full"
        >
          <div
            className="flex flex-col lg:flex-row items-center space-x-4 sm:space-x-6 lg:space-x-8
           space-y-6 lg:space-y-0"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Fullstack Developer" {...field} />
                  </FormControl>
                  <FormDescription>Enter the Job title.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Type</FormLabel>
                  <FormControl>
                    <JobTypeSelect
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription>Select a job Type.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workMode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Work Mode</FormLabel>
                  <FormControl>
                    <WorkModeSelect
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription>Select a Work Mode.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Textarea rows={4} placeholder="Job Description....." />
                </FormControl>
                <FormDescription>Enter the Job Description.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="secondary" className="w-full py-5">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
