import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminProtected from "@/providers/AdminProtected";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminProtected>
        <main className="flex h-full">
          <AdminSidebar />
          {children}
        </main>
      </AdminProtected>
    </>
  );
}
