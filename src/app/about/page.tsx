import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the lab",
  description:
    "What Kean CS Lab is — and is not — inside the Department of Computer Science and Technology.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        kicker="About"
        title="A research commons, not a second university homepage."
        lede="Kean CS Lab is the public face of doctoral research in the Department of Computer Science and Technology: programs, people, methods, and papers in one place."
      />
      <div className="mt-16 grid gap-14 lg:grid-cols-12">
        <article className="space-y-6 text-base leading-8 lg:col-span-7">
          <p>
            Kean University is in Union, New Jersey, in the New York metro.
            The department sits in the {site.college} and offers undergraduate
            programs in computer science and information technology, with
            options that include cybersecurity, data science, and information
            systems — plus graduate study, including a Computer Science Ph.D.
          </p>
          <p>
            The public Ph.D. page describes Kean as New Jersey’s urban research
            university and a national R2 institution expanding its graduate
            research enterprise. Applications open in Fall 2025 for enrollment
            in Fall 2026. That timeline is why this portal exists now: so the
            first cohort can see the work before they apply.
          </p>
          <p>
            Faculty listed here are taken from the public departmental
            directory. Research notes paraphrase public area listings and
            public researcher profiles. Selected publications link out to those
            records. If a page on kean.edu disagrees with this site, believe
            kean.edu.
          </p>
          <p>
            We will not invent official admissions criteria, assistantship
            amounts, or legal claims. When the university says details are
            “available soon,” we repeat that sentence.
          </p>
        </article>
        <aside className="space-y-8 lg:col-span-5">
          <div className="border border-gold/20 p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Facts we can stand on
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Department</dt>
                <dd>{site.department}</dd>
              </div>
              <div>
                <dt className="text-muted">College</dt>
                <dd>{site.college}</dd>
              </div>
              <div>
                <dt className="text-muted">Campus</dt>
                <dd>{site.address}</dd>
              </div>
              <div>
                <dt className="text-muted">Ph.D. coordinator</dt>
                <dd>
                  {site.coordinator.name}
                  <br />
                  {site.coordinator.email}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/people" className="text-gold">
              People →
            </Link>
            <Link href="/research" className="text-gold">
              Research portal →
            </Link>
            <a href={site.links.department} className="text-gold" target="_blank" rel="noreferrer">
              Official department page ↗
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
