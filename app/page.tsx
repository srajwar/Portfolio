import Link from "next/link";
import { profile, samples } from "@/data/site";
import { WorkCard } from "@/components/WorkCard";

export default function Page() {
  return (
    <section>
      <div
        className="mb-16 flex flex-col items-center rounded-3xl bg-cover bg-center px-6 py-16 text-center sm:py-24 md:py-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.62)), url(/images/hero.jpg)",
        }}
      >
        <p className="mb-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur">
          {profile.role}
        </p>
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] sm:text-5xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-100 sm:text-lg">{profile.subline}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/work"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            See my work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/70 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Tell me about your project
          </Link>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert mb-16">
        <p>{profile.intro}</p>
      </div>

      <h2 className="mb-8 text-2xl font-medium">Selected work</h2>
      {samples.slice(0, 3).map((s, i) => (
        <WorkCard key={s.slug} sample={s} priority={i === 0} />
      ))}
      <Link href="/work" className="text-sm underline underline-offset-2 decoration-neutral-400">
        See all work →
      </Link>
    </section>
  );
}
