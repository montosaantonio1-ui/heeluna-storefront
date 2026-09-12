import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact us | Heeluna Pro™",
};

const SUPPORT_EMAIL = "montosaantonio1@gmail.com";

export default function ContactPage() {
  return (
    <LegalPage eyebrow="We're here to help" title="Contact us">
      <p>
        Have a question about your order, Heeluna Pro™ itself, or a return? Send us an email and
        we&apos;ll get back to you within 1–2 business days.
      </p>

      <a
        href={`mailto:${SUPPORT_EMAIL}`}
        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-clay px-6 py-3.5 font-semibold text-card shadow-soft transition hover:bg-clay-dark"
      >
        {SUPPORT_EMAIL}
      </a>

      <h2 className="mt-6 font-display text-xl text-pine">Before you write in</h2>
      <p>
        If your question is about an order, include your order number (from your confirmation email) so
        we can look into it right away. For returns, see our{" "}
        <a href="/shipping-returns" className="text-clay-dark underline underline-offset-2 hover:text-clay">
          Shipping &amp; returns
        </a>{" "}
        page — most return questions are answered there.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">A note on medical questions</h2>
      <p>
        Heeluna Pro™ is a cosmetic personal-care device, not a medical device. If you have diabetes, poor
        circulation, neuropathy, or another condition affecting your feet, please talk to a doctor or
        podiatrist before use — we&apos;re glad to answer questions about the product, but we can&apos;t
        give medical advice.
      </p>
    </LegalPage>
  );
}
