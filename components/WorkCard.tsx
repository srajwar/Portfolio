import Image from "next/image";
import type { Sample } from "@/data/site";

const linkClass =
  "text-sm font-medium text-emerald-700 dark:text-emerald-400 underline-offset-4 hover:underline";

export function WorkCard({ sample, priority = false }: { sample: Sample; priority?: boolean }) {
  const cover = (
    <Image
      src={sample.image}
      alt={`${sample.client}: ${sample.title}`}
      width={1280}
      height={720}
      priority={priority}
      sizes="(max-width: 880px) 100vw, 880px"
      className="w-full h-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-transform duration-300 group-hover:scale-[1.01]"
    />
  );

  return (
    <article className="mb-16">
      {sample.url ? (
        <a href={sample.url} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-2xl">
          {cover}
        </a>
      ) : (
        <div className="overflow-hidden rounded-2xl">{cover}</div>
      )}
      <div className="mt-5 grid gap-3 sm:grid-cols-[2fr_3fr] sm:gap-8">
        <h3 className="text-lg font-medium leading-snug text-black dark:text-white">{sample.title}</h3>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{sample.summary}</p>
          {sample.url && (
            <a href={sample.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Read the article ↗
            </a>
          )}
        </div>
      </div>
      {sample.links && (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {sample.links.map((l) => (
            <li key={l.url}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center justify-between gap-3 rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium text-black transition-colors hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-800 dark:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                {l.title}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
