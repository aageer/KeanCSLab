import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNews, news } from "@/lib/data/news";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return { title: "News" };
  return { title: item.title, description: item.dek };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-mono text-xs text-gold">{item.date}</p>
      <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
        {item.title}
      </h1>
      <p className="mt-6 text-xl leading-8 text-muted">{item.dek}</p>
      <div className="mt-10 space-y-6 text-base leading-8">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {item.href ? (
        <p className="mt-10">
          <a href={item.href} className="text-gold" target="_blank" rel="noreferrer">
            {item.hrefLabel ?? "Source"} ↗
          </a>
        </p>
      ) : null}
      <p className="mt-14">
        <Link href="/news" className="text-sm text-gold">
          ← All news
        </Link>
      </p>
    </article>
  );
}
