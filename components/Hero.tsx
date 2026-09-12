import type { Product } from "@/lib/types";
import { formatMoney } from "@/lib/format";
import ProductGallery from "./ProductGallery";
import AddToCartButton from "./AddToCartButton";

const trustPoints = [
  { label: "11,000 RPM dual-speed motor" },
  { label: "100% waterproof (IPX6)" },
  { label: "Cordless & USB rechargeable" },
];

export default function Hero({ product }: { product: Product }) {
  const variant = product.variants[0];
  const price = formatMoney(variant.price);
  const compareAt = variant.compareAtPrice ? formatMoney(variant.compareAtPrice) : null;

  return (
    <section id="top" className="mx-auto max-w-content px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:pb-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <ProductGallery images={product.images} title={product.title} />
        </div>

        <div className="flex animate-fade-up flex-col justify-center [animation-delay:120ms]">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">
            Professional-grade foot care, at home
          </p>
          <h1 className="text-balance font-display text-4xl leading-[1.08] text-pine sm:text-5xl">
            Silky-smooth feet in minutes — no salon required
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
            Heeluna Pro™ buffs away rough, dry skin and calluses with the same gentle
            precision as a professional pedicure — quietly, safely, and on your own schedule.
          </p>

          <div className="mt-7 flex items-baseline gap-3">
            <span className="font-mono text-3xl font-semibold text-ink">{price}</span>
            {compareAt && <span className="font-mono text-lg text-ink/40 line-through">{compareAt}</span>}
          </div>

          <div className="mt-7">
            <AddToCartButton variantId={variant.id} label={`Shop Heeluna Pro™ — ${price}`} />
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 border-t border-line pt-6">
            {trustPoints.map((point) => (
              <li key={point.label} className="flex items-center gap-2.5 text-sm text-ink/75">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-pine">
                  <path d="M5 13l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {point.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
