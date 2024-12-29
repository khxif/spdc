import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminProtected from "@/providers/AdminProtected";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminProtected>
      <main className="flex h-screen overflow-y-hidden bg-black text-white">
        <AdminSidebar />
        <main className="h-full overflow-y-auto w-full flex-1 pb-10">
          {children}
        </main>
      </main>
    </AdminProtected>
  );
}
