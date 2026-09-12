import Image from "next/image";

const leftFeatures = [
  { label: "11,000 RPM motor", icon: "speed" },
  { label: "IPX6 waterproof", icon: "water" },
  { label: "3 roller heads", icon: "roller" },
];

const rightFeatures = [
  { label: "USB rechargeable", icon: "battery" },
  { label: "Built-in LED light", icon: "led" },
  { label: "Whisper-quiet motor", icon: "quiet" },
];

function FeatureIcon({ name }: { name: string }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none" as const };
  switch (name) {
    case "speed":
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "water":
      return (
        <svg {...common}>
          <path d="M12 3c3 4 6 7.2 6 10.8A6 6 0 0 1 6 13.8C6 10.2 9 7 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "roller":
      return (
        <svg {...common}>
          <rect x="4" y="9" width="16" height="6" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 9v6M12 9v6M16 9v6" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <rect x="3" y="8" width="15" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M20 10.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "led":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 12c3-5 13-5 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );
  }
}

function FeatureBadge({ label, icon, align }: { label: string; icon: string; align: "left" | "right" }) {
  return (
    <div
      data-cursor-hover
      className={`group flex cursor-default items-center gap-2.5 rounded-full border border-line bg-card/90 py-2 pl-3 pr-4 shadow-soft backdrop-blur transition-all duration-300 hover:scale-110 hover:border-clay hover:bg-clay/10 hover:shadow-lift ${
        align === "right" ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pine text-card transition-colors duration-300 group-hover:bg-clay">
        <FeatureIcon name={icon} />
      </span>
      <span className="text-sm font-medium text-ink transition-colors duration-300 group-hover:text-clay-dark">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:pb-24">
      <div className="mx-auto max-w-2xl animate-fade-up text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">
          Professional-grade foot care, at home
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl leading-[1.08] text-pine sm:text-5xl">
          Silky-smooth feet in minutes — no salon required
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ink/75">
          Heeluna Pro™ buffs away rough, dry skin and calluses with the same gentle precision as a
          professional pedicure — quietly, safely, and on your own schedule.
        </p>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-3xl animate-fade-up items-center justify-center [animation-delay:150ms]">
        <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col gap-5 lg:flex">
          {leftFeatures.map((f) => (
            <FeatureBadge key={f.label} label={f.label} icon={f.icon} align="left" />
          ))}
        </div>

        <div className="relative flex w-64 shrink-0 flex-col items-center sm:w-80">
          <div className="relative aspect-[2/3] w-full animate-float">
            <Image
              src="/images/product-packshot-cutout-1.png"
              alt="Heeluna Pro™ Electric Callus Remover"
              fill
              priority
              sizes="(min-width: 1024px) 400px, 280px"
              className="object-contain"
            />
          </div>
          <div
            aria-hidden="true"
            className="h-5 w-40 animate-float-shadow rounded-[50%] bg-ink/30 blur-xl sm:w-48"
          />
        </div>

        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col gap-5 lg:flex">
          {rightFeatures.map((f) => (
            <FeatureBadge key={f.label} label={f.label} icon={f.icon} align="right" />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
        {[...leftFeatures, ...rightFeatures].map((f) => (
          <div
            key={f.label}
            data-cursor-hover
            className="group flex cursor-default items-center gap-2 rounded-full border border-line bg-card px-3 py-2 transition-all duration-300 hover:scale-105 hover:border-clay hover:bg-clay/10"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine text-card transition-colors duration-300 group-hover:bg-clay">
              <FeatureIcon name={f.icon} />
            </span>
            <span className="text-xs font-medium text-ink transition-colors duration-300 group-hover:text-clay-dark">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
