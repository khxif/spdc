import { cn } from "@/lib/utils";
import { Leckerli_One } from "next/font/google";
import Link from "next/link";

const leckerLiOne = Leckerli_One({ subsets: ["latin"], weight: ["400"] });

interface LogoProps {
  href: string;
}

export default function Logo({ href }: LogoProps) {
  return (
    <Link href={href}>
      <h1 className={cn(leckerLiOne.className, "text-3xl")}>spdc</h1>
    </Link>
  );
}
