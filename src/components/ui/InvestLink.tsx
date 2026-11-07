import { site } from "@/content/site";

// A quiet text link for the demat / mutual fund onboarding, for places where a button would
// compete with the main actions. On hover its underline rises into a band, as on the footer credit.
const tones = {
  ink: { text: "text-ink hover:text-marigold focus-visible:text-marigold", band: "bg-ink" },
  marigold: { text: "text-marigold hover:text-ink focus-visible:text-ink", band: "bg-marigold" },
} as const;

export function InvestLink({ tone = "ink", className = "" }: { tone?: keyof typeof tones; className?: string }) {
  const t = tones[tone];
  return (
    <p className={`flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm ${className}`}>
      <a
        href={site.contact.invest.href}
        target="_blank"
        rel="noopener"
        className={`group relative inline-flex items-center gap-1.5 px-1.5 py-0.5 font-bold tracking-[0.06em] uppercase font-condensed transition-colors duration-500 ease-out-expo ${t.text}`}
      >
        <span
          aria-hidden
          className={`absolute inset-0 origin-bottom scale-y-[0.06] transition-transform duration-500 ease-out-expo [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] group-hover:scale-y-100 group-focus-visible:scale-y-100 ${t.band}`}
        />
        <span className="relative">{site.contact.invest.label}</span>
        <svg
          viewBox="0 0 16 16"
          className="relative size-3.5 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path d="M4 12 12 4M5.5 4H12v6.5" strokeLinecap="square" />
        </svg>
      </a>
      <span className="opacity-70">{site.contact.invest.detail}</span>
    </p>
  );
}
