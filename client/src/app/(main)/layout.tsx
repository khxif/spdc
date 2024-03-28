import Header from "@/components/Header/Header";
import AdminButton from "@/components/admin/AdminButton";
import JobApplyModal from "@/components/jobs/JobApplyModal";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <AdminButton />
      <JobApplyModal />
    </>
  );
}
