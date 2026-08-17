import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gold/15">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            Research commons for the {site.department} at {site.university} —{" "}
            {site.college}.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Official Kean
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={site.links.phd}
                className="hover:text-gold"
                target="_blank"
                rel="noreferrer"
              >
                Computer Science Ph.D.
              </a>
            </li>
            <li>
              <a
                href={site.links.department}
                className="hover:text-gold"
                target="_blank"
                rel="noreferrer"
              >
                CST department
              </a>
            </li>
            <li>
              <a
                href={site.links.faculty}
                className="hover:text-gold"
                target="_blank"
                rel="noreferrer"
              >
                Faculty directory
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-5 text-muted">
            This portal is a lab research site. Admissions, policy, and
            assistantship decisions are made by the university — not by this
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
