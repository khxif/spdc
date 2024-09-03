"use client";

import { useUserStore } from "@/store/userStore";
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AdminProtected({ children }: { children: ReactNode }) {
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  useEffect(() => {
    if (user?.role !== "admin") redirect("/");
  }, [user]);
  return <>{children}</>;
}
