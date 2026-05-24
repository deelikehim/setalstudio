import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — SETAL Studio" },
      { name: "description", content: "A selected archive of SETAL Studio's work for premium brands across fashion, hospitality, real estate, and beyond." },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

const filters = ["All", "Identity", "Website", "WebGL", "E-commerce"];

function WorkPage() {
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  const ProjectCard = ({ p, i }: { p: typeof projects[0]; i: number }) => {
    const imageBlock = (
      <div className="relative overflow-hidden rounded-md border border-border bg-card aspect-[4/5]">
        <img src={p.image} alt={p.client} width={1200} height={1500} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 size-10 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
          {p.url ? (
            <svg viewBox="0 0 20 20" className="size-4"><path d="M4.5 4.5h4m-4 0v4m0-4l6 6m3-2a3 3 0 11-6 0 3 3 0 016 0z" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          ) : (
            <svg viewBox="0 0 20 20" className="size-4"><path d="M4 10h12m-4-4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          )}
        </div>
        {p.url && (
          <span className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-accent">Live preview</span>
        )}
        {p.award && (
          <span className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-accent">★ {p.award}</span>
        )}
      </div>
    );

    const metaBlock = (
      <div className="mt-6 flex justify-between items-start">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">{p.category}</p>
          <h3 className="font-display text-3xl font-extrabold tracking-tight">{p.client}</h3>
          <p className="font-serif italic text-lg text-foreground/70 mt-1">{p.title}</p>
        </div>
        <span className="font-mono text-xs text-gold">{p.year}</span>
      </div>
    );

    const body = (
      <>
        {imageBlock}
        {metaBlock}
      </>
    );

    return p.url ? (
      <a href={p.url} target="_blank" rel="noopener noreferrer" className={`group block ${i % 3 === 1 ? "md:mt-24" : ""}`}>
        {body}
      </a>
    ) : (
      <article className={`group ${i % 3 === 1 ? "md:mt-24" : ""}`}>
        {body}
      </article>
    );
  };

  return (
    <>
      <section className="pt-44 pb-16 px-6 sm:px-10">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8 animate-reveal">
            [ Archive ] / {projects.length} projects / 2019&mdash;2026
          </p>
          <h1 className="font-display text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] mb-8 animate-reveal" style={{ animationDelay: "0.1s" }}>
            Every project is a <span className="italic font-serif font-medium text-gradient">small monument</span>.
          </h1>
          <p className="max-w-2xl text-lg text-foreground/70 animate-reveal" style={{ animationDelay: "0.2s" }}>
            Selected work across identity, web, and interactive. Click any project to read the case study, see the metrics, and watch the launch reel. Projects marked <span className="text-accent">Live preview</span> open the shipped website.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="px-6 sm:px-10 mb-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-6 border-y border-border py-5">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                  filter === f ? "bg-gradient-chromatic text-background" : "border border-border hover:border-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase">
            <span className="text-muted-foreground mr-2">View:</span>
            {(["grid", "list"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1.5 rounded-full transition-all ${view === v ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 sm:px-10 pb-32">
        <div className="max-w-[1600px] mx-auto">
          {view === "grid" ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <ProjectCard p={p} i={i} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="space-y-px">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={i * 40}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-12 gap-4 items-center py-8 border-t border-border hover:bg-card transition-colors px-4 -mx-4 rounded-md">
                    <span className="col-span-1 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="col-span-5 md:col-span-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight group-hover:text-gradient transition-all">{p.client}</h3>
                    <p className="hidden md:block col-span-4 font-serif italic text-foreground/70">{p.title}</p>
                    <span className="col-span-4 md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.category}</span>
                    <span className="col-span-2 md:col-span-1 text-right font-mono text-sm text-gold">{p.year}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
