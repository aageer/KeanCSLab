import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 sm:px-6">
      <p className="font-mono text-xs text-gold">404</p>
      <h1 className="mt-4 font-display text-5xl">Page not found</h1>
      <p className="mt-4 text-muted">
        This address is not part of SOTA. Return home or open Research.
      </p>
      <div className="mt-8 flex gap-4 text-sm">
        <Link href="/" className="text-gold">
          Home
        </Link>
        <Link href="/research" className="text-gold">
          Research
        </Link>
      </div>
    </div>
  );
}
