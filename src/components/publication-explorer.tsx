"use client";

import { useMemo, useState } from "react";
import { publications } from "@/lib/data/publications";
import { researchAreas } from "@/lib/data/research";

export function PublicationExplorer() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("all");
  const [year, setYear] = useState("all");

  const years = useMemo(
    () => Array.from(new Set(publications.map((item) => item.year))).sort((a, b) => b - a),
    [],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return publications
      .filter((item) => {
        const matchesArea = area === "all" || item.researchIds.includes(area);
        const matchesYear = year === "all" || String(item.year) === year;
        const haystack = `${item.title} ${item.authors} ${item.venue}`.toLowerCase();
        return matchesArea && matchesYear && (!needle || haystack.includes(needle));
      })
      .sort((a, b) => b.year - a.year);
  }, [area, query, year]);

  return (
    <div>
      <div className="grid gap-3 border border-line bg-card p-3 sm:p-4 md:grid-cols-3">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search title, author, venue"
          className="field"
          aria-label="Search publications"
        />
        <select
          value={area}
          onChange={(event) => setArea(event.target.value)}
          className="field"
          aria-label="Filter by research area"
        >
          <option value="all">All research areas</option>
          {researchAreas.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={(event) => setYear(event.target.value)}
          className="field"
          aria-label="Filter by year"
        >
          <option value="all">All years</option>
          {years.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <p className="mt-4 text-xs text-muted" aria-live="polite">
        {filtered.length} selected public records
      </p>
      <ol className="mt-8 divide-y divide-line">
        {filtered.map((item) => (
          <li key={item.id} className="py-6">
            <p className="font-mono text-xs text-accent">
              {item.year} · {item.type}
            </p>
            <h2 className="mt-2 max-w-4xl font-display text-2xl leading-snug">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">{item.authors}</p>
            <p className="mt-1 text-sm italic">{item.venue}</p>
            {item.note ? (
              <p className="mt-2 text-xs text-muted">{item.note}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
