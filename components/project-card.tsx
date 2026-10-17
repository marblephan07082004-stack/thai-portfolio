import type { Project } from "@/lib/constants";
import QuarterCarDiagram from "./quarter-car-diagram";

export default function ProjectCard({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <article id={p.slug} className="grid gap-8 border-t border-ink/80 py-12 md:grid-cols-12">
      <div className={`md:col-span-6 ${flip ? "md:order-2" : ""}`}>
        <div className="grid-paper flex aspect-[4/3] items-center justify-center overflow-hidden border border-rule bg-white/40 text-ink">
          {p.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.image} alt={p.imageAlt} className="h-full w-full object-contain" />
          ) : (
            <div className="h-full w-full p-6"><QuarterCarDiagram /></div>
          )}
        </div>
      </div>
      <div className={`md:col-span-6 ${flip ? "md:order-1" : ""}`}>
        <p className="font-mono text-sm text-blueprint">{p.subtitle}</p>
        <h3 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h3>
        <p className="mt-4 max-w-prose">{p.summary}</p>

        <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="font-semibold">My part</dt>
          <dd>{p.role.join(" · ")}</dd>
          <dt className="font-semibold">Tools</dt>
          <dd>{p.tools.join(", ")}</dd>
        </dl>

        <ul className="mt-5 max-w-prose list-disc space-y-2 pl-5 text-sm marker:text-callout">
          {p.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>

        {p.repo && (
          <a href={p.repo} className="mt-6 inline-block border-b-2 border-callout pb-0.5 font-semibold hover:text-callout">
            {p.repoLabel ?? "View on GitHub"}
          </a>
        )}
      </div>
      {p.results && (
        <div className="md:col-span-12">
          <h4 className="text-lg font-semibold">{p.results.caption}</h4>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            {p.results.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.results.image} alt={p.results.imageAlt ?? ""} className="w-full border border-rule" />
            )}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[30rem] border border-ink text-sm">
                <thead>
                  <tr className="border-b border-ink text-left text-blueprint">
                    {p.results.columns.map((h) => <th key={h} scope="col" className="px-3 py-2 font-medium">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {p.results.rows.map((r) => (
                    <tr key={r[0]} className="border-b border-rule last:border-0">
                      {r.map((cell, i) => (
                        i === 0
                          ? <th key={i} scope="row" className="px-3 py-2 text-left font-medium">{cell}</th>
                          : <td key={i} className={`px-3 py-2 font-mono ${cell === "No" ? "text-callout" : ""}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {p.results.note && <p className="mt-3 text-sm">{p.results.note}</p>}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
