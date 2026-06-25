import type { Metadata } from "next";
import { profile } from "@/lib/content";
import "./globals.css";

const description = profile.tagline;

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description,
  keywords: [
    "QA Engineer",
    "Test Automation",
    "Playwright",
    "SDET",
    "AI testing",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
