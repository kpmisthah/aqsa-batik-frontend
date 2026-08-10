import React from "react";
import Image from "next/image";

interface WavyHeroProps {
  pillText: string | React.ReactNode;
  pillHighlight?: string; // Optional text to highlight in the pill (pulsing dot area)
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttons?: React.ReactNode;
}

export default function WavyHero({
  pillText,
  pillHighlight,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  buttons,
}: WavyHeroProps) {
  return (
    <section className="relative w-full lg:min-h-[90vh] bg-cream flex flex-col lg:flex-row overflow-hidden">
      {/* Solid Mask for the extended image */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[calc(50%-80px)] bg-cream z-20 pointer-events-none"></div>

      {/* Left Side: Content */}
      <div className="w-full lg:w-[50%] relative z-20 flex flex-col justify-center items-center lg:items-start px-6 sm:px-12 lg:px-16 xl:px-20 pt-8 lg:pt-20 pb-6 lg:pb-12 text-center lg:text-left">
        {pillHighlight ? (
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 lg:mb-6 text-accent">
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">{pillHighlight} {pillText}</span>
            </div>
          </div>
        ) : (
          <div className="mb-4 lg:mb-6 text-accent text-center lg:text-left">
            <span className="inline-block text-xl leading-[0] align-middle mr-1.5">&diams;</span>
            <span className="text-overline align-middle">{pillText}</span>
          </div>
        )}

        <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-heading font-normal text-primary leading-[1.1] ${subtitle ? 'mb-2' : 'mb-4 lg:mb-6'} tracking-tight text-center lg:text-left mx-auto lg:mx-0`}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary/80 font-serif italic mb-4 sm:mb-6 font-light text-center lg:text-left mx-auto lg:mx-0">
            {subtitle}
          </p>
        )}

        <p className="text-body1 text-accent/90 max-w-xl mb-6 lg:mb-8 text-center lg:text-left mx-auto lg:mx-0">
          {description}
        </p>

        {/* MOBILE ONLY: Image between description and buttons */}
        <div className="lg:hidden relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-surface">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {buttons && (
          <div className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-14 items-center justify-center lg:justify-start w-full">
            {buttons}
          </div>
        )}
      </div>

      {/* The Wavy SVG Divider (Desktop Only) */}
      <svg
        className="hidden lg:block absolute left-[50%] top-0 h-[105%] w-[180px] -translate-x-[45%] z-20 pointer-events-none"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
      >
        {/* Base Wave matched to cream bg */}
        <path d="M100,0 C170,200 170,300 100,500 C30,700 170,800 100,1000 L0,1000 L0,0 Z" className="fill-cream" />
        {/* Stroke border */}
        <path d="M100,0 C170,200 170,300 100,500 C30,700 170,800 100,1000" fill="none" className="stroke-accent stroke-[4]" strokeLinecap="round" />
      </svg>

      {/* Right Side: Image (Desktop Only) */}
      <div className="hidden lg:block w-full lg:w-[60%] lg:absolute lg:top-0 lg:right-0 lg:bottom-0 relative lg:h-full z-10 overflow-hidden bg-surface">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="60vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-transparent mix-blend-multiply"></div>
      </div>
    </section>
  );
}

