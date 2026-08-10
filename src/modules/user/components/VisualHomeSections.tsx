"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductPathByName } from "@/utils/slugMapper";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export function ShopByCategorySection() {
    const categories = [
        { title: "Batik Fabric", img: "/cat_batik_fabric.webp", href: "/batik-fabric", sub: "Premium Material" },
        { title: "Batik Cloth", img: "/cat_batik_cloth.webp", href: "/cotton-cloth", sub: "Ready to Stitch" },
        { title: "Wholesale", img: "/cat_wholesale.webp", href: "/fabric-wholesale", sub: "Bulk Pricing" },
        { title: "New Arrivals", img: "/cat_new_arrival.webp", href: "/new-batik-prints", sub: "Latest Drops" },
    ];

    return (
        <section className="pt-10 pb-16 md:pt-12 md:pb-28 px-4 sm:px-6 bg-cream border-t border-primary/5">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-20">
                <div className="text-center flex flex-col items-center gap-2 md:gap-3">
                    <span className="text-overline">Explore</span>
                    <h2 className="text-h2 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[1px] after:bg-primary/20">Shop By Category</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 w-full pt-4">
                    {categories.map((cat, i) => (
                        <Link key={i} href={cat.href} className="flex flex-col items-center gap-4 md:gap-6 group w-full">

                            {/* The Arch / Pill container with aesthetic double framing */}
                            <div className="relative w-full aspect-[2/3] md:aspect-[3/4] rounded-t-full rounded-b-full overflow-hidden border border-primary/10 p-1.5 md:p-2 group-hover:border-primary/40 group-hover:bg-white/40 transition-all duration-700 bg-transparent">
                                <div className="relative w-full h-full rounded-t-full rounded-b-full overflow-hidden bg-tan shadow-inner">
                                    <Image
                                        src={cat.img}
                                        alt={cat.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    />
                                </div>
                            </div>

                            {/* Typography below */}
                            <div className="flex flex-col items-center text-center gap-1 md:gap-2 opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500">
                                <span className="text-[9px] md:text-overline uppercase tracking-widest font-bold text-primary/70">{cat.sub}</span>
                                <h4 className="text-sm md:text-h4 font-heading font-medium text-primary group-hover:text-accent transition-colors">
                                    {cat.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FeaturedGridSection() {
    const [newArrivals, setNewArrivals] = useState<any[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchNewArrivals = async () => {
            try {
                // Fetch the 4 latest products
                const res = await fetch(`${API_BASE}/products?limit=4`);
                const json = await res.json();
                if (json.data) setNewArrivals(json.data);
            } catch (error) {
                console.error("Failed to fetch new arrivals:", error);
            }
        };
        fetchNewArrivals();
    }, []);

    if (newArrivals.length === 0) return null;

    const getProductLink = (product: any) => {
        const customPath = getProductPathByName(product.name, product.category);
        return customPath ? customPath : `/products/${product._id || product.id}`;
    };

    const getImageSrc = (item: any) => item?.images?.[0] || item?.image || "/placeholder.png";

    return (
        <section className="pt-20 pb-24 px-4 bg-surface border-t border-primary/10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto flex flex-col gap-10">
                {/* Minimalist Section Header */}
                <div className="text-center flex flex-col items-center gap-3 px-2 md:px-6">
                    <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent">Latest Drops</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-primary relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[1px] after:bg-primary/20">New Arrivals</h2>
                </div>

                {/* Highly Interactive Expandable Accordion Layout (Grid on Mobile) */}
                <div className="grid grid-cols-2 grid-rows-2 md:flex md:flex-row w-full h-[60vh] md:h-[650px] gap-2 md:gap-4 group/accordion">
                    {newArrivals.slice(0, 4).map((item, i) => {
                        const isHovered = hoveredIndex === i;
                        const isAnyHovered = hoveredIndex !== null;

                        return (
                            <Link
                                href={getProductLink(item)}
                                key={item._id || item.id || i}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`relative group/item transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] h-full overflow-hidden bg-cream cursor-pointer rounded-xl md:rounded-[2rem] border border-transparent hover:border-primary/20 shadow-sm ${isHovered ? 'md:w-[55%]' : isAnyHovered ? 'md:w-[15%]' : 'md:w-[25%]'
                                    } w-full ${isHovered ? 'opacity-100' : isAnyHovered ? 'opacity-60' : 'opacity-100'
                                    }`}
                            >
                                {/* Backdrop Image */}
                                <Image
                                    src={getImageSrc(item)}
                                    alt={item.name}
                                    fill
                                    unoptimized={true}
                                    className={`object-cover object-top transition-all duration-[1.2s] ease-out ${isHovered ? 'scale-[1.03] opacity-100 brightness-105' : 'opacity-80 md:opacity-75 brightness-[0.8]'
                                        }`}
                                />

                                {/* Gradient Overlay for Typography Clarity */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 md:via-black/10 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-90' : 'opacity-100 md:opacity-70'
                                    }`}></div>

                                <div className={`absolute top-4 left-4 md:top-6 md:left-6 transition-opacity duration-500 delay-200 ${isHovered ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    <span className="bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg text-shadow-sm hidden md:inline-block">
                                        Just Added
                                    </span>
                                </div>

                                {/* Typography Content Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-3 md:p-8 flex flex-col justify-end w-full">
                                    <div className={`flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden transform-none ${isHovered ? 'md:translate-y-0' : 'md:translate-y-8'
                                        }`}>

                                        <span className={`text-[8px] md:text-xs uppercase tracking-[0.3em] font-bold text-accent/90 mb-1 md:mb-2 transition-opacity duration-500 delay-100 whitespace-nowrap opacity-100 ${isHovered ? 'md:opacity-100' : 'md:opacity-0'
                                            }`}>
                                            {item.category}
                                        </span>

                                        <h3 className={`font-heading text-white text-sm md:text-3xl lg:text-4xl leading-[1.1] text-shadow-sm mb-1 md:mb-3 min-w-[120px] md:min-w-[200px] drop-shadow-md transition-opacity duration-500 opacity-100 ${!isHovered && isAnyHovered ? 'md:opacity-0' : 'md:opacity-100'
                                            }`}>
                                            {item.name}
                                        </h3>

                                        <div className={`flex items-center gap-3 overflow-hidden h-[30px] transition-opacity duration-700 delay-300 ${isHovered ? 'md:opacity-100' : 'md:opacity-0'
                                            }`}>
                                            <span className="text-[11px] uppercase tracking-widest font-bold text-white border-b-2 border-accent pb-1 leading-none whitespace-nowrap hover:text-accent transition-colors hidden md:inline-block">
                                                Shop Now &rarr;
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom Action Link */}
                <div className="flex justify-center mt-8 md:mt-10">
                    <Link href="/new-batik-prints" className="group flex items-center gap-3 px-8 py-3.5 border border-primary/30 text-primary text-[11px] uppercase tracking-widest font-bold hover:border-accent hover:text-accent transition-all duration-300">
                        <span>View Complete Catalog</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function LifestyleBannerSection() {
    return (
        <section className="relative w-full bg-cream py-12 md:py-24 px-4 md:px-8 border-t border-primary/10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row-reverse gap-6 md:gap-12 lg:gap-20 items-center w-full">

                {/* Mobile-Only Heading (Displays above image on mobile) */}
                <div className="w-full lg:hidden flex flex-col items-center text-center gap-3">
                    <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-accent">
                        Artisanal Mastery
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl text-primary leading-[1.1] tracking-tight">
                        Woven with tradition.<br /> Styled for the modern woman.
                    </h2>
                </div>

                {/* Right/Top Side: Clean Visual (No overlays) */}
                <div className="w-full lg:w-1/2 relative group h-[40vh] md:h-[60vh] lg:h-[70vh] min-h-[300px] md:min-h-[450px]">
                    <div className="hidden lg:block absolute inset-0 bg-primary/5 -left-8 -bottom-8 rounded-[2px] transition-transform duration-[3s] group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                    <div className="relative w-full h-full overflow-hidden rounded-[2px] shadow-sm z-10 border border-primary/10">
                        <Image
                            src="/full_sleeve_churidar.png"
                            alt="Aqsha Lifestyle"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[6s] ease-out brightness-[0.95]"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Left/Bottom Side: Elegant Text Base */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-6 lg:gap-8 px-2 md:px-4 lg:pl-10">
                    
                    {/* Desktop-Only Heading (Hidden on mobile) */}
                    <div className="hidden lg:flex flex-col gap-6 lg:gap-8 w-full">
                        <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent">
                            Artisanal Mastery
                        </span>
                        <h2 className="font-heading text-5xl lg:text-6xl text-primary leading-[1.1] tracking-tight">
                            Woven with tradition.<br /> Styled for the modern woman.
                        </h2>
                    </div>

                    <p className="text-[13px] md:text-body1 text-primary/80 max-w-md mt-1 lg:mt-0 font-medium">
                        Discover premium fabrics and timeless outfits tailored perfectly for resellers, boutiques, and everyday elegance.
                    </p>
                    <div className="mt-2 md:mt-4">
                        <Link href="/contact-us" className="group flex items-center justify-center gap-3 px-8 md:px-10 py-3 md:py-4 border border-primary/30 text-primary text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-bold hover:border-accent hover:text-accent hover:bg-primary/[0.02] transition-colors duration-300">
                            <span>Connect With Us</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export function SocialFeedSection() {
    return (
        <section className="pt-20 pb-24 px-6 bg-cream border-t border-primary/5">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-12 text-center">
                <div className="flex flex-col gap-3 items-center">
                    <span className="text-overline">Community</span>
                    <h2 className="text-h2">Spotted In Aqsha</h2>
                    <p className="text-body1 max-w-md mx-auto text-primary/80 mt-2">
                        Retailers and boutiques across India showcasing our latest drops in their stores.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="relative aspect-square w-full overflow-hidden group">
                            <Image src="/batik_heritage_editorial.png" alt="Social Feed" fill className="object-cover group-hover:scale-110 transition-transform duration-[1s]" />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M12 8v8" /><path d="m8 12 4 4 4-4" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function DualCategoryBannerSection() {
    return (
        <section className="w-full h-auto flex flex-col md:flex-row bg-cream">
            <Link href="/batik-fabric" className="relative h-[60vh] md:h-[85vh] flex-1 group overflow-hidden bg-cream flex justify-center border-b md:border-b-0 md:border-r border-primary/10">
                <Image
                    src="/batik_fabric_tall.png"
                    alt="Premium Batik Fabric"
                    fill
                    className="object-cover object-top opacity-90 group-hover:scale-[1.03] transition-all duration-[2s] ease-out"
                />
                {/* Minimal gradient for readability without being dark and heavy */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-6 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                    <h2 className="text-h2 text-white mb-2">Batik Fabric</h2>
                    <span className="text-overline text-white/90 border-b border-transparent group-hover:border-white/60 pb-1 transition-all duration-300">
                        Explore Collection
                    </span>
                </div>
            </Link>

            <Link href="/cotton-cloth" className="relative h-[60vh] md:h-[85vh] flex-1 group overflow-hidden bg-cream flex justify-center">
                <Image
                    src="/batik_cloth_tall.png"
                    alt="Premium Cotton Clothing"
                    fill
                    className="object-cover object-top opacity-90 group-hover:scale-[1.03] transition-all duration-[2s] ease-out"
                />
                {/* Minimal gradient for readability without being dark and heavy */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-6 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                    <h2 className="text-h2 text-white mb-2">Batik Cloth</h2>
                    <span className="text-overline text-white/90 border-b border-transparent group-hover:border-white/60 pb-1 transition-all duration-300">
                        Shop Collection
                    </span>
                </div>
            </Link>
        </section>
    );
}

export function LookbookSection() {
    // Array of genuine product photos and titles
    const looks = [
        { title: "Emerald Party Wear Suit", img: "/lookbook_emerald.png" },
        { title: "White Cotton Kurti", img: "/lookbook_white.png" },
        { title: "Designer Cotton Dress", img: "/lookbook_designer.png" },
        { title: "Premium Casual Kurti", img: "/lookbook_casual.png" }
    ];

    return (
        <section className="pt-10 md:pt-16 pb-20 px-6 bg-cream border-t border-primary/5">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-16">

                {/* Standard Brand Text Header */}
                <div className="flex flex-col gap-3 items-center text-center">
                    <span className="text-overline">Style Guide</span>
                    <h2 className="text-h2">Curated Lookbook</h2>
                    <p className="text-body1 max-w-lg mx-auto mt-2 text-primary/80">
                        Explore our styling recommendations and shop the complete looks directly from our premium collection.
                    </p>
                </div>

                {/* Clean Asymmetrical Collage Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-8 h-auto w-full">

                    {/* Large Featured Image (Left) */}
                    <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 flex flex-col gap-4 group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-surface shadow-sm border border-primary/10">
                            <Image src={looks[0].img} alt={looks[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-[6s] ease-out" unoptimized />
                        </div>
                        <div className="flex flex-col gap-1 items-start text-left">
                            <h4 className="text-h4 text-primary">{looks[0].title}</h4>
                        </div>
                    </div>

                    {/* Top Right Grid Item 1 */}
                    <div className="col-span-1 row-span-1 flex flex-col gap-4 group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-surface shadow-sm border border-primary/10">
                            <Image src={looks[1].img} alt={looks[1].title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-[6s] ease-out" unoptimized />
                        </div>
                        <div className="flex flex-col gap-1 items-start text-left">
                            <h4 className="text-h4 text-primary">{looks[1].title}</h4>
                        </div>
                    </div>

                    {/* Top Right Grid Item 2 */}
                    <div className="col-span-1 row-span-1 flex flex-col gap-4 group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-surface shadow-sm border border-primary/10">
                            <Image src={looks[2].img} alt={looks[2].title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-[6s] ease-out" unoptimized />
                        </div>
                        <div className="flex flex-col gap-1 items-start text-left">
                            <h4 className="text-h4 text-primary">{looks[2].title}</h4>
                        </div>
                    </div>

                    {/* Bottom Right Wide Item */}
                    <div className="col-span-1 md:col-span-2 row-span-1 flex flex-col gap-4 group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-[2px] bg-surface shadow-sm border border-primary/10">
                            <Image src={looks[3].img} alt={looks[3].title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-[6s] ease-out" unoptimized />
                        </div>

                        <div className="flex flex-col gap-1 items-start text-left">
                            <h4 className="text-h4 text-primary">{looks[3].title}</h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export function PartnershipBannerSection() {
    return (
        <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-[#F9F8F6]">
            {/* Pure cinematic image covering the entire container, no text overlays */}
            <Image
                src="/pink_batik_model.png"
                alt="Aqsha - Premium Ethnic Wear Campaign"
                fill
                className="object-cover object-[center_0%]"
                priority
                unoptimized
            />
        </section>
    );
}
