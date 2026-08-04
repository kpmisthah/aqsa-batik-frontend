"use client";
import React from 'react';

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}>
      <span className="text-white text-[9px] font-bold tracking-[0.25em] uppercase pointer-events-none select-none">
        Scroll
      </span>
      <svg className="w-4 h-4 text-white animate-bounce mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
}
