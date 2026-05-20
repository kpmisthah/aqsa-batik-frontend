"use client";
import Nav from "@/modules/user/components/Nav";
import Footer from "@/modules/user/components/Footer";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-sans selection:bg-[#5A2A1F] selection:text-white scroll-smooth">
      <title>Shipping & Delivery Policy | AQSHA BATIK SUITS</title>
      <meta name="description" content="Learn about AQSHA BATIK SUITS shipping process, dispatch timeline, courier partners, and delivery across India for wholesale orders." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Logistics & Fulfilment</span>
            <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-tight">Shipping Policy</h1>
            <div className="h-1 w-20 bg-[#5A2A1F]"></div>
          </div>

          <div className="flex flex-col gap-12 text-lg leading-relaxed text-[#5A2A1F]/80">
            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Dispatch Process</h2>
              <p>We maintain ready stock for fast dispatch. Orders are processed immediately after confirmation.</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/50 p-10 rounded-3xl border border-[#5A2A1F]/5 shadow-sm">
                <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F] mb-6">Delivery Partners</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5A2A1F]/5 flex items-center justify-center font-black text-[#5A2A1F]">M</div>
                    <span className="font-bold">Maruti Courier</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5A2A1F]/5 flex items-center justify-center font-black text-[#5A2A1F]">X</div>
                    <span className="font-bold">XpressBees</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-10 rounded-3xl border border-[#5A2A1F]/5 shadow-sm">
                <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F] mb-6">Delivery Timeline</h2>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-playfair font-bold text-[#8B3A2B]">3–7</span>
                  <span className="text-sm font-black uppercase tracking-widest opacity-60">Working Days Across India</span>
                  <p className="text-xs mt-4 opacity-60 italic">*Timeline depends on specific location</p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Service Coverage</h2>
              <p>We deliver across India including:</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Delhi", "Punjab", "Gujarat", "Madhya Pradesh", "Rajasthan"].map(city => (
                  <span key={city} className="bg-[#5A2A1F] text-white px-6 py-2 rounded-full text-sm font-bold">{city}</span>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Delays</h2>
              <p>Delays may occur due to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Logistics issues</li>
                <li>External conditions</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
