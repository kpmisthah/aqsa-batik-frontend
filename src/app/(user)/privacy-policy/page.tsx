"use client";
import Nav from "@/modules/user/components/Nav";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-playfair selection:bg-[#5A2A1F] selection:text-white scroll-smooth">
      <title>Privacy Policy | AQSHA BATIK SUITS</title>
      <meta name="description" content="Understand how AQSHA BATIK SUITS collects, uses, and protects customer and wholesale inquiry data across website, WhatsApp, and business communication." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Legal Documentation</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">Privacy Policy</h1>
            <div className="h-1 w-20 bg-[#5A2A1F]"></div>
          </div>

          <div className="flex flex-col gap-12 text-lg leading-relaxed text-[#5A2A1F]/80">
            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Introduction</h2>
              <p>At AQSHA BATIK SUITS, your information is handled with responsibility—not exploitation. This policy explains how we collect, use, and protect your data.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Information We Collect</h2>
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
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">How We Use Your Information</h2>
              <p>We use your data to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Respond to inquiries</li>
                <li>Share catalog and pricing</li>
                <li>Process wholesale orders</li>
                <li>Improve service experience</li>
              </ul>
              <p className="font-bold text-[#8B3A2B]">We do not sell or misuse your data.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Data Protection</h2>
              <p>We use standard security measures to protect your data from unauthorized access.</p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Third-Party Sharing</h2>
              <p>We may share data only with:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Courier partners</li>
                <li>Payment systems (if applicable)</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Your Rights</h2>
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
