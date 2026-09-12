const exampleReviews = [
  {
    name: "Example reviewer A",
    text: "Placeholder text — swap in a real customer quote once you have reviews (Judge.me / Loox / Shopify review apps can import them automatically).",
  },
  {
    name: "Example reviewer B",
    text: "Placeholder text — this block is a layout preview only, not a real testimonial.",
  },
  {
    name: "Example reviewer C",
    text: "Placeholder text — replace every card in this section before launch.",
  },
];

export default function SocialProof() {
  return (
    <section className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">Customer reviews</p>
        <h2 className="mt-3 text-balance font-display text-3xl text-pine sm:text-4xl">What customers will say</h2>
      </div>

      <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-dashed border-clay/50 bg-clay/5 px-4 py-2.5 text-center text-xs text-clay-dark">
        Layout preview — these are placeholder cards, not real reviews. Connect a review app (Judge.me, Loox) or
        add your first genuine customer quotes here before launch.
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {exampleReviews.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-line bg-card p-6">
            <div className="flex gap-0.5 text-clay" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7-5.4-4.7 7.1-.7L12 2Z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-4 text-sm italic leading-relaxed text-ink/70">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/50">
              {r.name} · example only
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
