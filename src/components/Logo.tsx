type Props = { className?: string; withWordmark?: boolean };

export function Logo({ className = "size-9", withWordmark = false }: Props) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="SETAL Studio logo"
        role="img"
      >
        <defs>
          <linearGradient id="setal-logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(48 96% 60%)" />
            <stop offset="50%" stopColor="hsl(330 80% 60%)" />
            <stop offset="100%" stopColor="hsl(220 90% 60%)" />
          </linearGradient>
        </defs>
        {/* Rounded square plate */}
        <rect x="1" y="1" width="38" height="38" rx="10" fill="url(#setal-logo-grad)" />
        {/* Stylised S — two opposing arcs */}
        <path
          d="M27 13c-2-2-5-3-8-3-4 0-7 2-7 5 0 6 14 4 14 10 0 3-3 5-7 5-3 0-6-1-8-3"
          fill="none"
          stroke="hsl(20 14% 8%)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {withWordmark && (
        <span className="font-display font-extrabold text-xl tracking-tighter leading-none">
          SETAL<span className="text-accent">.</span>
        </span>
      )}
    </span>
  );
}
