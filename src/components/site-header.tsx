"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-background/80 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-gold focus:px-3 focus:py-2 focus:text-navy-deep"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex flex-col justify-center leading-none">
          <span className="font-display text-[1.35rem] tracking-tight text-foreground">
            {site.name}
          </span>
          <span className="mt-1 hidden text-[10px] uppercase tracking-[0.22em] text-gold sm:inline">
            {site.university}
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-gold",
                  active ? "text-gold" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-gold/30 text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-gold/15 px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-base text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
