import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { peopleByResearch } from "@/lib/data/people";
import { publicationsFor } from "@/lib/data/publications";
import { getResearch, researchAreas } from "@/lib/data/research";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return researchAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getResearch(slug);
  if (!area) return { title: "Research" };
  return {
    title: area.title,
    description: area.lede,
  };
}

export default async function ResearchDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getResearch(slug);
  if (!area) notFound();

  const faculty = peopleByResearch(area.slug);
  const papers = publicationsFor(area.slug);
  const methodKinds = ["method", "dataset", "benchmark", "tooling"] as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-mono text-xs text-gold">
        Program {area.index} / 06
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight sm:text-6xl">
        {area.title}
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-8 text-muted">{area.lede}</p>

      <article className="mt-14 max-w-3xl space-y-6 text-base leading-8">
        <p>{area.statement}</p>
      </article>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Questions the work is for</h2>
        <ol className="mt-8 space-y-4">
          {area.questions.map((question, index) => (
            <li key={question} className="flex gap-4 border-t border-gold/15 pt-4">
              <span className="font-mono text-xs text-gold">0{index + 1}</span>
              <p className="text-lg">{question}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Methods, data, benchmarks</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {area.methods.map((method) => (
            <div key={method.name} className="border border-gold/20 p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                {method.kind}
              </p>
              <h3 className="mt-2 font-display text-2xl">{method.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{method.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Taxonomy on this page: {methodKinds.join(", ")}. Field-standard
          methods are named as such; they are not automatic claims of a Kean
          dataset release.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Doctoral tracks</h2>
        <div className="mt-8 space-y-8">
          {area.tracks.map((track) => (
            <div key={track.title} className="max-w-3xl">
              <h3 className="font-display text-2xl">{track.title}</h3>
              <p className="mt-3 leading-7 text-muted">{track.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border border-gold/20 p-8">
        <h2 className="font-display text-3xl">Who this is for</h2>
        <p className="mt-4 max-w-3xl leading-7">{area.phdFit}</p>
        <Link href="/phd" className="mt-6 inline-block text-sm text-gold">
          Ph.D. recruiting →
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Faculty in this program</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {faculty.map((person) => (
            <li key={person.slug}>
              <Link
                href={`/people/${person.slug}`}
                className="block border border-gold/15 p-4 hover:border-gold/40"
              >
                <p className="font-display text-xl">{person.name}</p>
                <p className="mt-1 text-sm text-muted">{person.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {papers.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-display text-3xl">Selected papers</h2>
          <ul className="mt-8 divide-y divide-gold/15">
            {papers.map((paper) => (
              <li key={paper.id} className="py-5">
                <p className="font-mono text-xs text-gold">{paper.year}</p>
                <a
                  href={paper.href}
                  className="mt-1 block hover:text-gold"
                  target="_blank"
                  rel="noreferrer"
                >
                  {paper.title}
                </a>
                <p className="mt-2 text-sm text-muted">{paper.authors}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="mt-16">
        <Link href="/research" className="text-sm text-gold">
          ← All programs
        </Link>
      </p>
    </div>
  );
}
