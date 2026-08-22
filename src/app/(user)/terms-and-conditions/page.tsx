"use client";
import Nav from "@/modules/user/components/Nav";
import ConsistentCTA from "@/modules/user/components/ConsistentCTA";


export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-cream text-foreground selection:bg-brand selection:text-surface scroll-smooth">
      <title>Terms & Conditions | AQSHA BATIK SUITS</title>
      <meta name="description" content="Read AQSHA BATIK SUITS terms for wholesale orders, minimum order value ₹25,000, pricing, product variations, and order conditions." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-overline">LEGAL DOCUMENTATION</span>
            <h1 className="text-h1">Terms & Conditions</h1>
            <div className="h-1 w-20 bg-highlight"></div>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-12 text-body1">
            
            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Overview</h2>
              <p>Working with AQSHA BATIK SUITS means working with clear and structured terms.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Minimum Order Policy Just for Wholesale Fabric</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Minimum order value: <span className="font-heading font-semibold text-brand">₹25,000 (INR)</span></li>
                <li>Bulk orders qualify for special discounts</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Product Nature</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Batik products are handcrafted</li>
                <li>Slight variations in color or print may occur</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Pricing</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Prices depend on quantity</li>
                <li>Wholesale orders receive better pricing margins</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Order Confirmation</h2>
              <p>Orders are confirmed only after:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Final selection</li>
                <li>Payment agreement</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Liability</h2>
              <p>We are not responsible for:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Courier delays</li>
                <li>Post-delivery misuse</li>
              </ul>
            </section>

          </div>
        </div>
        <ConsistentCTA />
      </main>

    </div>
  );
}
