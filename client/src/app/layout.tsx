import { cn } from "@/lib/utils";
import Hydrations from "@/providers/Hydration";
import ProtectedRoute from "@/providers/ProtectedRoute";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SPDC",
    template: "SPDC - %s",
  },
  description: "Official Website of SPDC!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <body
        className={cn(inter.className, "h-screen w-full")}
      >
        <Hydrations>
          <ProtectedRoute>
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
