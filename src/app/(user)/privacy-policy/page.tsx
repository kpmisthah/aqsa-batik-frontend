"use client";
import Nav from "@/modules/user/components/Nav";
import ConsistentCTA from "@/modules/user/components/ConsistentCTA";


export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream text-foreground selection:bg-brand selection:text-surface scroll-smooth">
      <title>Privacy Policy | AQSHA BATIK SUITS</title>
      <meta name="description" content="Understand how AQSHA BATIK SUITS collects, uses, and protects customer and wholesale inquiry data across website, WhatsApp, and business communication." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-overline">LEGAL DOCUMENTATION</span>
            <h1 className="text-h1">Privacy Policy</h1>
            <div className="h-1 w-20 bg-highlight"></div>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-12 text-body1">
            
            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Introduction</h2>
              <div className="flex flex-col gap-2">
                <p>At AQSHA BATIK SUITS, your information is handled with responsibility—not exploitation.</p>
                <p>This policy explains how we collect, use, and protect your data.</p>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Information We Collect</h2>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Business details (for wholesale orders)</li>
                <li>Order-related information</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">How We Use Your Information</h2>
              <p>We use your data to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Respond to inquiries</li>
                <li>Share catalog and pricing</li>
                <li>Process wholesale orders</li>
                <li>Improve service experience</li>
              </ul>
              <p className="font-heading font-semibold text-brand text-lg">We do not sell or misuse your data.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Data Protection</h2>
              <p>We use standard security measures to protect your data from unauthorized access.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Third-Party Sharing</h2>
              <p>We may share data only with:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Courier partners</li>
                <li>Payment systems (if applicable)</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-h2">Your Rights</h2>
              <p>You can request:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Data deletion</li>
                <li>Communication opt-out</li>
              </ul>
            </section>

          </div>
        </div>
        <ConsistentCTA />
      </main>

    </div>
  );
}
