"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface SlideData {
  _id?: string;
  highlightWord?: string;
  id: number;
  image: string;
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
      className="relative w-full h-[90vh] min-h-[580px] md:h-[85vh] md:min-h-[500px] md:max-h-[800px] overflow-hidden pt-16 md:pt-0 transition-colors duration-1000 ease-in-out touch-pan-y" 
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
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Full Banner Image Layout with Gradient */}
          <div className="absolute inset-0 z-10 overflow-hidden">
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
              className="absolute inset-0 z-10 pointer-events-none w-full md:w-[65%]"
              style={{ background: `linear-gradient(to right, ${slide.bgColor || '#F4F1EA'}E6 0%, ${slide.bgColor || '#F4F1EA'}99 50%, transparent 100%)` }}
            ></div>
            
            {/* Mobile gradient from bottom */}
            <div 
              className="absolute inset-x-0 bottom-0 h-[70%] z-10 pointer-events-none md:hidden"
              style={{ background: `linear-gradient(to top, ${slide.bgColor || '#F4F1EA'}F2 0%, ${slide.bgColor || '#F4F1EA'}B3 50%, transparent 100%)` }}
            ></div>
          </div>

          {/* Text Content */}
          <div className="relative z-20 h-full max-w-[1600px] mx-auto w-full flex flex-col justify-end md:justify-center items-start px-6 sm:px-12 md:px-12 lg:px-20 text-left pb-16 md:pb-0 pointer-events-none">
            <div className="max-w-[95%] md:max-w-3xl lg:max-w-4xl w-full flex flex-col items-start text-primary pointer-events-auto">
              
              <div className="flex items-center justify-start gap-2 mb-3 md:mb-5 text-primary">
                <span className="text-xl leading-none hidden md:block text-brand">&diams;</span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-brand">
                  {slide.tagline}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-heading font-normal leading-[1.05] md:leading-[1.1] mb-2 md:mb-4 text-left text-primary tracking-tight">
                {renderTitle(slide.title, slide.highlightWord)}
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-primary/80 font-serif italic mb-4 sm:mb-6 font-light">
                {slide.subtitle}
              </p>

              <p className="text-base sm:text-body1 text-primary max-w-[400px] md:max-w-[500px] mb-6 md:mb-8 leading-relaxed text-left">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start w-full sm:w-auto">
                <Link 
                  href={slide.primaryButtonLink}
                  className="bg-highlight hover:bg-highlight/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm w-full sm:w-auto text-center"
                >
                  {slide.primaryButtonLabel}
                </Link>
                
                {slide.secondaryButtonLabel && (
                  <Link 
                    href={slide.secondaryButtonLink!}
                    className="border border-highlight/40 hover:border-highlight text-highlight hover:bg-highlight/10 px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-white/20 backdrop-blur-sm w-full sm:w-auto text-center"
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
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center rounded-full bg-white/30 hover:bg-white text-primary backdrop-blur-md transition-all duration-300 border border-primary/10 shadow-sm"
        aria-label="Previous Slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center rounded-full bg-white/30 hover:bg-white text-primary backdrop-blur-md transition-all duration-300 border border-primary/10 shadow-sm"
        aria-label="Next Slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 md:h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary w-6 md:w-10" : "bg-primary/30 w-1.5 md:w-2.5 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    
    </section>
  );
}