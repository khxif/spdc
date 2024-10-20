"use client";

import { links } from "@/utils/links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="hidden items-center space-x-8 text-black md:flex">
      {links?.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className={cn(
            pathname === link.href && "text-primary-blue",
            "hover:text- transition-all duration-200 ease-linear"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
