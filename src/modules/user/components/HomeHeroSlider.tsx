"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface SlideData {
  _id?: string;
  highlightWord?: string;
  id: number;
  image: string;
  mobileImage?: string;
  imageAlt: string;
  tagline: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: string;
  primaryButtonLabel: string;
  primaryButtonLink: string;
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
  badge?: string;
  bgColor?: string;
}

const DEFAULT_SLIDES: SlideData[] = [
  {
    id: 1,
    image: "/Hero Banner/cotton-cloth.webp",
    mobileImage: "/Hero Banner/mobile-version/cotton cloth.webp",
    imageAlt: "Batik Print Suits for Women",
    tagline: "TRUSTED UJJAIN BATIK MANUFACTURER",
    title: (
      <>
        Batik Print Suits<br />
        <span className="text-highlight">for Women</span>
      </>
    ),
    subtitle: (
      <span className="font-serif italic font-light text-primary/80">Wear Your Heritage. Own Your Style.</span>
    ),
    description: "Discover stylish women's clothing featuring distinctive batik designs, breathable cotton fabrics, and thoughtfully crafted suits made for everyday confidence and effortless Indian style.",
    primaryButtonLabel: "SHOP BATIK SUITS",
    primaryButtonLink: "/cotton-cloth",
    secondaryButtonLabel: "BECOME A WHOLESALE PARTNER",
    secondaryButtonLink: "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20become%20a%20wholesale%20partner"
  },
  {
    id: 2,
    image: "/Hero Banner/cotton dress material.webp",
    mobileImage: "/Hero Banner/mobile-version/cotton dress material.webp",
    imageAlt: "Handprinted Batik Women's Clothing",
    tagline: "HANDPRINTED BATIK WOMEN'S CLOTHING",
    title: (
      <span>
        Handprinted Batik Cotton<br />
        <span className="text-highlight">Suits for Women</span>
      </span>
    ),
    subtitle: (
      <span className="font-serif italic font-light text-primary/80">Everyday Comfort & Character</span>
    ),
    description: "Order handprinted batik cotton suits for women, from elegant party wear suits and flowy frock suits to timeless Anarkali styles and versatile suit sets. Designed for women who value comfort, character, and effortless style.",
    primaryButtonLabel: "EXPLORE BATIK COLLECTION",
    primaryButtonLink: "/batik-ethnic-wear-for-women"
  },
  {
    id: 3,
    title: (
      <span>
        New Arrival Batik<br />
        <span className="text-highlight">Ladies Suits</span>
      </span>
    ),
    subtitle: (
      <span className="font-serif italic font-light text-primary/80">Light Touch. Big Impression.</span>
    ),
    description: "Step into the season with fresh batik prints, elegant ladies suit designs, breathable summer suits, and easy-to-wear styles made for everyday Indian dressing.",
    tagline: "NEW BATIK DESIGN COLLECTIONS",
    image: "/Hero Banner/cotton dress for women.webp",
    mobileImage: "/Hero Banner/mobile-version/cotton dress for women.webp",
    imageAlt: "New Arrival Batik Ladies Suits",
    primaryButtonLabel: "SHOP NEW ARRIVALS",
    primaryButtonLink: "/new-batik-prints-suits"
  },
  {
    id: 4,
    title: (
      <span>
        Summer Suits<br />
        <span className="text-highlight">for Women</span>
      </span>
    ),
    subtitle: (
      <span className="font-serif italic font-light text-primary/80">Batik Print. Up to 50% Off.</span>
    ),
    description: "Discover handcrafted batik print cotton suits and beautiful dresses for women, designed to keep you cool, comfortable, confident, and effortlessly elegant throughout the season.",
    tagline: "SUMMER SALE OFFER",
    image: "/Hero Banner/ethnic wear for women.webp",
    mobileImage: "/Hero Banner/mobile-version/Ethnic Wear for Women.webp",
    imageAlt: "Summer Suits for Women",
    primaryButtonLabel: "SHOP SUMMER SALE",
    primaryButtonLink: "/batik-cotton-dress-for-women"
  },
  {
    id: 5,
    title: (
      <span>
        Wholesale Women's Dresses<br />
        <span className="text-highlight">&amp; Batik Suits</span>
      </span>
    ),
    subtitle: (
      <span className="font-serif italic font-light text-primary/80">Premium Quality for Growing Businesses</span>
    ),
    description: "Explore ready-to-sell women's fashion collections featuring batik suits, cotton dresses, elegant suit sets, and designer-inspired styles for boutiques, resellers, online sellers, and growing fashion businesses across India.",
    tagline: "WHOLESALE BATIK FABRIC READY STOCK",
    image: "/Hero Banner/women dresses .webp",
    mobileImage: "/Hero Banner/mobile-version/women dresses.webp",
    imageAlt: "Wholesale Women's Dresses",
    primaryButtonLabel: "SHOP WHOLESALE",
    primaryButtonLink: "/wholesale-batik-women-dresses",
    secondaryButtonLabel: "BECOME A WHOLESALE PARTNER",
    secondaryButtonLink: "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20become%20a%20wholesale%20partner"
  }
];

export default function HomeHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slides, setSlides] = useState<SlideData[]>(DEFAULT_SLIDES);
  const [loading, setLoading] = useState(false);

  // Parse strings with linebreaks and highlight words
  const renderTitle = (title: string | React.ReactNode, highlightWord?: string) => {
    if (typeof title !== 'string') return title; // Fallback for JSX
    
    // Convert \\n string sequences to actual newlines if typed by admin
    const cleanTitle = title.replace(/\\n/g, '\n');
    const parts = cleanTitle.split('\n');
    
    return (
      <>
        {parts.map((part, i) => {
          if (highlightWord && part.includes(highlightWord)) {
            const segments = part.split(highlightWord);
            return (
              <React.Fragment key={i}>
                {segments[0]}
                <span className="text-highlight">{highlightWord}</span>
                {segments[1]}
                {i < parts.length - 1 && <br />}
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={i}>
              {part}
              {i < parts.length - 1 && <br />}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        // Temporarily disabled to force the usage of DEFAULT_SLIDES
        /*
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/home-slider/active`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const validSlides = data.filter((s: SlideData) => s.image && s.image.trim() !== '');
            if (validSlides.length > 0) {
              setSlides(validSlides);
            }
          }
        }
        */
      } catch (err) {
        console.error('Failed to load active slides, using default slides', err);
      }
    };
    fetchSlides();
  }, []);

  // Set up autoplay
  useEffect(() => {
    if (slides.length <= 1) return;
    
    let timer: NodeJS.Timeout;
    if (!isHovered) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 7000);
    }
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const nextSlide = () => setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  if (loading) {
    return <div className="w-full h-[85vh] bg-[#F4F1EA] animate-pulse"></div>;
  }
  
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (slides.length === 0) return null;

  return (
    <section 
      className="relative w-full lg:h-[85vh] lg:min-h-[600px] lg:max-h-[900px] overflow-hidden transition-colors duration-1000 ease-in-out touch-pan-y" 
      style={{ backgroundColor: slides[current]?.bgColor || "#F4F1EA" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide._id || index}
          className={`w-full transition-opacity duration-1000 ease-in-out flex flex-col lg:block ${
            index === current 
              ? "relative opacity-100 z-10 lg:absolute lg:inset-0" 
              : "absolute inset-0 opacity-0 z-0 pointer-events-none h-full lg:h-auto"
          }`}
        >
          {/* Desktop Background Image Layout */}
          <div className="hidden lg:block absolute inset-0 z-10 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[#F4F1EA]">
              <Image
                src={slide.image}
                alt={slide.imageAlt || "Hero Banner"}
                fill
                priority={index === 0}
                className="object-cover object-center transform transition-transform duration-[10s] ease-linear"
                style={{
                  transform: index === current ? "scale(1.02)" : "scale(1)"
                }}
              />
            </div>
            
            {/* Elegant gradient overlay for text readability (left side) */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none w-full lg:w-[65%]"
              style={{ background: `linear-gradient(to right, ${slide.bgColor || '#F4F1EA'}E6 0%, ${slide.bgColor || '#F4F1EA'}99 50%, transparent 100%)` }}
            ></div>
          </div>

          {/* Mobile Background Image Layout */}
          <div className="relative w-full h-[60vh] min-h-[450px] lg:hidden z-0">
            <Image
                src={slide.mobileImage || slide.image}
                alt={slide.imageAlt || "Hero Banner"}
                fill
                priority={index === 0}
                className="object-cover object-top transform transition-transform duration-[10s] ease-linear"
                style={{
                  transform: index === current ? "scale(1.02)" : "scale(1)"
                }}
            />
          </div>

          {/* Text Content */}
          <div className="relative z-20 max-w-[1600px] mx-auto w-full flex flex-col px-6 lg:px-12 pt-8 pb-16 lg:pb-0 text-primary lg:h-full lg:absolute lg:inset-0 lg:justify-center">
            <div className="w-full lg:max-w-[420px] xl:max-w-[550px] 2xl:max-w-[750px] flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:gap-6 mt-0 relative z-30 pointer-events-auto">
              
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-[#8A4B32] text-xl leading-none hidden lg:block">&diams;</span>
                <span className="text-overline text-[#8A4B32] uppercase tracking-[0.2em] font-bold">
                  {slide.tagline}
                </span>
              </div>

              <h1 className="text-3xl leading-[1.15] sm:text-4xl lg:text-[36px] xl:text-[48px] 2xl:text-[60px] lg:leading-[1.1] font-heading font-normal tracking-tight text-primary">
                {renderTitle(slide.title, slide.highlightWord)}
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-primary/80 font-serif italic font-light">
                {slide.subtitle}
              </p>

              <p className="text-[14px] lg:text-lg text-primary/80 leading-relaxed max-w-2xl font-medium">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center lg:items-start w-full sm:w-auto mt-2">
                <Link 
                  href={slide.primaryButtonLink}
                  className="bg-highlight hover:bg-highlight/90 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] lg:text-xs flex items-center justify-center transition-all shadow-sm text-center w-full sm:w-auto"
                >
                  {slide.primaryButtonLabel}
                </Link>
                
                {slide.secondaryButtonLabel && (
                  <Link 
                    href={slide.secondaryButtonLink!}
                    className="border border-primary/20 hover:border-primary/40 text-primary hover:bg-primary/5 px-8 py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] lg:text-xs flex items-center justify-center transition-all backdrop-blur-sm text-center w-full sm:w-auto"
                  >
                    {slide.secondaryButtonLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (Desktop Only) */}
      <button 
        onClick={prevSlide}
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center rounded-full bg-white/30 hover:bg-white text-primary backdrop-blur-md transition-all duration-300 border border-primary/10 shadow-sm"
        aria-label="Previous Slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center rounded-full bg-white/30 hover:bg-white text-primary backdrop-blur-md transition-all duration-300 border border-primary/10 shadow-sm"
        aria-label="Next Slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 lg:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 lg:h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary w-6 lg:w-10" : "bg-primary/30 w-1.5 lg:w-2.5 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
