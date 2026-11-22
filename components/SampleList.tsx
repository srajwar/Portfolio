import type { Sample } from "@/data/site";

const fmt = new Intl.NumberFormat("en-IN");

export function SampleList({ samples }: { samples: Sample[] }) {
  return (
    <div>
      {samples.map((s) => (
        <a
          key={s.url}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col space-y-1 mb-6 transition-opacity duration-200 hover:opacity-80"
        >
          <h3 className="text-black dark:text-white font-medium">{s.title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {s.client} · {s.format}
            {s.published ? ` · ${s.published}` : ""}
          </p>
          {(s.visits !== undefined || s.impressions) && (
            <p className="text-sm tabular-nums text-neutral-800 dark:text-neutral-200">
              {s.visits !== undefined && <>{fmt.format(s.visits)} organic visits</>}
              {s.visits !== undefined && s.impressions && " · "}
              {s.impressions && <>{s.impressions} impressions</>}
            </p>
          )}
        </a>
      ))}
    </div>
  );
}
