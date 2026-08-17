import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PublicationExplorer } from "@/components/publication-explorer";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Selected public faculty publications from Kean Computer Science research profiles and venues.",
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        kicker="Publications"
        title="A curated public record — not a complete bibliography."
        lede="Titles and links are taken from public Kean researcher profiles, ORCID, and venue pages. Filter by program or year. If a citation is incomplete, follow the outbound link."
      />
      <div className="mt-14">
        <PublicationExplorer />
      </div>
    </div>
  );
}
