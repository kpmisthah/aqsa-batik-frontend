"use client";
import Nav from "@/modules/user/components/Nav";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-cream text-foreground selection:bg-brand selection:text-surface scroll-smooth">
      <title>Refund & Return Policy | AQSHA BATIK SUITS</title>
      <meta name="description" content="Check AQSHA BATIK SUITS return policy for damaged or incorrect products with 48-hour reporting and replacement or refund process." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-overline">QUALITY ASSURANCE</span>
            <h1 className="text-h1">Refund & Return Policy</h1>
            <div className="h-1 w-20 bg-highlight"></div>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-12 text-body1">
            
            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Overview</h2>
              <p>We focus on quality before dispatch.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Eligible Returns</h2>
              <p>Returns accepted only if:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Product is damaged</li>
                <li>Wrong item delivered</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Non-Returnable Cases</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Change of mind</li>
                <li>Minor variation in print/color</li>
                <li>Bulk dissatisfaction after approval</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Return Window</h2>
              <p>Report within <span className="font-heading font-semibold text-brand">48 hours</span> of delivery</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Refund Process</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Verified cases → replacement/refund</li>
                <li>Timeline: 5–7 working days</li>
              </ul>
            </section>

          </div>
        </div>
      </main>

    </div>
  );
}
