"use client";

import { useUserStore } from "@/store/userStore";
import { CookieValueTypes } from "cookies-next";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({
  children,
  cookie,
}: {
  children: ReactNode;
  cookie: CookieValueTypes;
}) {
  const router = useRouter();
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  useEffect(() => {
    if (!cookie) setUser(null);
  }, [cookie]);

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  return <>{children}</>;
}
