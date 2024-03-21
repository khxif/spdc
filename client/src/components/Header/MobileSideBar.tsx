import { links } from "@/constants/links";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Logo from "./Logo";

export default function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent className="bg-white text-black flex flex-col space-y-6 p-4 m-0">
        <div className="items-start">
          <Logo href="/" />
        </div>
        <div className="flex flex-col space-y-5">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="w-full py-4 px-2 hover:bg-zinc-400/40 rounded-md transition-all 
              duration-200 ease-linear"
            >
              <span className="flex items-center space-x-3">
                <link.icon className="w-5 h-5" />
                <p>{link.label}</p>
              </span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
