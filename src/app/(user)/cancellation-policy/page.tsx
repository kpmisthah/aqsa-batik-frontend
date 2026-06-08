"use client";
import Nav from "@/modules/user/components/Nav";
import Footer from "@/modules/user/components/Footer";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-playfair selection:bg-[#5A2A1F] selection:text-white scroll-smooth">
      <title>Cancellation Policy | AQSHA BATIK SUITS</title>
      <meta name="description" content="Understand AQSHA BATIK SUITS cancellation rules for wholesale and bulk orders before dispatch or production stage." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Order Management</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">Cancellation Policy</h1>
            <div className="h-1 w-20 bg-[#5A2A1F]"></div>
          </div>

          <div className="flex flex-col gap-12 text-lg leading-relaxed text-[#5A2A1F]/80">
            <section className="flex flex-col gap-8">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Order Cancellation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/50 p-8 rounded-3xl border-l-8 border-green-500 shadow-sm">
                  <h3 className="font-bold text-xl mb-4 text-green-900">Eligible for Cancellation</h3>
                  <p className="text-sm opacity-80 mb-4 font-medium italic">Orders can be cancelled:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Before dispatch</li>
                    <li>Before bulk production starts</li>
                  </ul>
                </div>
                <div className="bg-white/50 p-8 rounded-3xl border-l-8 border-red-500 shadow-sm">
                  <h3 className="font-bold text-xl mb-4 text-red-900">Non-Cancellable</h3>
                  <p className="text-sm opacity-80 mb-4 font-medium italic">Orders cannot be cancelled after:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Dispatch</li>
                    <li>Production begins</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Refund on Cancellation</h2>
              <div className="bg-[#5A2A1F] text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/></svg>
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                  <p className="text-xl font-medium">Eligible cancellations result in a full refund processed to your original payment method.</p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex flex-col">
                      <span className="text-3xl font-playfair font-bold">5–7</span>
                      <span className="text-[10px] uppercase font-black tracking-widest opacity-60">Working Days Timeline</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
