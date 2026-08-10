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
    wrapperClassName?: string;
}

const PremiumFeatureSection: React.FC<PremiumFeatureSectionProps> = ({
    tag = "Why Buyers Choose Us",
    title,
    features,
    imageSrc = "/hero_bg.png",
    mobileImageSrc,
    quote = "Our batik products combine breathable cotton comfort with elegant prints made for modern fashion",
    wrapperClassName = "py-8 md:py-24 px-4 md:px-6 bg-cream"
}) => {
    return (
        <section className={`scroll-animate overflow-hidden ${wrapperClassName}`}>
            <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-20">
                
                {/* Full-width Centered Title */}
                <div className="flex flex-col gap-4 text-center items-center px-4 max-w-4xl mx-auto">
                    <span className="text-overline text-accent tracking-[0.3em] font-bold uppercase">{tag}</span>
                    <h2 className="text-h2 text-primary font-heading leading-tight">{title}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[1.3fr_0.9fr] gap-12 lg:gap-16 items-center">
                    
                    {/* Left: Flat Editorial Feature List */}
                    <div className="order-2 lg:order-1 grid grid-cols-2 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-12 pr-0 lg:pr-8">
                        {features.map((feature, i) => (
                            <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-5 items-center sm:items-start text-center sm:text-left group">
                                <div className="shrink-0 text-secondary mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                                    <div className="flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6 [&>svg]:md:w-8 [&>svg]:md:h-8">
                                        {feature.i}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 sm:gap-2 w-full">
                                    <h4 className="text-[11px] sm:text-h4 text-primary font-bold sm:font-normal group-hover:text-accent transition-colors" dangerouslySetInnerHTML={{ __html: feature.t }} />
                                    <p className="text-[9px] sm:text-body1 text-primary/80 sm:text-primary leading-relaxed font-medium sm:font-normal line-clamp-3 sm:line-clamp-none" dangerouslySetInnerHTML={{ __html: feature.d }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Vertical Editorial Image */}
                    <div className="order-1 lg:order-2 relative h-[450px] md:h-[600px] w-full rounded-tr-[40px] rounded-bl-[40px] overflow-hidden group">
                        <Image 
                            src={imageSrc} 
                            alt="Premium Feature Banner Desktop" 
                            layout="fill" 
                            objectFit="cover" 
                            className={`group-hover:scale-105 transition-transform duration-[2000ms] object-center ${mobileImageSrc ? 'hidden md:block' : ''}`} 
                        />
                        {mobileImageSrc && (
                            <Image 
                                src={mobileImageSrc} 
                                alt="Premium Feature Banner Mobile" 
                                layout="fill" 
                                objectFit="cover" 
                                className="group-hover:scale-105 transition-transform duration-[2000ms] object-[center_top] block md:hidden" 
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 border-l-2 border-secondary pl-5">
                            <p className="text-base md:text-lg lg:text-xl font-heading text-white leading-relaxed drop-shadow-md">
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
