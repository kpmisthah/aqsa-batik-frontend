"use client";
import Image from "next/image";
import React from "react";

interface AdvantageSectionProps {
    tag?: string;
    title: string | React.ReactNode;
    items: string[];
    imageSrc: string;
    featureTag: string;
    featureTitle: string;
    featureDesc: string;
}

const AdvantageSection: React.FC<AdvantageSectionProps> = ({
    tag = "THE ADVANTAGE",
    title,
    items,
    imageSrc,
    featureTag,
    featureTitle,
    featureDesc
}) => {
    return (
        <section className="py-32 px-6 bg-[#E8D9C0] relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">{tag}</span>
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F] leading-[1.1]">{title}</h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        {items.map((item, i) => (
                            <div key={i} className="flex items-center gap-6 p-8 bg-[#F5F1EC] rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-[#3D2B1F] text-[#FFD700] rounded-2xl flex items-center justify-center text-xl shadow-lg shrink-0 transition-transform group-hover:rotate-12 group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                </div>
                                <span className="text-2xl font-bold tracking-tight text-[#5A2A1F] group-hover:text-[#8B3A2B] transition-colors" dangerouslySetInnerHTML={{ __html: item }} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-[700px] rounded-[60px] overflow-hidden shadow-2xl border-[20px] border-white group">
                    <Image src={imageSrc} alt="Feature Highlight" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[2s]" />
                    <div className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-xl p-10 rounded-[40px] shadow-2xl border border-[#5A2A1F]/5">
                        <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest block mb-2">{featureTag}</span>
                        <h4 className="font-playfair text-4xl font-bold text-[#5A2A1F]">{featureTitle}</h4>
                        <p className="text-[#5A2A1F]/70 font-medium mt-4 leading-relaxed">{featureDesc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantageSection;
