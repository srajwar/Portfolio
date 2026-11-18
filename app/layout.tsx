import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const description =
  "Shubham Rajwar writes SEO content for Indian universities: blogs, landing pages and emailers for Shiv Nadar, Mahindra, BML Munjal and more.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} · ${profile.role}`,
  description,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description,
    type: "website",
    url: "/",
  },
  twitter: { card: "summary" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#16171a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
