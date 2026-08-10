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
        <section className="scroll-animate py-16 md:py-32 px-4 md:px-6 bg-tan relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                
                {/* Left: Huge Editorial Image */}
                <div className="relative h-[400px] md:h-[650px] overflow-hidden group border border-primary/20 rounded-2xl shadow-xl w-full">
                    <Image src={imageSrc} alt="Feature Highlight Desktop" layout="fill" objectFit="cover" className={`group-hover:scale-105 transition-all duration-[2s] object-top ${mobileImageSrc ? 'hidden md:block' : ''}`} />
                    {mobileImageSrc && (
                        <Image src={mobileImageSrc} alt="Feature Highlight Mobile" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[2s] block md:hidden object-top" />
                    )}
                    
                    {/* Gradient Overlay for Text Visibility */}
                    <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                    
                    {/* Overlay Content */}
                    {(featureTitle || featureDesc) && (
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col gap-1.5 md:gap-2">
                            {featureTag && <span className="text-overline text-secondary drop-shadow-md">{featureTag}</span>}
                            {featureTitle && <h3 className="text-h2 text-white drop-shadow-lg leading-tight">{featureTitle}</h3>}
                            {featureDesc && <p className="text-body1 text-white/90 max-w-sm drop-shadow-md leading-relaxed">{featureDesc}</p>}
                        </div>
                    )}
                </div>
                
                {/* Right: Section Title & Cards */}
                <div className="flex flex-col gap-10 md:gap-14 lg:pl-10">
                    {/* Title Block */}
                    <div className="flex flex-col gap-3 md:gap-4 text-center lg:text-left items-center lg:items-start max-w-xl">
                        <span className="text-overline text-accent tracking-[0.3em] font-bold uppercase">{tag}</span>
                        <h2 className="text-h2 text-primary leading-tight">{title}</h2>
                    </div>

                    {/* User-Friendly Card Layout */}
                    <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
                        {items.map((item, i) => (
                            <div key={i} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 md:p-5 bg-white/90 backdrop-blur-md rounded-[16px] border border-primary/10 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group text-center sm:text-left">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-primary/5 rounded-[12px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                     {i % 4 === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                                     {i % 4 === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>}
                                     {i % 4 === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>}
                                     {i % 4 === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
                                </div>
                                <h3 className="text-h4 text-primary w-full" dangerouslySetInnerHTML={{ __html: item }} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AdvantageSection;
