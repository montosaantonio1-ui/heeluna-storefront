import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy | Heeluna Pro™",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy policy">
      <p className="text-sm text-ink/60">Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <p>
        This page explains what information we collect when you visit or buy from Heeluna, and how we use
        it. We keep this simple: we collect what&apos;s needed to take and fulfil your order, and to
        understand how people find and use this site.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">Information we collect</h2>
      <p>
        When you place an order, our checkout (hosted and secured by Shopify) collects your name, shipping
        address, email, and payment details. We never see or store your full card number — that&apos;s
        handled entirely by Shopify and its payment processors. When you browse the site, we and our
        service providers may automatically collect standard technical information such as your IP
        address, browser type, and the pages you visit, usually via cookies or similar technology.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">How we use it</h2>
      <p>
        We use your information to process and ship your order, respond to your questions, and improve
        this store. If you&apos;ve consented to marketing, we may use your email to let you know about new
        products or offers — you can unsubscribe at any time.
      </p>
      <p>
        We may also use tools like Meta (Facebook/Instagram) Pixel to understand how visitors reach this
        site from our ads and to measure their performance. These tools use cookies and may share limited,
        anonymized browsing data with the tool provider under their own privacy policy.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">Who we share it with</h2>
      <p>
        We share order information only with the service providers who need it to do their job: Shopify
        (our e-commerce platform and payment processing), shipping carriers (to deliver your order), and,
        where used, advertising platforms like Meta (for anonymized ad measurement). We don&apos;t sell
        your personal information to anyone.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">Cookies</h2>
      <p>
        Cookies are small files stored on your device. We use them to keep your cart working between
        pages, remember your preferences, and — where enabled — measure ad performance. You can disable
        cookies in your browser settings, though parts of the site (like the shopping cart) may not work
        properly without them.
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">Your rights</h2>
      <p>
        You can ask us what information we hold about you, request a copy of it, ask us to correct it, or
        ask us to delete it, subject to any legal requirement we have to keep order records. To do any of
        this, email us at the address on our{" "}
        <a href="/contact" className="text-clay-dark underline underline-offset-2 hover:text-clay">
          Contact page
        </a>
        .
      </p>

      <h2 className="mt-4 font-display text-xl text-pine">Changes to this policy</h2>
      <p>
        If we change how we handle your information, we&apos;ll update this page and change the date at
        the top.
      </p>

      <p className="mt-6 rounded-2xl border border-dashed border-clay/40 bg-clay/5 p-4 text-sm text-ink/70">
        This page is a general template for a small online store and isn&apos;t legal advice. Depending on
        where your customers are located (for example the EU/UK under GDPR, or California under the
        CCPA/CPRA), you may have additional disclosure or consent obligations — it&apos;s worth having a
        lawyer review this before you scale up ad spend or start selling internationally.
      </p>
    </LegalPage>
  );
}
