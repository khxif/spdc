"use client";

import { useTokenStore } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);
  const token = useTokenStore((state) => state.token);

  useEffect(() => {
    if (!token) return;

    fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/auth/verify-token`, {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(async (res) => {
        // console.log(res);

        const data = await res.json();
        // console.log(data);
        if (!res.ok) return;
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, router]);

  return <>{children}</>;
}
