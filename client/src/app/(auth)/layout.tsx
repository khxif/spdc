import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center px-4 lg:px-0 bg-black text-white">
      {children}
    </main>
  );
}
