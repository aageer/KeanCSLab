"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { researchAreas } from "@/lib/data/research";

export function ResearchExplorer() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState("all");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return researchAreas.filter((area) => {
      const matchesFocus = focus === "all" || area.slug === focus;
      const haystack = [
        area.title,
        area.short,
        area.lede,
        area.statement,
        ...area.questions,
        ...area.methods.map((method) => method.name),
      ]
        .join(" ")
        .toLowerCase();
      return matchesFocus && (!needle || haystack.includes(needle));
    });
  }, [focus, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 border border-gold/20 bg-card/40 p-4 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search research programs</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gold" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search methods, questions, datasets…"
            className="w-full rounded-none border border-gold/20 bg-background py-2.5 pr-3 pl-10 text-sm outline-none focus:border-gold"
          />
        </label>
        <label className="text-sm">
          <span className="sr-only">Filter by program</span>
          <select
            value={focus}
            onChange={(event) => setFocus(event.target.value)}
            className="w-full border border-gold/20 bg-background px-3 py-2.5 text-sm outline-none focus:border-gold sm:w-64"
          >
            <option value="all">All programs</option>
            {researchAreas.map((area) => (
              <option key={area.slug} value={area.slug}>
                {area.index} · {area.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="mt-4 text-xs tracking-wide text-muted" aria-live="polite">
        {filtered.length} program{filtered.length === 1 ? "" : "s"}
      </p>
      <ol className="mt-8 space-y-8">
        {filtered.map((area) => (
          <li
            key={area.slug}
            className="group border-t border-gold/15 pt-8 first:border-t-0 first:pt-0"
          >
            <Link href={`/research/${area.slug}`} className="block">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <p className="font-mono text-xs text-gold">{area.index}</p>
                <div className="max-w-3xl">
                  <h2 className="font-display text-3xl group-hover:text-gold">
                    {area.title}
                  </h2>
                  <p className="mt-3 text-muted">{area.short}</p>
                  <p className="mt-4 max-w-2xl leading-7">{area.lede}</p>
                  <p className="mt-5 text-sm text-gold">Open the program →</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
