"use client";

import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { getCookie } from "cookies-next";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  useEffect(() => {
    const cookie = getCookie("user");
    // console.log(cookie);

    if (!cookie) setUser(null);
  }, []);

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  return <>{children}</>;
}
