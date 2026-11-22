import { profile } from "@/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metaData = {
  baseUrl: baseUrl.replace(/\/$/, ""),
  title: profile.name,
  name: profile.name,
  ogImage: `/og?title=${encodeURIComponent(profile.name)}`,
  description:
    "Shubham Rajwar is an SEO and technical content writer: developer tutorials, tech and finance explainers, D2C copy and university blogs that rank.",
};

export const socialLinks = {
  linkedin: profile.linkedin,
  email: `mailto:${profile.email}`,
};
