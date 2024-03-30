import dynamic from "next/dynamic";

const JobsForm = dynamic(() => import("@/components/admin/jobs/JobsForm"), {
  ssr: false,
});

export default function AddJobsPage() {
  return (
    <main className="px-6 pt-28 lg:pt-0 flex flex-col items-center justify-center w-full h-full space-y-4 lg:space-y-6">
      <h1 className="text-2xl font-semibold">Add Jobs</h1>
      <JobsForm />
    </main>
  );
}
