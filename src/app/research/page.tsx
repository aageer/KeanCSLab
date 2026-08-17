import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ResearchExplorer } from "@/components/research-explorer";

export const metadata: Metadata = {
  title: "SOTA Research portal",
  description:
    "Current research programs at Kean CS Lab — questions, methods, datasets, benchmarks, and faculty.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        kicker="SOTA Research"
        title="The portal: programs you can actually enter."
        lede="Six research programs with questions, methods, datasets, and the faculty who work there. Read one all the way through before you write."
      />
      <div className="mt-14">
        <ResearchExplorer />
      </div>
    </div>
  );
}
