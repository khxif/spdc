import AdminSidebar from "@/components/admin/AdminSidebar";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="flex h-full">
        <AdminSidebar />
        {children}
      </main>
    </>
  );
}
