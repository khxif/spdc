import { cn } from "@/lib/utils";
import { Leckerli_One } from "next/font/google";
import Link from "next/link";

const leckerLiOne = Leckerli_One({ subsets: ["latin"], weight: ["400"] });

export default function Logo() {
  return (
    <Link href="/">
      <h1 className={cn(leckerLiOne.className, "text-3xl")}>spdc</h1>
    </Link>
  );
}
