"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductPathByName } from "@/utils/slugMapper";
import { UserProduct } from "./ProductCard";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function NewArrivalsSection() {
    const [products, setProducts] = useState<UserProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch exactly 3 products for the perfect Apple-style Bento Box
                const res = await fetch(`${API_BASE}/products?limit=3`);
                const json = await res.json();
                if (json.data) {
                    setProducts(json.data);
                }
            } catch (error) {
                console.warn("Failed to fetch new arrivals:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading || products.length < 3) return null;

    const [heroProduct, product2, product3] = products;

    // Helper to generate the card internals
    const renderBentoCard = (product: UserProduct, isHero: boolean) => {
        const imageSrc = product.images?.[0] || product.image || "/placeholder.png";
        
        return (
            <>
                <Image
                    src={imageSrc}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    unoptimized={true}
                    className="group-hover:scale-105 transition-transform duration-[2s] ease-out brightness-[0.85] group-hover:brightness-[0.95] absolute inset-0 z-0"
                />
                
                {/* Clean dark gradient for pure text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-500"></div>
                
                <div className="relative z-20 flex flex-col gap-1 md:gap-2 text-left pointer-events-none">
                    <span className="text-[10px] md:text-[11px] font-bold text-white/70 uppercase tracking-[0.3em] font-heading">
                        {product.category || (isHero ? "Featured Edit" : "Just Added")}
                    </span>
                    <h3 className={`font-heading text-white font-bold leading-tight drop-shadow-md group-hover:text-cream transition-colors ${isHero ? 'text-3xl md:text-5xl lg:text-6xl max-w-lg' : 'text-xl md:text-3xl'}`}>
                        {product.name}
                    </h3>
                </div>
            </>
        );
    };

    return (
        <section className="bg-white pt-12 md:pt-16 pb-16 md:pb-24 px-4 md:px-12 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center">

                {/* Header with Title and Inline Button */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6 lg:gap-12 pl-2">
                    <div className="text-center md:text-left flex flex-col gap-2 md:gap-4 max-w-xl">
                        <h2 className="text-h1 text-primary">
                            New Arrivals
                        </h2>
                        <p className="text-body1 text-primary/90 italic px-2 md:px-0">
                            Fresh off the loom. Clean prints, sharp contrast, and traditional wax resilience.
                        </p>
                    </div>
                    
                    {/* Top-Aligned CTA Button */}
                    <Link href="/new-batik-prints" className="group text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary border border-primary px-6 md:px-8 py-3 md:py-4 hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 md:gap-3 shrink-0 rounded-full md:rounded-none">
                        View All Prints
                        <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </Link>
                </div>

                {/* The Bento Box Mosaic (Option 3) */}
                <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full h-[850px] lg:h-[550px]">
                    
                    {/* Left: Huge Hero Block */}
                    <Link
                        href={getProductPathByName(heroProduct.name, heroProduct.category) || `/products/${heroProduct._id || heroProduct.id}`}
                        className="group relative w-full lg:w-[60%] h-[55%] lg:h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-neutral-900 flex flex-col justify-end p-8 md:p-12 shadow-md hover:shadow-xl transition-shadow duration-500"
                    >
                        {renderBentoCard(heroProduct, true)}
                    </Link>

                    {/* Right: Stacked Sub-Blocks */}
                    <div className="w-full lg:w-[40%] flex flex-col gap-4 md:gap-6 h-[45%] lg:h-full">
                        
                        {/* Top Right */}
                        <Link
                            href={getProductPathByName(product2.name, product2.category) || `/products/${product2._id || product2.id}`}
                            className="group relative w-full h-[50%] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-neutral-900 flex flex-col justify-end p-6 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500"
                        >
                            {renderBentoCard(product2, false)}
                        </Link>

                        {/* Bottom Right */}
                        <Link
                            href={getProductPathByName(product3.name, product3.category) || `/products/${product3._id || product3.id}`}
                            className="group relative w-full h-[50%] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-neutral-900 flex flex-col justify-end p-6 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500"
                        >
                            {renderBentoCard(product3, false)}
                        </Link>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
