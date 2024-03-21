"use client";

import { adminLinks } from "@/constants/adminLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col space-y-6">
      {adminLinks.map((link) => (
        <Link href={link.href} key={link.id}>
          <span
            className={cn(
              pathname === link.href && "bg-white text-black",
              `flex items-center space-x-2 w-full p-4 rounded-md hover:bg-white hover:text-black 
                transition-all duration-200 ease-linear`
            )}
          >
            <link.icon />
            <h6>{link.label}</h6>
          </span>
        </Link>
      ))}
    </div>
  );
}
