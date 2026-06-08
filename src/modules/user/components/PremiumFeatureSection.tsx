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
    quote?: string;
}

const PremiumFeatureSection: React.FC<PremiumFeatureSectionProps> = ({
    tag = "Why Buyers Choose Us",
    title,
    features,
    imageSrc = "/hero_bg.png",
    quote = "Our batik products combine breathable cotton comfort with elegant prints made for modern fashion"
}) => {
    return (
        <section className="py-32 px-6 bg-[#1a0f0a] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <span className="text-xs font-bold text-[#FFD700] uppercase tracking-[0.4em]">{tag}</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold leading-[1.1]">{title}</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-8 group bg-white/5 p-8 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all">
                                <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                                    {/* Scalloped Frame */}
                                    <div className={`absolute inset-0 ${feature.c} opacity-10`}>
                                        <svg viewBox="0 0 100 100" fill="currentColor">
                                            <path d="M50 0 C55 10 65 10 70 15 C80 20 85 30 85 40 C85 50 95 55 95 65 C95 75 85 85 75 85 C65 85 60 95 50 95 C40 95 35 85 25 85 C15 85 5 75 5 65 C5 55 15 50 15 40 C15 30 20 20 30 15 C35 10 45 10 50 0" />
                                        </svg>
                                    </div>
                                    <div className={`absolute inset-0 ${feature.c} opacity-5 group-hover:rotate-45 transition-transform duration-[2s]`}>
                                        <svg viewBox="0 0 100 100" fill="currentColor">
                                            <path d="M50 0 C55 10 65 10 70 15 C80 20 85 30 85 40 C85 50 95 55 95 65 C95 75 85 85 75 85 C65 85 60 95 50 95 C40 95 35 85 25 85 C15 85 5 75 5 65 C5 55 15 50 15 40 C15 30 20 20 30 15 C35 10 45 10 50 0" />
                                        </svg>
                                    </div>
                                    <div className={`relative z-10 ${feature.c}`}>
                                        {feature.i}
                                    </div>
                                </div>

                                <div className="h-20 w-px bg-white/20 mt-2 shrink-0 hidden md:block"></div>

                                <div className="flex flex-col gap-3">
                                    <h4 className="text-xl font-bold tracking-tight text-white" dangerouslySetInnerHTML={{ __html: feature.t }} />
                                    <p className="text-base text-[#FFD700] leading-relaxed font-medium max-w-lg" dangerouslySetInnerHTML={{ __html: feature.d }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-[800px] rounded-[60px] overflow-hidden shadow-2xl border-[15px] border-white/10 group">
                    <Image src={imageSrc} alt="Category Detail" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[2s] brightness-75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12">
                        <p className="text-xl md:text-2xl font-playfair font-bold text-white leading-relaxed">
                            "{quote}"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumFeatureSection;
