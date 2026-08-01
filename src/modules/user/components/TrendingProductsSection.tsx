"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductPathByName } from "@/utils/slugMapper";
import { UserProduct } from "./ProductCard";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function TrendingProductsSection() {
    const [products, setProducts] = useState<UserProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products?limit=8`);
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

    // Continuous Glide Autoscroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || products.length === 0 || isHovered) return;

        const scrollLoop = () => {
            if (container) {
                if (Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 1) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 1;
                }
            }
            animationRef.current = requestAnimationFrame(scrollLoop);
        };

        animationRef.current = requestAnimationFrame(scrollLoop);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isHovered, products]);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    if (loading || products.length === 0) return null;

    return (
        <section className="bg-primary text-white py-24 md:py-48 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40 pointer-events-none z-0"></div>
            
            <div className="max-w-[1500px] mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                
                <div className="lg:w-[35%] lg:sticky top-32 flex flex-col gap-6 md:gap-8">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-accent"></span>
                        <span className="text-overline tracking-[0.4em] text-accent uppercase">Designer Picks</span>
                        <span className="w-12 h-[1px] bg-accent"></span>
                    </div>
                    
                    <h2 className="text-h1 text-white leading-tight whitespace-nowrap">
                        Trending Now.
                    </h2>
                    
                    <p className="text-body1 text-white/70 italic border-l-2 border-accent/30 pl-4 py-1 max-w-sm">
                        Curated selections defining the current season. High-demand styles that retailers are ordering across India.
                    </p>

                    <div className="pt-4 flex gap-4 items-center">
                        <button 
                            onClick={scrollRight}
                            className="hidden lg:flex w-14 h-14 rounded-full border border-white/20 hover:border-accent hover:bg-accent hover:text-primary items-center justify-center transition-all group focus:outline-none backdrop-blur-md"
                            aria-label="Scroll right"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                        <Link href="/batik-suits" className="text-sm font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors flex items-center gap-2">
                            Explore All <span className="lg:hidden">&rarr;</span>
                        </Link>
                    </div>
                </div>

                <div className="lg:w-[65%] w-full relative">
                    <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none hidden md:block"></div>
                    
                    <div 
                        ref={scrollContainerRef}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={() => setIsHovered(true)}
                        onTouchEnd={() => setIsHovered(false)}
                        className="flex overflow-x-auto gap-6 md:gap-10 pb-10 pt-4 hide-scrollbar relative z-10 w-full"
                    >
                        {products.map((product) => {
                            const imageSrc = product.images?.[0] || product.image || "/placeholder.png";
                            const customPath = getProductPathByName(product.name, product.category);
                            const productHref = customPath ? customPath : `/products/${product._id || product.id}`;
                            
                            return (
                                <Link 
                                    href={productHref}
                                    key={product._id || product.id} 
                                    className="min-w-[280px] md:min-w-[380px] aspect-[3/4] rounded-3xl overflow-hidden shrink-0 relative group block transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                                >
                                    <Image
                                        src={imageSrc}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                        unoptimized={true}
                                        className="group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-out brightness-[0.85] group-hover:brightness-[1.1] contrast-[1.1]"
                                    />
                                    {/* Cinematic Gradient Overlay (Darker at bottom) */}
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700"></div>
                                    
                                    {/* Modern Glass Info Card */}
                                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col p-5 md:p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-700 group-hover:bg-black/60 group-hover:border-accent/40 group-hover:-translate-y-2">
                                        <span className="text-[9px] md:text-[10px] uppercase font-bold text-accent tracking-[0.2em] mb-1.5 md:mb-2 opacity-90">{product.category}</span>
                                        <h3 className="font-heading text-lg md:text-2xl text-white font-bold leading-tight group-hover:text-accent transition-colors duration-500">
                                            {product.name}
                                        </h3>
                                        
                                        {/* Expandable Action Arrow */}
                                        <div className="flex items-center justify-between mt-0 h-0 opacity-0 group-hover:mt-5 group-hover:h-5 group-hover:opacity-100 transition-all duration-500 ease-in-out border-t border-transparent group-hover:border-white/10 group-hover:pt-5">
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Explore Design</span>
                                            <svg className="w-5 h-5 text-accent -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
