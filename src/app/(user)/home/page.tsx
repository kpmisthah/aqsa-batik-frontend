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
import HowToOrderSection from "@/modules/user/components/HowToOrderSection";
import { useBanner } from "@/modules/user/hooks/useBanner";
import { useScrollAnimation } from "@/modules/user/hooks/useScrollAnimation";
import ScrollIndicator from "@/modules/user/components/ScrollIndicator";
import ScrollObserver from "@/modules/user/components/ScrollObserver";



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
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-cream text-primary font-heading selection:bg-primary selection:text-white scroll-smooth">


      <Nav />
      <ScrollObserver />

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
        <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 pt-20 md:pt-0 w-full flex justify-center md:justify-start text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-6 md:gap-10 items-center md:items-start text-center md:text-left max-w-5xl w-full">
            <div className="flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-white/20">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-tan animate-pulse"></span>
              <span className="font-heading text-[8px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white">DIRECT WAX BATIK MANUFACTURER FROM UJJAIN</span>
            </div>

            <div className="flex flex-col gap-2 md:gap-6 w-full">
              <h1 className="text-h1">
                <span className="hidden md:block whitespace-nowrap">
                  Premium <span className='text-accent'>Batik Designs</span><br />
                  That Turn <span className='text-accent'>Attention</span><br />
                  Into <span className='text-accent'>Orders</span>
                </span>
                <span className="block md:hidden">
                  Premium <span className='text-accent'>Batik Designs</span><br />
                  That Sell <span className='text-accent'>Faster</span>
                </span>
              </h1>
              <p className="text-body1 opacity-90 mt-2 md:mt-2 max-w-sm md:max-w-2xl text-white/90 text-center md:text-left mx-auto md:mx-0">
                Shop stylish women clothing, breathable cotton dresses for women, and premium batik fabric collections trusted by boutiques, wholesalers, and resellers across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-2 md:pt-10 items-center md:items-start justify-center md:justify-start w-full">
              <a href="#collection" className="inline-block bg-accent text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl hover:brightness-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto">
                Shop Now
              </a>
              <a href={WA} target="_blank" rel="noreferrer" className="inline-block border border-white/40 text-white hover:bg-white hover:text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto">
                Get Wholesale Catalog
              </a>
            </div>

          </div>
        </div>
        <ScrollIndicator />
      </section>

      <GoogleReviewBar />

      <TrendingProductsSection />

      <PremiumTrustSection />

      <NewArrivalsSection />

      <div className="bg-pattern">
        {/* ── COLLECTION SECTION ── */}
        <section id="collection" className="pt-12 pb-24 md:pt-16 md:pb-32 border-b border-primary/5">
          <div className="max-w-[1500px] mx-auto px-6 md:px-12">
            <div className="text-center mb-12 md:mb-20 flex flex-col gap-3 md:gap-5">
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
        <section className="scroll-animate bg-tan py-16 md:py-32 px-6 relative overflow-hidden">
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
                <h2 className="text-h2 text-primary">The Journey Behind <br /> AQSHA BATIK SUITS</h2>
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
        <section className="scroll-animate py-12 px-6 md:px-20 bg-tan relative overflow-hidden border-y border-primary/5">
          <div className="absolute inset-0 bg-pattern opacity-[0.04]"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Column: Text & Stats */}
            <div className="flex flex-col gap-6 md:gap-10 text-left">
              <div className="flex flex-col gap-3 md:gap-5 items-center lg:items-start text-center lg:text-left">
                <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.4em]">Real Buyers. Real Results.</span>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1]">Don't Just Take <br className="hidden lg:block" /> Our Word For It.</h2>
                <div className="bg-white/40 backdrop-blur-md border border-white/60 p-5 md:p-6 rounded-2xl shadow-sm text-left mt-4 mb-2 lg:mx-0 w-full max-w-xl self-center lg:self-start">
                  <div className="flex gap-4 md:gap-5 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                    </div>
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed">
                        Over 1,000+ retail partners, boutique owners, and online resellers trust our batik and cotton fabric every day. Swipe through raw, unedited feedback directly from our WhatsApp orders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 mt-2 md:mt-4">
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <span className="text-4xl md:text-5xl font-black text-primary font-heading">4.9/5</span>
                  <span className="text-[9px] md:text-[11px] font-black text-secondary uppercase tracking-[0.2em]">Average Rating</span>
                </div>
                <div className="w-px h-10 md:h-14 bg-primary/20"></div>
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <span className="text-4xl md:text-5xl font-black text-primary font-heading">10k+</span>
                  <span className="text-[9px] md:text-[11px] font-black text-secondary uppercase tracking-[0.2em]">Orders Delivered</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Device Hero */}
            <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-[380px] mx-auto w-full lg:mr-4 flex justify-center items-center mt-6 lg:mt-0">

              {/* Ambient Spotlight & Glow Behind Phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[120%] bg-white/60 blur-[120px] rounded-full z-0 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[90%] h-[90%] bg-secondary/15 blur-[90px] rounded-full z-0 pointer-events-none"></div>

              {/* Floating Trust Badges */}
              <div className="absolute -left-6 md:-left-12 top-16 md:top-24 bg-white/80 backdrop-blur-xl border border-white/60 p-3 md:p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-20 animate-[float_6s_ease-in-out_infinite] ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1.5 border-r border-primary/10 pr-3">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500 fill-amber-500 drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <span className="text-[11px] md:text-sm font-black text-primary tracking-wide">5.0</span>
                </div>
              </div>

              <div className="absolute -right-4 md:-right-10 bottom-24 md:bottom-32 bg-white/80 backdrop-blur-xl border border-white/60 p-3 md:p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-20 animate-[float_8s_ease-in-out_infinite_reverse] ring-1 ring-black/5">
                <div className="flex items-center gap-2.5 md:gap-3">
                  <div className="bg-green-100 p-1.5 rounded-full shadow-inner">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  </div>
                  <span className="text-[9px] md:text-xs font-black uppercase text-primary tracking-[0.15em] hidden sm:block">Verified</span>
                </div>
              </div>

              {/* Glass Device Frame */}
              <div className="relative w-full aspect-[9/19] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[10px] border-[#222] shadow-[0_40px_100px_rgba(26,26,26,0.3)] bg-[#050505] ring-1 ring-white/10 z-10 transition-transform duration-700 hover:scale-[1.02]">

                {/* Inner Screen Bezel Highlight */}
                <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.4rem] border border-white/10 pointer-events-none z-50"></div>

                {/* Notch / Dynamic Island */}
                <div className="absolute top-0 inset-x-0 h-6 md:h-8 bg-[#050505] z-30 flex justify-center w-[35%] mx-auto rounded-b-2xl md:rounded-b-3xl shadow-[0_5px_10px_rgba(0,0,0,0.3)]"></div>

                <div className="overflow-hidden w-full h-full relative"
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
                    className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
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
                      <div key={i} className="w-full h-full flex-shrink-0 relative bg-[#E5DDD5]">
                        <Image priority={i === 0} src={src} alt={`WhatsApp Testimonial ${i + 1}`} layout="fill" objectFit="cover" className="hover:scale-[1.05] transition-transform duration-[2.5s] ease-out opacity-90" />

                        {/* Privacy Blur Overlay for the top header */}
                        <div className="absolute top-6 md:top-8 left-0 right-0 h-10 md:h-12 bg-black/70 backdrop-blur-xl z-20 flex items-center justify-center border-b border-white/5 shadow-2xl">
                          <div className="flex items-center gap-1.5 md:gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                            <span className="text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.25em] font-sans">
                              Identity Protected
                            </span>
                          </div>
                        </div>

                        {/* Bottom fade for chat app realism */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Overlapping Slider Controls */}
                <div className="absolute bottom-5 md:bottom-7 left-0 right-0 flex justify-center gap-4 md:gap-6 z-40">
                  <button
                    type="button"
                    onTouchStart={(e) => { e.preventDefault(); setActiveIndex(prev => (prev === 0 ? 5 : prev - 1)); }}
                    onClick={() => setActiveIndex(prev => (prev === 0 ? 5 : prev - 1))}
                    className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-2xl border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#222] hover:scale-110 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] active:scale-95 group"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100"><path d="m15 18-6-6 6-6" /></svg>
                  </button>
                  <button
                    type="button"
                    onTouchStart={(e) => { e.preventDefault(); setActiveIndex(prev => (prev === 5 ? 0 : prev + 1)); }}
                    onClick={() => setActiveIndex(prev => (prev === 5 ? 0 : prev + 1))}
                    className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-2xl border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#222] hover:scale-110 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] active:scale-95 group"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100"><path d="m9 18 6-6-6-6" /></svg>
                  </button>
                </div>

                {/* Dots inside device */}
                <div className="absolute bottom-20 md:bottom-28 left-0 right-0 flex justify-center gap-1.5 md:hidden z-40">
                  {[0, 1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${activeIndex === i ? 'bg-white w-5' : 'bg-white/40 w-1.5'}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUYER PSYCHOLOGY SECTION ── */}
        <section className="scroll-animate py-12 md:py-20 px-6 bg-cream">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-3 md:gap-4 max-w-4xl mx-auto w-full">
              <div className="text-center flex flex-col gap-2 md:gap-4 items-center">
                <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.4em]">Why Retailers Reorder</span>
                <h2 className="font-heading text-xl md:text-3xl font-semibold text-primary text-center leading-snug">Why Smart Sellers Prefer <br className="block md:hidden" /> Our Batik Fabric Collections</h2>
              </div>
              <p className="text-lg md:text-xl text-primary font-medium leading-relaxed text-center mt-2">
                You are not just buying batik cloth. You are investing in women&apos;s clothing collections built around repeat demand, breathable comfort, stable quality, and wearable batik fabric styles that customers genuinely come back to buy again and again.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
              {[
                {
                  t: "Sells Everywhere",
                  d: "Works across boutiques, marketplaces, resellers, and ethnic women clothing stores.",
                  b: "Global Appeal",
                  i: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                    </svg>
                  )
                },
                {
                  t: "Daily Wear Demand",
                  d: "Breathable cotton fabric designed for Indian weather and regular everyday wear.",
                  b: "Everyday Comfort",
                  i: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  )
                },
                {
                  t: "Stable Sales",
                  d: "Classic batik print designs continue performing across seasons and fashion cycles.",
                  b: "Evergreen Designs",
                  i: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m17 2 4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                    </svg>
                  )
                },
                {
                  t: "Easy to Customize",
                  d: "Ideal for kurtis, suits, plus size clothing, and stitched women dress collections.",
                  b: "Versatile Fabric",
                  i: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.47 14.48a6 6 0 1 1 5.05-5.05" /><path d="M8.12 8.12 12 12" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="m8.12 8.12 3.19 3.19" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-between text-center p-5 md:p-8 bg-white rounded-[16px] md:rounded-[24px] border border-primary/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group h-full gap-4">
                  <div className="scale-90 md:scale-100 origin-center text-primary">{item.i}</div>
                  <h3 className="text-sm md:text-xl font-bold font-heading text-primary leading-tight px-1">{item.t}</h3>
                  <p className="text-xs md:text-sm text-primary/80 font-medium leading-relaxed mb-2 md:mb-6">{item.d}</p>

                  <span className="mt-auto text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-secondary flex flex-wrap items-center justify-center gap-1.5 transition-colors">
                    <span>{item.b}</span>
                    <span className="text-lg leading-none">&rarr;</span>
                  </span>
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

        <HowToOrderSection
          title="How To Order Batik Fabric Online"
          whatsappLink={WA}
          tag="Simple Wholesale Process"
          subtitle="Simple process. Fast dispatch. Wholesale-ready batik cloth and premium women clothing online collections delivered across India."
        />

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