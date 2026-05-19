import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SETAL Studio" },
      { name: "description", content: "Start a project with SETAL Studio. We reply to every serious enquiry within 48 hours." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const budgets = ["< $50k", "$50–120k", "$120–250k", "$250k+"];
const services = ["Brand identity", "Website", "Interactive / WebGL", "E-commerce", "Ongoing partnership"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ name: "", email: "", company: "", budget: "", service: "", message: "" });

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
                <p className="text-foreground/70 max-w-md mx-auto">We&rsquo;ll reply within 48 hours with availability, next steps, and a calendar link. Thank you for thinking of SETAL.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-8"
              >
                <Field label="Your name" value={data.name} onChange={(v) => setData({ ...data, name: v })} />
                <Field label="Email" type="email" value={data.email} onChange={(v) => setData({ ...data, email: v })} />
                <Field label="Company" value={data.company} onChange={(v) => setData({ ...data, company: v })} />

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setData({ ...data, budget: b })}
                        className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                          data.budget === b ? "bg-gradient-chromatic text-background" : "border border-border hover:border-accent"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Service</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setData({ ...data, service: s })}
                        className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                          data.service === s ? "bg-gradient-chromatic text-background" : "border border-border hover:border-accent"
                        }`}
                      >
                        {s}
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
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Direct</p>
              <a href="mailto:setalstudio@gmail.com" className="font-serif italic text-3xl text-gradient break-words">setalstudio@gmail.com</a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Phone / WhatsApp</p>
              <a href="https://wa.me/2347046787444" className="font-serif italic text-2xl text-gradient">+234 704 678 7444</a>
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

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="border-b border-border focus-within:border-accent transition-colors pb-2">
      <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full bg-transparent text-2xl font-serif italic outline-none placeholder:text-muted-foreground/40"
      />
    </div>
  );
}
