export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-pine text-card/80">
      <div className="mx-auto max-w-content px-5 pb-24 pt-12 sm:px-8 lg:pb-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-xl text-card">Heeluna™</p>
            <p className="mt-2 max-w-xs text-sm text-card/60">
              Salon-quality foot care, reimagined for home — one product, done properly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:flex sm:gap-16">
            <div>
              <p className="font-semibold text-card">Shop</p>
              <ul className="mt-3 flex flex-col gap-2 text-card/60">
                <li><a href="#top" className="hover:text-card">Heeluna Pro™</a></li>
                <li><a href="#faq" className="hover:text-card">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-card">Support</p>
              <ul className="mt-3 flex flex-col gap-2 text-card/60">
                <li><a href="/shipping-returns" className="hover:text-card">Shipping &amp; returns</a></li>
                <li><a href="/contact" className="hover:text-card">Contact us</a></li>
                <li><a href="/privacy" className="hover:text-card">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-card/15 pt-6 text-xs text-card/45">
          © {new Date().getFullYear()} Heeluna. Heeluna Pro™ is a cosmetic personal-care device, not a
          medical device.
        </p>
      </div>
    </footer>
  );
}
