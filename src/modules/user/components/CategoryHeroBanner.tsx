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
  bgClassName?: string; // Optional tailwind class for background
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
  bgClassName,
  textColor = "text-primary",
  buttons,
  badge,
}: CategoryHeroBannerProps) {
  // Use text-white for very dark backgrounds, otherwise text-primary
  return (
    <section
      className={`relative w-full min-h-[70vh] md:min-h-[75vh] md:max-h-[800px] overflow-hidden pt-16 md:pt-0 transition-colors duration-700 ${bgClassName || ""}`}
      style={bgClassName ? {} : { backgroundColor: bgColor }}
    >
      {/* ── Image with left-edge fade ── */}
      <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] md:w-auto md:top-0 md:bottom-0 md:h-full md:aspect-square z-10 overflow-hidden">
        <div
          className="relative w-full h-full"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* ── Text Content ── */}
      <div className={`relative z-20 h-full min-h-[70vh] md:min-h-[75vh] md:max-h-[800px] max-w-[1600px] mx-auto w-full flex flex-col justify-end md:justify-center items-start px-5 sm:px-12 md:px-12 lg:px-20 text-left pb-10 md:pb-0 ${textColor}`}>
        <div className="max-w-[58%] sm:max-w-[55%] md:max-w-4xl lg:max-w-5xl w-full flex flex-col items-start">
          {/* Tagline */}
          <div className="flex items-center justify-start gap-2 mb-3 md:mb-6">
            <span className="text-brand text-xl leading-none hidden md:block">&diams;</span>
            <span className="text-overline">{tagline}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-[56px]/[64px] font-heading font-semibold mb-2 md:mb-4 text-left tracking-tight">
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
