import Image from "next/image";
import type { Product } from "@/lib/types";
import { specs } from "@/lib/fallback-product";

export default function Specs({ product }: { product: Product }) {
  const image = product.images[1] ?? product.images[0];

  return (
    <section id="specs" className="border-y border-line/70 bg-card/60">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div className="relative order-2 aspect-square overflow-hidden rounded-3xl border border-line bg-card lg:order-1">
          {image && (
            <Image src={image.url} alt={image.altText ?? product.title} fill sizes="(min-width: 1024px) 520px, 100vw" className="object-contain" />
          )}
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">Under the hood</p>
          <h2 className="mt-3 text-balance font-display text-3xl text-pine sm:text-4xl">Built like a spa tool, sized for a drawer</h2>

          <dl className="mt-8 divide-y divide-line border-y border-line">
            {specs.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-sm text-ink/60">{row.label}</dt>
                <dd className="font-mono text-sm font-medium tabular-nums text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
