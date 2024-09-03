"use client";

import { useTokenStore } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function LogoutButton() {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useTokenStore((state) => state.setToken);

  const handleLogout = () => {
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
