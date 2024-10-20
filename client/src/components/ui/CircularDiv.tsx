import { ReactNode } from "react";

export default function CircularDiv({children}: {children: ReactNode}) {
  return (
    <div
      className="w-56 h-56 rounded-full flex items-center justify-center
      bg-gradient-to-b from-[#EB00FF] to-[#7CFEDE] p-[.15rem]"
    >
      <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
