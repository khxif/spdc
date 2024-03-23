import { LogOut } from "lucide-react";
import Logo from "../Header/Logo";
import AdminLinks from "./AdminLinks";
import { Button } from "../ui/button";

export default function AdminSidebar() {
  return (
    <aside
      className="max-w-[20rem] border-gray-600 w-full p-4 h-full border-r-[1px] 
       hidden lg:flex flex-col justify-between"
    >
      <div className="flex flex-col space-y-20">
        <Logo href="/admin" />
        <AdminLinks />
      </div>
      <Button
        variant="ghost"
        className="text-center hover:bg-transparent hover:text-white py-5 flex items-center
         justify-start w-full space-x-2 font-semibold cursor-pointer"
      >
        <LogOut />
        <p>Logout</p>
      </Button>
    </aside>
  );
}
