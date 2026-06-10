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
        <section className="py-16 md:py-32 px-4 md:px-6 bg-[#E8D9C0] relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
                <div className="flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col gap-3 md:gap-6 text-center lg:text-left items-center lg:items-start">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">{tag}</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F] leading-[1.1]">{title}</h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-6">
                        {items.map((item, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-center gap-3 md:gap-6 p-4 md:p-8 bg-[#F5F1EC] rounded-[16px] md:rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all group text-center md:text-left">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3D2B1F] text-[#FFD700] rounded-xl md:rounded-2xl flex items-center justify-center text-xl shadow-lg shrink-0 transition-transform group-hover:rotate-12 group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                </div>
                                <span className="text-[12px] md:text-xl font-bold tracking-tight text-[#5A2A1F] group-hover:text-[#8B3A2B] transition-colors leading-tight" dangerouslySetInnerHTML={{ __html: item }} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-[300px] md:h-[500px] lg:h-[700px] rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl border-[8px] md:border-[20px] border-white group mt-4 md:mt-0">
                    <Image src={imageSrc} alt="Feature Highlight Desktop" layout="fill" objectFit="cover" className={`group-hover:scale-105 transition-all duration-[2s] ${mobileImageSrc ? 'hidden md:block' : ''}`} />
                    {mobileImageSrc && (
                        <Image src={mobileImageSrc} alt="Feature Highlight Mobile" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[2s] block md:hidden" />
                    )}
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 bg-[#3D2B1F] p-5 md:p-10 rounded-[20px] md:rounded-[40px] shadow-2xl border border-white/5 text-center md:text-left">
                        <span className="text-[#FFD700] font-bold text-[10px] md:text-sm uppercase tracking-widest block mb-1 md:mb-2">{featureTag}</span>
                        <h4 className="font-playfair text-lg md:text-4xl font-bold text-[#EADDCB]">{featureTitle}</h4>
                        <p className="text-[12px] md:text-base text-[#EADDCB]/80 font-medium mt-2 md:mt-4 leading-relaxed">{featureDesc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantageSection;
