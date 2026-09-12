"use client";

import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart, openDrawer } = useCart();
  const count = cart?.totalQuantity ?? 0;

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-stone/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-xl tracking-tight text-pine">
          Heeluna<span className="align-super text-xs">™</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          <a href="#benefits" className="hover:text-pine">Benefits</a>
          <a href="#how-it-works" className="hover:text-pine">How it works</a>
          <a href="#specs" className="hover:text-pine">Specs</a>
          <a href="#faq" className="hover:text-pine">FAQ</a>
        </nav>

        <button
          type="button"
          onClick={openDrawer}
          aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card transition hover:border-pine"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 8h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-clay px-1 font-body text-[11px] font-semibold text-card">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
