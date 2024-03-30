"use client";

import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { getCookie } from "cookies-next";
import { useTokenStore } from "@/store/tokenStore";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);
  const token = useTokenStore((state) => state.token);

  // useEffect(() => {
  //   // const cookie = getCookie("user");
  //   // // console.log(cookie);

  //   // if (!cookie) setUser(null);
  // }, []);

  // useEffect(() => {
  //   if (!user) router.push("/login");
  // }, [user, router]);

  useEffect(() => {
    if (!token) return router.push("/login");
    console.log(token);

    fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/auth/verify-token`, {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(async (res) => {
        console.log(res);

        const data = await res.json();
        console.log(data);
        if (!res.ok) return router.push("/login");
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
        router.push("/login");
      });
  }, [token, router]);

  return <>{children}</>;
}
