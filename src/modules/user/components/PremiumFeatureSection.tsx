"use client";
import Image from "next/image";
import React from "react";

export interface Feature {
    t: string; // title
    d: string; // description
    c: string; // color class (e.g., text-blue-400)
    i: React.ReactNode; // icon
}

interface PremiumFeatureSectionProps {
    tag?: string;
    title: string | React.ReactNode;
    features: Feature[];
    imageSrc?: string;
    mobileImageSrc?: string;
    quote?: string;
}

const PremiumFeatureSection: React.FC<PremiumFeatureSectionProps> = ({
    tag = "Why Buyers Choose Us",
    title,
    features,
    imageSrc = "/hero_bg.png",
    mobileImageSrc,
    quote = "Our batik products combine breathable cotton comfort with elegant prints made for modern fashion"
}) => {
    return (
        <section className="py-8 md:py-16 px-4 md:px-6 bg-[#1a0f0a] text-white overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-16 items-center">
                <div className="flex flex-col gap-5 md:gap-8">
                    <div className="flex flex-col gap-2 md:gap-3 text-center lg:text-left">
                        <span className="text-[9px] md:text-[10px] font-bold text-[#FFD700] uppercase tracking-[0.3em]">{tag}</span>
                        <h2 className="font-playfair text-xl md:text-4xl font-bold leading-[1.1]">{title}</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                        {features.map((feature, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 group bg-white/5 p-3 md:p-5 rounded-[12px] md:rounded-[24px] border border-white/10 hover:bg-white/10 transition-all duration-300 text-center md:text-left">
                                <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center shrink-0">
                                    <div className={`relative z-10 ${feature.c} w-4 h-4 md:w-6 md:h-6`}>
                                        {feature.i}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-[11px] md:text-base font-bold tracking-tight text-white leading-[1.15]" dangerouslySetInnerHTML={{ __html: feature.t }} />
                                    <p className="text-[9px] md:text-[13px] text-[#FFD700] leading-tight font-medium opacity-90 group-hover:opacity-100 line-clamp-3 md:line-clamp-none" dangerouslySetInnerHTML={{ __html: feature.d }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[220px] sm:h-[350px] lg:h-[600px] w-full rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl border-[3px] md:border-[8px] border-white/10 group mt-2 lg:mt-0">
                    <Image src={imageSrc} alt="Premium Feature Banner Desktop" layout="fill" objectFit="cover" className={`group-hover:scale-105 transition-all duration-[2s] brightness-[0.6] object-[center_top] md:object-center ${mobileImageSrc ? 'hidden md:block' : ''}`} />
                    {mobileImageSrc && (
                        <Image src={mobileImageSrc} alt="Premium Feature Banner Mobile" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[2s] brightness-[0.6] object-[center_top] md:object-center block md:hidden" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                        <p className="text-[15px] sm:text-lg md:text-2xl font-playfair font-bold text-white leading-snug drop-shadow-lg text-center lg:text-left">
                            "{quote}"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumFeatureSection;
