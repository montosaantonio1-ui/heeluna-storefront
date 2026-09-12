"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/format";

export default function CartDrawer() {
  const { cart, isDrawerOpen, closeDrawer, updateItem, removeItem, isLoading } = useCart();

  return (
    <div
      aria-hidden={!isDrawerOpen}
      className={`fixed inset-0 z-50 transition ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        onClick={closeDrawer}
        className={`absolute inset-0 bg-ink/40 transition-opacity ${isDrawerOpen ? "opacity-100" : "opacity-0"}`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-card shadow-lift transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-lg text-pine">Your bag</h2>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close cart"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink/60 hover:bg-stone hover:text-ink"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {!cart || cart.lines.length === 0 ? (
            <p className="mt-10 text-center text-sm text-ink/60">Your bag is empty.</p>
          ) : (
            <ul className="flex flex-col gap-5">
              {cart.lines.map((line) => (
                <li key={line.id} className="flex gap-4">
                  {line.merchandise.image && (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-line bg-stone">
                      <Image
                        src={line.merchandise.image.url}
                        alt={line.merchandise.image.altText ?? line.merchandise.product.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-medium leading-snug text-ink">{line.merchandise.product.title}</p>
                      {line.merchandise.title !== "Default Title" && (
                        <p className="text-sm text-ink/60">{line.merchandise.title}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-line px-1">
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() =>
                            line.quantity <= 1 ? removeItem(line.id) : updateItem(line.id, line.quantity - 1)
                          }
                          className="h-7 w-7 rounded-full text-ink/70 hover:bg-stone disabled:opacity-40"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-sm tabular-nums">{line.quantity}</span>
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() => updateItem(line.id, line.quantity + 1)}
                          className="h-7 w-7 rounded-full text-ink/70 hover:bg-stone disabled:opacity-40"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-mono text-sm tabular-nums">{formatMoney(line.merchandise.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(line.id)}
                      disabled={isLoading}
                      className="mt-1 self-start text-xs text-ink/50 underline-offset-2 hover:text-clay hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart && cart.lines.length > 0 && (
          <div className="border-t border-line px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-ink/70">Subtotal</span>
              <span className="font-mono font-semibold tabular-nums">{formatMoney(cart.cost.subtotalAmount)}</span>
            </div>
            <a
              href={cart.checkoutUrl}
              className="block w-full rounded-full bg-clay py-3.5 text-center font-semibold text-card shadow-soft transition hover:bg-clay-dark"
            >
              Checkout securely
            </a>
            <p className="mt-3 text-center text-xs text-ink/50">
              Shipping and taxes calculated at checkout on Shopify&apos;s secure payment page.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
