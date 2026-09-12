"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({
  variantId,
  className = "",
  label = "Add to bag — $49.99",
}: {
  variantId: string;
  className?: string;
  label?: string;
}) {
  const { addItem, isLoading } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  async function handleClick() {
    await addItem(variantId, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
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
