"use client";

import { formSchema } from "@/formSchemas/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useUserStore } from "@/store/userStore";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!user) {
        toast.warning("Login to continue");
        router.push("/login");
        return;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/send-mail`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);

      if (!res.ok) return toast.error(data?.error || "Something went wrong");

      toast.success("Thanks for your response!");
    } catch (error) {
      console.log(error);
      toast.error((error as Error).message || "Something went wrong");
    } finally {
      form.reset();
    }
  };
  return (
    <div className="pt-6 max-w-5xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-6 flex flex-col justify-center"
        >
          <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-6 w-full">
            <div className="md:flex-1 w-full py-4 px-6 space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex relative">
                        <Input
                          placeholder="Ex: John"
                          className="placeholder:text-white placeholder:text-sm outline-none placeholder:font-light
                          border-white/40 py-6 px-6 border-[#8B8B8B]"
                          {...field}
                        />
                        <span className="absolute text-[#959595] left-2 px-2 -top-3 bg-white z-50 text-sm">
                          Name
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="yourname@gmail.com"
                          className="placeholder:text-white placeholder:text-sm outline-none placeholder:font-light
                           border-white/40 py-6 px-6 border-[#8B8B8B]"
                          {...field}
                        />
                        <span className="absolute text-[#959595] left-2 px-2 -top-3 bg-white z-50 text-sm">
                          Email Address
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full md:flex-1 px-6 h-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Textarea
                          rows={4}
                          placeholder="Lorem ipsum dolor sit amet consectetur. Posuere tempus tellus morbi consectetur. Ultrices morbi donec ornare fringilla nunc. "
                          className="placeholder:text-white placeholder:text-sm outline-none 
                          placeholder:font-light border-white/40 py-6 px-6 border-[#8B8B8B]"
                          {...field}
                        />
                        <span className="absolute text-[#959595] left-2 px-2 -top-3 bg-white z-50 text-sm">
                          Message
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <button
            className="px-20 py-2.5 rounded-full bg-gradient-to-r to-primary-blue via-indigo-200 
             from-[#fff] text-black max-w-fit font-semibold hover:brightness-75 mx-auto"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
}
