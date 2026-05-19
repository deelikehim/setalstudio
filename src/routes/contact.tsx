import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { budgetRanges, contactMethods, contactInfo, services as serviceList } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SETAL Studio" },
      { name: "description", content: "Start a project with SETAL Studio. Reach us on WhatsApp, phone, Telegram or email — we reply within 48 hours." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const tiers = serviceList.map((s) => s.title);

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    tier: "",
    budget: "",
    contactMethod: "whatsapp",
    message: "",
  });

  return (
    <>
      <section className="pt-44 pb-16 px-6 sm:px-10">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8 animate-reveal">[ Enquiry ]</p>
          <h1 className="font-display text-6xl md:text-[10rem] font-extrabold tracking-tighter leading-[0.82] animate-reveal" style={{ animationDelay: "0.1s" }}>
            Tell us<br />
            <span className="italic font-serif font-medium text-gradient">everything</span>.
          </h1>
        </div>
      </section>

      <section className="pb-32 px-6 sm:px-10">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-16">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            {sent ? (
              <div className="border-chromatic rounded-md p-12 text-center bg-card">
                <div className="size-16 rounded-full bg-gradient-chromatic mx-auto mb-6 grid place-items-center">
                  <svg viewBox="0 0 24 24" className="size-8 text-background"><path d="M5 12l5 5L20 7" fill="none" stroke="currentColor" strokeWidth="2.5" /></svg>
                </div>
                <h2 className="font-display text-4xl font-extrabold mb-4">Brief received.</h2>
                <p className="text-foreground/70 max-w-md mx-auto">We&rsquo;ll reach out via your preferred channel within 48 hours with next steps. Thank you for thinking of SETAL.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-8"
              >
                <Field label="Your name" value={data.name} onChange={(v) => setData({ ...data, name: v })} maxLength={100} />
                <Field label="Email" type="email" value={data.email} onChange={(v) => setData({ ...data, email: v })} maxLength={255} />
                <Field label="Company (optional)" value={data.company} onChange={(v) => setData({ ...data, company: v })} required={false} maxLength={100} />

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Service tier</label>
                  <div className="flex flex-wrap gap-2">
                    {tiers.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setData({ ...data, tier: t })}
                        className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                          data.tier === t ? "bg-gradient-chromatic text-background" : "border border-border hover:border-accent"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Budget (₦ / £)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        type="button"
                        key={b.value}
                        onClick={() => setData({ ...data, budget: b.value })}
                        className={`px-3 py-3 rounded-md text-left transition-all ${
                          data.budget === b.value ? "bg-gradient-chromatic text-background" : "border border-border hover:border-accent"
                        }`}
                      >
                        <div className="font-display font-extrabold text-sm">{b.label}</div>
                        <div className="font-mono text-[10px] opacity-70">{b.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Preferred contact method</label>
                  <div className="flex flex-wrap gap-2">
                    {contactMethods.map((m) => (
                      <button
                        type="button"
                        key={m.value}
                        onClick={() => setData({ ...data, contactMethod: m.value })}
                        className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                          data.contactMethod === m.value ? "bg-gradient-chromatic text-background" : "border border-border hover:border-accent"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-b border-border focus-within:border-accent transition-colors pb-2">
                  <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">Tell us about your project</label>
                  <textarea
                    rows={5}
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    maxLength={1500}
                    placeholder="Goals, timeline, references, anything we should know..."
                    className="w-full bg-transparent text-lg font-serif italic placeholder:text-muted-foreground/60 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-foreground text-background px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] shadow-luxe hover:shadow-glow transition-shadow"
                >
                  <span className="relative z-10">Send brief</span>
                  <svg viewBox="0 0 20 20" className="size-4 relative z-10"><path d="M4 10h12m-4-4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                  <span className="absolute inset-0 bg-gradient-chromatic translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            )}
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 space-y-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="font-serif italic text-3xl text-gradient break-words">{contactInfo.email}</a>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Reach us by phone</p>
              <p className="font-serif italic text-2xl text-gradient mb-5">{contactInfo.phone}</p>
              <div className="grid grid-cols-1 gap-3">
                <ContactButton
                  href={contactInfo.whatsapp}
                  label="WhatsApp"
                  sub="Instant chat · fastest reply"
                  icon={<svg viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.4c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>}
                />
                <ContactButton
                  href={contactInfo.phoneTel}
                  label="Phone call"
                  sub="Speak with us directly"
                  icon={<svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>}
                />
                <ContactButton
                  href={contactInfo.telegram}
                  label="Telegram"
                  sub="Quick async messaging"
                  icon={<svg viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.6 6.8l-1.5 7.3c-.1.5-.4.6-.8.4l-2.3-1.7-1.1 1c-.1.1-.2.2-.5.2l.2-2.4 4.3-3.9c.2-.2 0-.3-.3-.1l-5.3 3.4-2.3-.7c-.5-.2-.5-.5.1-.7l9-3.5c.4-.2.8.1.5 1z" /></svg>}
                />
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Studios</p>
              <ul className="space-y-3 text-foreground/70">
                <li><strong className="text-foreground">Lagos (HQ)</strong> — Egbeda, Mainland, Lagos, Nigeria</li>
                <li><strong className="text-foreground">Ekpoma</strong> — Oxford Road, Ihumudumu, Ekpoma, Edo, Nigeria</li>
                <li><strong className="text-foreground">Manchester, UK</strong> — Opening soon</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Regions we serve</p>
              <p className="text-foreground/70">Africa · Europe · Americas · Asia · Oceania</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Availability</p>
              <div className="glass rounded-md p-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between"><span>Q2 2026</span><span className="text-destructive">Full</span></div>
                <div className="flex justify-between"><span>Q3 2026</span><span className="text-gold">2 slots</span></div>
                <div className="flex justify-between"><span>Q4 2026</span><span className="text-accent">Open</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactButton({ href, label, sub, icon }: { href: string; label: string; sub: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 p-4 rounded-md border border-border hover:border-accent hover:bg-card transition-all"
    >
      <span className="size-10 rounded-full bg-gradient-chromatic text-background grid place-items-center shrink-0">
        {icon}
      </span>
      <span className="flex-1">
        <span className="block font-display font-extrabold text-base">{label}</span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{sub}</span>
      </span>
      <svg viewBox="0 0 20 20" className="size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><path d="M4 10h12m-4-4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
    </a>
  );
}

function Field({ label, value, onChange, type = "text", required = true, maxLength }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div className="border-b border-border focus-within:border-accent transition-colors pb-2">
      <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
        className="w-full bg-transparent text-2xl font-serif italic outline-none placeholder:text-muted-foreground/40"
      />
    </div>
  );
}
