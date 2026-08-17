import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPerson, people } from "@/lib/data/people";
import { researchAreas } from "@/lib/data/research";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return { title: "People" };
  return {
    title: person.name,
    description: `${person.title} — ${person.areas.join(", ")}`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  const programs = researchAreas.filter((area) =>
    person.researchIds.includes(area.slug),
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
        {person.kind === "chair" ? "Chair" : person.kind}
      </p>
      <h1 className="mt-3 font-display text-5xl">{person.name}</h1>
      <p className="mt-3 text-lg text-muted">{person.title}</p>
      {person.note ? (
        <p className="mt-8 text-base leading-8">{person.note}</p>
      ) : null}
      <dl className="mt-10 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-muted">Email</dt>
          <dd>
            <a href={`mailto:${person.email}`} className="text-gold">
              {person.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-muted">Phone</dt>
          <dd>{person.phone}</dd>
        </div>
        <div>
          <dt className="text-muted">Office</dt>
          <dd>{person.office}</dd>
        </div>
        {person.profile ? (
          <div>
            <dt className="text-muted">Researcher profile</dt>
            <dd>
              <a href={person.profile} className="text-gold" target="_blank" rel="noreferrer">
                researchers.kean.edu ↗
              </a>
            </dd>
          </div>
        ) : null}
      </dl>
      <section className="mt-12">
        <h2 className="font-display text-2xl">Areas</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {person.areas.map((area) => (
            <li
              key={area}
              className="border border-gold/25 px-3 py-1 text-xs tracking-wide"
            >
              {area}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl">Lab programs</h2>
        <ul className="mt-4 space-y-2">
          {programs.map((program) => (
            <li key={program.slug}>
              <Link href={`/research/${program.slug}`} className="text-gold">
                {program.index} · {program.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-14">
        <Link href="/people" className="text-sm text-gold">
          ← All people
        </Link>
      </p>
    </div>
  );
}
