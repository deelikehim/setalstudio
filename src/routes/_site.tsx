import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-border">
        <div className="h-full bg-gradient-chromatic transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-aura opacity-60" />
      <Nav />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
