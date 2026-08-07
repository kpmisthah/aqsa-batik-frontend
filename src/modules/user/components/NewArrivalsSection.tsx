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
                // Fetch exactly 3 products
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
                    className="group-hover:scale-105 transition-transform duration-[4s] ease-out absolute inset-0 z-0"
                />
                
                {/* Elegant White Gradient for Minimalist Text */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent z-10 transition-opacity duration-500 opacity-90"></div>
                
                <div className="relative z-20 flex flex-col gap-1 md:gap-2 text-center items-center pb-8 pt-4 pointer-events-none">
                    <span className="text-[9px] md:text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
                        {product.category || (isHero ? "Featured Edit" : "Just Added")}
                    </span>
                    <h3 className={`font-heading text-primary font-medium leading-tight group-hover:text-accent transition-colors ${isHero ? 'text-2xl md:text-4xl lg:text-4xl max-w-lg' : 'text-lg md:text-xl'}`}>
                        {product.name}
                    </h3>
                </div>
            </>
        );
    };

    return (
        <section className="bg-surface pt-16 pb-12 md:pt-20 md:pb-16 px-6 md:px-12 relative overflow-hidden text-center border-t border-border/40">
            <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center">

                {/* Header Subtitle Component */}
                <div className="w-full flex flex-col items-center mb-12 gap-3">
                    <span className="text-overline">Fresh Off The Loom</span>
                    <h2 className="text-h2 text-primary">
                        New Arrivals
                    </h2>
                    <p className="text-body1 max-w-md mx-auto mt-1">
                        Clean prints, sharp contrast, and traditional wax resilience. Unveil the newest batch of masterpieces.
                    </p>
                </div>

                {/* Glass Container Mosaic */}
                <div className="flex flex-col lg:flex-row gap-5 md:gap-6 w-full h-[900px] lg:h-[550px]">
                    
                    {/* Left: Huge Hero Block */}
                    <Link
                        href={getProductPathByName(heroProduct.name, heroProduct.category) || `/products/${heroProduct._id || heroProduct.id}`}
                        className="group relative w-full lg:w-[60%] h-[50%] lg:h-full rounded-2xl overflow-hidden bg-white flex flex-col justify-end shadow-md border border-border/40 transition-transform duration-500 hover:-translate-y-1"
                    >
                        {renderBentoCard(heroProduct, true)}
                    </Link>

                    {/* Right: Stacked Sub-Blocks */}
                    <div className="w-full lg:w-[40%] flex flex-col gap-5 md:gap-6 h-[50%] lg:h-full">
                        
                        {/* Top Right */}
                        <Link
                            href={getProductPathByName(product2.name, product2.category) || `/products/${product2._id || product2.id}`}
                            className="group relative w-full h-[50%] rounded-2xl overflow-hidden bg-white flex flex-col justify-end shadow-md border border-border/40 transition-transform duration-500 hover:-translate-y-1"
                        >
                            {renderBentoCard(product2, false)}
                        </Link>

                        {/* Bottom Right */}
                        <Link
                            href={getProductPathByName(product3.name, product3.category) || `/products/${product3._id || product3.id}`}
                            className="group relative w-full h-[50%] rounded-2xl overflow-hidden bg-white flex flex-col justify-end shadow-md border border-border/40 transition-transform duration-500 hover:-translate-y-1"
                        >
                            {renderBentoCard(product3, false)}
                        </Link>
                        
                    </div>
                </div>

                <div className="mt-12 w-full flex justify-center">
                    <Link href="/new-batik-prints" className="bg-transparent border border-primary/15 hover:border-accent text-primary px-8 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shrink-0 hover:text-accent">
                        View All Collections
                    </Link>
                </div>
            </div>
        </section>
    );
}
