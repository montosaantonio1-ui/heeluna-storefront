"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function AddToCartButton({
  variantId,
  className = "",
  label = "Add to bag — $49.99",
  trackingValue,
  trackingCurrency = "USD",
}: {
  variantId: string;
  className?: string;
  label?: string;
  /** Numeric price, used only for the Meta Pixel AddToCart event value. */
  trackingValue?: number;
  trackingCurrency?: string;
}) {
  const { addItem, isLoading } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  async function handleClick() {
    await addItem(variantId, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq(
        "track",
        "AddToCart",
        trackingValue !== undefined
          ? { value: trackingValue, currency: trackingCurrency, content_ids: [variantId], content_type: "product" }
          : { content_ids: [variantId], content_type: "product" }
      );
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className={`inline-flex items-center justify-center rounded-full bg-clay px-8 py-4 text-base font-semibold text-card shadow-lift transition hover:bg-clay-dark disabled:cursor-wait disabled:opacity-70 ${className}`}
    >
      {isLoading ? "Adding…" : justAdded ? "Added to bag ✓" : label}
    </button>
  );
}
