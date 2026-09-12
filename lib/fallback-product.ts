import type { Product } from "./types";

/**
 * Real product content, sourced from the AutoDS product record (supplier
 * spec sheet + photos) while the listing is still a draft and not yet
 * published to the Shopify store. `app/page.tsx` tries the live Storefront
 * API first via `getProductByHandle` and only falls back to this object if
 * that returns nothing — once you publish the draft in AutoDS/Shopify and
 * set NEXT_PUBLIC_PRODUCT_HANDLE, the live data takes over automatically
 * and this file stops being used for anything but local development.
 *
 * The three "variants" AliExpress listed (Usb Recharge / Built-In Battery /
 * Rechargeable) describe the same physical unit at the same price — not a
 * real customer choice — so the storefront treats this as a single-SKU
 * product and only ever uses the first variant's id for checkout.
 */
export const fallbackProduct: Product = {
  id: "fallback-heeluna-pro",
  handle: "heeluna-pro-electric-callus-remover",
  title: "Heeluna Pro™ Electric Callus Remover",
  descriptionHtml:
    "<p>A rechargeable, waterproof electric callus remover with a dual-speed motor and a natural quartz roller head — built for a salon-quality foot-care routine at home.</p>",
  images: [
    { url: "/images/hero-lifestyle-1.png", altText: "Heeluna Pro, foot-care ritual at home", width: 1123, height: 1416 },
    { url: "/images/product-context-1.png", altText: "Heeluna Pro on a linen cloth with a terracotta bowl", width: 1244, height: 1244 },
    { url: "/images/kit-accessories-1.png", altText: "Heeluna Pro with its 3 interchangeable roller heads, cleaning brush, and USB cable", width: 1244, height: 1244 },
    { url: "/images/roller-refills-infographic-1.png", altText: "Heeluna Pro roller guide: extra coarse for tough calluses, regular for dead skin, gentle for daily maintenance", width: 1244, height: 1244 },
    { url: "/images/led-indicator-1.png", altText: "Heeluna Pro built-in LED light illuminating the roller area, doubling as a power indicator", width: 1600, height: 900 },
    { url: "/images/pedicure-steps-1.png", altText: "Heeluna Pro 3-step pedicure ritual: choose the roller, buff, moisturize", width: 1244, height: 1244 },
    { url: "/images/heel-kit-collage-1.png", altText: "Heeluna Pro results on heels, with the full roller kit laid out", width: 1123, height: 1416 },
    { url: "https://sc04.alicdn.com/kf/Hbead05ce1e41420d8ee99395b4c6d6beX.jpg", altText: "Heeluna Pro electric callus remover, front view", width: 1000, height: 1000 },
    { url: "https://sc04.alicdn.com/kf/Hfc594c41c3b44de5846ed6d5502cc580k.jpg", altText: "Heeluna Pro in use on a heel", width: 1000, height: 1000 },
    { url: "https://sc04.alicdn.com/kf/H1e6301d85a174b3ab4369b245dd72492t.jpg", altText: "Heeluna Pro roller head detail", width: 1000, height: 1000 },
    { url: "https://sc04.alicdn.com/kf/H4728ccb9af234daaa1083efca5503026r.jpg", altText: "Heeluna Pro with USB charging cable", width: 1000, height: 1000 },
    { url: "https://sc04.alicdn.com/kf/Hf490b08d4be340a09d988367aa660d43B.jpg", altText: "Heeluna Pro size reference", width: 1000, height: 1000 },
  ],
  options: [{ name: "Style", values: ["White"] }],
  priceRange: {
    minVariantPrice: { amount: "49.99", currencyCode: "USD" },
    maxVariantPrice: { amount: "49.99", currencyCode: "USD" },
  },
  variants: [
    {
      id: "fallback-variant-1",
      title: "White",
      availableForSale: true,
      quantityAvailable: 10,
      price: { amount: "49.99", currencyCode: "USD" },
      compareAtPrice: { amount: "79.99", currencyCode: "USD" },
      selectedOptions: [{ name: "Style", value: "White" }],
      image: { url: "https://sc04.alicdn.com/kf/Hbead05ce1e41420d8ee99395b4c6d6beX.jpg", altText: "Heeluna Pro, White", width: 1000, height: 1000 },
    },
  ],
};

export type SpecRow = { label: string; value: string };

export const specs: SpecRow[] = [
  { label: "Motor speed", value: "11,000 RPM" },
  { label: "Working modes", value: "2 (gentle + intensive)" },
  { label: "LED light", value: "Built-in — illuminates the roller area and doubles as a power indicator" },
  { label: "Waterproof rating", value: "IPX6 — shower safe" },
  { label: "Battery", value: "600 mAh, USB rechargeable" },
  { label: "Charge time", value: "~3 hours" },
  { label: "Runtime per charge", value: "60–90 minutes" },
  { label: "Roller material", value: "Natural quartz + ABS" },
  { label: "Roller heads included", value: "3 — extra coarse (tough calluses), regular (dead skin), gentle (daily use)" },
  { label: "Also included", value: "Cleaning brush + USB charging cable" },
  { label: "Weight", value: "0.35 kg (12.3 oz)" },
  { label: "Dimensions", value: "20.7 × 5 × 11.5 cm" },
  { label: "Certifications", value: "CE · RoHS · FCC · ISO 9001" },
];
