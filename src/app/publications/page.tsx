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
        title="Publications"
        lede="A selected public record, not a complete bibliography. Titles and links are taken from public Kean researcher profiles, ORCID, and venue pages."
      />
      <div className="mt-14">
        <PublicationExplorer />
      </div>
    </div>
  );
}
