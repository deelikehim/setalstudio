import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Footer() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const t = setInterval(() => setNow(new Date().toISOString().slice(0, 19).replace("T", " ")), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-border bg-obsidian">
      <div className="absolute inset-0 bg-radial-aura opacity-50" />
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
              [ Inquiry &mdash; Limited Slots 2026 ]
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              Let&rsquo;s build something{" "}
              <span className="italic font-serif font-medium text-gradient">unforgettable</span>.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-serif italic text-2xl text-gradient">hello@setal.studio</span>
              <span className="size-8 rounded-full border border-border grid place-items-center group-hover:bg-gradient-chromatic group-hover:border-transparent transition-all">
                <svg viewBox="0 0 20 20" className="size-3"><path d="M4 10h12m-4-4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <FooterCol title="Navigate" items={[
              { l: "Index", to: "/" }, { l: "Work", to: "/work" },
              { l: "Services", to: "/services" }, { l: "Studio", to: "/about" },
              { l: "Contact", to: "/contact" },
            ]} />
            <FooterCol title="Studio" items={[
              { l: "Manifesto" }, { l: "Process" }, { l: "Press kit" }, { l: "Awards" },
            ]} />
            <FooterCol title="Social" items={[
              { l: "Instagram" }, { l: "Dribbble" }, { l: "Behance" }, { l: "LinkedIn" }, { l: "Are.na" },
            ]} />
            <FooterCol title="Studios" items={[
              { l: "Paris" }, { l: "Lisbon" }, { l: "Tokyo" }, { l: "Remote" },
            ]} />
          </div>
        </div>

        <div className="relative">
          <h3 className="font-display font-extrabold text-[18vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-chromatic opacity-30 select-none">
            SETAL
          </h3>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>&copy; 2026 SETAL Studio &mdash; Designed in Paris, deployed everywhere</span>
          <span className="text-accent">{now} UTC</span>
          <span>v4.2.1 / All systems operational</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; to?: string }[] }) {
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{title}</p>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.l}>
            {it.to ? (
              <Link to={it.to} className="text-sm hover:text-accent transition-colors">{it.l}</Link>
            ) : (
              <a href="#" className="text-sm hover:text-accent transition-colors">{it.l}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
