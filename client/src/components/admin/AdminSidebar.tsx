import Logo from "../Header/Logo";
import AdminLinks from "./AdminLinks";
import LogoutButton from "./LogoutButton";

export default function AdminSidebar() {
  return (
    <aside
      className="max-w-[20rem] border-gray-600 w-full p-4 h-full border-r-[1px] 
       hidden lg:flex flex-col justify-between"
    >
      <div className="flex flex-col space-y-20">
        <Logo href="/" />
        <AdminLinks />
      </div>
      <LogoutButton />
    </aside>
  );
}
