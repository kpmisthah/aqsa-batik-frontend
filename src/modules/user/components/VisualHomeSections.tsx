"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductPathByName } from "@/utils/slugMapper";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export function ShopByCategorySection() {
    const categories = [
        { title: "Batik Prints Women Clothing", alt: "cotton cloth", img: "/round-category/Batik Cotton Dress for Women Catagory image.webp", href: "/batik-prints-womens-clothing", sub: "Signature" },
        { title: "Ethnic Wear for Women", alt: "ethnic wear for women", img: "/round-category/Ethnic Wear for Women.webp", href: "/batik-ethnic-wear-for-women", sub: "Everyday" },
        { title: "Batik Cotton Dress for Women", alt: "cotton dress for women", img: "/round-category/Batik Prints Women Clothing catagory image.webp", href: "/batik-cotton-dress-for-women", sub: "Comfort" },
        { title: "New Arrival", alt: "cotton kurtis for women", img: "/round-category/New Arrival catagory image.webp", href: "/new-batik-prints-suits", sub: "Latest Drops" },
        { title: "Wholesale", alt: "dresses for women", img: "/round-category/Wholesale catagory image.webp", href: "/wholesale-batik-women-dresses", sub: "Bulk Pricing" },
    ];

    return (
        <section className="pt-10 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 bg-cream border-t border-primary/5">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-14">
                <div className="text-center flex flex-col items-center gap-3 md:gap-4 max-w-4xl mx-auto">
                    <span className="text-overline uppercase tracking-[0.2em] font-bold text-primary/80">Explore Batik Print Styles</span>
                    <h2 className="text-h2 md:text-h1 text-primary font-normal leading-tight">
                        Shop Women's Suits, Batik Prints & <span className="text-highlight italic">Everyday Styles</span>
                    </h2>
                    <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed mt-2">
                        Find beautiful suits for women featuring distinctive batik designs, breathable cotton fabrics, printed fabric styles, and versatile women's clothing made for comfort and everyday elegance.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 w-full pt-4">
                    {categories.map((cat, i) => (
                        <Link key={i} href={cat.href} className="flex flex-col items-center gap-4 md:gap-6 group w-full">
                            <div className="relative w-full aspect-[4/5] rounded-t-full rounded-b-full overflow-hidden border border-primary/10 p-1.5 md:p-2 group-hover:border-primary/40 group-hover:bg-white/40 transition-all duration-700 bg-transparent">
                                <div className="relative w-full h-full rounded-t-full rounded-b-full overflow-hidden bg-tan shadow-inner">
                                    <Image
                                        src={cat.img}
                                        alt={cat.alt}
                                        fill
                                        className="object-cover object-top group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center gap-1 md:gap-2 opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500">
                                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-primary/70">{cat.sub}</span>
                                <h4 className="text-[13px] md:text-[15px] font-heading font-semibold text-primary group-hover:text-accent transition-colors leading-tight">
                                    {cat.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-6 md:mt-10">
                    <Link href="/batik-ethnic-wear-for-women" className="btn-secondary group">
                        <span>View All Collections</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </Link>
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
                {/* Refined Section Header */}
                <div className="text-center flex flex-col items-center gap-3 md:gap-4 max-w-4xl mx-auto px-2 md:px-6">
                    <span className="text-overline uppercase tracking-[0.2em] font-bold text-primary/80">Fresh Batik Styles</span>
                    <h2 className="text-h2 md:text-h1 text-primary font-normal leading-tight">
                        New Arrival <span className="text-highlight italic">Women's Suits &</span> <br className="hidden md:block" /> Batik Dress <span className="text-highlight italic">Material</span>
                    </h2>
                    <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed mt-2">
                        Discover fresh batik blouse designs, printed styles, designer women's dresses, and quality cotton fabric for kurtis—created for effortless everyday dressing. Explore new prints, seasonal styles, and ready-to-wear collections designed around modern Indian fashion.
                    </p>
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
                                    className={`object-cover object-top transition-all duration-[1.2s] ease-out opacity-100 brightness-100 ${isHovered ? 'scale-[1.03]' : 'md:opacity-90'
                                        }`}
                                />

                                {/* Gradient Overlay for Typography Clarity */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-90' : 'opacity-80 md:opacity-60'
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
                    <Link href="/new-batik-prints-suits" className="btn-secondary group">
                        <span>Shop New Arrivals</span>
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
                        Styles Made to Belong
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl text-primary leading-[1.1] tracking-tight">
                        Batik Dresses & Suit Sets for <span className="text-highlight italic">Every Woman</span>
                    </h2>
                </div>

                {/* Right/Top Side: Clean Visual (No overlays) */}
                <div className="w-full lg:w-1/2 relative group aspect-square">
                    <div className="hidden lg:block absolute inset-0 bg-primary/5 -left-8 -bottom-8 rounded-[2px] transition-transform duration-[3s] group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                    <div className="relative w-full h-full overflow-hidden rounded-[2px] shadow-sm z-10 border border-primary/10">
                        <Image
                            src="/round-category/best dresses for women.webp"
                            alt="Aqsha Lifestyle"
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-[6s] ease-out opacity-100 brightness-100"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Left/Bottom Side: Elegant Text Base */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-6 lg:gap-8 px-2 md:px-4 lg:pl-10">

                    {/* Desktop-Only Heading (Hidden on mobile) */}
                    <div className="hidden lg:flex flex-col gap-6 lg:gap-8 w-full">
                        <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent">
                            Styles Made to Belong
                        </span>
                        <h2 className="font-heading text-4xl lg:text-6xl text-primary leading-[1.1] tracking-tight">
                            Batik Dresses & Suit Sets for <span className="text-highlight italic">Every Woman</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 mt-1 lg:mt-0 max-w-lg">
                        <p className="text-[13px] md:text-[15px] text-primary/80 font-medium leading-relaxed">
                            Explore a thoughtful mix of batik dresses, batik print dresses, suit sets for women, and batik print kurtis, alongside versatile women's dress designs and casual dresses for women, including flattering plus-size batik styles.
                        </p>
                        <p className="text-[13px] md:text-[15px] text-primary/80 font-medium leading-relaxed">
                            From everyday cotton comfort to occasion-ready silhouettes, find styles designed to feel as good as they look.
                        </p>
                    </div>

                    <div className="mt-2 md:mt-4">
                        <Link href="/batik-ethnic-wear-for-women" className="btn-secondary group">
                            <span>Explore Women's Fashion</span>
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

export function TrendingCollectionsBannerSection() {
    return (
        <section className="w-full bg-cream pt-16 md:pt-24 border-t border-primary/5">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-3 md:gap-5 mb-10 md:mb-16 px-6">
                <span className="text-overline">TRENDING COLLECTIONS</span>
                <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary leading-tight">
                    Batik Styles <span className="text-highlight">Worth Wearing</span> <br className="hidden md:block" /> Trending Batik Suits & <span className="text-highlight">Women's Clothing</span>
                </h2>
                <p className="text-body1 mt-2 text-center w-full max-w-2xl mx-auto text-primary/80">
                    Explore trending batik prints, fresh Batik Prints Women Clothing designs, cotton dresses for women, and ready-to-wear collections created for everyday shoppers, boutiques, resellers, and fashion businesses.
                </p>
            </div>

            <div className="w-full flex flex-wrap border-t border-primary/10">
                {/* ROW 1: 2 Items */}
                <Link href="/batik-prints-womens-clothing" className="block w-full md:w-1/2 relative aspect-square group overflow-hidden bg-cream flex justify-center border-b md:border-r border-primary/10">
                    <Image
                        src="/category-Homepage/cotton-cloth (1).webp"
                        alt="Cotton Cloth"
                        fill
                        className="object-cover object-top opacity-100 group-hover:scale-[1.05] transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 text-center px-4 md:px-8 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-3">
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-2">Category</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-normal text-white mb-2 md:mb-4">Cotton Cloth</h2>
                        <p className="text-white/90 text-[13px] md:text-sm font-medium max-w-sm drop-shadow-md mb-4 md:mb-6 leading-relaxed">Distinctive batik prints for everyday Indian style.</p>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-bold border-b border-transparent group-hover:border-white/80 pb-1 transition-all duration-300">
                            Explore Collection
                        </span>
                    </div>
                </Link>

                <Link href="/batik-cotton-dress-for-women" className="block w-full md:w-1/2 relative aspect-square group overflow-hidden bg-cream flex justify-center border-b border-primary/10">
                    <Image
                        src="/category-Homepage/cotton-dress-for-women.webp"
                        alt="Cotton Dress for Women"
                        fill
                        className="object-cover object-top opacity-100 group-hover:scale-[1.05] transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 text-center px-4 md:px-8 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-3">
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-2">Category</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-normal text-white mb-2 md:mb-4">Cotton Dress for Women</h2>
                        <p className="text-white/90 text-[13px] md:text-sm font-medium max-w-sm drop-shadow-md mb-4 md:mb-6 leading-relaxed">Statement-making women suits with timeless batik design character.</p>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-bold border-b border-transparent group-hover:border-white/80 pb-1 transition-all duration-300">
                            Explore Collection
                        </span>
                    </div>
                </Link>

                {/* ROW 2: 2 Items */}
                <Link href="/batik-ethnic-wear-for-women" className="block w-full md:w-1/2 relative aspect-square group overflow-hidden bg-cream flex justify-center border-b md:border-r border-primary/10">
                    <Image
                        src="/category-Homepage/ethnic-wear-for-women.webp"
                        alt="Ethnic Wear for Women"
                        fill
                        className="object-cover object-top opacity-100 group-hover:scale-[1.05] transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 text-center px-4 md:px-8 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-3">
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-2">Category</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-normal text-white mb-2 md:mb-4">Ethnic Wear for Women</h2>
                        <p className="text-white/90 text-[13px] md:text-sm font-medium max-w-sm drop-shadow-md mb-4 md:mb-6 leading-relaxed">Pure cotton dresses for women with elegant batik prints and breathable comfort.</p>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-bold border-b border-transparent group-hover:border-white/80 pb-1 transition-all duration-300">
                            Explore Collection
                        </span>
                    </div>
                </Link>

                <Link href="/new-batik-prints-suits" className="block w-full md:w-1/2 relative aspect-square group overflow-hidden bg-cream flex justify-center border-b border-primary/10">
                    <Image
                        src="/category-Homepage/cotton-kurtis-for-women.webp"
                        alt="Cotton Kurtis for Women"
                        fill
                        className="object-cover object-top opacity-100 group-hover:scale-[1.05] transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 text-center px-4 md:px-8 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-3">
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-2">Category</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-normal text-white mb-2 md:mb-4">Cotton Kurtis for Women</h2>
                        <p className="text-white/90 text-[13px] md:text-sm font-medium max-w-sm drop-shadow-md mb-4 md:mb-6 leading-relaxed">Fresh batik suits and new styles added to the collection.</p>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-bold border-b border-transparent group-hover:border-white/80 pb-1 transition-all duration-300">
                            Explore Collection
                        </span>
                    </div>
                </Link>

                {/* ROW 3: 1 Full-Width Item */}
                <Link href="/wholesale-batik-women-dresses" className="block w-full relative h-[60vh] md:h-[80vh] group overflow-hidden bg-cream flex justify-center border-b border-primary/10">
                    <Image
                        src="/category-Homepage/dresses-for-women.webp"
                        alt="Dresses for Women"
                        fill
                        className="object-cover object-top opacity-100 group-hover:scale-[1.05] transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-20 text-center px-6 md:px-12 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-3">
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-2">Category</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white mb-3 md:mb-5">Dresses for Women</h2>
                        <p className="text-white/90 text-[13px] md:text-base font-medium max-w-lg drop-shadow-md mb-6 md:mb-8 leading-relaxed">Ready-stock fashion collections for growing businesses.</p>
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/90 font-bold border-b border-transparent group-hover:border-white/80 pb-1 transition-all duration-300">
                            Explore Collection
                        </span>
                    </div>
                </Link>
            </div>
            
            <div className="w-full flex justify-center py-12 md:py-20 bg-cream">
                <a href="/batik-prints-womens-clothing" className="inline-flex items-center justify-center bg-primary text-white font-body font-medium text-sm md:text-base px-10 md:px-12 py-4 md:py-5 rounded-full hover:bg-accent transition-colors duration-300 hover:shadow-lg">
                    Explore All Collections
                </a>
            </div>
        </section>
    );
}

export function LookbookSection() {
    const looks = [
        { title: "Batik Party Wear Suit for Women", img: "/lookbook_emerald.png", link: "/batik-cotton-dress-for-women" },
        { title: "White Cotton Kurti for Women", img: "/lookbook_white.png", link: "/batik-prints-womens-clothing" },
        { title: "Designer Cotton Dress for Women", img: "/lookbook_designer.png", link: "/new-batik-prints-suits" },
        { title: "Premium Casual Kurti for Women", img: "/lookbook_casual.png", link: "/wholesale-batik-women-dresses" }
    ];

    return (
        <section className="pt-8 md:pt-16 pb-12 md:pb-20 px-6 bg-cream border-t border-primary/5">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">

                {/* Standard Brand Text Header */}
                <div className="flex flex-col gap-3 items-center text-center">
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-accent">Style Guide</span>
                    <h2 className="text-h2 text-primary relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[1px] after:bg-primary/20">
                        Find Your Perfect <br className="md:hidden" /><span className="text-highlight italic">Everyday Look</span>
                    </h2>
                    <p className="text-sm md:text-base max-w-2xl mx-auto mt-2 text-primary/80 font-medium leading-relaxed">
                        Explore inspiring women's dress designs, batik dress designs, casual dresses for women, and versatile suit sets for women—styled to help you discover your next effortless look.
                    </p>
                </div>

                {/* Clean Asymmetrical Collage Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-8 h-auto w-full">

                    {/* Large Featured Image (Left) */}
                    <Link href={looks[0].link} className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 flex flex-col gap-4 group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-surface shadow-sm border border-primary/10">
                            <Image src={looks[0].img} alt={looks[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-[6s] ease-out" unoptimized />
                        </div>
                        <div className="flex flex-col gap-1 items-start text-left">
                            <h4 className="text-[13px] md:text-[15px] font-heading font-semibold text-primary group-hover:text-accent transition-colors leading-tight">{looks[0].title}</h4>
                        </div>
                    </Link>

                    {/* Top Right Grid Item 1 */}
                    <Link href={looks[1].link} className="col-span-1 row-span-1 flex flex-col gap-4 group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-surface shadow-sm border border-primary/10">
                            <Image src={looks[1].img} alt={looks[1].title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-[6s] ease-out" unoptimized />
                        </div>
                        <div className="flex flex-col gap-1 items-start text-left">
                            <h4 className="text-[13px] md:text-[15px] font-heading font-semibold text-primary group-hover:text-accent transition-colors leading-tight">{looks[1].title}</h4>
                        </div>
                    </Link>

                    {/* Top Right Grid Item 2 */}
                    <Link href={looks[2].link} className="col-span-1 row-span-1 flex flex-col gap-4 group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-surface shadow-sm border border-primary/10">
                            <Image src={looks[2].img} alt={looks[2].title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-[6s] ease-out" unoptimized />
                        </div>
                        <div className="flex flex-col gap-1 items-start text-left">
                            <h4 className="text-[13px] md:text-[15px] font-heading font-semibold text-primary group-hover:text-accent transition-colors leading-tight">{looks[2].title}</h4>
                        </div>
                    </Link>

                    {/* Bottom Right Wide Item */}
                    <Link href={looks[3].link} className="col-span-1 md:col-span-2 row-span-1 flex flex-col gap-4 group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-[2px] bg-surface shadow-sm border border-primary/10">
                            <Image src={looks[3].img} alt={looks[3].title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-[6s] ease-out" unoptimized />
                        </div>
                        <div className="flex flex-col gap-1 items-start text-left">
                            <h4 className="text-[13px] md:text-[15px] font-heading font-semibold text-primary group-hover:text-accent transition-colors leading-tight">{looks[3].title}</h4>
                        </div>
                    </Link>

                </div>

                {/* CTA Button */}
                <div className="mt-4 md:mt-6 flex justify-center w-full">
                    <Link href="/batik-ethnic-wear-for-women" className="btn-secondary group">
                        <span>Explore More Styles</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function PartnershipBannerSection() {
    return (
        <section className="relative w-full aspect-video overflow-hidden bg-[#F9F8F6]">
            {/* Pure cinematic image covering the entire container, no text overlays */}
            <Image
                src="/round-category/plus size clothing.webp"
                alt="Aqsha - Premium Ethnic Wear Campaign"
                fill
                sizes="100vw"
                className="object-cover object-[center_0%]"
                priority
                unoptimized
            />
        </section>
    );
}
