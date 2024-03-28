import { Home } from "lucide-react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <nav className="flex items-end justify-end w-full px-5 py-2 lg:py-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Home className="size-5" />
        </Link>
        <div className="lg:hidden">
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}
