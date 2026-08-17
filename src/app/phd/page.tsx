import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { researchAreas } from "@/lib/data/research";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ph.D. Program",
  description:
    "Computer Science Ph.D. at Kean University — founding cohort for Fall 2026.",
};

export default function PhdPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        kicker="Ph.D. Program"
        title="Doctoral study"
        lede="Applications open Fall 2025 for enrollment in Fall 2026. This page restates what Kean has published. It is not the application. The founding cohort has not yet enrolled; no student roster is listed."
      />

      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        <div className="panel p-5 sm:p-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
            Published timeline
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt>Applications open</dt>
              <dd>Fall 2025</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt>Enrollment</dt>
              <dd>Fall 2026</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt>Fall deadline</dt>
              <dd>{site.admissions.fallDeadline}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Spring deadline</dt>
              <dd>{site.admissions.springDeadline}</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs leading-5 text-muted">
            Dates are copied from the public program page. Confirm them on
            kean.edu before you plan around them.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl">What the university says you learn</h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-muted">
            <li>Research methods and theoretical frameworks on hard computing problems</li>
            <li>Machine learning, artificial intelligence, and large-scale data</li>
            <li>Cybersecurity, high-performance computing, and software engineering</li>
            <li>Ethical and societal questions in advanced computing</li>
            <li>Faculty-collaborative interdisciplinary research</li>
            <li>Writing, publication, and a defended original dissertation</li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Current students</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted">
          The founding cohort has not enrolled. We will not populate this
          section with placeholder doctoral students. When the first students
          arrive and choose to be listed, they will appear here with their
          actual tracks.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">How to write a useful first email</h2>
        <ol className="mt-8 space-y-5">
          {[
            "Read one research program page and one faculty page.",
            "Name a question on that page you can already sharpen.",
            "Attach a CV and a writing sample or paper — not a generic statement of purpose dump.",
            "Email the faculty member and copy the coordinator if you want a program-level reply.",
          ].map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Programs that take students</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {researchAreas.map((area) => (
            <li key={area.slug}>
              <Link href={`/research/${area.slug}`} className="text-accent">
                {area.index} · {area.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel mt-16 p-5 sm:p-8">
        <h2 className="font-display text-3xl">Apply / contact</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted">
          Official application and eligibility live with Graduate Admissions.
          The program page currently says more detail on admissions,
          eligibility, and assistantships will be available soon.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-sm">
          <a href={site.links.phd} className="text-accent" target="_blank" rel="noreferrer">
            Official Ph.D. page ↗
          </a>
          <a href={`mailto:${site.admissions.email}`} className="text-accent">
            {site.admissions.email}
          </a>
          <a href={`mailto:${site.coordinator.email}`} className="text-accent">
            Coordinator · {site.coordinator.email}
          </a>
          <Link href="/contact" className="text-accent">
            Contact the laboratory →
          </Link>
        </div>
      </section>
    </div>
  );
}
