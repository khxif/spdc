"use client";

import { useModalStore } from "@/store/modalStore";
import { useSelectedJobStore } from "@/store/selectedJob";
import { useUserStore } from "@/store/userStore";
import { Briefcase, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function JobCard({ job }: { job: Job }) {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const setSelectedJob = useSelectedJobStore((state) => state.setSelectedJob);
  const setJobModalOpen = useModalStore((state) => state.setJobModalOpen);

  const handleApplyClick = () => {
    if (!user) {
      toast.warning("Login to continue");
      router.push("/login");
      return;
    }
    setJobModalOpen(true);
    setSelectedJob(job);
  };
  return (
    <div
      className="bg-zinc-700/50 py-4 px-6 rounded-lg flex lg:items-center justify-between
     lg:space-x-16 flex-col lg:flex-row space-y-5 lg:space-y-0"
    >
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">{job.title}</h1>

        <p className="">{job.description}</p>
        <span className="flex items-center justify-start space-x-5 capitalize font-medium">
          <span className="flex items-center space-x-1">
            <Briefcase className="size-4" />
            <h4>{job.jobType}</h4>
          </span>
          <span className="flex items-center space-x-1">
            <MapPin className="size-4 text-red-600" />
            <h4>{job.workMode}</h4>
          </span>
        </span>
      </div>
      <Button
        size="lg"
        variant="secondary"
        className="px-10 font-semibold"
        onClick={handleApplyClick}
      >
        Apply
      </Button>
    </div>
  );
}
