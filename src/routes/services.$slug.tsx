import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services, contactInfo, type Service } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — SETAL Studio` },
          { name: "description", content: loaderData.service.desc },
          { property: "og:title", content: `${loaderData.service.title} — SETAL Studio` },
          { property: "og:description", content: loaderData.service.desc },
          { property: "og:image", content: loaderData.service.hero },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="pt-44 px-6 sm:px-10 max-w-3xl mx-auto text-center">
      <h1 className="font-display text-5xl font-extrabold mb-4">Service not found</h1>
      <Link to="/services" className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        ← Back to services
      </Link>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 sm:px-10">
        <div className="max-w-[1600px] mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8 hover:text-foreground transition-colors">
            <svg viewBox="0 0 20 20" className="size-3 rotate-180"><path d="M4 10h12m-4-4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            All services
          </Link>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">[ {service.no} · Service ]</p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.85] mb-6">
                {service.title}
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl text-gradient max-w-xl">{service.tagline}</p>
            </div>
            <div className="lg:col-span-5 lg:pl-10">
              <p className="text-foreground/70 leading-relaxed mb-6">{service.detail}</p>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 pb-4 border-b border-border">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Starting from</span>
                <span className="font-display text-3xl font-extrabold text-gradient">₦{service.ngn}</span>
                <span className="font-mono text-sm text-foreground/70">≈ £{service.gbp}</span>
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{service.timeline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 sm:px-10 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <div className="relative aspect-[16/9] rounded-md overflow-hidden border border-border">
              <img src={service.hero} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 sm:px-10 border-t border-border bg-obsidian/40">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ Why it works ]</p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter mb-16 max-w-3xl">
              What you actually <span className="italic font-serif font-medium text-gradient">get</span>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="p-8 bg-background h-full">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight mb-3">{b.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 sm:px-10">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ In production ]</p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter mb-12 max-w-3xl">
              Recent <span className="italic font-serif font-medium text-gradient">examples</span>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {service.gallery.map((img, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`relative overflow-hidden rounded-md border border-border ${i === 0 ? "aspect-[4/5]" : "aspect-square"} group`}>
                  <img src={img} alt={`${service.title} example ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 sm:px-10 border-t border-border bg-obsidian/40">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ Process ]</p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter mb-16 max-w-3xl">
              How we <span className="italic font-serif font-medium text-gradient">ship it</span>.
            </h2>
          </Reveal>
          <div className="space-y-px">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 60}>
                <div className="grid md:grid-cols-12 gap-6 py-8 border-t border-border">
                  <span className="md:col-span-1 font-mono text-xs text-accent">{p.step}</span>
                  <h3 className="md:col-span-4 font-display text-2xl md:text-3xl font-extrabold tracking-tight">{p.title}</h3>
                  <p className="md:col-span-7 text-foreground/70 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for + deliverables */}
      <section className="py-24 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ Ideal for ]</p>
            <ul className="space-y-3">
              {service.idealFor.map((it) => (
                <li key={it} className="flex items-center gap-3 font-display text-xl">
                  <span className="size-2 rounded-full bg-gradient-chromatic" />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ Deliverables ]</p>
            <ul className="space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3 font-display text-xl">
                  <svg viewBox="0 0 16 16" className="size-4 text-accent shrink-0"><path d="M3 8l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Service FAQ */}
      {service.faqs.length > 0 && (
        <section className="py-24 px-6 sm:px-10 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ Questions ]</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter mb-12">
                Things people <span className="italic font-serif font-medium text-gradient">ask</span>.
              </h2>
            </Reveal>
            <div className="space-y-6">
              {service.faqs.map((f, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-display text-xl font-extrabold mb-3">{f.q}</h3>
                    <p className="text-foreground/70 leading-relaxed">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1200px] mx-auto rounded-lg border-chromatic p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-chromatic opacity-10" />
          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">[ Start your {service.title.toLowerCase()} project ]</p>
            <h2 className="font-display text-4xl md:text-7xl font-extrabold tracking-tighter mb-6">
              Let's build <span className="italic font-serif font-medium text-gradient">yours</span>.
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto mb-10">Send a brief or book a 20-minute discovery call. We respond within 48 hours.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                search={{ tier: service.title } as never}
                className="group relative overflow-hidden rounded-full bg-foreground text-background px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] shadow-luxe hover:shadow-glow transition-shadow"
              >
                <span className="relative z-10">Send a brief</span>
                <span className="absolute inset-0 bg-gradient-chromatic translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <a
                href={contactInfo.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border hover:border-accent px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] transition-colors"
              >
                Book a 20-min call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-24 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-10">[ Explore more services ]</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="group p-8 rounded-md border border-border hover:border-accent hover:bg-card transition-all"
              >
                <p className="font-mono text-xs text-accent mb-3">{o.no}</p>
                <h3 className="font-display text-2xl font-extrabold mb-2 group-hover:text-gradient transition-all">{o.title}</h3>
                <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{o.desc}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">From ₦{o.ngn} · {o.timeline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
