"use client";
import Nav from "@/modules/user/components/Nav";
import Footer from "@/modules/user/components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-sans selection:bg-[#5A2A1F] selection:text-white scroll-smooth">
      <title>Refund & Return Policy | AQSHA BATIK SUITS</title>
      <meta name="description" content="Check AQSHA BATIK SUITS return policy for damaged or incorrect products with 48-hour reporting and replacement or refund process." />
      
      <Nav />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Quality Assurance</span>
            <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-tight">Refund & Return Policy</h1>
            <div className="h-1 w-20 bg-[#5A2A1F]"></div>
          </div>

          <div className="flex flex-col gap-12 text-lg leading-relaxed text-[#5A2A1F]/80">
            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Overview</h2>
              <p>We focus on quality before dispatch. Every piece undergoes a thorough inspection to ensure it meets our manufacturing standards.</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-10 rounded-3xl border border-green-100 shadow-sm">
                <h2 className="font-playfair text-3xl font-bold text-green-900 mb-6 underline decoration-green-300">Eligible Returns</h2>
                <p className="text-green-800 mb-4 font-bold">Returns accepted only if:</p>
                <ul className="list-disc pl-6 flex flex-col gap-2 text-green-800">
                  <li>Product is damaged</li>
                  <li>Wrong item delivered</li>
                </ul>
              </div>

              <div className="bg-red-50 p-10 rounded-3xl border border-red-100 shadow-sm">
                <h2 className="font-playfair text-3xl font-bold text-red-900 mb-6 underline decoration-red-300">Non-Returnable</h2>
                <p className="text-red-800 mb-4 font-bold">Cases not eligible for return:</p>
                <ul className="list-disc pl-6 flex flex-col gap-2 text-red-800">
                  <li>Change of mind</li>
                  <li>Minor variation in print/color</li>
                  <li>Bulk dissatisfaction after approval</li>
                </ul>
              </div>
            </section>

            <section className="bg-white p-10 rounded-[40px] border border-[#5A2A1F]/5 shadow-xl flex flex-col gap-6 items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#8B3A2B]/10 flex items-center justify-center text-[#8B3A2B]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Return Window</h2>
                <p className="text-xl font-bold text-[#8B3A2B]">Report within 48 hours of delivery</p>
                <p className="opacity-60 max-w-sm mx-auto">Please inspect your wholesale parcel immediately upon receipt.</p>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold text-[#5A2A1F]">Refund Process</h2>
              <div className="flex flex-col gap-4">
                <p>Verified cases result in either a <span className="font-bold">replacement</span> or a <span className="font-bold">refund</span>.</p>
                <div className="flex items-center gap-4 text-[#8B3A2B]">
                  <span className="text-sm font-black uppercase tracking-widest">Timeline: 5–7 Working Days</span>
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
