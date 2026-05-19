import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { services, faqs } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — SETAL Studio" },
      { name: "description", content: "Brand identity, websites, interactive experiences, and ongoing art direction. Bespoke engagements for premium brands." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const tiers = [
  { name: "Launch", ngn: "80,000", gbp: "45", period: "Landing page · from", desc: "A single, high-impact landing page for product launches, campaigns and lead capture. Shipped in 1–2 weeks.", includes: ["Custom landing page", "Mobile-first design", "Contact / lead form", "Basic SEO & analytics", "1 round of revisions"], featured: false },
  { name: "Signature", ngn: "250,000", gbp: "130", period: "Full website · from", desc: "Our flagship engagement. A complete multi-page website with motion, CMS and engineering done in-studio.", includes: ["Up to 10 bespoke pages", "CMS so you can edit content", "Custom motion & micro-interactions", "On-page SEO + performance", "3 months post-launch care"], featured: true },
  { name: "Platform", ngn: "500,000", gbp: "270", period: "Web app / shop · from", desc: "Web apps, dashboards and e-commerce stores with secure payments, accounts and admin tools.", includes: ["User auth & accounts", "Database & admin panel", "Payments & checkout", "Third-party integrations", "6 months priority support"], featured: false },
  { name: "Mobile", ngn: "900,000", gbp: "480", period: "iOS + Android · from", desc: "Cross-platform mobile apps that feel native. From MVP to App Store and Play Store launch.", includes: ["iOS + Android build", "Push notifications", "Offline-friendly UX", "Store submission", "Ongoing version updates"], featured: false },
];



function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="pt-44 pb-20 px-6 sm:px-10">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8 animate-reveal">[ Capabilities ]</p>
          <h1 className="font-display text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] animate-reveal" style={{ animationDelay: "0.1s" }}>
            What we do<br />
            <span className="italic font-serif font-medium text-gradient">extraordinarily well</span>.
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 sm:px-10 pb-32">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.no} delay={i * 60}>
              <div className="p-10 md:p-12 bg-background h-full group hover:bg-card transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs text-accent">{s.no}</span>
                  <span className="size-10 rounded-full border border-border grid place-items-center group-hover:bg-gradient-chromatic group-hover:border-transparent transition-all">
                    <svg viewBox="0 0 20 20" className="size-3"><path d="M4 10h12m-4-4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{s.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-8 max-w-md">{s.desc}</p>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      <span className="size-1 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 sm:px-10 border-t border-border bg-obsidian/40">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ Engagements ]</p>
              <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter">
                Three ways to <span className="italic font-serif font-medium text-gradient">work together</span>.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className={`relative h-full p-8 rounded-md overflow-hidden ${t.featured ? "border-chromatic shadow-luxe" : "border border-border bg-card"}`}>
                  {t.featured && (
                    <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-widest text-accent">★ Most chosen</span>
                  )}
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{t.name}</p>
                  <p className="font-display text-4xl font-extrabold tracking-tighter mb-1 text-gradient">
                    ₦{t.ngn}
                  </p>
                  <p className="font-mono text-sm text-foreground/80 mb-2">≈ £{t.gbp}</p>
                  <p className="text-xs text-muted-foreground mb-6">{t.period}</p>

                  <p className="text-foreground/70 leading-relaxed mb-8">{t.desc}</p>
                  <ul className="space-y-3 mb-10">
                    {t.includes.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm">
                        <svg viewBox="0 0 16 16" className="size-4 mt-0.5 shrink-0 text-accent"><path d="M3 8l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-3 rounded-full font-mono text-xs uppercase tracking-[0.2em] transition-all ${
                      t.featured ? "bg-gradient-chromatic text-background shadow-glow" : "border border-border hover:border-accent"
                    }`}
                  >
                    Enquire
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 sm:px-10 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">[ Questions ]</p>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter mb-16">
              Frequently <span className="italic font-serif font-medium text-gradient">asked</span>.
            </h2>
          </Reveal>
          <div className="space-y-px">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border-t border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center gap-6 py-6 text-left group"
                  >
                    <span className="font-display text-xl md:text-2xl font-extrabold tracking-tight group-hover:text-gradient transition-all">{f.q}</span>
                    <span className={`size-8 rounded-full border border-border grid place-items-center shrink-0 transition-all ${openFaq === i ? "bg-gradient-chromatic border-transparent rotate-45" : ""}`}>
                      <svg viewBox="0 0 12 12" className="size-3"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" /></svg>
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ${openFaq === i ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-foreground/70 leading-relaxed max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
