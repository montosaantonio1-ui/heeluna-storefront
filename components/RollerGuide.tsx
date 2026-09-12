import Image from "next/image";

export default function RollerGuide() {
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
          <ul className="mt-6 flex flex-col gap-3 text-sm text-ink/75">
            <li>
              <span className="font-semibold text-ink">Extra coarse</span> — for tough, cracked calluses
            </li>
            <li>
              <span className="font-semibold text-ink">Regular</span> — for everyday dead skin
            </li>
            <li>
              <span className="font-semibold text-ink">Gentle</span> — for light, daily maintenance
            </li>
          </ul>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-3xl border border-line shadow-soft">
          <Image
            src="/images/roller-refills-infographic-1.png"
            alt="Heeluna Pro roller guide: extra coarse for tough calluses, regular for dead skin, gentle for daily maintenance"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
