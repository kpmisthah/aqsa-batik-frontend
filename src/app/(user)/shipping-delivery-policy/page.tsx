"use client";
import Nav from "@/modules/user/components/Nav";
import ConsistentCTA from "@/modules/user/components/ConsistentCTA";


export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-cream text-foreground selection:bg-brand selection:text-surface scroll-smooth">
      <title>Shipping & Delivery Policy | AQSHA BATIK SUITS</title>
      <meta name="description" content="Learn about AQSHA BATIK SUITS shipping process, dispatch timeline, courier partners, and delivery across India for wholesale orders." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-overline">LOGISTICS & FULFILMENT</span>
            <h1 className="text-h1">Shipping & Delivery Policy</h1>
            <div className="h-1 w-20 bg-highlight"></div>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-12 text-body1">
            
            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Dispatch Process</h2>
              <div className="flex flex-col gap-2">
                <p>We maintain ready stock for fast dispatch.</p>
                <p>Orders are processed after confirmation.</p>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Delivery Partners</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Maruti Courier</li>
                <li>XpressBees</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Delivery Timeline</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>3–7 working days (India)</li>
                <li>Depends on location</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Service Coverage</h2>
              <p>We deliver across India including:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Delhi • Punjab • Gujarat • MP • Rajasthan</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Delays</h2>
              <p>Delays may occur due to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Logistics issues</li>
                <li>External conditions</li>
              </ul>
            </section>

          </div>
        </div>
        <ConsistentCTA />
      </main>

    </div>
  );
}
