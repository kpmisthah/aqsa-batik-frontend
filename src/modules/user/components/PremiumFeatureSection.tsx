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
        <section className="py-12 md:py-16 px-4 md:px-6 bg-[#1a0f0a] text-white overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
                
                {/* Full-width Centered Title */}
                <div className="flex flex-col gap-2 md:gap-4 text-center items-center px-4 max-w-4xl mx-auto">
                    <span className="text-overline text-accent tracking-[0.3em]">{tag}</span>
                    <h2 className="text-h2 font-heading leading-tight">{title}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-12 items-stretch pt-4">
                    
                    {/* Left: 6 Cards (3 per column) */}
                    <div className="flex flex-col justify-center">
                        <div className="grid grid-cols-2 gap-3 sm:gap-5">
                            {features.map((feature, i) => (
                                <div key={i} className="flex flex-col xl:flex-row items-center justify-center gap-2 sm:gap-4 p-3 sm:p-5 md:p-6 bg-white/5 backdrop-blur-md rounded-[16px] md:rounded-2xl border border-white/10 hover:border-accent/40 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 group text-center xl:text-left h-full">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 bg-white/10 rounded-[12px] sm:rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-[#1a0f0a] transition-all duration-300 transform group-hover:-translate-y-1">
                                        <div className="flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 [&>svg]:sm:w-6 [&>svg]:sm:h-6 [&>svg]:md:w-8 [&>svg]:md:h-8">
                                            {feature.i}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 md:gap-2">
                                        <h4 className="text-[11px] sm:text-body1 md:text-h6 font-bold text-white leading-tight group-hover:text-accent transition-colors" dangerouslySetInnerHTML={{ __html: feature.t }} />
                                        <p className="text-[10px] sm:text-body2 text-white/50 leading-snug font-normal hidden sm:block" dangerouslySetInnerHTML={{ __html: feature.d }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Spanning Image */}
                    <div className="relative h-[300px] sm:h-[450px] md:h-full lg:min-h-[500px] w-full rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl border-[3px] md:border-[4px] border-white/10 group mt-4 lg:mt-0">
                        <Image src={imageSrc} alt="Premium Feature Banner Desktop" layout="fill" objectFit="cover" className={`group-hover:scale-105 transition-all duration-700 object-[center_top] md:object-center ${mobileImageSrc ? 'hidden md:block' : ''}`} />
                        {mobileImageSrc && (
                            <Image src={mobileImageSrc} alt="Premium Feature Banner Mobile" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-700 object-[center_top] md:object-center block md:hidden" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                            <p className="text-[14px] sm:text-base md:text-xl font-heading font-bold text-white leading-snug drop-shadow-md text-center px-4">
                                "{quote}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumFeatureSection;
