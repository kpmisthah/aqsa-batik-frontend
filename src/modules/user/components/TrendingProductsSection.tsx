"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductPathByName } from "@/utils/slugMapper";
import { UserProduct } from "./ProductCard";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function TrendingProductsSection() {
    const [products, setProducts] = useState<UserProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch just 3 products for the editorial cover layout
                const res = await fetch(`${API_BASE}/products?limit=3`);
                const json = await res.json();
                if (json.data) setProducts(json.data.slice(0, 3));
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
        <section className="bg-surface pt-20 pb-10 md:pt-32 md:pb-16 px-6 lg:px-12 border-t border-border/40">
            <div className="max-w-[1500px] mx-auto">
                
                {/* Minimalist Header */}
                <div className="flex justify-between items-end mb-12 border-b border-primary/20 pb-6">
                     <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-normal text-primary tracking-tight">
                         Trending Edits
                     </h2>
                     <Link href="/batik-suits" className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground hover:text-accent transition-all hidden md:block">
                         View All Collections &rarr;
                     </Link>
                </div>

                {/* 3 Column Cover Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
                    {products.map((product) => {
                        const imageSrc = product.images?.[0] || product.image || "/placeholder.png";
                        const customPath = getProductPathByName(product.name, product.category);
                        const productHref = customPath ? customPath : `/products/${product._id || product.id}`;
                        
                        return (
                            <Link 
                                href={productHref}
                                key={product._id || product.id} 
                                className="group flex flex-col cursor-pointer"
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
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/50 mt-1 min-w-[50px]">
                                        TREND
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-sm md:text-base text-foreground font-medium uppercase tracking-wider leading-snug group-hover:text-primary transition-colors duration-500">
                                            {product.name}
                                        </h3>
                                        <span className="text-[11px] md:text-xs text-foreground/70 font-serif italic">
                                            {product.category} <span className="mx-2 opacity-40">|</span> In Stock
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                
                {/* Mobile Fallback Button */}
                <div className="mt-12 text-center md:hidden border-t border-primary/20 pt-6">
                    <Link href="/batik-suits" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground hover:text-accent transition-all">
                        View All Collections &rarr;
                    </Link>
                </div>

            </div>
        </section>
    );
}
