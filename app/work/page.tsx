import type { Metadata } from "next";
import { featuredSamples, metricsAsOf, moreSamples, project } from "@/data/site";
import { SampleList } from "@/components/SampleList";

export const metadata: Metadata = {
  title: "Work",
  description: "SEO blogs, technical explainers and guides by Shubham Rajwar, with real traffic numbers.",
};

export default function Work() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-medium">Work</h1>
      <p className="mb-10 text-neutral-600 dark:text-neutral-400">
        Organic visits and impressions come from my own tracking sheet, as of {metricsAsOf}.
      </p>

      <h2 className="mb-6 text-xl font-medium">SEO blogs that rank</h2>
      <SampleList samples={featuredSamples} />

      <h2 className="mt-12 mb-6 text-xl font-medium">Tech and finance writing</h2>
      <SampleList samples={moreSamples} />

      <h2 className="mt-12 mb-4 text-xl font-medium">{project.title}</h2>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{project.body}</p>
      </div>
    </section>
  );
}
