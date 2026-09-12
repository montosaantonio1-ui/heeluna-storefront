# Heeluna — headless Shopify storefront

A single-product, high-conversion landing page for **Heeluna Pro™ Electric Callus Remover**, built with Next.js 14 (App Router) and the Shopify Storefront API. Cart and checkout use Shopify's own cart/checkout (`cart.checkoutUrl`) — no payment handling lives in this app.

## ⚠️ Before anything else: rotate your Shopify tokens

Both API tokens were pasted directly into a chat conversation to get this built. Treat them as compromised:

1. Shopify Admin → **Settings → Apps and sales channels** → the custom/private app you generated these from → **API credentials**.
2. **Regenerate** the Storefront API access token used below, and update `.env.local` (and Vercel's env vars) with the new value.
3. If an **Admin API** token (`shpat_...`) was also generated for that app, regenerate that too — it is not used anywhere in this codebase and should not be, since it grants far more than a storefront needs.

## Stack

- Next.js 14, App Router, TypeScript, Tailwind CSS
- Shopify Storefront API (GraphQL) — product data + cart/checkout only, no Admin API
- Deploys to Vercel with zero extra config beyond environment variables

## Getting started locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Environment variables (already filled in `.env.local` for you; `.env.local.example` is the template):

| Variable | What it is |
|---|---|
| `SHOPIFY_STORE_DOMAIN` | Your `.myshopify.com` domain |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Storefront API token (public, read + cart scope only) |
| `SHOPIFY_STOREFRONT_API_VERSION` | Defaults to `2024-10` |
| `NEXT_PUBLIC_PRODUCT_HANDLE` | The product's Shopify handle (slug) |

## Important: publish the product in Shopify first

Heeluna Pro™ is currently a **draft** in AutoDS, not yet pushed live to Shopify. Until it's published:

- The page automatically falls back to real spec/photo content pulled from the AutoDS product record (`lib/fallback-product.ts`), so the storefront still renders correctly for development and preview.
- Once you publish the draft (AutoDS → review the draft → edit title/description/price → **Publish to Shopify**), open the product in Shopify Admin and copy its **handle** (the slug shown under the title, or in the product's URL) into `NEXT_PUBLIC_PRODUCT_HANDLE`. The page will then pull live title, price, images and inventory straight from Shopify — no code changes needed.

I wasn't able to call the Storefront API directly from this session to fetch/verify the live product (this sandbox's network policy blocks outbound calls to `*.myshopify.com`), so the integration code is written to the documented Shopify Storefront API shape but hasn't been round-trip tested against your store. Test it with `npm run dev` once you have the handle set — if anything comes back empty, double-check the token/domain/handle first.

## Design decisions worth knowing about

- **Single variant, not a selector.** AliExpress listed three "variants" (`Usb Recharge` / `Built-In Battery` / `Rechargeable`) that describe the same physical unit at the same price — not a real customer choice. Showing that as a dropdown would just confuse buyers, so the storefront treats this as one SKU and always adds the first variant to the cart. If you add real color/bundle variants later, `Hero.tsx` and `StickyBuyBar.tsx` are the two places that assume `product.variants[0]`.
- **No fabricated reviews.** The "Customer reviews" section is clearly marked as placeholder/example content (dashed border + label on every card) — replace it with a review app (Judge.me, Loox) or real quotes before launch. Do not remove the "example" labels and pass the placeholder text off as real.
- **Safety copy.** Because this is a personal-care device used on skin, the FAQ and footer include a plain, non-medical disclaimer (consult a doctor if diabetic/circulation issues) and the marketing copy avoids medical claims — keep that framing if you edit the copy, for Meta/TikTok ad-policy reasons as much as for honesty.
- **Color system** (`tailwind.config.ts`): `pine` (deep green, trust/brand), `clay` (terracotta, CTAs/accent), `sage` (soft support color), `stone`/`card` (warm neutral backgrounds). Swap these for your own brand colors in one place if you want a different palette.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project** → import the repo → it auto-detects Next.js.
3. Add the four environment variables from the table above in **Project Settings → Environment Variables** (use the *regenerated* Storefront token, not the one above).
4. Deploy. Point your domain at Vercel once you're happy with it.

## Project structure

```
app/
  layout.tsx        — fonts, cart provider, metadata
  page.tsx           — assembles the landing page, fetches the product
  globals.css
  api/cart/route.ts  — server-side Storefront API calls (cart create/update/remove)
components/          — Hero, Benefits, HowItWorks, Specs, SocialProof, FAQ, FinalCTA, Header, Footer,
                        CartDrawer, StickyBuyBar, ProductGallery, AddToCartButton
context/CartContext.tsx — client cart state, persists cart id in localStorage
lib/
  shopify.ts          — Storefront API GraphQL client (product + cart queries/mutations)
  fallback-product.ts — real spec/photo content used until the product is live on Shopify
  types.ts, format.ts
```
