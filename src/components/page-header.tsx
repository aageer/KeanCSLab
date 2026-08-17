export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="reveal border-b border-line pb-12">
      <p className="text-[11px] uppercase tracking-[0.28em] text-accent">{kicker}</p>
      <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{lede}</p>
    </header>
  );
}
