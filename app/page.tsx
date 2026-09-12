import { getProductByHandle } from "@/lib/shopify";
import { fallbackProduct } from "@/lib/fallback-product";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Specs from "@/components/Specs";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyBuyBar from "@/components/StickyBuyBar";

export const revalidate = 60;

async function getProduct() {
  const handle = process.env.NEXT_PUBLIC_PRODUCT_HANDLE || fallbackProduct.handle;
  try {
    const live = await getProductByHandle(handle);
    if (live) return live;
  } catch {
    // Storefront API not reachable yet (product still a draft, or env vars
    // not set) — fall back to the real spec/photo content below so the
    // storefront still renders correctly during development.
  }
  return fallbackProduct;
}

export default async function Home() {
  const product = await getProduct();

  return (
    <>
      <Header />
      <main className="pb-24 lg:pb-0">
        <Hero product={product} />
        <Benefits />
        <HowItWorks />
        <Specs product={product} />
        <SocialProof />
        <FAQ />
        <FinalCTA product={product} />
      </main>
      <Footer />
      <StickyBuyBar product={product} />
    </>
  );
}
