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
import { softwareFormSchema } from "@/formSchemas/softwareFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ImageUpload from "../ImageUpload";
import CategorySelect from "./CategorySelect";
import PriceSelect from "./PriceSelect";
import { toast } from "sonner";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function SoftwaresForm() {
  const cookie = getCookie("user");
  const router = useRouter();

  const form = useForm<z.infer<typeof softwareFormSchema>>({
    resolver: zodResolver(softwareFormSchema),
    defaultValues: {
      src: "",
      name: "",
      category: "",
      price: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof softwareFormSchema>) => {
    try {
      console.log(values);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/softwares/add`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Authorization: `${cookie}`,
          },
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) return toast.error(data.error || "Something went wrong");

      toast.success(`Software added successfully!`);
      form.reset();
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error((error as Error).message || "Something went wrong");
    }
  };
  return (
    <div className="w-full px-4 sm:px-6 lg:px-24 py-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 w-full flex flex-col items-center justify-center"
        >
          <FormField
            control={form.control}
            name="src"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Logo</FormLabel>
                <FormControl>
                  <ImageUpload
                    onChange={field.onChange}
                    disabled={field.disabled}
                    value={field.value}
                  />
                </FormControl>
                <FormDescription>Add the softwares logo.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div
            className="flex flex-col lg:flex-row items-center justify-between w-full 
          space-x-0 sm:space-x-6 lg:space-x-8 space-y-6 lg:space-y-0"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Software Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ex: ChatFlix" />
                  </FormControl>
                  <FormDescription>
                    Enter the name for your software.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Select Category</FormLabel>
                  <FormControl>
                    <CategorySelect
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormDescription>
                    Select the category of your software.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Select Price</FormLabel>
                  <FormControl>
                    <PriceSelect
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormDescription>
                    Select the price for your software.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            variant="secondary"
            className="w-full mt-2 py-5 font-semibold"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
