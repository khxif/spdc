import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import ProtectedRoute from "@/providers/ProtectedRoute";
import Hydrations from "@/providers/Hydration";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPDC",
  description: "Official Website of SPDC!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = getCookie("user", { cookies });
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "bg-black text-white h-screen w-full")}
      >
        <Hydrations>
          <ProtectedRoute cookie={cookie}>
            {children}
            <Toaster
              richColors
              className="max-w-[18rem] md:max-w-none"
              position="top-center"
            />
          </ProtectedRoute>
        </Hydrations>
      </body>
    </html>
  );
}
