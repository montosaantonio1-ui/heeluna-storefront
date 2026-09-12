import type { Product } from "@/lib/types";
import { formatMoney } from "@/lib/format";
import AddToCartButton from "./AddToCartButton";

export default function FinalCTA({ product }: { product: Product }) {
  const variant = product.variants[0];

  return (
    <section className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:py-24">
      <div className="rounded-3xl bg-pine px-8 py-14 text-center text-card sm:px-16">
        <h2 className="text-balance font-display text-3xl sm:text-4xl">
          Your feet deserve a proper ritual, not a rushed shave with a pumice stone.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-card/70">
          Heeluna Pro™ ships in 1–2 business days and pays for itself after two skipped pedicures.
        </p>
        <div className="mt-8">
          <AddToCartButton
            variantId={variant.id}
            label={`Shop Heeluna Pro™ — ${formatMoney(variant.price)}`}
            className="w-full max-w-xs !px-6 !py-3.5 !text-sm sm:w-auto sm:max-w-none sm:!px-8 sm:!py-4 sm:!text-base !bg-card !text-pine hover:!bg-card/90"
            trackingValue={Number(variant.price.amount)}
            trackingCurrency={variant.price.currencyCode}
          />
        </div>
      </div>
    </section>
  );
}
