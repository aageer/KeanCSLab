import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ResearchExplorer } from "@/components/research-explorer";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research areas at the Computer Science Laboratory, Kean University — questions, methods, datasets, benchmarks, and faculty.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        kicker="Research"
        title="Research"
        lede="Six research areas with questions, methods, datasets, and the faculty who work in them. Read one area in full before writing to the laboratory."
      />
      <div className="mt-14">
        <ResearchExplorer />
      </div>
    </div>
  );
}
