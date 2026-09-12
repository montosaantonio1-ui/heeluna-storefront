import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Shipping & Returns | Heeluna Pro™",
};

export default function ShippingReturnsPage() {
  return (
    <LegalPage eyebrow="Good to know" title="Shipping & returns">
      <p>
        We want your Heeluna Pro™ to arrive quickly and in perfect condition — and if it isn&apos;t right
        for you, we want that to be easy to fix too. Here&apos;s exactly how both work.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">Processing &amp; shipping</h2>
      <p>
        Orders are processed within 1–2 business days of purchase. Once your order ships, you&apos;ll get a
        confirmation email with a tracking link so you can follow it the whole way. Transit time varies by
        destination and carrier — if a specific delivery window matters for your order, reach out before
        you buy and we&apos;ll confirm an estimate for your address.
      </p>
      <p>
        We currently ship within the regions shown at checkout. If your address isn&apos;t accepted at
        checkout, we don&apos;t yet ship there.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">30-day returns</h2>
      <p>
        If Heeluna Pro™ isn&apos;t right for you, contact us within 30 days of delivery and we&apos;ll help
        with a return or exchange. To keep things fair for everyone, we ask that the unit be returned in
        the condition it arrived in, with its original packaging and accessories (roller heads, cleaning
        brush, USB cable).
      </p>
      <p>
        To start a return, email us at{" "}
        <a href="/contact" className="text-clay-dark underline underline-offset-2 hover:text-clay">
          our contact page
        </a>{" "}
        with your order number and the reason for the return. We&apos;ll reply with the next steps,
        including where to send it back.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">Damaged or incorrect items</h2>
      <p>
        If your order arrives damaged, or something&apos;s missing, let us know within 30 days with a
        photo of the item and we&apos;ll sort out a replacement or refund at no extra cost to you.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">Refunds</h2>
      <p>
        Once we receive and inspect your return, we&apos;ll notify you and process the refund to your
        original payment method. Refunds typically appear within 5–10 business days, depending on your
        bank or card provider.
      </p>

      <p className="mt-6 text-sm text-ink/60">
        Questions before or after your order?{" "}
        <a href="/contact" className="text-clay-dark underline underline-offset-2 hover:text-clay">
          Contact us
        </a>{" "}
        — we&apos;re happy to help.
      </p>
    </LegalPage>
  );
}
