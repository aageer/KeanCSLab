import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { faculty, lecturers } from "@/lib/data/people";

export const metadata: Metadata = {
  title: "People",
  description:
    "Faculty and instructors in Kean’s Department of Computer Science and Technology, as listed on the public directory.",
};

function PersonGrid({
  people,
}: {
  people: typeof faculty;
}) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {people.map((person) => (
        <li key={person.slug}>
          <Link
            href={`/people/${person.slug}`}
            className="block h-full border border-line bg-card p-5 transition-colors hover:border-line-strong"
          >
            <p className="font-display text-2xl">{person.name}</p>
            <p className="mt-1 text-sm text-accent">{person.title}</p>
            <p className="mt-3 text-sm leading-6 text-muted">
              {person.areas.join(" · ")}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function PeoplePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        kicker="People"
        title="People"
        lede="Names, titles, offices, and areas from the public Kean CST directory. Doctoral students will be listed after the founding cohort enrolls."
      />
      <section className="mt-16">
        <h2 className="font-display text-3xl">Faculty</h2>
        <PersonGrid people={faculty} />
      </section>
      <section className="mt-16">
        <h2 className="font-display text-3xl">Lecturers</h2>
        <PersonGrid people={lecturers} />
      </section>
      <p className="mt-12 text-sm text-muted">
        Source:{" "}
        <a
          href="https://www.kean.edu/department-3-2-0"
          className="text-accent"
          target="_blank"
          rel="noreferrer"
        >
          kean.edu faculty directory
        </a>
        . Corrections welcome via the contact page.
      </p>
    </div>
  );
}
