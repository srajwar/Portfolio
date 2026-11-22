import type { Metadata } from "next";
import { project, samples } from "@/data/site";
import { WorkCard } from "@/components/WorkCard";

export const metadata: Metadata = {
  title: "Work",
  description: "SEO blogs, technical explainers and guides by Shubham Rajwar for universities, tech and finance brands.",
};

export default function Work() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-medium">Work</h1>
      <p className="mb-12 text-neutral-600 dark:text-neutral-400">
        SEO blogs for universities, plus tech and finance explainers. Every card links to the live article.
      </p>

      {samples.map((s, i) => (
        <WorkCard key={s.slug} sample={s} priority={i === 0} />
      ))}

      <h2 className="mt-4 mb-4 text-xl font-medium">{project.title}</h2>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{project.body}</p>
      </div>
    </section>
  );
}
