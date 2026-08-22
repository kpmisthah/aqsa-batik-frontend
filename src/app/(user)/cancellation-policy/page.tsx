"use client";
import Nav from "@/modules/user/components/Nav";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-cream text-foreground selection:bg-brand selection:text-surface scroll-smooth">
      <title>Cancellation Policy | AQSHA BATIK SUITS</title>
      <meta name="description" content="Understand AQSHA BATIK SUITS cancellation rules for wholesale and bulk orders before dispatch or production stage." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-overline">ORDER MANAGEMENT</span>
            <h1 className="text-h1">Cancellation Policy</h1>
            <div className="h-1 w-20 bg-highlight"></div>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-12 text-body1">
            
            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Order Cancellation</h2>
              <p>Orders can be cancelled:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Before dispatch</li>
                <li>Before bulk production starts</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Non-Cancellable Orders</h2>
              <p>Orders cannot be cancelled after:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Dispatch</li>
                <li>Production begins</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Refund on Cancellation</h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Eligible cancellations → refund processed</li>
                <li>Timeline: 5–7 working days</li>
              </ul>
            </section>

          </div>
        </div>
      </main>

    </div>
  );
}
