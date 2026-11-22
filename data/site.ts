// All portfolio content lives here. Edit this file to update the site.
// Rule: every fact must come from the resume or Shubham's own records.
// Don't add stats, quotes or samples you can't back up.

export const profile = {
  name: "Shubham Rajwar",
  role: "Content Writer & SEO Strategist",
  location: "Noida, India",
  email: "shubhamrajwar05@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubham-rajwar-bb8621215/",
  headline: "I write content people find on Google",
  subline:
    "I'm Shubham. I started out writing Python and Java tutorials at JavaTpoint. Now I write SEO content for universities, tech, finance and D2C brands.",
  intro:
    "I started as a technical writer at JavaTpoint, explaining Python, Java and SQL to developers. Since then I've written tech and finance explainers for Hero Vired, product copy for D2C healthcare brands, and SEO content for universities and an EdTech CRM. At Growthtrack I handle the whole process: keyword research, briefs, blogs, landing pages and emailers.",
};

export type ArticleLink = { title: string; url: string; format: string };

export type Sample = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  image: string;
  // A single article, or a set of articles for one client.
  url?: string;
  links?: ArticleLink[];
};

// Ordered as they appear on the site. No traffic figures: they change month
// to month, so the site shows the work itself.
export const samples: Sample[] = [
  {
    slug: "snu-engineering-courses",
    client: "Shiv Nadar University",
    title: "10 best engineering courses for future careers in 2030 and beyond",
    summary: "SEO blog for Shiv Nadar University, published Jan 2026.",
    url: "https://snu.edu.in/blogs/10-best-engineering-courses-for-future-careers-in-2030-beyond/",
    image: "/images/work/snu-engineering-courses.jpg",
  },
  {
    slug: "apollo-entrance-exams",
    client: "The Apollo University",
    title: "Top entrance exams after 12th science in India 2026",
    summary: "SEO blog for The Apollo University, published Jan 2026.",
    url: "https://apollouniversity.edu.in/blog/top-entrance-exams-after-12th-science-in-india-2026-pcm-pcb/",
    image: "/images/work/apollo-entrance-exams.jpg",
  },
  {
    slug: "ruas-bsc-nursing",
    client: "M.S. Ramaiah University of Applied Sciences",
    title: "BSc Nursing course details: duration, fees and entrance exams",
    summary: "SEO blog for M.S. Ramaiah University of Applied Sciences, published Feb 2026.",
    url: "https://www.msruas.ac.in/blog/bsc-nursing-course-details-duration-fees-entrance-exams",
    image: "/images/work/ruas-bsc-nursing.jpg",
  },
  {
    slug: "hero-vired-tech-finance",
    client: "Hero Vired",
    title: "Tech and finance explainers for Hero Vired",
    summary: "Four articles on CI/CD pipelines, data analysis, object-oriented programming and equity research.",
    image: "/images/work/hero-vired-tech-finance.jpg",
    links: [
      { title: "What is a CI/CD pipeline?", url: "https://herovired.com/learning-hub/blogs/what-is-ci-cd-pipeline/", format: "Technical explainer" },
      { title: "Data analysis techniques", url: "https://herovired.com/learning-hub/blogs/data-analysis-techniques", format: "Technical explainer" },
      { title: "How to become an equity research analyst", url: "https://herovired.com/learning-hub/blogs/equity-research-analyst/", format: "Career guide" },
      { title: "4 pillars of OOP", url: "https://herovired.com/learning-hub/blogs/4-pillars-of-oop", format: "Technical explainer" },
    ],
  },
  {
    slug: "mahindra-engineering-exams",
    client: "Mahindra University",
    title: "List of engineering entrance exams in India after 12th (2026)",
    summary: "SEO blog for Mahindra University, published Feb 2026.",
    url: "https://www.mahindrauniversity.edu.in/blog/list-of-engineering-entrance-exams-in-india-after-12th-2026/",
    image: "/images/work/mahindra-engineering-exams.jpg",
  },
  {
    slug: "bmu-cuet-syllabus",
    client: "BML Munjal University",
    title: "CUET UG syllabus",
    summary: "SEO blog for BML Munjal University, published Nov 2025.",
    url: "https://www.bmu.edu.in/social/cuet-ug-syllabus/",
    image: "/images/work/bmu-cuet-syllabus.jpg",
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
