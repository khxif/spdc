import { adminLinks } from "@/constants/adminLinks";
import { ArrowBigLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full space-y-12">
      <h1 className="text-2xl font-bold">Welcome, SPDC admin!</h1>

      <div className="space-y-6 w-full px-6 md:px-0 max-w-4xl flex flex-col pb-20">
        {adminLinks.map((link) => (
          <Link href={link.href} key={link.id}>
            <span
              className="flex items-center justify-between px-4 py-5 w-full border rounded-lg
              shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]
               hover:shadow-white/70 transition-all duration-200 ease-linear"
            >
              <span className="flex items-center space-x-4">
                <link.icon />
                <p>{link.label}</p>
              </span>

              <span>
                <ArrowRight />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
