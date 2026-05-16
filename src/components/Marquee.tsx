export function Marquee({ items }: { items: string[] }) {
  const all = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border py-8 bg-obsidian">
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((t, i) => (
          <span key={i} className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mx-8 flex items-center gap-8">
            <span className={i % 2 === 0 ? "text-foreground" : "italic font-serif font-medium text-gradient"}>{t}</span>
            <span className="size-2 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
