const faqs = [
  {
    q: "Is it safe for sensitive or diabetic-prone skin?",
    a: "Most people find the gentle setting comfortable for regular use. That said, if you have diabetes, poor circulation, neuropathy, or any condition affecting your feet, please talk to your doctor or podiatrist before using Heeluna Pro™ — it's a cosmetic personal-care device, not a substitute for medical foot care.",
  },
  {
    q: "How often should I use it?",
    a: "One to two times a week works well for most people. For very rough heels, a few consecutive short sessions is gentler than one long one.",
  },
  {
    q: "Can I use it in the shower?",
    a: "Yes — Heeluna Pro™ is IPX6 waterproof, so it's safe to use on wet skin in the shower or bath, and the roller head rinses clean under running water.",
  },
  {
    q: "How long does the battery last?",
    a: "A full charge takes about 3 hours over USB and gives you roughly 60–90 minutes of continuous use, which is typically several sessions.",
  },
  {
    q: "What if it's not right for me?",
    a: "Reach out within 30 days of delivery and our team will help with a return or exchange — see the Shipping & Returns page for full details.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-line/70 bg-card/60">
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">Good to know</p>
          <h2 className="mt-3 text-balance font-display text-3xl text-pine sm:text-4xl">Frequently asked questions</h2>
        </div>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:content-none">
                {item.q}
                <span className="shrink-0 text-lg text-ink/40 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-ink/45">
          Heeluna Pro™ is a cosmetic personal-care device, not a medical device, and is not intended to
          diagnose, treat, or cure any condition. Consult a healthcare professional if you have diabetes,
          circulation issues, or any concern about using it on your feet.
        </p>
      </div>
    </section>
  );
}
