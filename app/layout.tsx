import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${profile.name} | Mechanical Engineering Portfolio`,
  description: `${profile.title}. ${profile.goal}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
