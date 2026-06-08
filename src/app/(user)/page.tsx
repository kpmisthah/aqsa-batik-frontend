"use client";
import { useState } from "react";
import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import LeadGenerationForm from "@/modules/user/components/LeadGenerationForm";
import StickyEnquiryButton from "@/modules/user/components/StickyEnquiryButton";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";



const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20the%20wholesale%20catalogue";
const C = {
  cream: "#F5F1EC",
  tan: "#E8D9C0",
  gold: "#FFD700",
  brown: "#5A2A1F",
  white: "#FFFFFF",
  rust: "#8B3A2B",
  red: "#B02A2A",
};

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-playfair selection:bg-[#5A2A1F] selection:text-white scroll-smooth">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Playfair Display', serif; }
        .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%235A2A1F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
      `}</style>

      <Nav />

      {/* ── FULL SCREEN HERO SECTION ── */}
      <section className="relative min-h-[600px] md:h-[95vh] md:min-h-[750px] w-full flex items-center overflow-hidden bg-[#5A2A1F]">
        {/* Background Image - Covered screen */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/full_hero_new.png"
            alt="Batik Fashion Model"
            layout="fill"
            objectFit="cover"
            objectPosition="center 20%"
            priority
            className="brightness-[0.75] contrast-[1.1]"
          />
          {/* Professional Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 shadow-2xl"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Subtle Grain Texture for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full flex justify-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-6 md:gap-10 items-center text-center max-w-5xl">
            <div className="flex items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
              <span className="font-playfair text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white">Direct Manufacturer From Ujjain</span>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="font-playfair text-3xl md:text-4xl font-normal leading-[1.4] md:leading-[1.3] tracking-tight">
                Premium <span className='hero-highlight'>Batik Designs</span> That Turn <span className='hero-highlight'>Attention</span> Into <span className='hero-highlight'>Orders</span>
              </h1>
              <p className="font-playfair text-lg md:text-xl font-medium opacity-95 leading-[1.4] md:leading-[1.3] mt-2 max-w-4xl mx-auto">
                Buy Batik Cloth online from the 1st Indian direct batik manufacturer. Premium quality cotton dress collections for wholesale and retail—trusted for consistency and reliable supply across India.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-8 md:pt-10 items-center justify-center">
              <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-[#FFD700] text-[#5A2A1F] px-6 py-3.5 md:px-8 md:py-4.5 rounded-[12px] md:rounded-[18px] font-black text-base md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider border-b-2 md:border-b-4 border-black/10">
                Get Wholesale Pricing
              </a>
              <a href="#collection" className="inline-block bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 py-3.5 md:px-8 md:py-4.5 rounded-[12px] md:rounded-[18px] font-black text-base md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:bg-white hover:text-[#5A2A1F] active:scale-95 transition-all duration-300 uppercase tracking-wider">
                View Collections
              </a>
            </div>

          </div>
        </div>
      </section>
      <GoogleReviewBar />
      <PremiumTrustSection />


      <div className="bg-pattern">
        {/* ── COLLECTION SECTION ── */}
        <section id="collection" className="py-32 border-b border-[#5A2A1F]/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col gap-5">
              <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Curated For Sales</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium text-[#5A2A1F]">Explore Our Best-Selling Batik Designs Collection</h2>
              <p className="text-[#6E5238] opacity-70 text-lg md:text-xl max-w-4xl mx-auto font-medium italic leading-relaxed">
                Explore premium batik print dress collections, breathable ladies cotton dresses, and every stylish dress for women designed for comfort, fashion, and everyday demand.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { t: "Batik Cloth", b: "Best Seller", d: "Breathable cotton materials for everyday style.", l: "/batik-cloth" },
                { t: "Batik Fabric", b: "Top Quality", d: "Premium yardage for boutiques and designers.", l: "/batik-fabric" },
                { t: "Wholesale Batik Dresses", b: "Bulk Saving", d: "Best margins for boutique & resellers.", l: "/wholesale" },
                { t: "New Arrival Batik Clothing", b: "Trending", d: "Fresh patterns inspired by modern trends.", l: "/new-arrival" }
              ].map((item, i) => (
                <a key={i} href={item.l} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] rounded-[40px] shadow-2xl mb-8 transition-all hover:-translate-y-2 overflow-hidden border border-[#5A2A1F]/5">
                    <Image src={`/hero_bg.png`} alt={item.t} layout="fill" objectFit="cover" className="brightness-75 group-hover:brightness-90 transition-all duration-1000 group-hover:scale-110" />
                    <span className="absolute top-8 left-8 bg-[#8B3A2B] text-white text-[11px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">{item.b}</span>
                    <div className="absolute bottom-10 left-10 text-white drop-shadow-2xl">
                      <h4 className="font-playfair text-3xl font-bold mb-2">{item.t}</h4>
                      <p className="text-base opacity-90 font-medium tracking-tight">{item.d}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-20 text-center">
              <a href={WA} className="inline-block bg-[#5A2A1F] text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_20px_50px_rgba(90,42,31,0.2)] hover:bg-black transition-all uppercase tracking-widest">
                Request Full Catalog on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── TARGET AUDIENCE SECTION ── */}
        <section className="bg-[#E8D9C0] py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
          <div className="max-w-7xl mx-auto text-center flex flex-col gap-16 relative z-10">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Engineered For Resellers</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium text-[#5A2A1F]">If You Sell Clothing, <br /> This Is Built for You</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  t: "Boutique Owners", d: "Get fast-moving designs that refresh your display and bring repeat footfall.", b: "Need fast-moving designs",
                  i: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                      <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
                    </svg>
                  )
                },
                {
                  t: "Resellers", d: "Better margins than local suppliers. Consistent quality. Trusted supply chain.", b: "Need better margins",
                  i: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  )
                },
                {
                  t: "Wholesalers", d: "Bulk consistency guaranteed. 1500+ pieces per cycle with uniform quality.", b: "Need bulk consistency",
                  i: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
                    </svg>
                  )
                },
                {
                  t: "Marketplace Sellers", d: "Trending stock that performs on Meesho, Amazon, Flipkart, and Instagram.", b: "Need trending stock",
                  i: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white/90 backdrop-blur rounded-[40px] flex flex-col items-center gap-8 text-center border border-white/30 shadow-2xl group hover:bg-white transition-all">
                  <div className="w-20 h-20 bg-[#5A2A1F] text-white rounded-3xl flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform">{item.i}</div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-2xl md:text-3xl tracking-tight">{item.t}</h4>
                    <p className="text-lg opacity-70 leading-relaxed font-medium">{item.d}</p>
                  </div>
                  <a href={WA} className="mt-auto px-6 py-2.5 bg-[#8B3A2B]/10 rounded-full text-xs font-black text-[#8B3A2B] hover:bg-[#8B3A2B] hover:text-white transition-all uppercase tracking-[0.15em] border border-[#8B3A2B]/10">
                    {item.b}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR STORY SECTION ── */}
        <section id="about" className="py-40 px-6 md:px-20 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="rounded-[60px] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.2)] relative aspect-[4/5] border-[20px] border-white transition-all duration-700 group-hover:scale-[1.02]">
              <Image src="/history.png" alt="Ujjain Roots" layout="fill" objectFit="cover" className="hover:scale-110 transition-all duration-[3s] brightness-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-xl p-10 rounded-[40px] border border-white/20 shadow-2xl text-white">
                <span className="text-5xl font-playfair font-bold block">Est. 2008</span>
                <p className="text-sm uppercase font-black tracking-[0.4em] opacity-80 mt-2">Founders in Ujjain</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8B3A2B]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#5A2A1F]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="flex flex-col gap-12 order-1 lg:order-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-black text-[#8B3A2B] uppercase tracking-[0.5em] mb-2 block">The Legacy of Quality</span>
                <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-[1.1] text-[#5A2A1F]">15 Years of <br /> Proven Market <br /> Excellence.</h2>
              </div>
              <div className="flex flex-col gap-10 text-[#6E5238]/80 leading-relaxed text-2xl lg:text-3xl font-medium max-w-2xl">
                <p className="border-l-4 border-[#8B3A2B] pl-8 py-2 italic">
                  "We didn't start with a factory. We started with just 15 suits and a commitment to quality that actually sells."
                </p>
                <p>
                  In 2008, those first 15 pieces took 20 days to sell. Those 20 days taught us more about fabric, finishing, and buyer psychology than any textbook ever could.
                </p>
                <p>
                  Today, we move <strong>2000+ pieces every 20 days</strong> across 5+ states. We don't just supply stock; we provide market-tested data and quality that keeps your customers coming back.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {[
                {
                  v: "15+",
                  l: "Years Manufacturing",
                  c: "text-blue-600",
                  i: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M3 21h18" /><path d="M9 8h10" /><path d="M9 12h10" /><path d="M9 16h10" /><path d="M4 4v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z" /><path d="M9 4v4" />
                    </svg>
                  )
                },
                {
                  v: "1000+",
                  l: "Wholesale Buyers",
                  c: "text-emerald-600",
                  i: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )
                },
                {
                  v: "1500+",
                  l: "Pieces per 20 days",
                  c: "text-orange-600",
                  i: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  )
                },
                {
                  v: "5+",
                  l: "States Served",
                  c: "text-red-600",
                  i: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  )
                }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                    {/* Scalloped Frame */}
                    <div className={`absolute inset-0 ${stat.c} opacity-10`}>
                      <svg viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 0 C55 10 65 10 70 15 C80 20 85 30 85 40 C85 50 95 55 95 65 C95 75 85 85 75 85 C65 85 60 95 50 95 C40 95 35 85 25 85 C15 85 5 75 5 65 C5 55 15 50 15 40 C15 30 20 20 30 15 C35 10 45 10 50 0" />
                      </svg>
                    </div>
                    <div className={`absolute inset-0 ${stat.c} opacity-5 group-hover:rotate-45 transition-transform duration-1000`}>
                      <svg viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 0 C55 10 65 10 70 15 C80 20 85 30 85 40 C85 50 95 55 95 65 C95 75 85 85 75 85 C65 85 60 95 50 95 C40 95 35 85 25 85 C15 85 5 75 5 65 C5 55 15 50 15 40 C15 30 20 20 30 15 C35 10 45 10 50 0" />
                      </svg>
                    </div>
                    {/* Vivid Icon */}
                    <div className={`relative z-10 ${stat.c}`}>
                      {stat.i}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-[#5A2A1F] leading-tight">{stat.v}</span>
                    <span className="text-xs md:text-sm uppercase font-black text-[#8B3A2B] tracking-[0.2em]">{stat.l}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT BUYERS SAY SECTION ── */}
        <section className="py-32 px-6 md:px-20 bg-[#E8D9C0] relative overflow-hidden border-y border-[#5A2A1F]/5">
          <div className="absolute inset-0 bg-pattern opacity-[0.04]"></div>
          <div className="max-w-4xl mx-auto flex flex-col gap-16 relative z-10">
            <div className="text-center flex flex-col gap-5">
              <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Real Buyers. Real Results.</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium text-[#5A2A1F]">What Buyers Say</h2>
            </div>

            <div className="bg-[#F5F1EC]/90 backdrop-blur-xl p-8 md:p-12 rounded-[50px] shadow-[0_50px_100px_rgba(90,42,31,0.15)] border border-white relative">
              <div className="flex items-center gap-4 mb-10 px-4">
                <div className="w-4 h-4 rounded-full bg-green-500 shadow-inner animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-[0.2em] opacity-40">WhatsApp Verified Testimonials</span>
              </div>

              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {[
                    { n: "Sakshi Suit Collection", role: "Retail Partner", loc: "WhatsApp Verified", text: "Mil gye suit bhaiya bhut ache hai", t: "9:41 PM", c: "SS" },
                    { n: "Danish Khan", role: "Wholesale Buyer", loc: "WhatsApp Verified", text: "Parsal recieved hogya hme ..bhut ache h suit ...shukriya", t: "3:27 PM", c: "DK" },
                    { n: "Rubi Khan", role: "Boutique Owner", loc: "WhatsApp Verified", text: "Suit received. Good quality. Thanku so much", t: "3:03 PM", c: "RK" },
                    { n: "Azba Ruhin", role: "Reseller", loc: "WhatsApp Verified", text: "Parcel received. Good quality product. I like it", t: "12:33 AM", c: "AR" }
                  ].map((chat, i) => (
                    <div key={i} className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-10 px-4">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <div className="absolute inset-0 bg-[#5A2A1F] rounded-full blur-2xl opacity-20"></div>
                        <div className="relative w-full h-full rounded-full bg-[#5A2A1F]/10 flex items-center justify-center font-black text-3xl text-[#5A2A1F] overflow-hidden">
                          <span className="blur-sm">{chat.c}</span>
                          <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                            <span className="font-black text-2xl text-[#5A2A1F]">{chat.n}</span>
                            <span className="text-[10px] bg-[#8B3A2B]/10 px-3 py-1 rounded-full text-[#8B3A2B] font-black uppercase tracking-[0.2em] border border-[#8B3A2B]/20">{chat.role}</span>
                          </div>
                        </div>
                        <p className="text-2xl md:text-3xl font-medium leading-relaxed text-[#5A2A1F] italic max-w-2xl font-playfair">&quot;{chat.text}&quot;</p>
                        <div className="flex items-center justify-between text-[10px] font-black opacity-30 mt-4 uppercase tracking-[0.3em] pb-6 border-b border-[#5A2A1F]/10">
                          <span>{chat.loc}</span>
                          <div className="flex items-center gap-2"><span>{chat.t}</span><span className="text-blue-500 text-base">✓✓</span></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center md:justify-end gap-4 mt-10">
                <button
                  onClick={() => setActiveIndex(prev => (prev === 0 ? 3 : prev - 1))}
                  className="w-14 h-14 rounded-full border border-[#5A2A1F]/10 flex items-center justify-center text-[#5A2A1F] hover:bg-[#5A2A1F] hover:text-white transition-all group"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={() => setActiveIndex(prev => (prev === 3 ? 0 : prev + 1))}
                  className="w-14 h-14 rounded-full border border-[#5A2A1F]/10 flex items-center justify-center text-[#5A2A1F] hover:bg-[#5A2A1F] hover:text-white transition-all group"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8 md:hidden">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all ${activeIndex === i ? 'bg-[#5A2A1F] w-6' : 'bg-[#5A2A1F]/20'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BUYER PSYCHOLOGY SECTION ── */}
        <section className="py-32 px-6 bg-[#F5F1EC]">
          <div className="max-w-7xl mx-auto flex flex-col gap-20">
            <div className="text-center flex flex-col gap-6 max-w-5xl mx-auto">
              <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Buyer Psychology</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium text-[#5A2A1F]">Why Smart Retailers Prefer Our Batik Fabric</h2>
              <p className="text-lg md:text-2xl text-[#5A2A1F]/70 font-medium leading-relaxed italic">
                You are not just buying Batik Cloth. You are choosing fast-moving demand, trusted quality, and repeat buyers looking for stylish women clothing, breathable cotton cloth, and premium everyday wear.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  t: "SELLS EVERYWHERE",
                  d: "Popular across boutiques, resellers, and local markets for stylish ladies cloth collections with broad customer appeal.",
                  i: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                    </svg>
                  )
                },
                {
                  t: "DAILY WEAR DEMAND",
                  d: "Soft batik fabric prints and breathable cotton cloth make it ideal for regular wear, office wear, and everyday comfort.",
                  i: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  )
                },
                {
                  t: "STABLE SALES",
                  d: "Classic printed batik fabric performs beyond trends because comfort-driven fashion sells in every season.",
                  i: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m17 2 4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                    </svg>
                  )
                },
                {
                  t: "EASY TO CUSTOMIZE",
                  d: "Perfect for stitched suits, modern plus size clothing, and tailored plus size womens clothing collections.",
                  i: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.47 14.48a6 6 0 1 1 5.05-5.05" /><path d="M8.12 8.12 12 12" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="m8.12 8.12 3.19 3.19" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-[#5A2A1F]/5 text-center flex flex-col items-center gap-6 group">
                  <div className="w-16 h-16 bg-[#5A2A1F] text-white rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">{item.i}</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#5A2A1F]">{item.t}</h3>
                  <p className="text-lg opacity-60 font-medium leading-relaxed text-[#5A2A1F]">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="bg-[#E8D9C0] px-12 py-8 rounded-[40px] border border-[#5A2A1F]/10 shadow-sm inline-block max-w-4xl">
                <p className="text-2xl md:text-3xl font-bold italic text-[#5A2A1F] text-center">
                  &quot;You are not selling fabric. You are selling comfort, confidence, and repeat demand.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW TO ORDER SECTION ── */}
        <section className="py-40 px-6 bg-[#E8D9C0]/50 relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-24 relative z-10">
            <div className="text-center flex flex-col gap-8">
              <span className="text-sm font-black text-[#8B3A2B] uppercase tracking-[0.5em] mb-2 block">Simple Process</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium text-[#5A2A1F] leading-tight">How to Order Batik Cloth Online</h2>
              <p className="text-xl md:text-2xl text-[#5A2A1F]/70 font-medium italic max-w-4xl mx-auto leading-relaxed">
                Five simple steps. Zero confusion. Fast delivery of premium batik fabric, Batik Cloth, trending batik color collections, and quality cotton cloth across India.
              </p>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
              {/* Connector Line (Desktop) */}
              <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[3px] bg-[#5A2A1F]/5 z-0"></div>

              {[
                {
                  s: "01", t: "Browse Designs",
                  d: "Explore latest batik fabric prints with fresh collections of batik cloth design, and ready-to-sell styles in premium women clothing demand.",
                  i: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                    </svg>
                  )
                },
                {
                  s: "02", t: "Select Quantity",
                  d: "Choose required pieces for retail, boutique stock, or bulk orders in quality cotton cloth and ladies cloth collections.",
                  i: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                    </svg>
                  )
                },
                {
                  s: "03", t: "Contact on WhatsApp",
                  d: "Send your selected designs directly for quick support, stock updates, and easy buying assistance.",
                  i: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
                    </svg>
                  )
                },
                {
                  s: "04", t: "Get Bulk Pricing",
                  d: "Receive wholesale rates for printed batik fabric, reseller orders, and custom quantity requirements.",
                  i: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2 2 0 0 0-2.8 0L2.7 5.9a2 2 0 0 0 0 2.8L7 13" /><path d="m19 11-4 4" /><path d="m21 15-4.5 4.5a2 2 0 0 1-2.8 0L10 15.8" /><circle cx="16" cy="16" r="2" />
                    </svg>
                  )
                },
                {
                  s: "05", t: "Fast Dispatch",
                  d: "Your order is packed securely and shipped quickly across India through trusted courier partners.",
                  i: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  )
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-10 lg:w-1/5 relative z-10">
                  <div className="w-28 h-28 p-8 bg-white rounded-[40px] shadow-2xl flex items-center justify-center text-5xl hover:scale-110 hover:-rotate-6 transition-all duration-500 cursor-default border border-white relative group">
                    <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#8B3A2B] text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg">{step.s}</span>
                    {step.i}
                  </div>
                  <div className="flex flex-col gap-4 px-2">
                    <h4 className="text-3xl font-black tracking-tight text-[#5A2A1F] leading-tight">{step.t}</h4>
                    <p className="text-xl text-[#5A2A1F]/60 font-medium leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-[#5A2A1F] text-white px-12 py-6 rounded-3xl font-black text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest group">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.485l-.719 2.624 2.688-.705c.95.514 2.035.804 3.19.803 3.181 0 5.767-2.584 5.768-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.2l-1.006 1.005c-.122.122-.318.159-.477.087-.514-.232-1.02-.555-1.504-1.039-.485-.484-.807-.989-1.039-1.504-.072-.159-.035-.355.087-.477l1.005-1.006c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0l-.798.797c-.506.507-.639 1.243-.374 1.874.457 1.087 1.214 2.064 2.223 3.073 1.009 1.009 1.986 1.766 3.073 2.223.631.265 1.367.132 1.874-.374l.797-.798c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0z" />
                </svg>
                <span>Start Your Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── BANNER + CATALOG LEAD GEN ── */}

        <section className="bg-[#5A2A1F] py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 rounded-3xl bg-white/15 flex items-center justify-center text-white text-3xl shadow-inner shadow-white/20">⚡</div>
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-playfair text-3xl md:text-4xl font-bold">Fast-Moving Designs. Stock Updates Regularly.</h3>
                <p className="text-white/50 text-base md:text-xl font-medium tracking-tight">Bulk buyers get priority dispatch. Don&apos;t wait for restock cycles.</p>
              </div>
            </div>
            <a href={WA} className="bg-white text-[#5A2A1F] px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)] uppercase tracking-widest flex-shrink-0">
              Enquire Now →
            </a>
          </div>
        </section>

        <FAQ />
        <LeadGenerationForm />
        <StickyEnquiryButton />
      </div>
    </div>
  );
}