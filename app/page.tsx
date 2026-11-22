import Link from "next/link";
import { featuredSamples, metricsAsOf, profile } from "@/data/site";
import { SampleList } from "@/components/SampleList";

const fmt = new Intl.NumberFormat("en-IN");

export default function Page() {
  const top = featuredSamples[0];
  return (
    <section>
      <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
        {profile.role} · {profile.location}
      </p>
      <h1 className="mb-8 text-2xl font-medium title">{profile.headline}</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{profile.intro}</p>
        {top.visits !== undefined && (
          <p>
            My best-performing piece, a guide for {top.client}, has brought in{" "}
            <strong>{fmt.format(top.visits)} organic visits</strong> (as of {metricsAsOf}).
          </p>
        )}
        <p>
          See <Link href="/work">all my work</Link>, read about{" "}
          <Link href="/experience">where I&apos;ve worked</Link>, or{" "}
          <Link href="/contact">tell me about your project</Link>.
        </p>
      </div>

      <h2 className="mt-12 mb-6 text-xl font-medium">Selected writing</h2>
      <SampleList samples={featuredSamples.slice(0, 3)} />
      <Link href="/work" className="text-sm underline underline-offset-2 decoration-neutral-400">
        See all work →
      </Link>
    </section>
  );
}
