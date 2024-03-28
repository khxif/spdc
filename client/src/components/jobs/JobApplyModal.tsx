"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/useModalStore";
import JobApplyForm from "./JobApplyForm";

export default function JobApplyModal() {
  const [jobModalOpen, setJobModalOpen] = useModalStore((state) => [
    state.jobModalOpen,
    state.setJobModalOpen,
  ]);
  return (
    <div>
      <Dialog open={jobModalOpen} onOpenChange={setJobModalOpen}>
        <DialogContent
          className="text-black divide-y-2 max-w-[28rem] sm:max-w-[29rem] 
        rounded-lg lg:max-w-[35rem] overflow-y-scroll max-h-[40rem] py-8"
        >
          <DialogHeader>
            <DialogTitle>Apply Now!</DialogTitle>
          </DialogHeader>
          <JobApplyForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
