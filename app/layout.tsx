import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CombinedCursor } from "@/components/shared/combined-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zahidul Islam - Full Stack Developer",
  description: "Portfolio of Zahidul Islam, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased relative min-h-screen")}>
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-grid-small-black/20" />
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        {children}
        <CombinedCursor />
      </body>
    </html>
  );
}
