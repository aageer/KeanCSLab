import Link from "next/link";
import { featuredPublications } from "@/lib/data/publications";
import { researchAreas } from "@/lib/data/research";
import { news } from "@/lib/data/news";
import { site } from "@/lib/site";

export default function HomePage() {
  const papers = featuredPublications();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-gold/15">
        <div className="grid-constellation pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 py-20 sm:px-6">
          <p className="reveal text-[11px] uppercase tracking-[0.32em] text-gold">
            {site.university} · {site.location}
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-5xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            {site.name}
          </h1>
          <p className="reveal reveal-delay-2 mt-5 font-display text-2xl text-gold sm:text-3xl">
            {site.university}
          </p>
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-muted">
            The research laboratory of the {site.department}. Faculty and
            doctoral students work in artificial intelligence, cybersecurity,
            data science, and allied computing systems. Founding Ph.D. cohort:
            Fall 2026.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/research"
              className="bg-gold px-6 py-3 text-center text-sm font-medium text-navy-deep"
            >
              Research
            </Link>
            <Link
              href="/phd"
              className="border border-gold/40 px-6 py-3 text-center text-sm text-gold"
            >
              Ph.D. Program
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
              The Laboratory
            </p>
            <h2 className="mt-4 font-display text-4xl">
              Doctoral research in the {site.department}.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-muted lg:col-span-8">
            <p>
              {site.department} is housed in the {site.college}. The public
              Ph.D. page names three high-impact domains — artificial
              intelligence, cybersecurity, and data science — and a
              research-centered curriculum built around an original
              dissertation.
            </p>
            <p>
              This site publishes the laboratory’s research areas, faculty as
              listed on the public directory, and selected papers. It does not
              speak for Graduate Admissions and does not invent handbook
              language. Official eligibility, assistantships, and the
              application live on kean.edu.
            </p>
            <p>
              Program coordinator: {site.coordinator.name} ·{" "}
              {site.coordinator.email}
            </p>
          </div>
        </div>
      </section>

      <div className="hairline" />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Research
            </p>
            <h2 className="mt-3 font-display text-4xl">Research areas</h2>
          </div>
          <Link href="/research" className="hidden text-sm text-gold sm:inline">
            All research →
          </Link>
        </div>
        <div className="mt-12 grid gap-px bg-gold/15 sm:grid-cols-2">
          {researchAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/research/${area.slug}`}
              className="bg-background p-6 transition-colors hover:bg-card"
            >
              <p className="font-mono text-xs text-gold">{area.index}</p>
              <h3 className="mt-3 font-display text-2xl">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{area.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-gold/15 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            Publications
          </p>
          <h2 className="mt-3 font-display text-4xl">Selected publications</h2>
          <ol className="mt-10 divide-y divide-gold/15">
            {papers.map((paper) => (
              <li key={paper.id} className="py-6">
                <p className="font-mono text-xs text-gold">{paper.year}</p>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block font-display text-2xl leading-snug hover:text-gold"
                >
                  {paper.title}
                </a>
                <p className="mt-2 text-sm text-muted">{paper.authors}</p>
              </li>
            ))}
          </ol>
          <Link href="/publications" className="mt-6 inline-block text-sm text-gold">
            All selected publications →
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="border border-gold/20 p-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            Ph.D. Program
          </p>
          <h2 className="mt-3 font-display text-3xl">
            Founding doctoral cohort, Fall 2026
          </h2>
          <p className="mt-4 leading-7 text-muted">
            {site.admissions.note} Fall deadline {site.admissions.fallDeadline}.
            Assistantship details are published by the university. Confirm them
            with the coordinator or Graduate Admissions.
          </p>
          <Link
            href="/phd"
            className="mt-6 inline-block bg-gold px-5 py-2.5 text-sm text-navy-deep"
          >
            Ph.D. Program
          </Link>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            News
          </p>
          <ul className="mt-6 space-y-5">
            {news.slice(0, 3).map((item) => (
              <li key={item.slug}>
                <p className="font-mono text-xs text-gold">{item.date}</p>
                <Link
                  href={`/news/${item.slug}`}
                  className="mt-1 block font-display text-xl hover:text-gold"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
