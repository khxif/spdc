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
import { signupFormSchema } from "@/formSchemas/signupFormSchema";
import { useTokenStore } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function SignUpForm() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useTokenStore((state) => state.setToken);

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof signupFormSchema>) => {
    try {
      console.log(values);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/auth/signup`,
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
      if (!res.ok) return toast.error(data.error || "Something went wrong");

      setToken(data);
      const user: User = jwtDecode(data);
      console.log(user);
      setUser({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      } as User);

      toast.success(`Logged in as: <b>${data?.username}<b/>`);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error((error as Error).message || "Something went wrong");
    }
  };
  return (
    <div className="space-y-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Ex: John Doe"
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
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
        <p>Already have an account?</p>{" "}
        <Link href="/login" className="text-cyan-500">
          Login
        </Link>
      </span>
    </div>
  );
}
