import SoftwaresForm from "@/components/admin/SoftwaresForm";

export default function AddSoftwaresPage() {
  return (
    <main className="px-6 pt-28 lg:pt-0 flex flex-col items-center justify-center w-full h-full space-y-6">
      <h1 className="text-2xl font-semibold">Add Softwares</h1>
      <SoftwaresForm />
    </main>
  );
}
