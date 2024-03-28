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
import { useUserStore } from "@/store/userStore";
import { loginFormSchema } from "@/formSchemas/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function LoginForm() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    try {
      console.log(values);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/auth/login`,
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

      setUser(data);
      toast.success(`Logged in as: <b>${data?.username}<b/>`);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error((error as Error).message || "Something went wrong");
    } finally {
      form.reset();
    }
  };
  return (
    <div className="space-y-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Ex: johndoe@gmail.com"
                    {...field}
                    className="border-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="border-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full py-5">
            Submit
          </Button>
        </form>
      </Form>

      <span className="flex items-center space-x-2 text-sm">
        <p>Dont have an account?</p>{" "}
        <Link href="/signup" className="text-cyan-500">
          Sign up
        </Link>
      </span>
    </div>
  );
}
