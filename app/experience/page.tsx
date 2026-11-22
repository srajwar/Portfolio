import type { Metadata } from "next";
import { education, experience, skills } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where Shubham Rajwar has worked as a content writer, SEO strategist and technical writer.",
};

export default function Experience() {
  return (
    <section>
      <h1 className="mb-10 text-2xl font-medium">Experience</h1>
      {experience.map((job) => (
        <article key={job.role + job.org} className="mb-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
            <h2 className="font-medium text-black dark:text-white">
              {job.role}, {job.org}
            </h2>
            <p className="text-sm tabular-nums text-neutral-600 dark:text-neutral-400">{job.period}</p>
          </div>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-neutral-800 dark:text-neutral-300">
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      ))}

      <h2 className="mt-12 mb-4 text-xl font-medium">Education</h2>
      {education.map((e) => (
        <p key={e.title} className="text-neutral-800 dark:text-neutral-300">
          {e.title}, {e.org} ({e.year})
        </p>
      ))}

      <h2 className="mt-12 mb-4 text-xl font-medium">Skills</h2>
      <p className="text-neutral-800 dark:text-neutral-300">{skills.join(" · ")}</p>
    </section>
  );
}
