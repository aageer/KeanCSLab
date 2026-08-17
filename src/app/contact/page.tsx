import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Kean CS Lab coordinator or Kean Graduate Admissions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        kicker="Contact"
        title="Contact"
        lede="Write after you have read a research area page. The form opens mail to the Ph.D. coordinator. Admissions questions should also go to Graduate Admissions."
      />
      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <ContactForm />
        <aside className="space-y-6 text-sm leading-7">
          <div className="border border-gold/20 p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Coordinator
            </p>
            <p className="mt-3 font-display text-2xl">{site.coordinator.name}</p>
            <p className="mt-2">
              <a href={`mailto:${site.coordinator.email}`} className="text-gold">
                {site.coordinator.email}
              </a>
            </p>
            <p>{site.coordinator.phone}</p>
          </div>
          <div className="border border-gold/20 p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Graduate Admissions
            </p>
            <p className="mt-3">
              <a href={`mailto:${site.admissions.email}`} className="text-gold">
                {site.admissions.email}
              </a>
            </p>
            <p>{site.admissions.phone}</p>
          </div>
          <p className="text-muted">
            {site.department}
            <br />
            {site.address}
          </p>
        </aside>
      </div>
    </div>
  );
}
