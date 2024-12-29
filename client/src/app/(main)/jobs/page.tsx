import JobCard from "@/components/jobs/JobCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Join our company in certain roles",
};

export default async function JobsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/jobs`, {
    cache: "no-store",
  });
  const jobs: Job[] = await res.json();
  // console.log(jobs);
  return (
    <main className="py-4 sm:py-6 lg:py-8 flex flex-col space-y-5 max-w-7xl px-4 lg:px-0 mx-auto pb-10 h-full">
      {jobs &&
        jobs?.map((job) => (
          <div key={job._id}>
            <JobCard job={job} />
          </div>
        ))}
      {!jobs ||
        (jobs.length === 0 && (
          <p className="text-center pt-5 font-semibold text-lg">
            No jobs posted!
          </p>
        ))}
    </main>
  );
}
