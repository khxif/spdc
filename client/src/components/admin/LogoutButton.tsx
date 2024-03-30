"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useUserStore } from "@/store/userStore";
import { toast } from "sonner";
import { useTokenStore } from "@/store/tokenStore";

export default function LogoutButton() {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useTokenStore((state) => state.setToken);

  const handleLogout = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/auth/logout`,
      {
        credentials: "include",
      }
    );
    const data = await res.json();
    console.log(data);
    if (!res.ok) return toast.error(data.error || "Something went wrong");

    setUser(null);
    setToken(null);
    toast.success(`Logged out`);
  };
  return (
    <Button
      variant="ghost"
      onClick={handleLogout}
      className="text-center hover:bg-transparent hover:text-white py-5 flex items-center
     justify-start w-full space-x-2 font-semibold cursor-pointer"
    >
      <LogOut className="size-6" />
      <p className="hidden lg:flex">Logout</p>
    </Button>
  );
}
