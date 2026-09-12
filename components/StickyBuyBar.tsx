import type { Product } from "@/lib/types";
import { formatMoney } from "@/lib/format";
import AddToCartButton from "./AddToCartButton";

export default function StickyBuyBar({ product }: { product: Product }) {
  const variant = product.variants[0];

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-card/95 px-5 py-3 shadow-lift backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">{product.title}</p>
          <p className="font-mono text-sm text-ink/60">{formatMoney(variant.price)}</p>
        </div>
        <AddToCartButton
          variantId={variant.id}
          label="Add to bag"
          className="px-6 py-3 text-sm"
          trackingValue={Number(variant.price.amount)}
          trackingCurrency={variant.price.currencyCode}
        />
      </div>
    </div>
  );
}
