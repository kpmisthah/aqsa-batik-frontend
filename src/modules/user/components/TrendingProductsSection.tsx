"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductPathByName } from "@/utils/slugMapper";
import { UserProduct } from "./ProductCard";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function TrendingProductsSection({ title = "Trending Edits" }: { title?: string }) {
    const [products, setProducts] = useState<UserProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        let animationId: number;

        const continuousScroll = () => {
            if (scrollRef.current && !isHovered) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                // If scrolled to the end, instantly reset to start
                if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1) {
                    scrollRef.current.scrollLeft = 0;
                } else {
                    // Glide by 1 pixel every frame for buttery smooth continuous motion
                    scrollRef.current.scrollLeft += 1.5; 
                }
            }
            animationId = requestAnimationFrame(continuousScroll);
        };

        if (products.length > 0) {
            animationId = requestAnimationFrame(continuousScroll);
        }

        return () => cancelAnimationFrame(animationId);
    }, [products, isHovered]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch up to 10 products for the horizontal scroll layout
                const res = await fetch(`${API_BASE}/products?limit=10`);
                const json = await res.json();
                if (json.data) setProducts(json.data);
            } catch (error) {
                console.error("Failed to fetch trending products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading || products.length === 0) return null;

    return (
        <section className="bg-cream pt-12 pb-6 md:pt-16 md:pb-8 px-6 lg:px-12 border-t border-border/40">
            <div className="max-w-[1500px] mx-auto">
                
                {/* Minimalist Header */}
                <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12">
                     <h2 className="text-h2 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[1px] after:bg-primary/20">
                         {title}
                     </h2>
                </div>

                {/* Horizontal Scroll Layout */}
                <div 
                    className="relative w-full group/slider pt-2"
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Arrows */}
                    <button onClick={() => scroll('left')} aria-label="Scroll left" className="absolute left-2 lg:left-6 top-[35%] -translate-y-1/2 z-20 bg-surface text-primary p-3 rounded-full shadow-lg border border-primary/10 opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-tan">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button onClick={() => scroll('right')} aria-label="Scroll right" className="absolute right-2 lg:right-6 top-[35%] -translate-y-1/2 z-20 bg-surface text-primary p-3 rounded-full shadow-lg border border-primary/10 opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-tan">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>

                    <div ref={scrollRef} className="flex overflow-x-auto gap-6 md:gap-8 lg:gap-10 pb-8 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {products.map((product) => {
                        const imageSrc = product.images?.[0] || product.image || "/placeholder.png";
                        const customPath = getProductPathByName(product.name, product.category);
                        const productHref = customPath ? customPath : `/products/${product._id || product.id}`;
                        
                        return (
                            <Link 
                                href={productHref}
                                key={product._id || product.id} 
                                className="group flex flex-col cursor-pointer shrink-0 w-[280px] md:w-[350px]"
                            >
                                {/* Editorial Full-Bleed Image Frame */}
                                <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-cream mb-5 overflow-hidden">
                                    <Image
                                        src={imageSrc}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        unoptimized={true}
                                        className="object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out"
                                    />
                                </div>
                                
                                {/* Editorial Typography Block matching the requested SSENSE-style */}
                                <div className="flex items-start gap-4 pt-2">
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/ mt-1 min-w-[50px]">
                                        TREND
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-sm md:text-base text-primary/80 font-medium uppercase tracking-wider leading-snug group-hover:text-primary transition-colors duration-500">
                                            {product.name}
                                        </h3>
                                        <span className="text-[11px] md:text-xs text-primary/ font-serif italic">
                                            {product.category} <span className="mx-2 opacity-40">|</span> In Stock
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                    </div>
                </div>
                
                <div className="flex justify-center mt-4 md:mt-6">
                    <Link href="/batik-suits" className="group flex items-center gap-3 px-8 py-3.5 border border-primary/30 text-primary text-[11px] uppercase tracking-[0.15em] font-bold hover:border-accent hover:text-accent transition-all duration-300">
                        <span>View All Collections</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
