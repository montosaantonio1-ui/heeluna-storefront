import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Charge",
    body: "Plug in with the included USB cable — about 3 hours for a full charge.",
  },
  {
    n: "02",
    title: "Choose your roller",
    body: "Snap in extra coarse, regular, or gentle — whichever your heels need today.",
  },
  {
    n: "03",
    title: "Glide",
    body: "Move the roller in slow, circular motions over clean, dry skin.",
  },
  {
    n: "04",
    title: "Rinse & moisturize",
    body: "Rinse the head under water, dry it, then follow with your favorite foot cream.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">The ritual</p>
        <h2 className="mt-3 text-balance font-display text-3xl text-pine sm:text-4xl">
          Four simple steps, three nights a week
        </h2>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-soft">
          <Image
            src="/images/pedicure-steps-1.png"
            alt="Heeluna Pro pedicure ritual: choose the roller, buff, moisturize"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>

        <ol className="grid gap-8 sm:grid-cols-2">
          {steps.map((step) => (
            <li key={step.n} className="relative pl-1">
              <span className="font-display text-4xl text-sage">{step.n}</span>
              <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
