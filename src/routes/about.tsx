import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import work3 from "@/assets/work-3.jpg";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { awards } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — SETAL" },
      { name: "description", content: "An independent design studio headquartered in Lagos with offices in Ekpoma and Manchester (soon), serving brands across Africa, Europe, the Americas, Asia and Oceania." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Setal Amari", role: "Founder, Creative Director", img: portrait },
  { name: "Yuna Sato", role: "Design Lead", img: work3 },
];

function AboutPage() {
  return (
    <>
      <section className="pt-44 pb-20 px-6 sm:px-10">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8 animate-reveal">[ The Studio ]</p>
          <h1 className="font-display text-6xl md:text-[10rem] font-extrabold tracking-tighter leading-[0.82] animate-reveal" style={{ animationDelay: "0.1s" }}>
            We are seven.<br />
            <span className="italic font-serif font-medium text-gradient">Working slowly.</span><br />
            On purpose.
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Manifesto / 01</p>
          </div>
          <Reveal className="md:col-span-8 space-y-6">
            <p className="font-serif italic text-3xl md:text-5xl leading-tight text-balance">
              &ldquo;The web has become a sea of sameness. Identical hero sections, identical fonts, identical promises. We exist to design the exceptions.&rdquo;
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              SETAL was founded in Lagos with a single conviction: that the most valuable brands of the next decade would be the ones that look and feel like nothing else. Today the studio operates from Lagos and Ekpoma, with a Manchester (UK) office opening soon — serving clients across five continents.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex justify-between items-end mb-16">
              <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter">The hands.</h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">7 / Permanent staff</span>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="group">
                  <div className="relative overflow-hidden rounded-md aspect-[4/5] bg-card border border-border">
                    <img src={m.img} alt={m.name} width={1000} height={1300} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute bottom-0 p-8">
                      <h3 className="font-display text-3xl font-extrabold">{m.name}</h3>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-accent mt-2">{m.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-32 px-6 sm:px-10 border-t border-border bg-obsidian/40">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-3 gap-12">
          {[
            { v: 2019, label: "Founded in Paris", suffix: "" },
            { v: 14, label: "Countries shipped to", suffix: "" },
            { v: 12, label: "Projects per year, by choice", suffix: "" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="font-display text-7xl md:text-8xl font-extrabold tracking-tighter text-gradient">
                <Counter to={s.v} suffix={s.suffix} duration={1800} />
              </p>
              <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="py-32 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ Recognition ]</p>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mb-16">
              Quietly <span className="italic font-serif font-medium text-gradient">decorated</span>.
            </h2>
          </Reveal>
          <div className="space-y-px">
            {awards.map((a, i) => (
              <Reveal key={i} delay={i * 30}>
                <div className="grid grid-cols-12 gap-4 items-center py-5 border-t border-border group hover:border-accent transition-colors">
                  <span className="col-span-2 md:col-span-1 font-mono text-sm text-gold">{a.year}</span>
                  <h3 className="col-span-6 md:col-span-5 font-serif italic text-xl md:text-2xl group-hover:text-gradient transition-all">{a.title}</h3>
                  <span className="col-span-4 md:col-span-3 text-sm text-foreground/70">{a.org}</span>
                  <span className="hidden md:block md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground text-right">{a.project}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
