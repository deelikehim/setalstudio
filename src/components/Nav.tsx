import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Europe/Paris",
        }) + " CET",
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 glass" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative size-9 rounded-full bg-gradient-chromatic shadow-glow animate-glow-pulse" />
            <div className="leading-none">
              <div className="font-display font-extrabold text-xl tracking-tighter">
                SETAL<span className="text-accent">.</span>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                Studio &mdash; Est. 2019
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-2">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-5 py-2 text-[11px] uppercase tracking-[0.25em] font-medium rounded-full transition-colors ${
                    active ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {active && <span className="absolute inset-0 bg-gradient-chromatic rounded-full -z-10" />}
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {time}
            </span>
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-full bg-foreground text-background px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all hover:shadow-glow"
            >
              <span className="relative z-10">Start a project</span>
              <span className="absolute inset-0 bg-gradient-chromatic translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden size-10 grid place-items-center glass rounded-full"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-px bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`block w-5 h-px bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div className="relative h-full flex flex-col justify-center px-10 pt-24">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-5xl py-3 border-b border-border hover:text-accent transition-colors"
              style={{ animation: open ? `reveal 0.6s ${i * 0.08}s both` : "none" }}
            >
              {String(i + 1).padStart(2, "0")} &mdash; {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
