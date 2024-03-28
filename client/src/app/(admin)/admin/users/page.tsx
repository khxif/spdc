import { columns } from "@/components/admin/users/columns";
import { DataTable } from "@/components/admin/users/data-table";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export default async function UsersPage() {
  const cookie = getCookie("user", { cookies });

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user/all`, {
    cache: "no-store",
    headers: {
      Authorization: `${cookie}`,
    },
  });
  const data = await res.json();
  return (
    <main className="w-full px-5 py-8">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
