"use client";
import { useState } from "react";
import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import LeadGenerationForm from "@/modules/user/components/LeadGenerationForm";
import TrendingProductsSection from "@/modules/user/components/TrendingProductsSection";
import NewArrivalsSection from "@/modules/user/components/NewArrivalsSection";
import StickyEnquiryButton from "@/modules/user/components/StickyEnquiryButton";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import { useBanner } from "@/modules/user/hooks/useBanner";



const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20the%20wholesale%20catalogue";
const C = {
  cream: "#E5E0D8",
  tan: "#E5E0D8",
  gold: "#8A9A86",
  brown: "#1A1A1A",
  white: "#FFFFFF",
  rust: "#1A1A1A",
  red: "#B02A2A",
};

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const heroBanner = useBanner('home', '/full_hero_new.png');

  return (
    <div className="min-h-screen bg-cream text-primary font-heading selection:bg-primary selection:text-white scroll-smooth">
      <style>{`
        .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
      `}</style>

      <Nav />

      {/* ── FULL SCREEN HERO SECTION ── */}
      <section className="relative min-h-[60svh] md:h-[95vh] md:min-h-[750px] w-full flex items-end md:items-center pb-8 md:pb-0 overflow-hidden bg-primary">
        {/* Background Image - Covered screen */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBanner}
            alt="Batik Fashion Model"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top md:object-[center_20%] brightness-[0.8] contrast-[1.1]"
          />
          {/* Professional Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/90 md:from-black/40 md:via-transparent md:to-black/60"></div>
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Subtle Grain Texture for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        {/* Left Aligned Content */}
        <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 w-full flex justify-start text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-4 md:gap-10 items-start text-left max-w-5xl w-full">
            <div className="flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-white/20">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-tan animate-pulse"></span>
              <span className="font-heading text-[8px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white">DIRECT WAX BATIK MANUFACTURER FROM UJJAIN</span>
            </div>

            <div className="flex flex-col gap-2 md:gap-6">
              <h1 className="text-h1">
                <span className="hidden md:block">
                  Premium <span className='text-accent'>Batik Designs</span><br />
                  That Turn <span className='text-accent'>Attention</span> Into <span className='text-accent'>Orders</span>
                </span>
                <span className="block md:hidden">
                  Premium <span className='text-accent'>Batik</span> <span className='text-accent'>Designs</span><br />
                  That Sell <span className='text-accent'>Faster</span>
                </span>
              </h1>
              <p className="text-h3 opacity-90 mt-1 md:mt-2 max-w-[280px] md:max-w-5xl text-white/90">
                Shop stylish women clothing, breathable cotton dresses for women, and premium batik fabric collections trusted by boutiques, wholesalers, and resellers across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-2 md:pt-10 items-start md:items-center justify-start w-full">
              <a href="#collection" className="inline-block bg-accent text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl hover:brightness-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto">
                Shop Now
              </a>
              <a href={WA} target="_blank" rel="noreferrer" className="inline-block border border-white/40 text-white hover:bg-white hover:text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto">
                Get Wholesale Catalog
              </a>
            </div>

          </div>
        </div>
      </section>

      <GoogleReviewBar />

      <TrendingProductsSection />

      <PremiumTrustSection />

      <NewArrivalsSection />

      <div className="bg-pattern">
        {/* ── COLLECTION SECTION ── */}
        <section id="collection" className="pt-12 pb-24 md:pt-16 md:pb-32 border-b border-primary/5">
          <div className="max-w-[1500px] mx-auto px-6 md:px-12">
            <div className="text-left md:text-center mb-12 md:mb-20 flex flex-col gap-3 md:gap-5">
              <div className="w-full text-center">
                <span className="text-overline tracking-[0.4em] text-secondary">Curated For Daily Demand</span>
              </div>
              <h2 className="text-h2 text-primary max-w-4xl mx-auto leading-tight">Explore Best-Selling Batik Fabric & Women Clothing Collections</h2>
              <p className="text-body1 text-neutral-900/90 max-w-3xl mx-auto italic">
                Discover breathable cotton dresses for women, premium batik cloth, and stylish women clothing collections designed for boutiques, resellers, marketplaces, and everyday fashion demand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {[
                { t: "Batik Printed Cotton Cloth", b: "Best Seller", d: "Breathable cotton fabric crafted for comfort, repeat sales, and everyday women's fashion.", l: "/cotton-cloth", img: "/cat_batik_cloth.webp" },
                { t: "Wholesale Women Dresses", b: "Bulk Saving", d: "Bulk-ready women clothing collections with stable quality and faster turnover.", l: "/fabric-wholesale", img: "/cat_wholesale.webp" },
                { t: "New Arrival Batik Collection", b: "Trending", d: "Fresh batik design collections inspired by modern Indian dress fashion trends.", l: "/new-batik-prints", img: "/cat_new_arrival.webp" }
              ].map((item, i) => (
                <a key={i} href={item.l} className="group cursor-pointer block">
                  <div className="relative w-full aspect-[4/5] md:aspect-[2/3] overflow-hidden rounded-[24px] md:rounded-[40px] bg-primary/5 shadow-2xl">
                    <Image src={item.img} alt={item.t} layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-105 transition-transform duration-[2s] ease-out brightness-[0.95] group-hover:brightness-100" />

                    {/* Dark gradient overlay restricted to bottom for text readability */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Text Overlay pinned to the center bottom */}
                    <div className="absolute bottom-8 md:bottom-12 left-0 right-0 text-white flex flex-col items-center text-center gap-2 md:gap-3 px-4 w-full">
                      <h4 className="font-heading text-xl md:text-3xl font-medium tracking-wide drop-shadow-lg">{item.t}</h4>
                      <span className="text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-white/90 drop-shadow-md pb-1 border-b border-transparent group-hover:border-white transition-all">SHOP NOW</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 md:mt-20 text-center">
              <a href={WA} className="inline-block bg-primary text-white px-8 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg shadow-[0_20px_50px_rgba(90,42,31,0.2)] hover:bg-black transition-all uppercase tracking-widest">
                Request Full WhatsApp Catalog
              </a>
            </div>
          </div>
        </section>

        {/* ── TARGET AUDIENCE SECTION ── */}
        <section className="bg-tan py-16 md:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
          <div className="max-w-[1500px] mx-auto text-center flex flex-col gap-16 md:gap-24 relative z-10 px-6 md:px-12">
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="text-overline tracking-[0.4em] text-secondary">Engineered For Partners</span>
              <h2 className="text-h2 text-primary">If You Sell Women Clothing, <br className="hidden md:block" /> This Is Built For You</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  t: "Boutique Owners", d: "Premium women clothing collections that refresh your shelves and increase repeat walk-ins.", b: "Fast Moving Designs",
                  i: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="16" height="20" x="4" y="2" rx="0" ry="0" />
                      <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
                    </svg>
                  )
                },
                {
                  t: "Resellers", d: "Better pricing, stable stock updates, and fast-moving batik fabric collections customers actually buy.", b: "Better Margins",
                  i: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2 3 6v14h18V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  )
                },
                {
                  t: "Wholesalers", d: "Bulk batik cloth manufacturing with consistent finishing and dependable quality control.", b: "Bulk Consistency",
                  i: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 8l-9-5-9 5v8l9 5 9-5Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
                    </svg>
                  )
                },
                {
                  t: "Marketplace Sellers", d: "Trending batik suit designs optimized for Amazon, Flipkart, Meesho, and Instagram selling.", b: "Trending Stock",
                  i: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="20" x="5" y="2" rx="0" ry="0" /><path d="M12 18h.01" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 md:p-10 bg-white rounded-[24px] border border-primary/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                  {item.i}
                  <div className="flex flex-col gap-3 md:gap-4 flex-grow">
                    <h4 className="text-h3 text-primary">{item.t}</h4>
                    <p className="text-body2 text-neutral-900/80 max-w-[280px] mx-auto">{item.d}</p>
                  </div>
                  <a href={WA} className="mt-8 text-overline text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1 flex items-center gap-2 group-hover:-translate-y-1">
                    {item.b} &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR STORY SECTION ── */}
        <section id="about" className="py-16 md:py-24 px-6 md:px-12 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] md:shadow-[0_30px_60px_rgba(0,0,0,0.2)] relative aspect-[4/3] md:aspect-square border-[6px] md:border-[16px] border-white transition-all duration-700 group-hover:scale-[1.02]">
              <Image src="/beautiful dresses for women image.webp" alt="Ujjain Roots" layout="fill" objectFit="cover" className="hover:scale-110 transition-all duration-[3s] brightness-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white/10 backdrop-blur-xl p-4 md:p-8 rounded-[20px] md:rounded-3xl border border-white/20 shadow-2xl text-white">
                <span className="text-h2 text-white block leading-none drop-shadow-md">Est. 2008</span>
                <span className="text-overline tracking-[0.4em] text-white/80 mt-2 block drop-shadow-md">Founders in Ujjain</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="flex flex-col gap-6 md:gap-10 order-1 lg:order-2">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2 md:gap-4 text-center md:text-left items-center md:items-start">
                <span className="text-overline tracking-[0.4em] text-secondary">From Handmade Batik To Trusted Women Fashion Supply</span>
                <h2 className="text-h2 text-primary">The Journey Behind <br className="hidden md:block" /> AQSHA BATIK SUITS</h2>
              </div>
              <div className="flex flex-col gap-4 md:gap-5 text-body1 text-neutral-900/90 leading-relaxed font-medium max-w-xl text-left">
                <p className="border-l-[3px] md:border-l-4 border-secondary pl-4 md:pl-8 py-1 md:py-2 italic">
                  From 15 handmade suits for women in Bherugarh, Ujjain to supplying wholesalers, boutiques, and resellers across India—this journey was built on consistency, correction, and understanding what women actually want to wear.
                </p>
                <p>
                  In 2008, those first 15 pieces took 20 days to sell. Those 20 days taught us more about fabric, finishing, and buyer psychology than any textbook ever could.
                </p>
                <p>
                  Today, we move <strong className="font-bold text-primary">2000+ pieces every 20 days</strong> across 5+ states. We don't just supply stock; we provide market-tested data and quality that keeps your customers coming back.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-4 md:mt-8">
              {[
                {
                  v: "15+",
                  l: "Years Manufacturing",
                  c: "text-blue-600",
                  i: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                      <path d="M3 21h18" /><path d="M9 8h10" /><path d="M9 12h10" /><path d="M9 16h10" /><path d="M4 4v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z" /><path d="M9 4v4" />
                    </svg>
                  )
                },
                {
                  v: "1000+",
                  l: "Wholesale Buyers",
                  c: "text-emerald-600",
                  i: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )
                },
                {
                  v: "1500+",
                  l: "Pieces per 20 days",
                  c: "text-orange-600",
                  i: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  )
                },
                {
                  v: "5+",
                  l: "States Served",
                  c: "text-red-600",
                  i: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  )
                }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-5 group">
                  <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                    <div className="absolute inset-0 bg-primary/5 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className={`relative z-10 ${stat.c} w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:scale-110 duration-300`}>
                      {stat.i}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-h3 text-primary leading-tight">{stat.v}</span>
                    <span className="text-overline text-secondary opacity-70 mt-1">{stat.l}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT BUYERS SAY SECTION ── */}
        <section className="py-12 px-6 md:px-20 bg-tan relative overflow-hidden border-y border-primary/5">
          <div className="absolute inset-0 bg-pattern opacity-[0.04]"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center relative z-10">
            {/* Left Column: Text & Stats */}
            <div className="flex flex-col gap-6 md:gap-8 text-left">
              <div className="flex flex-col gap-3 md:gap-4 items-center lg:items-start text-center lg:text-left">
                <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.4em]">Real Buyers. Real Results.</span>
                <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">Don't Just Take <br className="hidden lg:block" /> Our Word For It.</h2>
                <p className="text-[13px] md:text-base lg:text-lg text-primary/70 font-medium leading-relaxed max-w-xl mx-0 lg:mx-0 text-left mt-1 md:mt-2">
                  Over 1,000+ retail partners, boutique owners, and online resellers trust our batik and cotton fabric every day. Swipe through raw, unedited feedback directly from our WhatsApp orders.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-6 md:gap-8 mt-1 md:mt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-black text-primary">4.9/5</span>
                  <span className="text-[9px] md:text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Average Rating</span>
                </div>
                <div className="w-px h-8 md:h-10 bg-primary/10"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-black text-primary">10k+</span>
                  <span className="text-[9px] md:text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Orders Delivered</span>
                </div>
              </div>
            </div>

            {/* Right Column: Slider */}
            <div className="bg-cream/90 backdrop-blur-xl p-4 md:p-8 rounded-[24px] md:rounded-[40px] shadow-[0_20px_40px_rgba(90,42,31,0.15)] md:shadow-[0_30px_60px_rgba(90,42,31,0.15)] border border-white relative max-w-[320px] md:max-w-md mx-auto w-full lg:mr-0">
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mb-4 md:mb-6 px-1 md:px-2">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500 shadow-inner animate-pulse"></div>
                <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] opacity-40">WhatsApp Verified Testimonials</span>
              </div>

              <div className="overflow-hidden"
                onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
                onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
                onTouchEnd={() => {
                  if (!touchStart || !touchEnd) return;
                  const distance = touchStart - touchEnd;
                  if (distance > 50) setActiveIndex(prev => (prev === 5 ? 0 : prev + 1));
                  if (distance < -50) setActiveIndex(prev => (prev === 0 ? 5 : prev - 1));
                  setTouchStart(null);
                  setTouchEnd(null);
                }}
              >
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {[
                    "/WhatsApp Image 2026-06-10 at 1.15.20 PM.jpeg",
                    "/WhatsApp Image 2026-06-10 at 1.15.21 PM (1).jpeg",
                    "/WhatsApp Image 2026-06-10 at 1.15.21 PM (2).jpeg",
                    "/WhatsApp Image 2026-06-10 at 1.15.21 PM.jpeg",
                    "/WhatsApp Image 2026-06-10 at 1.15.22 PM (1).jpeg",
                    "/WhatsApp Image 2026-06-10 at 1.15.22 PM.jpeg"
                  ].map((src, i) => (
                    <div key={i} className="w-full flex-shrink-0 flex justify-center items-center px-2 md:px-4">
                      <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] aspect-[9/19] rounded-[20px] md:rounded-[30px] overflow-hidden border-[4px] md:border-[8px] border-white shadow-xl bg-tan">
                        <Image src={src} alt={`WhatsApp Testimonial ${i + 1}`} layout="fill" objectFit="cover" className="hover:scale-[1.02] transition-transform duration-500" />

                        {/* Privacy Blur Overlay for the top header */}
                        <div className="absolute top-0 left-0 right-0 h-[11%] bg-black/40 backdrop-blur-xl z-10 flex items-center justify-center border-b border-white/20 shadow-lg">
                          <div className="flex items-center gap-1.5 md:gap-2">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-white/90 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] drop-shadow-md">
                              Identity Protected
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center md:justify-end gap-3 mt-4 md:mt-6 relative z-50">
                <button
                  type="button"
                  onTouchStart={(e) => { e.preventDefault(); setActiveIndex(prev => (prev === 0 ? 5 : prev - 1)); }}
                  onClick={() => setActiveIndex(prev => (prev === 0 ? 5 : prev - 1))}
                  className="pointer-events-auto z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group shadow-md bg-white cursor-pointer active:scale-95"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                  type="button"
                  onTouchStart={(e) => { e.preventDefault(); setActiveIndex(prev => (prev === 5 ? 0 : prev + 1)); }}
                  onClick={() => setActiveIndex(prev => (prev === 5 ? 0 : prev + 1))}
                  className="pointer-events-auto z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group shadow-md bg-white cursor-pointer active:scale-95"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4 md:hidden">
                {[0, 1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all ${activeIndex === i ? 'bg-primary w-5' : 'bg-primary/20'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BUYER PSYCHOLOGY SECTION ── */}
        <section className="py-12 md:py-20 px-6 bg-cream">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-3 md:gap-4 max-w-4xl mx-auto w-full">
              <div className="text-center flex flex-col gap-2 md:gap-4 items-center">
                <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.4em]">Why Retailers Reorder</span>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary">Why Smart Sellers Prefer Our Batik Fabric Collections</h2>
              </div>
              <p className="text-[13px] md:text-lg text-primary/70 font-medium leading-relaxed italic text-left md:text-center mt-2">
                You are not just buying batik cloth. You are investing in women&apos;s clothing collections built around repeat demand, breathable comfort, stable quality, and wearable batik fabric styles that customers genuinely come back to buy again and again.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {[
                {
                  t: "SELLS EVERYWHERE",
                  d: "Works across boutiques, marketplaces, resellers, and ethnic women clothing stores.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                    </svg>
                  )
                },
                {
                  t: "DAILY WEAR DEMAND",
                  d: "Breathable cotton fabric designed for Indian weather and regular everyday wear.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  )
                },
                {
                  t: "STABLE SALES",
                  d: "Classic batik print designs continue performing across seasons and fashion cycles.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m17 2 4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                    </svg>
                  )
                },
                {
                  t: "EASY TO CUSTOMIZE",
                  d: "Ideal for kurtis, suits, plus size clothing, and stitched women dress collections.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.47 14.48a6 6 0 1 1 5.05-5.05" /><path d="M8.12 8.12 12 12" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="m8.12 8.12 3.19 3.19" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="p-4 md:p-8 bg-white rounded-[20px] md:rounded-[30px] shadow-sm hover:shadow-2xl transition-all border border-primary/5 text-center flex flex-col items-center gap-2 md:gap-4 group">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-primary text-white rounded-[12px] md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">{item.i}</div>
                  <h3 className="text-[11px] md:text-xl font-black uppercase tracking-tight text-primary leading-tight">{item.t}</h3>
                  <p className="text-[10px] md:text-base opacity-60 font-medium leading-snug md:leading-relaxed text-primary">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-2">
              <div className="bg-tan px-5 py-4 md:px-8 md:py-6 rounded-[20px] md:rounded-3xl border border-primary/10 shadow-sm inline-block max-w-3xl">
                <p className="text-[12px] md:text-xl font-bold italic text-primary text-center">
                  &quot;You are not selling fabric. You are selling repeat customer behavior.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW TO ORDER SECTION ── */}
        <section className="py-12 md:py-24 px-6 bg-tan/50 relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-16 relative z-10">
            <div className="flex flex-col gap-3 md:gap-4 max-w-4xl mx-auto w-full">
              <div className="text-center flex flex-col gap-1 md:gap-2 items-center">
                <span className="text-[10px] md:text-sm font-black text-secondary uppercase tracking-[0.5em] mb-1 block">Simple Wholesale Process</span>
                <h2 className="font-heading text-2xl md:text-4xl font-medium text-primary leading-tight">How To Order Batik Fabric Online</h2>
              </div>
              <p className="text-[13px] md:text-xl text-primary/70 font-medium italic mx-0 lg:mx-auto leading-relaxed text-left md:text-center mt-2">
                Simple process. Fast dispatch. Wholesale-ready batik cloth and premium women clothing online collections delivered across India.
              </p>
            </div>

            <div className="relative grid grid-cols-2 lg:flex lg:flex-row justify-between gap-6 md:gap-10 lg:gap-6 mt-2 md:mt-0">
              {/* Connector Line (Desktop) */}
              <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[3px] bg-primary/5 z-0"></div>

              {[
                {
                  s: "01", t: "Browse Designs",
                  d: "Explore latest batik print designs, cotton dresses for women, and fresh stock collections.",
                  i: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                    </svg>
                  )
                },
                {
                  s: "02", t: "Select Quantity",
                  d: "Choose pieces for retail stores, boutiques, wholesalers, or marketplace inventory.",
                  i: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                    </svg>
                  )
                },
                {
                  s: "03", t: "Connect On WhatsApp",
                  d: "Get pricing, stock updates, and personalized support instantly.",
                  i: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
                    </svg>
                  )
                },
                {
                  s: "04", t: "Receive Wholesale Pricing",
                  d: "Bulk pricing support based on order volume and business requirements.",
                  i: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2 2 0 0 0-2.8 0L2.7 5.9a2 2 0 0 0 0 2.8L7 13" /><path d="m19 11-4 4" /><path d="m21 15-4.5 4.5a2 2 0 0 1-2.8 0L10 15.8" /><circle cx="16" cy="16" r="2" />
                    </svg>
                  )
                },
                {
                  s: "05", t: "Fast Dispatch",
                  d: "Quick shipping across India through trusted logistics partners.",
                  i: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  )
                }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col items-center text-center gap-2 md:gap-4 lg:w-1/5 relative z-10 ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}>
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-[12px] md:rounded-[24px] shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-default border border-white relative group">
                    <span className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 w-5 h-5 md:w-6 md:h-6 bg-secondary text-white text-[8px] md:text-[9px] font-black rounded-full flex items-center justify-center shadow-md">{step.s}</span>
                    {step.i}
                  </div>
                  <div className="flex flex-col gap-1 md:gap-1.5 px-1 md:px-2">
                    <h4 className="text-[11px] md:text-lg font-black tracking-tight text-primary leading-tight">{step.t}</h4>
                    <p className="text-[9px] md:text-xs text-primary/70 font-medium leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 md:mt-12">
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 md:gap-4 bg-primary text-white px-4 py-3 md:px-10 md:py-5 rounded-xl md:rounded-3xl font-bold text-[11px] md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest group text-center">
                <svg className="w-4 h-4 md:w-6 md:h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.485l-.719 2.624 2.688-.705c.95.514 2.035.804 3.19.803 3.181 0 5.767-2.584 5.768-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.2l-1.006 1.005c-.122.122-.318.159-.477.087-.514-.232-1.02-.555-1.504-1.039-.485-.484-.807-.989-1.039-1.504-.072-.159-.035-.355.087-.477l1.005-1.006c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0l-.798.797c-.506.507-.639 1.243-.374 1.874.457 1.087 1.214 2.064 2.223 3.073 1.009 1.009 1.986 1.766 3.073 2.223.631.265 1.367.132 1.874-.374l.797-.798c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0z" />
                </svg>
                <span>Start Your Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── BANNER + CATALOG LEAD GEN ── */}

        <section className="bg-primary py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/15 flex items-center justify-center text-white text-xl md:text-2xl shadow-inner shadow-white/20">⚡</div>
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-heading text-xl md:text-2xl lg:text-3xl font-bold">Fast-Moving Batik Designs &bull; New Stock Added Weekly &bull; Bulk Dispatch Available</h3>
              </div>
            </div>
            <a href={WA} className="bg-white text-primary px-8 py-3.5 md:py-4 rounded-xl font-black text-sm md:text-base hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] uppercase tracking-widest flex-shrink-0">
              Enquire Now
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