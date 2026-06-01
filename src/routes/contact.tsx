import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "@/components/Reveal";
import { budgetRanges, contactMethods, contactInfo, services as serviceList } from "@/lib/content";
import { countries } from "@/lib/countries";
import { submitContact } from "@/lib/contact.functions";
import { bookCall } from "@/lib/booking.functions";
import { toast } from "sonner";

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
const defaultCountry = countries.find((c) => c.code === "NG") ?? countries[0];

function ContactPage() {
  const submit = useServerFn(submitContact);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState(defaultCountry.code);
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    tier: "",
    budget: "",
    contactMethod: "whatsapp",
    message: "",
  });

  const country = useMemo(
    () => countries.find((c) => c.code === countryCode) ?? defaultCountry,
    [countryCode],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await submit({
        data: {
          name: data.name,
          email: data.email,
          company: data.company,
          countryCode: country.dial,
          countryName: country.name,
          phone: data.phone,
          tier: data.tier,
          budget: data.budget,
          contactMethod: data.contactMethod,
          message: data.message,
        },
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      toast.error("Could not send your brief. Please try again or reach us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

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
              <form onSubmit={handleSubmit} className="space-y-8">
                <Field label="Your name" value={data.name} onChange={(v) => setData({ ...data, name: v })} maxLength={100} />
                <Field label="Email" type="email" value={data.email} onChange={(v) => setData({ ...data, email: v })} maxLength={255} />
                <Field label="Company (optional)" value={data.company} onChange={(v) => setData({ ...data, company: v })} required={false} maxLength={100} />

                {/* Phone with country code */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">Phone number</label>
                  <div className="flex gap-3 border-b border-border focus-within:border-accent transition-colors pb-2">
                    <div className="relative">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        aria-label="Country"
                        className="appearance-none bg-transparent text-base sm:text-lg font-serif italic outline-none pr-7 cursor-pointer max-w-[10rem]"
                      >
                        {countries.map((c) => (
                          <option key={c.code} value={c.code} className="bg-background text-foreground">
                            {c.flag} {c.name} ({c.dial})
                          </option>
                        ))}
                      </select>
                      <svg viewBox="0 0 12 8" className="size-3 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none opacity-60"><path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                    </div>
                    <span className="font-serif italic text-base sm:text-lg text-foreground/70 self-center">{country.dial}</span>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value.replace(/[^\d\s-]/g, "") })}
                      maxLength={20}
                      placeholder="802 943 0064"
                      className="flex-1 bg-transparent text-base sm:text-lg font-serif italic outline-none placeholder:text-muted-foreground/40 min-w-0"
                    />
                  </div>
                </div>

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
                  disabled={submitting}
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-foreground text-background px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] shadow-luxe hover:shadow-glow transition-shadow disabled:opacity-60"
                >
                  <span className="relative z-10">{submitting ? "Sending..." : "Send brief"}</span>
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
                <ContactButton
                  href={contactInfo.sms}
                  label="SMS"
                  sub="Text us directly"
                  icon={<svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>}
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

      {/* Schedule a call */}
      <ScheduleCall />
    </>
  );
}

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
];

function ScheduleCall() {
  const book = useServerFn(bookCall);
  const [booked, setBooked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const today = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const tz = useMemo(
    () => (typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""),
    [],
  );

  async function handleBook(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (!form.date || !form.time) {
      toast.error("Please pick a date and time.");
      return;
    }
    setSubmitting(true);
    try {
      await book({
        data: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          countryCode: defaultCountry.dial,
          countryName: defaultCountry.name,
          preferredDate: form.date,
          preferredTime: form.time,
          timezone: tz,
          notes: form.notes,
        },
      });
      setBooked(true);
    } catch (err) {
      console.error(err);
      toast.error("Could not save your booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="book-a-call" className="py-24 px-6 sm:px-10 border-t border-border bg-obsidian/40 scroll-mt-32">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">[ Book a call ]</p>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
            Prefer to <span className="italic font-serif font-medium text-gradient">talk</span>?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-8 max-w-md">
            Pick a date and time that suits you. We&rsquo;ll confirm by email within 24 hours and send the meeting link.
          </p>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-gradient-chromatic" /> 20 minutes · free of charge</li>
            <li className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-gradient-chromatic" /> Google Meet · WhatsApp · Zoom</li>
            <li className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-gradient-chromatic" /> No sales script. Just a real conversation.</li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          {booked ? (
            <div className="border-chromatic rounded-md p-10 text-center bg-card">
              <div className="size-14 rounded-full bg-gradient-chromatic mx-auto mb-5 grid place-items-center">
                <svg viewBox="0 0 24 24" className="size-7 text-background"><path d="M5 12l5 5L20 7" fill="none" stroke="currentColor" strokeWidth="2.5" /></svg>
              </div>
              <h3 className="font-display text-3xl font-extrabold mb-3">Call requested.</h3>
              <p className="text-foreground/70">We&rsquo;ll email you to confirm <strong className="text-foreground">{form.date}</strong> at <strong className="text-foreground">{form.time}</strong>.</p>
            </div>
          ) : (
            <form onSubmit={handleBook} className="rounded-md border border-border bg-background p-6 sm:p-8 shadow-luxe space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <BookField label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required maxLength={100} />
                <BookField label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} maxLength={255} />
              </div>
              <BookField label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required maxLength={40} />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Preferred date</label>
                  <input
                    type="date"
                    min={today}
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-transparent border border-border rounded-md px-3 py-2.5 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Preferred time</label>
                  <select
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-transparent border border-border rounded-md px-3 py-2.5 outline-none focus:border-accent transition-colors"
                  >
                    <option value="" className="bg-background">Select a time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} className="bg-background">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">What would you like to discuss? (optional)</label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full bg-transparent border border-border rounded-md px-3 py-2.5 outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Timezone detected: {tz || "—"}
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-3.5 font-mono text-xs uppercase tracking-[0.25em] shadow-luxe hover:shadow-glow transition-shadow disabled:opacity-60"
              >
                <span className="relative z-10">{submitting ? "Booking..." : "Schedule call"}</span>
                <svg viewBox="0 0 20 20" className="size-4 relative z-10"><path d="M4 10h12m-4-4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                <span className="absolute inset-0 bg-gradient-chromatic translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function BookField({ label, type = "text", value, onChange, required, maxLength }: { label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean; maxLength?: number }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">{label}</label>
      <input
        type={type}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-border rounded-md px-3 py-2.5 outline-none focus:border-accent transition-colors"
      />
    </div>
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
