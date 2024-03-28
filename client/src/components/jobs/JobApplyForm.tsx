"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { jobApplyFormSchema } from "@/formSchemas/jobApplyFormSchema";
import { UploadDropzone } from "@/utils/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { useSelectedJobStore } from "@/store/selectedJob";

export default function JobApplyForm() {
  const [resumeUrl, setResumeUrl] = useState<string>("");
  const selectedJob = useSelectedJobStore((state) => state.selectedJob);

  const form = useForm<z.infer<typeof jobApplyFormSchema>>({
    resolver: zodResolver(jobApplyFormSchema),
    defaultValues: {
      name: "",
      phone: undefined,
      description: "",
      experience: undefined,
      resume: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof jobApplyFormSchema>) => {
    try {
      console.log(values);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/jobs/apply/${selectedJob?._id}`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log(res);
      console.log(data);

      if (!res.ok) return toast.error(data.error || "Something went wrong");

      toast.success(`Application sent!`);
    } catch (error) {
      console.log(error);
      toast.error((error as Error).message || "Something went wrong");
    }
  };
  return (
    <div className="pt-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="9090******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How much years of experience do you have?(in years)
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell us about your skills.</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I am proficient in Node.js"
                    {...field}
                    rows={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!resumeUrl ? (
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload your resume</FormLabel>
                  <FormControl className="flex items-center justify-center w-full">
                    <UploadDropzone
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        console.log("Files: ", res);
                        field.onChange(res[0].url);
                        setResumeUrl(res[0].url);
                      }}
                      onUploadError={(error: Error) => {
                        console.log(error);
                        toast.error(`ERROR! ${error.message}`);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <Image
              src={resumeUrl || ""}
              alt="resume"
              width={300}
              height={200}
              className="w-full  h-20"
            />
          )}
          <Button type="submit" size="lg" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
