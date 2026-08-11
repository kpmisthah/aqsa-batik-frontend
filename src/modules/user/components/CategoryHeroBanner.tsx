"use client";
import React from "react";
import Image from "next/image";

interface CategoryHeroBannerProps {
  tagline: string;
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor?: string; // Edge blend color, defaults to cream
  textColor?: string;
  buttons?: React.ReactNode;
  badge?: string;
}

export default function CategoryHeroBanner({
  tagline,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  bgColor = "#F5F1EC",
  textColor = "text-primary",
  buttons,
  badge,
}: CategoryHeroBannerProps) {
  // Use text-white for very dark backgrounds, otherwise text-primary
  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[75vh] md:max-h-[800px] overflow-hidden pt-16 md:pt-0 transition-colors duration-700"
      style={{ backgroundColor: bgColor }}
    >
      {/* ── Image with left-edge fade (desktop) ── */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div
          className="absolute top-0 bottom-0 right-0 h-full aspect-square"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Mobile overlays for text readability over the image */}
        <div className="absolute inset-0 md:hidden z-10 pointer-events-none">
          <div
            className="absolute inset-0 w-[85%] z-10"
            style={{
              background: `linear-gradient(to right, ${bgColor} 0%, ${bgColor}CC 50%, ${bgColor}00 100%)`,
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[60%] z-10"
            style={{
              background: `linear-gradient(to top, ${bgColor} 0%, ${bgColor}80 50%, ${bgColor}00 100%)`,
            }}
          />
        </div>
      </div>

      {/* ── Text Content ── */}
      <div className={`relative z-20 h-full min-h-[70vh] md:min-h-[75vh] md:max-h-[800px] max-w-[1600px] mx-auto w-full flex flex-col justify-end md:justify-center items-start px-6 sm:px-12 md:px-12 lg:px-20 text-left pb-12 md:pb-0 ${textColor}`}>
        <div className="max-w-[90%] md:max-w-4xl lg:max-w-5xl w-full flex flex-col items-start">
          {/* Tagline */}
          <div className="flex items-center justify-start gap-2 mb-3 md:mb-6">
            <span className="text-xl leading-none hidden md:block">&diams;</span>
            <span className="text-overline">{tagline}</span>
          </div>

          {/* Title */}
          <h1 className="text-[32px] sm:text-[40px] md:text-5xl lg:text-[4rem] font-heading font-normal leading-[1.05] md:leading-[1.1] mb-2 md:mb-4 text-left tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg sm:text-xl lg:text-2xl font-serif italic mb-4 sm:mb-6 font-light opacity-90">
              {subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-sm sm:text-body1 max-w-[420px] md:max-w-[500px] mb-6 md:mb-8 leading-relaxed text-left opacity-90">
            {description}
          </p>

          {/* Badge */}
          {badge && (
            <div className={`py-2 px-5 md:py-2.5 md:px-6 rounded-full mb-6 md:mb-8 font-bold text-[10px] md:text-sm shadow-md inline-block leading-tight border ${textColor === 'text-white' ? 'bg-primary text-white border-primary/20' : 'bg-primary text-white border-primary/20'}`}>
              {badge}
            </div>
          )}

          {/* Buttons */}
          {buttons && (
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start w-full sm:w-auto">
              {buttons}
            </div>
          )}
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
