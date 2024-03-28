"use client";

import { useUserStore } from "@/store/userStore";
import { ShieldEllipsis } from "lucide-react";
import Link from "next/link";

export default function AdminButton() {
  const user = useUserStore((state) => state.user);
  return (
    <>
      {user?.role === "admin" ? (
        <Link href="/admin">
          <div
            className="fixed rounded-full size-16 p-4 bg-gradient-to-br from-[#7CFEDE] to-[#fff] 
             flex items-center justify-center bottom-8 right-6 text-black"
          >
            <ShieldEllipsis className="size-8" />
          </div>
        </Link>
      ) : null}
    </>
  );
}
