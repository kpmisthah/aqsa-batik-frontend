"use client";
import Image from "next/image";
import React from "react";

interface AdvantageSectionProps {
    tag?: string;
    title: string | React.ReactNode;
    items: string[];
    imageSrc: string;
    mobileImageSrc?: string;
    featureTag: string;
    featureTitle: string;
    featureDesc: string;
}

const AdvantageSection: React.FC<AdvantageSectionProps> = ({
    tag = "THE ADVANTAGE",
    title,
    items,
    imageSrc,
    mobileImageSrc,
    featureTag,
    featureTitle,
    featureDesc
}) => {
    return (
        <section className="py-16 md:py-32 px-4 md:px-6 bg-tan relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                
                {/* Left: Huge Editorial Image */}
                <div className="relative h-[400px] md:h-[650px] overflow-hidden group border border-primary/20 rounded-2xl shadow-xl w-full">
                    <Image src={imageSrc} alt="Feature Highlight Desktop" layout="fill" objectFit="cover" className={`group-hover:scale-105 transition-all duration-[2s] object-top ${mobileImageSrc ? 'hidden md:block' : ''}`} />
                    {mobileImageSrc && (
                        <Image src={mobileImageSrc} alt="Feature Highlight Mobile" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[2s] block md:hidden object-top" />
                    )}
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col gap-2">
                         <span className="text-overline text-white/90 drop-shadow-md">{featureTag}</span>
                         <h4 className="text-h3 text-white leading-tight drop-shadow-md">{featureTitle}</h4>
                         <p className="text-body2 text-white/90 mt-2 max-w-sm drop-shadow-md">{featureDesc}</p>
                    </div>
                </div>
                
                {/* Right: Section Title & Cards */}
                <div className="flex flex-col gap-10 md:gap-14 lg:pl-10">
                    {/* Title Block */}
                    <div className="flex flex-col gap-3 md:gap-6 text-center lg:text-left items-center lg:items-start">
                        <span className="text-overline text-secondary">{tag}</span>
                        <h2 className="text-h2 text-primary">{title}</h2>
                    </div>

                    {/* User-Friendly Card Layout */}
                    <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                        {items.map((item, i) => (
                            <div key={i} className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center xl:items-start gap-2.5 sm:gap-4 p-3 sm:p-5 md:p-6 bg-white/80 backdrop-blur-md rounded-[16px] sm:rounded-2xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group text-center sm:text-left">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 bg-primary/5 rounded-[12px] sm:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                     {i % 4 === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                                     {i % 4 === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>}
                                     {i % 4 === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>}
                                     {i % 4 === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
                                </div>
                                <h3 className="text-[11px] sm:text-body1 md:text-h6 text-primary font-bold leading-tight" dangerouslySetInnerHTML={{ __html: item }} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AdvantageSection;
