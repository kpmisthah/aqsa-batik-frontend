"use client";
import Nav from "@/modules/user/components/Nav";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-cream text-primary font-heading selection:bg-primary selection:text-white scroll-smooth">
      <title>Terms & Conditions | AQSHA BATIK SUITS</title>
      <meta name="description" content="Read AQSHA BATIK SUITS terms for wholesale orders, minimum order value ₹25,000, pricing, product variations, and order conditions." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Legal Documentation</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">Terms & Conditions</h1>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="flex flex-col gap-12 text-lg leading-relaxed text-primary/80">
            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Overview</h2>
              <p>Working with AQSHA BATIK SUITS means working with clear and structured terms.</p>
            </section>

            <section className="flex flex-col gap-6 bg-white/50 p-8 rounded-3xl border border-primary/5 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-primary">Minimum Order Policy Just for Wholesale Fabric</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Minimum order value: <span className="font-bold text-secondary">₹25,000 (INR)</span></li>
                <li>Bulk orders qualify for special discounts</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Product Nature</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Batik products are handcrafted</li>
                <li>Slight variations in color or print may occur</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Pricing</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Prices depend on quantity</li>
                <li>Wholesale orders receive better pricing margins</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Order Confirmation</h2>
              <p>Orders are confirmed only after:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Final selection</li>
                <li>Payment agreement</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Liability</h2>
              <p>We are not responsible for:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Courier delays</li>
                <li>Post-delivery misuse</li>
              </ul>
            </section>
          </div>
        </div>
      </main>


    </div>
  );
}
