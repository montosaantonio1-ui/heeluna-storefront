"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/lib/types";

export default function ProductGallery({ images, title }: { images: ProductImage[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const current = images[active] ?? images[0];

  useEffect(() => {
    if (!lightboxOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, images.length]);

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label="View full-size image"
        className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-3xl border border-line bg-card shadow-soft"
      >
        {current && (
          <Image
            src={current.url}
            alt={current.altText ?? title}
            fill
            priority
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-contain transition duration-500 group-hover:scale-[1.03]"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-pine px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-card">
          IPX6 Waterproof
        </span>
        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 text-card opacity-0 backdrop-blur transition group-hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" stroke="currentColor" strokeWidth="1.8" />
            <path d="M14.5 14.5 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M10 7.5v5M7.5 10h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.url + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border transition ${
                i === active ? "border-clay ring-2 ring-clay/30" : "border-line hover:border-pine/50"
              }`}
            >
              <Image src={img.url} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-card/10 text-card hover:bg-card/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => (i - 1 + images.length) % images.length);
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/10 text-card hover:bg-card/20 sm:left-6"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => (i + 1) % images.length);
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/10 text-card hover:bg-card/20 sm:right-6"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <div className="relative aspect-square w-full max-w-2xl overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.url} alt={current.altText ?? title} fill sizes="90vw" className="object-contain bg-card" />
          </div>
        </div>
      )}
    </div>
  );
}
