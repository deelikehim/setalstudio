import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { projects, clients, stats, testimonials, awards, processSteps } from "@/lib/content";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SETAL Studio — Independent design studio for ambitious brands" },
      { name: "description", content: "We design identities, websites and interactive experiences for premium brands. Paris-based, working worldwide." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const avatars = [avatar1, avatar2, avatar3];

function HomePage() {
  const [activeTest, setActiveTest] = useState(0);

  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-12 px-6 sm:px-10 overflow-hidden">
        <img
          src={heroImg}
          alt="Iridescent liquid metal sculpture"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-scan" />

        <div className="relative max-w-[1600px] mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 animate-reveal">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Currently booking Q2 — Q3 2026
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[clamp(3.5rem,11vw,11rem)] leading-[0.82] tracking-tighter animate-reveal" style={{ animationDelay: "0.15s" }}>
            We design the<br />
            <span className="italic font-serif font-medium text-gradient">internet&rsquo;s</span> most<br />
            coveted brands.
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end animate-reveal" style={{ animationDelay: "0.3s" }}>
            <p className="md:col-span-5 text-lg md:text-xl text-foreground/70 max-w-md leading-relaxed">
              SETAL is an independent studio of seven designers, engineers and strategists. We build identities, websites and interactive experiences for brands that refuse to look like everyone else.
            </p>
            <div className="md:col-span-4 md:col-start-8 flex flex-col gap-4">
              <Link
                to="/work"
                className="group relative overflow-hidden rounded-full bg-gradient-chromatic p-px shadow-luxe self-start"
              >
                <span className="flex items-center gap-3 px-7 py-4 bg-background rounded-full text-sm uppercase tracking-[0.2em] font-semibold group-hover:bg-transparent transition-colors">
                  View selected work
                  <svg viewBox="0 0 20 20" className="size-4"><path d="M4 10h12m-4-4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                </span>
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {avatars.map((a, i) => (
                    <img key={i} src={a} alt="" className="size-8 rounded-full border-2 border-background object-cover" loading="lazy" width={32} height={32} />
                  ))}
                </div>
                <p className="font-mono text-xs text-muted-foreground">47 brands trust SETAL</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>↓ Scroll</span>
          <span className="flex-1 h-px bg-border" />
          <span>Index / 2026</span>
        </div>
      </section>

      {/* ─────────── MARQUEE ─────────── */}
      <Marquee items={["Strategy", "Identity", "Websites", "Interactive", "Motion", "Engineering"]} />

      {/* ─────────── STATS ─────────── */}
      <section className="py-32 px-6 sm:px-10">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="border-t border-border pt-6">
                <p className="font-display text-6xl md:text-7xl font-extrabold tracking-tighter text-gradient">
                  {s.prefix}<Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-sm text-muted-foreground uppercase tracking-widest">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────── FEATURED WORK ─────────── */}
      <section className="py-24 px-6 sm:px-10">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ 01 ] Selected Work</p>
                <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter">
                  Six recent <span className="italic font-serif font-medium">obsessions</span>.
                </h2>
              </div>
              <Link to="/work" className="font-mono text-xs uppercase tracking-[0.3em] border-b border-border hover:border-accent pb-2 hover:text-accent transition-colors self-start">
                View archive →
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className={p.span}>
                <Link to="/work" className="group block">
                  <div className="relative overflow-hidden rounded-md border border-border bg-card aspect-[4/5]">
                    <img
                      src={p.image}
                      alt={p.client}
                      width={1200}
                      height={1500}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    {p.award && (
                      <span className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-accent">
                        ★ {p.award}
                      </span>
                    )}
                    <div className="absolute bottom-0 inset-x-0 p-6 flex justify-between items-end">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent mb-2">{p.category}</p>
                        <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{p.client}</h3>
                        <p className="font-serif italic text-foreground/70">{p.title}</p>
                      </div>
                      <span className="text-gold font-mono text-xs">{p.year}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── METHOD ─────────── */}
      <section className="py-32 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ 02 ] Method</p>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              A practice, not a <span className="italic font-serif font-medium text-gradient">process</span>.
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Six phases. Sixteen weeks. One conviction: the brands that endure are the ones designed slowly, deliberately, and at the absolute edge of craft.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-px">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 60}>
                <div className="group grid grid-cols-12 gap-6 items-baseline py-8 border-t border-border hover:border-accent transition-colors">
                  <span className="col-span-2 font-mono text-xs text-muted-foreground group-hover:text-accent transition-colors">{step.no}</span>
                  <h3 className="col-span-4 font-display text-3xl md:text-4xl font-extrabold tracking-tight">{step.title}</h3>
                  <p className="col-span-12 md:col-span-6 text-foreground/70 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CLIENT WALL ─────────── */}
      <section className="py-24 px-6 sm:px-10 border-t border-border bg-obsidian/50">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-12 text-center">
              [ 03 ] In Confidence
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-border">
            {clients.map((c) => (
              <div key={c} className="aspect-[3/2] bg-background flex items-center justify-center group hover:bg-card transition-colors">
                <span className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-foreground/40 group-hover:text-gradient transition-all">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIAL ─────────── */}
      <section className="py-32 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
              [ 04 ] On the Record
            </p>
            <div className="relative min-h-[20rem]">
              {testimonials.map((t, i) => (
                <blockquote
                  key={t.name}
                  className={`absolute inset-0 transition-all duration-700 ${i === activeTest ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
                >
                  <p className="font-serif italic text-3xl md:text-5xl leading-tight text-balance" dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }} />
                  <div className="mt-10 flex items-center justify-center gap-4">
                    <img src={avatars[i]} alt={t.name} className="size-12 rounded-full object-cover" loading="lazy" width={48} height={48} />
                    <div className="text-left">
                      <p className="font-display text-lg font-extrabold">{t.name}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
            <div className="mt-12 flex justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTest(i)}
                  className={`h-1 transition-all ${i === activeTest ? "w-12 bg-gradient-chromatic" : "w-6 bg-border"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── AWARDS STRIP ─────────── */}
      <section className="py-24 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter">
                Awards, in passing.
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {awards.length} / Selected
              </span>
            </div>
          </Reveal>
          <div className="space-y-px">
            {awards.slice(0, 6).map((a, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="grid grid-cols-12 gap-4 items-center py-6 border-t border-border group">
                  <span className="col-span-2 md:col-span-1 font-mono text-sm text-gold">{a.year}</span>
                  <h3 className="col-span-6 md:col-span-5 font-serif italic text-xl md:text-2xl">{a.title}</h3>
                  <span className="col-span-4 md:col-span-3 text-sm text-foreground/70">{a.org}</span>
                  <span className="hidden md:block md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground text-right">{a.project}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PORTRAIT CTA ─────────── */}
      <section className="py-32 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-chromatic blur-3xl opacity-30" />
              <img
                src={portrait}
                alt="Studio founder"
                width={1000}
                height={1300}
                loading="lazy"
                className="relative w-full aspect-[4/5] object-cover rounded-md border border-border"
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">[ 05 ] The Founder</p>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
              Designed by hand.<br />
              <span className="italic font-serif font-medium text-gradient">Engineered with intent.</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-10 max-w-xl">
              SETAL is a deliberately small studio. We take on twelve projects a year &mdash; never more. Every engagement involves the founder directly, from the first sketch to the final pixel that ships.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 group">
              <span className="font-serif italic text-2xl text-gradient">Meet the studio</span>
              <span className="size-10 rounded-full border border-border grid place-items-center group-hover:bg-gradient-chromatic group-hover:border-transparent transition-all">
                <svg viewBox="0 0 20 20" className="size-3"><path d="M4 10h12m-4-4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
