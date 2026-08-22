"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/modules/user/components/Nav";
import HomeHeroSlider from "@/modules/user/components/HomeHeroSlider";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import LeadGenerationForm from "@/modules/user/components/LeadGenerationForm";
import TrendingProductsSection from "@/modules/user/components/TrendingProductsSection";
import NewArrivalsSection from "@/modules/user/components/NewArrivalsSection";
import StickyEnquiryButton from "@/modules/user/components/StickyEnquiryButton";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import HowToOrderSection from "@/modules/user/components/HowToOrderSection";
import { ShopByCategorySection, FeaturedGridSection, LifestyleBannerSection, TrendingCollectionsBannerSection, LookbookSection, PartnershipBannerSection } from "@/modules/user/components/VisualHomeSections";
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

      {/* ── HOME HERO SLIDER ── */}
      <HomeHeroSlider />

      <GoogleReviewBar />

      <TrendingCollectionsBannerSection />

      <TrendingProductsSection />

      <ShopByCategorySection />

      <FeaturedGridSection />

      {/* ── CURATED COLLECTION ── */}
      <section id="collection" className="pt-16 pb-20 md:pt-20 md:pb-32 bg-tan">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16 max-w-4xl mx-auto">
            <span className="text-overline uppercase tracking-[0.2em] font-bold text-primary/80">Curated for Excellence</span>
            <h2 className="text-h2 md:text-h1 text-primary font-normal leading-tight">
              Best-Selling <span className="text-highlight italic">Batik Suit Collections</span> <br className="hidden md:block" /> for Every Woman
            </h2>
            <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed mt-2">
              Discover beautiful batik print designs, quality cotton fabric for kurtis, printed cotton fabrics for kurtis, and elegant suit designs complemented by versatile Shalwar Kameez and Dupatta/Chunni styles. From everyday comfort to occasion-ready dressing, each collection is selected for distinctive prints, wearable silhouettes, and dependable fabric quality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-10">
            {[
              { t: "Batik Prints Women Clothing", b: "Signature", img: "/round-category/Batik Cotton Dress for Women Catagory image.webp", l: "/batik-prints-womens-clothing" },
              { t: "Ethnic Wear for Women", b: "Everyday", img: "/round-category/Ethnic Wear for Women.webp", l: "/batik-ethnic-wear-for-women" },
              { t: "Batik Cotton Dress for Women", b: "Comfort", img: "/round-category/Batik Prints Women Clothing catagory image.webp", l: "/batik-cotton-dress-for-women" },
              { t: "New Arrival", b: "Latest Drops", img: "/round-category/New Arrival catagory image.webp", l: "/new-batik-prints-suits" },
              { t: "Wholesale", b: "Bulk Pricing", img: "/round-category/Wholesale catagory image.webp", l: "/wholesale-batik-women-dresses" }
            ].map((item, i) => (
              <a key={i} href={item.l} className="group block cursor-pointer flex flex-col items-center text-center w-full">
                <div className="overflow-hidden aspect-[4/5] w-full relative mb-4 md:mb-6 rounded-sm shadow-sm border border-primary/10">
                  <Image src={item.img} alt={item.t} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover opacity-100 group-hover:scale-[1.05] transition-all duration-[1.5s] ease-out" />
                </div>
                <h3 className="text-[13px] md:text-lg font-heading font-semibold text-primary group-hover:text-accent transition-colors leading-tight px-1">{item.t}</h3>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold mt-2 opacity-80 text-primary/70 decoration-accent group-hover:underline underline-offset-4 transition-all">
                  {item.b}
                </span>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-10 md:mt-14">
            <a href="/batik-ethnic-wear-for-women" className="btn-secondary group">
              <span>Explore Collections</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ── */}
      <section className="scroll-animate pt-16 pb-24 md:pt-20 md:pb-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-4xl mx-auto">
            <span className="text-overline uppercase tracking-[0.2em] font-bold text-primary/80">Built for Every Buyer</span>
            <h2 className="text-h2 md:text-h1 text-primary font-normal leading-tight">
              Women's Fashion Collections <br className="hidden md:block" /> Made for <span className="text-highlight italic">Growing Businesses</span>
            </h2>
            <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed mt-2">
              Choose ready-to-sell women's fashion collections, from batik suits and batik blouse designs to women dress material, Shalwar Kameez, and Dupatta/Chunni styles—made for businesses that need dependable fashion stock.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-10 gap-y-8 md:gap-y-12">
            {[
              { t: "Boutique Owners", d: "Curated batik suits, blouse designs, and fresh women's clothing collections that help boutiques keep their shelves relevant and their customers coming back.", b: "Fast-Moving Designs" },
              { t: "Resellers", d: "Access attractive suit designs for women, cotton dress material, and ready-to-sell collections designed to support competitive pricing and healthier margins.", b: "Better Margins" },
              { t: "Wholesalers", d: "Source Batik Cotton Dress for Women, printed cotton fabric for kurtis, and scalable women's dress material for consistent bulk fashion orders.", b: "Bulk Consistency" },
              { t: "Marketplaces", d: "Bring searchable women's dresses, batik print styles, and everyday cotton fashion to online customers with collections aligned with modern buying demand.", b: "Trending Stock" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col group border-t border-primary/20 pt-4 md:pt-6 hover:border-accent transition-colors duration-500">
                <span className="text-[10px] md:text-overline text-primary/60 mb-3 md:mb-6 font-mono">0{i + 1}</span>
                <h4 className="text-sm md:text-h4 text-primary mb-2 md:mb-3 leading-tight">{item.t}</h4>
                <p className="text-[10px] md:text-[13px] leading-relaxed text-primary/80 font-medium mb-4 md:mb-6 flex-grow">{item.d}</p>
                <a href={WA} className="text-[8px] md:text-[10px] text-accent uppercase tracking-[0.15em] font-bold hover:text-primary flex items-center gap-1 md:gap-3 transition-all">
                  {item.b} <span className="text-sm md:text-base leading-none">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnershipBannerSection />

      <PremiumTrustSection />

      <LifestyleBannerSection />

      <section id="about" className="py-10 md:py-14 bg-[#F9F8F6] border-t border-primary/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10">

          {/* Mobile-Only Heading (Appears before image on mobile) */}
          <div className="flex lg:hidden flex-col gap-3 text-center items-center w-full">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand">Our Story</span>
            <h2 className="text-h2 leading-[1.1]">
              From 15 Handmade Batik Suits to a Trusted <br /> <span className="text-highlight">Ujjain Batik Manufacturer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start lg:items-stretch w-full">
            {/* Visual side with stats */}
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full min-h-[450px] bg-cream overflow-hidden rounded-[2px] shadow-sm border border-primary/10 lg:order-1 order-1">
              <Image
                src="/round-category/beautiful dresses for women.webp"
                alt="Aqsha Roots"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-[6s]"
                unoptimized
              />

              {/* Transparent Stats Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-cream/95 backdrop-blur-md border-t border-primary/10 p-4 md:p-8 grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { v: "15+", l: "Years Active" },
                  { v: "1,000+", l: "Retail Partners" },
                  { v: "1,500+", l: "Monthly Output" },
                  { v: "Pan-India", l: "Distribution" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1 md:gap-1.5">
                    <span className="text-2xl md:text-3xl lg:text-4xl text-highlight italic">{stat.v}</span>
                    <span className="text-[7.5px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-accent mt-0.5 md:mt-1">{stat.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline side (The Journey) */}
            <div className="flex flex-col h-full gap-10 lg:gap-14 relative lg:pl-10 lg:order-2 order-2 lg:py-6">

              {/* Desktop-Only Heading */}
              <div className="hidden lg:flex flex-col gap-4">
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand">Our Story</span>
                <h2 className="text-h2 leading-[1.1]">From 15 Handmade Batik Suits to a Trusted <span className="text-highlight">Ujjain Batik Manufacturer</span></h2>
              </div>

              {/* Vertical Timeline */}
              <div className="flex flex-col gap-10 relative before:absolute before:inset-0 before:left-[11px] before:w-[1px] before:h-[80%] before:bg-primary/20">

                <div className="flex gap-8 relative z-10 group">
                  <div className="w-6 h-6 flex-shrink-0 rounded-full bg-cream border border-primary/40 flex items-center justify-center mt-1 group-hover:border-accent transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-accent transition-colors"></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-h4 text-primary">2008 &mdash; The First Step</h4>
                    <p className="text-body2 text-primary/80 leading-relaxed">AQSHA Batik Suits began in Bherugarh, Ujjain, with just 15 handmade suits for women. Those early pieces shaped our commitment to quality cotton fabric, careful finishing, and fashion that earns customer trust.</p>
                  </div>
                </div>

                <div className="flex gap-8 relative z-10 group">
                  <div className="w-6 h-6 flex-shrink-0 rounded-full bg-cream border border-primary/40 flex items-center justify-center mt-1 group-hover:border-accent transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-accent transition-colors"></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-h4 text-primary">Building Trust</h4>
                    <p className="text-body2 text-primary/80 leading-relaxed">As demand grew, we built lasting relationships with wholesalers, boutiques, and resellers, supplying women's fashion collections designed around changing market preferences.</p>
                  </div>
                </div>

                <div className="flex gap-8 relative z-10 group">
                  <div className="w-6 h-6 flex-shrink-0 rounded-full bg-cream border border-primary/40 flex items-center justify-center mt-1 group-hover:border-accent transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-accent transition-colors"></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-h4 text-primary">Today &mdash; Pan-India Supply</h4>
                    <p className="text-body2 text-primary/80 leading-relaxed">Today, AQSHA Batik Suits supplies fashion retailers and business buyers across Delhi, Punjab, Gujarat, and other Indian markets with dependable batik and cotton fashion collections.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ── WHAT BUYERS SAY ── */}
      <section className="scroll-animate pt-20 pb-16 md:pt-24 md:pb-24 px-6 bg-surface">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 md:gap-16 lg:gap-20 items-center">

          <div className="flex flex-col gap-3 md:gap-6 lg:w-[400px] shrink-0 min-w-0 text-center items-center w-full">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">The Legacy of Quality</span>
            <h2 className="text-h2 text-center">
              Trusted by <span className="text-highlight italic">1,000+ Retail Partners </span> <br className="hidden lg:block"/> for Quality Batik Fashion
            </h2>
            {/* Desktop Only Paragraph */}
            <p className="hidden lg:block text-sm md:text-base text-primary/80 font-medium leading-relaxed max-w-md mt-2">
              Don't just take our word for it. Explore genuine buyer feedback on our batik dresses, suit sets for women, cotton collections, and everyday fashion styles shared through real customer experiences.
            </p>

            <div className="hidden lg:flex items-center gap-10 mt-6 pt-8 border-t border-primary/10 w-max">
              <div className="flex flex-col gap-1">
                <span className="text-3xl text-highlight block">4.9/5</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/80 font-bold">Average Rating</span>
              </div>
              <div className="w-px h-10 bg-primary/10"></div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl text-highlight block">10K+</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/80 font-bold">Orders Delivered</span>
              </div>
            </div>

            <div className="mt-6 md:mt-8 hidden lg:block">
              <Link href="/contact-us" className="btn-secondary group">
                <span>See Customer Reviews</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
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
                    className="object-cover object-top opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Privacy Blur for Profile Picture */}
                  <div className="absolute top-[6.5%] left-[7.5%] w-[17.5%] aspect-square rounded-full backdrop-blur-3xl bg-[#1f2c34]/60 z-10 pointer-events-none"></div>
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

          {/* Mobile-Only Subheading & Stats (shown after slider on mobile) */}
          <div className="flex lg:hidden flex-col gap-6 w-full px-2 text-center">
            <p className="text-[13px] text-primary/80 font-medium leading-relaxed max-w-md mx-auto">
              Over 1,000+ retail partners and boutique owners trust our fabric every day. Swipe through raw, unedited feedback directly from our WhatsApp orders.
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-primary/10 w-full">
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-heading text-primary block">4.9/5</span>
                <span className="text-[8px] uppercase tracking-widest text-primary/80 font-bold">Average Rating</span>
              </div>
              <div className="w-px h-8 bg-primary/10"></div>
              <div className="flex flex-col gap-0.5 text-right">
                <span className="text-2xl font-heading text-primary block">10k+</span>
                <span className="text-[8px] uppercase tracking-widest text-primary/80 font-bold">Orders Delivered</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── BUYER PSYCHOLOGY ── */}
      <section className="pt-16 pb-8 md:pt-20 md:pb-16 px-6 bg-cream border-t border-border/40">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-10 md:gap-12">
          <div className="flex flex-col gap-3 max-w-5xl items-center">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-accent">The Best Investment in Everyday Fashion</span>
            <h2 className="text-h2">
              Why Smart Sellers Choose <br /> <span className="text-highlight italic">AQSHA Batik Suits</span>
            </h2>
            <p className="text-sm md:text-base mt-2 leading-relaxed text-primary/80 font-medium">
              You are investing in women's clothing collections built around repeat demand, breathable comfort, distinctive batik prints, and wearable styles customers genuinely want to buy again.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full text-left">
            {[
              { t: "Broad Market Appeal", d: "Batik suits for women and contemporary ethnic styles suited to boutiques, marketplaces, resellers, and modern fashion stores." },
              { t: "Everyday Comfort", d: "Breathable cotton dresses, cotton dress material, and comfortable kurti fabrics designed for effortless everyday wear." },
              { t: "Timeless Demand", d: "Distinctive batik print dresses and wearable styles that remain relevant across changing fashion seasons." },
              { t: "Versatile Collections", d: "Flexible collections covering batik print kurtis, suit sets for women, casual dresses for women, cotton fashion, and modern women's clothing." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col bg-tan/15 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-tan/30 hover:-translate-y-1 hover:bg-tan/25 transition-all duration-500">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-cream text-accent rounded-full border border-tan/40 flex items-center justify-center font-heading text-sm md:text-base mb-3 md:mb-5">
                  0{i + 1}
                </div>
                <h3 className="text-xs md:text-base font-heading font-medium mb-1 md:mb-2 text-primary">{item.t}</h3>
                <p className="text-[10px] md:text-[13px] text-primary/80 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 md:mt-4">
            <Link href="/wholesale-batik-women-dresses" className="btn-secondary group">
              <span>Start Your Wholesale Journey</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ShoppableReelsSection />

      <LookbookSection />

      <HowToOrderSection
        title="How to Order Batik Suits & Women Clothing Online"
        whatsappLink={WA}
        tag="Wholesale Process"
        subtitle="Shop women's clothing online with ease—from exploring batik suit collections and fabrics to selecting your styles, requesting a quote, and receiving your order across India."
      />


      <section className="bg-primary text-white py-10 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-base md:text-lg font-heading font-normal max-w-3xl text-center md:text-left leading-snug">
            Fast-Moving Suits for Women &nbsp;&bull;&nbsp; New Batik Designs Weekly &nbsp;&bull;&nbsp; Wholesale Orders Available
          </h3>
          <a href={WA} className="btn-primary">
            ENQUIRE NOW
          </a>
        </div>
      </section>

      <FAQ />
      <LeadGenerationForm />
      <StickyEnquiryButton />
    </div>
  );
}