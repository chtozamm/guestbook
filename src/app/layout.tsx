import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

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
    <html
      lang="en"
      className="selection:bg-accent bg-snow selection:bg-opacity-50"
    >
      <body className={rubik.className}>
        {children}
        <Toaster position="top-center" className="font-rubik" />
      </body>
    </html>
  );
}
