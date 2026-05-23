import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on contact page (already there)
  if (pathname === "/contact") return null;

  return (
    <div
      className={`fixed z-40 bottom-5 right-5 sm:bottom-8 sm:right-8 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className={`flex flex-col items-end gap-3 mb-3 transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
        <Link
          to="/contact"
          className="glass shadow-luxe rounded-full pl-5 pr-6 py-3 flex items-center gap-3 hover:shadow-glow transition-shadow"
        >
          <span className="size-8 rounded-full bg-gradient-chromatic text-background grid place-items-center">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v12H5l-1 4z" /></svg>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Send a brief</span>
        </Link>
        <a
          href="/contact#book-a-call"
          className="glass shadow-luxe rounded-full pl-5 pr-6 py-3 flex items-center gap-3 hover:shadow-glow transition-shadow"
        >
          <span className="size-8 rounded-full bg-gradient-chromatic text-background grid place-items-center">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Book a call</span>
        </a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="group relative overflow-hidden rounded-full bg-foreground text-background pl-5 pr-6 py-4 flex items-center gap-3 shadow-luxe hover:shadow-glow transition-shadow"
        aria-label="Start a project"
      >
        <span className={`relative size-3 rounded-full bg-gradient-chromatic transition-transform ${open ? "rotate-45 scale-110" : "animate-glow-pulse"}`} />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] relative z-10">
          {open ? "Close" : "Start a project"}
        </span>
      </button>
    </div>
  );
}
