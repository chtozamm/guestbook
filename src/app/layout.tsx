import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Decorations from "@/components/decorations";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "Guestbook",
  description:
    "A guestbook that could be signed by an authenticated user and viewed by other guests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="selection:bg-accent selection:bg-opacity-50">
      <body
        className={`${rubik.className} min-w-screen text-light-dark dark:text-dark-light h-full min-h-screen w-full bg-snow transition-colors duration-500 ease-in-out dark:bg-night`}
      >
        <Decorations />
        {children}
        <Toaster position="top-center" className="font-rubik" />
      </body>
    </html>
  );
}
