"use client";

import { Briefcase, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { useModalStore } from "@/store/modalStore";
import { useSelectedJobStore } from "@/store/selectedJob";

export default function JobCard({ job }: { job: Job }) {
  const setSelectedJob = useSelectedJobStore((state) => state.setSelectedJob);
  const setJobModalOpen = useModalStore((state) => state.setJobModalOpen);
  return (
    <div
      className="bg-[#1A1A1A] py-4 px-6 rounded-lg flex lg:items-center justify-between
     lg:space-x-16 flex-col lg:flex-row space-y-5 lg:space-y-0"
    >
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">{job.title}</h1>

        <p className="text-white/75">{job.description}</p>
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
        onClick={() => {
          setJobModalOpen(true);
          setSelectedJob(job);
        }}
      >
        Apply
      </Button>
    </div>
  );
}
