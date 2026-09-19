"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { renderWithHighlight } from "@/utils/textHighlight";

interface BuyerTestimonialGalleryProps {
    data: {
        heading: string;
        highlightWord?: string;
        statValue1: string;
        statLabel1: string;
        statValue2: string;
        statLabel2: string;
        images: { image: string }[];
    };
}

export default function BuyerTestimonialGallery({ data }: BuyerTestimonialGalleryProps) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
    const handleScrollRight = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <section className="scroll-animate pt-20 pb-16 md:pt-24 md:pb-24 px-6 bg-surface">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 md:gap-16 lg:gap-20 items-center">

                <div className="flex flex-col gap-3 md:gap-6 lg:w-[400px] shrink-0 min-w-0 text-center items-center w-full">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A4B32]">Real Buyers. Real Results.</span>
                    <h2 className="text-h2 text-center">
                        {renderWithHighlight(data.heading, data.highlightWord)}
                    </h2>
                    {/* Desktop Only Paragraph */}
                    <p className="hidden lg:block text-sm md:text-base text-primary/80 font-medium leading-relaxed max-w-md mt-2">
                        Don't just take our word for it. Explore genuine buyer feedback on our batik dresses, suit sets for women, cotton collections, and everyday fashion styles shared through real customer experiences.
                    </p>

                    <div className="hidden lg:flex items-center gap-10 mt-6 pt-8 border-t border-primary/10 w-max">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl text-highlight block">{data.statValue1}</span>
                            <span className="text-[9px] uppercase tracking-widest text-primary/80 font-bold">{data.statLabel1}</span>
                        </div>
                        <div className="w-px h-10 bg-primary/10"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl text-highlight block">{data.statValue2}</span>
                            <span className="text-[9px] uppercase tracking-widest text-primary/80 font-bold">{data.statLabel2}</span>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-8 hidden lg:block">
                        <Link href="/contact-us" className="btn-secondary group">
                            <span>See Customer Reviews</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </Link>
                    </div>
                </div>

                {/* Elegant Horizontal Flow Track */}
                <div className="w-full flex-1 min-w-0 relative group/slider">
                    <div ref={sliderRef} className="w-full flex overflow-x-auto snap-x gap-6 lg:gap-8 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {data.images.map((item: any, i: number) => (
                            <div key={i} className="shrink-0 w-[260px] md:w-[320px] aspect-[9/16] relative rounded-xl overflow-hidden bg-cream border border-border/40 shadow-sm snap-center group">
                                <Image
                                    priority={i === 0}
                                    src={item.image}
                                    alt="Buyer Testimonial"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover object-top opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                                {/* Privacy Blur for Profile Picture */}
                                <div className="absolute top-[6.5%] left-[7.5%] w-[17.5%] aspect-square rounded-full backdrop-blur-3xl bg-[#1f2c34]/60 z-10 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    {/* Floating Navigation Arrows */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 flex items-center justify-between pointer-events-none z-10 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={handleScrollLeft}
                            className="w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all pointer-events-auto"
                            aria-label="Scroll left"
                        >
                            <span className="text-xl md:text-2xl leading-none">&larr;</span>
                        </button>
                        <button
                            onClick={handleScrollRight}
                            className="w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all pointer-events-auto"
                            aria-label="Scroll right"
                        >
                            <span className="text-xl md:text-2xl leading-none">&rarr;</span>
                        </button>
                    </div>
                </div>

                {/* Mobile-Only Subheading & Stats (shown after slider on mobile) */}
                <div className="flex lg:hidden flex-col gap-6 w-full px-2 text-center">
                    <p className="text-[13px] text-primary/80 font-medium leading-relaxed max-w-md mx-auto">
                        Over 1,000+ retail partners and boutique owners trust our fabric every day. Swipe through raw, unedited feedback directly from our WhatsApp orders.
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-primary/10 w-full">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-2xl font-heading text-primary block">{data.statValue1}</span>
                            <span className="text-[8px] uppercase tracking-widest text-primary/80 font-bold">{data.statLabel1}</span>
                        </div>
                        <div className="w-px h-8 bg-primary/10"></div>
                        <div className="flex flex-col gap-0.5 text-right">
                            <span className="text-2xl font-heading text-primary block">{data.statValue2}</span>
                            <span className="text-[8px] uppercase tracking-widest text-primary/80 font-bold">{data.statLabel2}</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
