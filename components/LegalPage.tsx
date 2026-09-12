import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-dark">{eyebrow}</p>
        <h1 className="mt-3 text-balance font-display text-3xl text-pine sm:text-4xl">{title}</h1>
        <div className="prose-legal mt-8 flex flex-col gap-5 text-[15px] leading-relaxed text-ink/80">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
