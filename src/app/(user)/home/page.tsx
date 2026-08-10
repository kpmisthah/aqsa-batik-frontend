"use client";
import React, { useState, useRef } from "react";
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
import { ShopByCategorySection, FeaturedGridSection, LifestyleBannerSection, DualCategoryBannerSection, LookbookSection, PartnershipBannerSection } from "@/modules/user/components/VisualHomeSections";
import { useBanner } from "@/modules/user/hooks/useBanner";
import { useScrollAnimation } from "@/modules/user/hooks/useScrollAnimation";
import ScrollIndicator from "@/modules/user/components/ScrollIndicator";
import ShoppableReelsSection from "@/modules/user/components/ShoppableReelsSection";

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20the%20wholesale%20catalogue";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const heroBanner = '/batik_hero_model_ethnic.png'; // Bypassing DB dynamically loaded banner
  const sliderRef = useRef<HTMLDivElement>(null);
  useScrollAnimation();

  const handleScrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };
  const handleScrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-primary selection:text-white scroll-smooth flex flex-col font-sans">
      <Nav />

      {/* ── WAVY HER0 SECTION ── */}
      <section className="relative w-full min-h-[90vh] bg-cream flex flex-col lg:flex-row overflow-hidden">

        {/* Solid Mask for the extended image */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[calc(50%-80px)] bg-cream z-20 pointer-events-none"></div>

        {/* Left Side: Content */}
        <div className="w-full lg:w-[50%] relative z-20 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 pt-32 lg:pt-20 pb-16 lg:pb-12 text-left">

          <div className="flex items-center gap-2 mb-6 text-accent">
            <span className="text-xl leading-none">&diams;</span>
            <span className="text-overline">Premium Batik Cotton Collection</span>
          </div>

          <h1 className="text-h1 mb-2">
            Premium Batik<br />Printed <span className="text-accent">Cotton</span> Fabric
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary/80 font-serif italic mb-5 sm:mb-6 font-light">
            Crafted for Everyday Elegance
          </p>

          <p className="text-body1 text-accent/90 max-w-[500px] mb-6 leading-relaxed">
            Discover breathable batik printed cotton fabric designed for comfort, style, and timeless beauty. Perfect for boutiques, designers, and women who love effortless elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-14">
            <a href="#collection" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              Shop Collection
            </a>
            <a href={WA} target="_blank" rel="noreferrer" className="border border-primary/15 hover:border-accent text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent hover:text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
              Get Wholesale Pricing
            </a>
          </div>

          {/* Icon Features Grid */}
          <div className="hidden lg:flex items-start justify-between max-w-[500px] mb-12 lg:mb-16 gap-4">
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0-4 4 c0 3 2 4 4 4c0 4-2 6-2 6h8s-2-2-2-6c2 0 4-1 4-4a4 4 0 0 0-4-4 4 4 0 0 0-4-4z" /></svg>, l: '100%\nPremium Cotton' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>, l: 'Soft &\nBreathable' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="12" rx="2" /><path d="M3 9h18" /><path d="M9 21v-6" /><path d="M15 21v-6" /></svg>, l: 'Pan India\nDelivery' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>, l: 'Wholesale\nAvailable' },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-accent bg-white">
                  {f.icon}
                </div>
                <span className="text-[10px] font-bold text-primary/80 uppercase leading-tight whitespace-pre-line">{f.l}</span>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex items-end gap-8 md:gap-12 border-t border-primary/10 pt-5 max-w-sm">
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl text-accent font-heading font-normal">12+</span>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-primary/80">Years of Trust</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl text-accent font-heading font-normal">500+</span>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-primary/80">Exclusive Designs</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl text-accent font-heading font-normal">10K+</span>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-primary/80">Happy Customers</span>
            </div>
          </div>
        </div>

        {/* The Wavy SVG Divider (Desktop Only) */}
        <svg
          className="hidden lg:block absolute left-[50%] top-0 h-[105%] w-[180px] -translate-x-[45%] z-20 pointer-events-none"
          viewBox="0 0 200 1000" preserveAspectRatio="none"
        >
          {/* Base Wave matched to cream bg */}
          <path d="M100,0 C170,200 170,300 100,500 C30,700 170,800 100,1000 L0,1000 L0,0 Z" className="fill-cream" />
          {/* Stroke border */}
          <path d="M100,0 C170,200 170,300 100,500 C30,700 170,800 100,1000" fill="none" className="stroke-accent stroke-[4]" strokeLinecap="round" />
        </svg>

        {/* Right Side: Image + Floating Elements */}
        <div className="w-full lg:w-[60%] lg:absolute lg:top-0 lg:right-0 lg:bottom-0 relative h-[60vh] lg:h-full z-10 overflow-hidden bg-surface">

          <Image
            src={heroBanner}
            alt="Premium Batik Fashion"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-top"
          />

          {/* Floating Cards Array (Matching specific design) */}
          <div className="absolute right-[5%] xl:right-[8%] top-[25%] flex flex-col gap-4 xl:gap-6 z-30 pointer-events-none items-end">

            <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl flex items-center gap-3 border border-primary/5 w-[160px] animate-[float_4s_ease-in-out_infinite]">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0-4 4 c0 3 2 4 4 4c0 4-2 6-2 6h8s-2-2-2-6c2 0 4-1 4-4a4 4 0 0 0-4-4 4 4 0 0 0-4-4z" /></svg>
              </div>
              <div className="text-left flex flex-col justify-center">
                <p className="text-[10px] font-bold text-primary leading-tight">Premium</p>
                <p className="text-[9px] text-primary/80">100% Cotton</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl flex items-center gap-3 border border-primary/5 w-[160px] animate-[float_5s_ease-in-out_infinite_reverse] translate-x-[-15px]">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <div className="text-left flex flex-col justify-center">
                <p className="text-[10px] font-bold text-primary leading-tight">40+ Designs</p>
                <p className="text-[9px] text-primary/80">Exclusive Prints</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl flex items-center gap-3 border border-primary/5 w-[160px] animate-[float_6s_ease-in-out_infinite]">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>
              </div>
              <div className="text-left flex flex-col justify-center">
                <p className="text-[10px] font-bold text-primary leading-tight">Wholesale</p>
                <p className="text-[9px] text-primary/80">Stock Available</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <GoogleReviewBar />

      <DualCategoryBannerSection />

      <TrendingProductsSection />

      <ShopByCategorySection />

      <FeaturedGridSection />

      {/* ── CURATED COLLECTION ── */}
      <section id="collection" className="pt-16 pb-20 md:pt-20 md:pb-32 bg-tan">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-20">
            <span className="text-overline font-body">Curated For Excellence</span>
            <h2 className="text-h2 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[1px] after:bg-primary/20">Best-Selling Collections</h2>
            <p className="text-body1 font-body text-accent/90 max-w-lg mt-2 mx-auto">
              Discover breathable cotton dresses and premium batik cloth designed for boutiques, resellers, and elegant everyday fashion demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
            {[
              { t: "Printed Cotton Cloth", b: "Best Seller", img: "/cat_batik_cloth.webp", l: "/cotton-cloth" },
              { t: "Wholesale Dresses", b: "Bulk Saving", img: "/cat_wholesale.webp", l: "/fabric-wholesale" },
              { t: "New Arrival Prints", b: "Trending", img: "/cat_new_arrival.webp", l: "/new-batik-prints" }
            ].map((item, i) => (
              <a key={i} href={item.l} className="group block cursor-pointer flex flex-col items-center text-center">
                <div className="overflow-hidden aspect-[3/4] w-full relative mb-6">
                  <Image src={item.img} alt={item.t} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-[1.5s] ease-out" />
                </div>
                <h3 className="text-h3 group-hover:text-accent transition-colors">{item.t}</h3>
                <span className="text-overline font-body mt-2 opacity-80 decoration-accent group-hover:underline underline-offset-4 transition-all">
                  {item.b}
                </span>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-10 md:mt-14">
            <a href={WA} className="group flex items-center gap-3 px-8 py-3.5 border border-primary/30 text-primary text-[11px] uppercase tracking-[0.15em] font-bold hover:border-accent hover:text-accent transition-all duration-300">
              <span>Request Full WhatsApp Catalog</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ── */}
      <section className="scroll-animate pt-16 pb-24 md:pt-20 md:pb-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-16">
          <div className="flex flex-col gap-3 text-center items-center">
            <span className="text-overline">Engineered For Partners</span>
            <h2 className="text-h2">A Partnership in Style</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {[
              { t: "Boutique Owners", d: "Premium women clothing collections that refresh your shelves and increase repeat walk-ins.", b: "Fast Moving Designs" },
              { t: "Resellers", d: "Better pricing, stable stock updates, and fast-moving batik fabric collections.", b: "Better Margins" },
              { t: "Wholesalers", d: "Bulk batik cloth manufacturing with consistent finishing and dependable quality control.", b: "Bulk Consistency" },
              { t: "Marketplaces", d: "Trending batik styling optimized for digital selling and modern demand.", b: "Trending Stock" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col group border-t border-primary/20 pt-6 hover:border-accent transition-colors duration-500">
                <span className="text-overline text-primary/60 mb-6 font-mono">0{i + 1}</span>
                <h4 className="text-h4 text-primary mb-3">{item.t}</h4>
                <p className="text-[13px] leading-relaxed text-primary/80 font-medium mb-6 flex-grow">{item.d}</p>
                <a href={WA} className="text-[10px] text-accent uppercase tracking-[0.15em] font-bold hover:text-primary flex items-center gap-3 transition-all">
                  {item.b} <span className="text-base leading-none">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnershipBannerSection />

      <PremiumTrustSection />

      <LifestyleBannerSection />

      <section id="about" className="py-20 md:py-32 bg-[#F9F8F6] border-t border-primary/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual side with stats (Moved to Left) */}
          <div className="relative w-full aspect-[4/5] bg-cream overflow-hidden rounded-[2px] shadow-sm border border-primary/10 lg:order-1 order-2">
            <Image
              src="/_images_party-wear-suits-for-women-model-view.webp"
              alt="Aqsha Roots"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top hover:scale-105 transition-transform duration-[6s]"
              unoptimized
            />

            {/* Transparent Stats Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-cream/95 backdrop-blur-md border-t border-primary/10 p-6 md:p-8 grid grid-cols-2 gap-6">
              {[
                { v: "15+", l: "Years Active" },
                { v: "1000+", l: "Retail Partners" },
                { v: "1500+", l: "Monthly Output" },
                { v: "Pan-India", l: "Distribution" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <span className="text-3xl lg:text-4xl font-heading text-primary italic">{stat.v}</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent mt-1">{stat.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline side (The Journey) (Moved to Right) */}
          <div className="flex flex-col gap-12 relative lg:pl-10 lg:order-2 order-1">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent">Our Story</span>
              <h2 className="text-h2 text-primary leading-[1.1]">The Journey Behind Aqsha Suits</h2>
            </div>

            {/* Vertical Timeline */}
            <div className="flex flex-col gap-10 relative before:absolute before:inset-0 before:left-[11px] before:w-[1px] before:h-[80%] before:bg-primary/20">

              <div className="flex gap-8 relative z-10 group">
                <div className="w-6 h-6 flex-shrink-0 rounded-full bg-cream border border-primary/40 flex items-center justify-center mt-1 group-hover:border-accent transition-colors">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-accent transition-colors"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-h4 text-primary">2008 &mdash; The First Step</h4>
                  <p className="text-body2 text-primary/80 leading-relaxed">Starting with just 15 handmade suits for women in Bherugarh, Ujjain. Those first few pieces took weeks to sell, forcing an unyielding focus on quality fabric and precise finishing.</p>
                </div>
              </div>

              <div className="flex gap-8 relative z-10 group">
                <div className="w-6 h-6 flex-shrink-0 rounded-full bg-cream border border-primary/40 flex items-center justify-center mt-1 group-hover:border-accent transition-colors">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-accent transition-colors"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-h4 text-primary">Building Trust</h4>
                  <p className="text-body2 text-primary/80 leading-relaxed">Built steadily on consistency and an intimate understanding of modern apparel demand, we began expanding our reach, supplying independent wholesalers and boutiques across India.</p>
                </div>
              </div>

              <div className="flex gap-8 relative z-10 group">
                <div className="w-6 h-6 flex-shrink-0 rounded-full bg-cream border border-primary/40 flex items-center justify-center mt-1 group-hover:border-accent transition-colors">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-accent transition-colors"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-h4 text-primary">Today &mdash; Pan-India Scale</h4>
                  <p className="text-body2 text-primary/80 leading-relaxed">Today, we move over 2,000 pieces every three weeks. We partner deeply with businesses to provide market-tested, premium quality that keeps your shelves turning and customers returning.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>



      {/* ── WHAT BUYERS SAY ── */}
      <section className="scroll-animate pt-20 pb-16 md:pt-24 md:pb-24 px-6 bg-surface">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          <div className="flex flex-col gap-6 lg:w-[400px] shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">Real Buyers. Real Results.</span>
            <h2 className="text-h2">Don't Just Take Our Word For It.</h2>
            <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed max-w-md mt-2">
              Over 1,000+ retail partners and boutique owners trust our fabric every day. Swipe through raw, unedited feedback directly from our WhatsApp orders.
            </p>

            <div className="flex items-center gap-10 mt-6 pt-8 border-t border-primary/10 w-max">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-heading text-primary block">4.9/5</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/80 font-bold">Average Rating</span>
              </div>
              <div className="w-px h-10 bg-primary/10"></div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-heading text-primary block">10k+</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/80 font-bold">Orders Delivered</span>
              </div>
            </div>
          </div>

          {/* Elegant Horizontal Flow Track */}
          <div className="w-full flex-1 min-w-0 relative group/slider">
            <div ref={sliderRef} className="w-full flex overflow-x-auto snap-x gap-6 lg:gap-8 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                "/WhatsApp Image 2026-06-10 at 1.15.20 PM.jpeg",
                "/WhatsApp Image 2026-06-10 at 1.15.21 PM (1).jpeg",
                "/WhatsApp Image 2026-06-10 at 1.15.21 PM (2).jpeg",
                "/WhatsApp Image 2026-06-10 at 1.15.21 PM.jpeg",
                "/WhatsApp Image 2026-06-10 at 1.15.22 PM (1).jpeg",
                "/WhatsApp Image 2026-06-10 at 1.15.22 PM.jpeg"
              ].map((src, i) => (
                <div key={i} className="shrink-0 w-[260px] md:w-[320px] aspect-[9/16] relative rounded-xl overflow-hidden bg-cream border border-border/40 shadow-sm snap-center group">
                  <Image
                    priority={i === 0}
                    src={src}
                    alt="Buyer Testimonial"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>

            {/* Floating Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 flex items-center justify-between pointer-events-none z-10 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
              <button
                onClick={handleScrollLeft}
                className="w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all pointer-events-auto"
                aria-label="Scroll left"
              >
                <span className="text-xl md:text-2xl leading-none">&larr;</span>
              </button>
              <button
                onClick={handleScrollRight}
                className="w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all pointer-events-auto"
                aria-label="Scroll right"
              >
                <span className="text-xl md:text-2xl leading-none">&rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── BUYER PSYCHOLOGY ── */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-12 px-6 bg-cream border-t border-border/40">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-12">
          <div className="flex flex-col gap-3 max-w-2xl items-center">
            <span className="text-overline">The Investment</span>
            <h2 className="text-h2">Why Smart Sellers Prefer Aqsha</h2>
            <p className="text-body1 mt-1 leading-relaxed text-primary/80 font-medium">
              You are investing in clothing collections built around repeat demand, breathable comfort, and wearable styles that customers genuinely come back to buy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full text-left">
            {[
              { t: "Global Appeal", d: "Works across boutiques, marketplaces, and modern ethnic stores." },
              { t: "Everyday Comfort", d: "Breathable cotton fabric designed for regular, comfortable wear." },
              { t: "Stable Sales", d: "Classic batik prints continue performing across fashion cycles." },
              { t: "Versatility", d: "Ideal for kurtis, suits, and tailored bespoke clothing." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col bg-tan/15 p-6 rounded-2xl shadow-sm border border-tan/30 hover:-translate-y-1 hover:bg-tan/25 transition-all duration-500">
                <div className="w-10 h-10 bg-cream text-accent rounded-full border border-tan/40 flex items-center justify-center font-heading text-base mb-5">
                  {i + 1}
                </div>
                <h3 className="text-base font-heading font-medium mb-2 text-primary">{item.t}</h3>
                <p className="text-[13px] text-primary/80 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ShoppableReelsSection />

      <LookbookSection />

      <HowToOrderSection
        title="How To Order Online"
        whatsappLink={WA}
        tag="Wholesale Process"
        subtitle="Fast dispatch. Wholesale-ready batik cloth and premium women clothing collections delivered across India."
      />


      <section className="bg-primary text-white py-10 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-base md:text-lg font-heading font-normal max-w-3xl text-center md:text-left leading-snug">
            Fast-Moving Designs &nbsp;&bull;&nbsp; New Stock Added Weekly &nbsp;&bull;&nbsp; Bulk Dispatch Available
          </h3>
          <a href={WA} className="bg-transparent border border-white/25 hover:border-accent hover:text-accent font-semibold px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.15em] transition-colors flex-shrink-0">
            Enquire Now
          </a>
        </div>
      </section>

      <FAQ />
      <LeadGenerationForm />
      <StickyEnquiryButton />
    </div>
  );
}