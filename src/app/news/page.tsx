import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { news } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "News from Kean CS Lab at Kean University.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        kicker="News"
        title="News"
        lede="Public updates from the laboratory, grounded in university pages. This is not a university press office."
      />
      <ol className="mt-14 divide-y divide-line">
        {news.map((item) => (
          <li key={item.slug} className="py-8">
            <p className="font-mono text-xs text-accent">{item.date}</p>
            <h2 className="mt-2 font-display text-3xl">
              <Link href={`/news/${item.slug}`} className="hover:text-accent">
                {item.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-muted">{item.dek}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
