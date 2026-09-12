"use client";

import { useState } from "react";
import Image from "next/image";

const rollers = [
  {
    key: "extra",
    label: "Extra coarse",
    body: "For tough, cracked calluses that need real work.",
    image: "/images/roller-extra-coarse-1.png",
    alt: "Extra coarse roller — targeted smoothing for tough calluses",
  },
  {
    key: "regular",
    label: "Regular",
    body: "For everyday dead skin and light buildup.",
    image: "/images/roller-regular-1.png",
    alt: "Regular coarse roller — everyday smoothing for dead skin removal",
  },
  {
    key: "gentle",
    label: "Gentle",
    body: "For light, daily maintenance and sensitive skin.",
    image: "/images/roller-gentle-1.png",
    alt: "Fine roller — gentle care for daily maintenance",
  },
];

export default function RollerGuide() {
  const [active, setActive] = useState(rollers[0].key);

  return (
    <section className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">Three intensities</p>
          <h2 className="mt-3 text-balance font-display text-3xl text-pine sm:text-4xl">
            One device, the right roller for every heel
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/75">
            Heeluna Pro™ ships with all three interchangeable roller heads, plus a cleaning brush and USB
            cable — swap heads in seconds, no tools required.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {rollers.map((r) => (
              <button
                key={r.key}
                type="button"
                onClick={() => setActive(r.key)}
                aria-pressed={active === r.key}
                className={`rounded-xl border px-4 py-3 text-left transition ${
                  active === r.key ? "border-clay bg-clay/5" : "border-line hover:border-pine/40"
                }`}
              >
                <span className={`font-semibold ${active === r.key ? "text-clay-dark" : "text-ink"}`}>{r.label}</span>
                <p className="mt-1 text-sm text-ink/70">{r.body}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-card shadow-soft">
          {rollers.map((r) => (
            <Image
              key={r.key}
              src={r.image}
              alt={r.alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className={`object-cover transition-opacity duration-500 ${
                active === r.key ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
