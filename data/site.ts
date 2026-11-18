// All portfolio content lives here. Edit this file to update the site.
// Rule: every number must come from Shubham's own tracking sheet, and every
// fact from the resume. Don't add stats, quotes or samples you can't back up.

export const profile = {
  name: "Shubham Rajwar",
  role: "Content Writer & SEO Strategist",
  location: "Noida, India",
  email: "shubhamrajwar05@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubham-rajwar-bb8621215/",
  headline: "I write university content that students actually find on Google.",
  intro:
    "I started as a technical writer at JavaTpoint, explaining Python, Java and SQL to developers. Today I run SEO content for university clients at Growthtrack: keyword research, briefs, blogs, landing pages and emailers, from first draft to the page that ranks.",
};

// Month the traffic numbers below were pulled from the tracking sheet.
// Replace the placeholder, e.g. "August 2026".
export const metricsAsOf = "[ADD MONTH]";

export type Sample = {
  client: string;
  title: string;
  url: string;
  format: string;
  published?: string;
  visits?: number;
  impressions?: string;
  note?: string;
};

export const featuredSamples: Sample[] = [
  {
    client: "Shiv Nadar University",
    title: "10 best engineering courses for future careers in 2030 and beyond",
    url: "https://snu.edu.in/blogs/10-best-engineering-courses-for-future-careers-in-2030-beyond/",
    format: "SEO blog",
    published: "Jan 2026",
    visits: 49759,
    impressions: "2.18M",
  },
  {
    client: "The Apollo University",
    title: "Top entrance exams after 12th science in India 2026 (PCM and PCB)",
    url: "https://apollouniversity.edu.in/blog/top-entrance-exams-after-12th-science-in-india-2026-pcm-pcb/",
    format: "SEO blog",
    published: "Jan 2026",
    visits: 15499,
  },
  {
    client: "M.S. Ramaiah University of Applied Sciences",
    title: "BSc Nursing course details: duration, fees and entrance exams",
    url: "https://www.msruas.ac.in/blog/bsc-nursing-course-details-duration-fees-entrance-exams",
    format: "SEO blog",
    published: "Feb 2026",
    visits: 13924,
    impressions: "2.37M",
  },
  {
    client: "Mahindra University",
    title: "List of engineering entrance exams in India after 12th (2026)",
    url: "https://www.mahindrauniversity.edu.in/blog/list-of-engineering-entrance-exams-in-india-after-12th-2026/",
    format: "SEO blog",
    published: "Feb 2026",
    visits: 3854,
    impressions: "451.7k",
  },
  {
    client: "BML Munjal University",
    title: "CUET UG syllabus",
    url: "https://www.bmu.edu.in/social/cuet-ug-syllabus/",
    format: "SEO blog",
    published: "Nov 2025",
    visits: 952,
    impressions: "600k",
  },
];

export const moreSamples: Sample[] = [
  {
    client: "Hero Vired",
    title: "What is a CI/CD pipeline?",
    url: "https://herovired.com/learning-hub/blogs/what-is-ci-cd-pipeline/",
    format: "Technical explainer",
  },
  {
    client: "Hero Vired",
    title: "Data analysis techniques",
    url: "https://herovired.com/learning-hub/blogs/data-analysis-techniques",
    format: "Technical explainer",
  },
  {
    client: "Hero Vired",
    title: "How to become an equity research analyst",
    url: "https://herovired.com/learning-hub/blogs/equity-research-analyst/",
    format: "Career guide",
  },
  {
    client: "Hero Vired",
    title: "4 pillars of OOP",
    url: "https://herovired.com/learning-hub/blogs/4-pillars-of-oop",
    format: "Technical explainer",
  },
];

export const experience = [
  {
    role: "Content Writer & SEO Strategist",
    org: "Growthtrack Info Tech Pvt Ltd",
    period: "Sep 2024 – Present",
    place: "Noida",
    points: [
      "Long-form SEO blogs, landing page copy, emailers and infographic briefs for SRM University-AP, BML Munjal University, Mahindra University and Shiv Nadar University.",
      "Run the whole workflow across several university accounts at once, from keyword research and briefs to SERP-ready delivery.",
      "Content audits and AEO rewrites that tighten topical relevance on client domains.",
      "Meta descriptions at scale, 50+ URLs per project, plus off-page blog campaigns for competitive education keywords.",
    ],
  },
  {
    role: "Content Writer, Social Media & D2C",
    org: "Freelance",
    period: "Mar 2024 – Aug 2024",
    place: "Noida",
    points: [
      "Website copy, product listings and blogs for personal care and D2C healthcare brands.",
      "Content calendars and platform-specific copy for Instagram and LinkedIn.",
    ],
  },
  {
    role: "Technical Writer",
    org: "JavaTpoint",
    period: "Dec 2022 – Feb 2024",
    place: "Noida",
    points: [
      "Wrote 100+ tutorials, guides and articles on Python, Java, C/C++ and SQL for a high-traffic developer education platform.",
      "Applied on-page SEO so the tutorials were easier to find in organic search.",
      "Researched and edited complex programming concepts until they were both accurate and easy to follow.",
    ],
  },
];

export const education = [
  { title: "BCA", org: "G.L. Bajaj Institute of Management and Research", year: "2023" },
];

export const skills = [
  "SEO content writing",
  "Keyword research & SERP analysis",
  "AEO (answer engine optimisation)",
  "Content strategy & briefs",
  "Content audits",
  "Landing page & email copy",
  "Technical writing",
  "Editing & proofreading",
  "Social media copy",
];

export const project = {
  title: "SEO intelligence tool",
  body: "I built my own research tool with Google AI Studio and the Claude API. It runs SERP analysis, maps keyword gaps against competitors and drafts content outlines, the same steps I'd otherwise do by hand for every brief.",
};
