import Image from "next/image";

const benefits = [
  {
    title: "Dual-speed precision",
    body: "An 11,000 RPM motor with two working modes — gentle enough for a weekly routine, strong enough for stubborn calluses.",
    icon: "speed",
  },
  {
    title: "Fully waterproof (IPX6)",
    body: "Use it right in the shower or bath. Rinse the roller head clean under running water in seconds.",
    icon: "water",
  },
  {
    title: "Cordless freedom",
    body: "USB rechargeable — about 3 hours to a full charge, good for up to 90 minutes of continuous use.",
    icon: "battery",
  },
  {
    title: "Whisper-quiet motor",
    body: "Designed for a calm, spa-like moment at home — not the buzz of a workshop tool.",
    icon: "quiet",
  },
];

function BenefitIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" as const };
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
    case "battery":
      return (
        <svg {...common}>
          <rect x="3" y="8" width="15" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M20 10.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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

export default function Benefits() {
  return (
    <section id="benefits" className="border-y border-line/70 bg-card/60">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">Why Heeluna Pro™</p>
            <h2 className="mt-3 text-balance font-display text-3xl text-pine sm:text-4xl">
              A salon-quality ritual, built for your bathroom shelf
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/75">
              A built-in LED lights the roller area from every angle — and doubles as your power
              indicator, so you always know it&apos;s on.
            </p>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line shadow-soft">
            <Image
              src="/images/led-indicator-1.png"
              alt="Heeluna Pro built-in LED light illuminating the roller area, doubling as a power indicator"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-line bg-stone/40 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pine text-card">
                <BenefitIcon name={b.icon} />
              </div>
              <h3 className="mt-5 font-display text-lg text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
