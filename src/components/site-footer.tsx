import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-accent">{site.university}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            Research laboratory of the {site.department}.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
            Official Kean
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={site.links.phd}
                className="inline-flex min-h-11 items-center hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                Computer Science Ph.D.
              </a>
            </li>
            <li>
              <a
                href={site.links.department}
                className="inline-flex min-h-11 items-center hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                CST department
              </a>
            </li>
            <li>
              <a
                href={site.links.faculty}
                className="inline-flex min-h-11 items-center hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                Faculty directory
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-5 text-muted">
            This is a laboratory research site. Admissions, policy, and
            assistantship decisions are made by the university, not by this
            website.
          </p>
        </div>
      </div>
      <div className="hairline" />
      <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted sm:px-6">
        {site.location} · {site.address}
      </p>
    </footer>
  );
}
