import type { Product } from "@/lib/types";
import { formatMoney } from "@/lib/format";
import ProductGallery from "./ProductGallery";
import AddToCartButton from "./AddToCartButton";

const trustPoints = [
  { label: "11,000 RPM dual-speed motor" },
  { label: "100% waterproof (IPX6)" },
  { label: "Cordless & USB rechargeable" },
];

export default function BuySection({ product }: { product: Product }) {
  const variant = product.variants[0];
  const price = formatMoney(variant.price);
  const compareAt = variant.compareAtPrice ? formatMoney(variant.compareAtPrice) : null;

  return (
    <section id="buy" className="border-y border-line/70 bg-card/60">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div>
          <ProductGallery images={product.images} title={product.title} />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">Ready when you are</p>
          <h2 className="mt-3 text-balance font-display text-3xl text-pine sm:text-4xl">
            Get your Heeluna Pro™
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/75">
            One device, three roller heads, everything you need for a salon-quality pedicure at home.
          </p>

          <div className="mt-7 flex items-baseline gap-3">
            <span className="font-mono text-3xl font-semibold text-ink">{price}</span>
            {compareAt && <span className="font-mono text-lg text-ink/40 line-through">{compareAt}</span>}
          </div>

          <div className="mt-7">
            <AddToCartButton
              variantId={variant.id}
              label={`Shop Heeluna Pro™ — ${price}`}
              className="w-full max-w-xs !px-6 !py-3.5 !text-sm sm:w-auto sm:max-w-none sm:!px-8 sm:!py-4 sm:!text-base"
              trackingValue={Number(variant.price.amount)}
              trackingCurrency={variant.price.currencyCode}
            />
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
