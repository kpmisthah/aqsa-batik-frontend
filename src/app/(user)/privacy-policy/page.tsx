"use client";
import Nav from "@/modules/user/components/Nav";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream text-primary font-heading selection:bg-primary selection:text-white scroll-smooth">
      <title>Privacy Policy | AQSHA BATIK SUITS</title>
      <meta name="description" content="Understand how AQSHA BATIK SUITS collects, uses, and protects customer and wholesale inquiry data across website, WhatsApp, and business communication." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Legal Documentation</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">Privacy Policy</h1>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="flex flex-col gap-12 text-lg leading-relaxed text-primary/80">
            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Introduction</h2>
              <p>At AQSHA BATIK SUITS, your information is handled with responsibility—not exploitation. This policy explains how we collect, use, and protect your data.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Information We Collect</h2>
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
              <h2 className="font-heading text-3xl font-bold text-primary">How We Use Your Information</h2>
              <p>We use your data to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Respond to inquiries</li>
                <li>Share catalog and pricing</li>
                <li>Process wholesale orders</li>
                <li>Improve service experience</li>
              </ul>
              <p className="font-bold text-secondary">We do not sell or misuse your data.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Data Protection</h2>
              <p>We use standard security measures to protect your data from unauthorized access.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Third-Party Sharing</h2>
              <p>We may share data only with:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Courier partners</li>
                <li>Payment systems (if applicable)</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-primary">Your Rights</h2>
              <p>You can request:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Data deletion</li>
                <li>Communication opt-out</li>
              </ul>
            </section>
          </div>
        </div>
      </main>


    </div>
  );
}
