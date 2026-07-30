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
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch trending products
                const res = await fetch(`${API_BASE}/products?limit=8`);
                const json = await res.json();
                if (json.data) {
                    setProducts(json.data);
                }
            } catch (error) {
                console.error("Failed to fetch trending products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    if (loading || products.length === 0) return null;

    return (
        <section className="bg-primary text-white py-24 md:py-48 px-6 md:px-12 relative overflow-hidden">
            {/* Cinematic Background effect */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none z-0"></div>
            
            <div className="max-w-[1500px] mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                
                {/* Left Side: Sticky Text Content */}
                <div className="lg:w-[35%] lg:sticky top-32 flex flex-col gap-6 md:gap-8">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-accent"></span>
                        <span className="text-overline tracking-[0.4em] text-accent uppercase">Designer Picks</span>
                        <span className="w-12 h-[1px] bg-accent"></span>
                    </div>
                    
                    <h2 className="text-h1 text-white leading-tight">
                        Trending <br className="hidden lg:block" /> Now.
                    </h2>
                    
                    <p className="text-body1 text-white/70 italic border-l-2 border-accent/30 pl-4 py-1 max-w-sm">
                        Curated selections defining the current season. High-demand styles that retailers are ordering across India.
                    </p>

                    <div className="pt-4 flex gap-4 items-center">
                        {/* Custom Navigation Button for the Cinematic Scroll */}
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

                {/* Right Side: Horizontal Cinematic Product Scroll */}
                <div className="lg:w-[65%] w-full relative">
                    {/* Fading Edges for the Cinematic Effect */}
                    <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none hidden md:block"></div>
                    
                    <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 md:gap-10 pb-10 pt-4 snap-x snap-mandatory hide-scrollbar relative z-10 w-full"
                    >
                        {products.map((product) => {
                            const imageSrc = product.images?.[0] || product.image || "/placeholder.png";
                            const customPath = getProductPathByName(product.name, product.category);
                            const productHref = customPath ? customPath : `/products/${product._id || product.id}`;
                            
                            return (
                                <Link 
                                    href={productHref}
                                    key={product._id || product.id} 
                                    className="min-w-[280px] md:min-w-[380px] aspect-[3/4] overflow-hidden shrink-0 snap-center relative group block transition-all"
                                >
                                    <Image
                                        src={imageSrc}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                        unoptimized={true}
                                        className="group-hover:scale-[1.02] transition-transform duration-[1500ms] ease-out brightness-[0.8] group-hover:brightness-[1.1] contrast-[1.1]"
                                    />
                                    {/* Dark Cinematic Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
                                    
                                    {/* Product Title - Flowing upward elegantly on hover */}
                                    <div className="absolute bottom-8 left-8 right-8 text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="font-heading text-2xl md:text-3xl text-white font-medium drop-shadow-2xl leading-tight">
                                            {product.name}
                                        </h3>
                                        <div className="w-0 h-[2px] bg-accent mt-4 group-hover:w-full transition-all duration-700 ease-in-out"></div>
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
