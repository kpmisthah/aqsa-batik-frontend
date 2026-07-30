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
                // Fetch the newest 3 products (backend sorts by createdAt desc)
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

    if (loading || products.length < 3) return null; // Require at least 3 products for the mosaic

    const [heroProduct, product2, product3] = products;

    const renderProductCard = (product: UserProduct, imageClass: string) => {
        const imageSrc = product.images?.[0] || product.image || "/placeholder.png";
        const customPath = getProductPathByName(product.name, product.category);
        const productHref = customPath ? customPath : `/products/${product._id || product.id}`;

        return (
            <Link
                href={productHref}
                className="group flex flex-col gap-4 md:gap-6 w-full"
            >
                {/* The Editorial Image Frame - No shadows, no rounded corners, stark and clear */}
                <div className={`relative overflow-hidden bg-cream ${imageClass}`}>
                    <Image
                        src={imageSrc}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        unoptimized={true}
                        className="group-hover:scale-105 transition-transform duration-[2000ms] ease-out brightness-[0.95] group-hover:brightness-100"
                    />
                </div>

                {/* Typography stays clean, external to the image, massive contrast */}
                <div className="flex flex-col gap-1 items-start">
                    <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.3em] font-heading">
                        Just Added
                    </span>
                    <h3 className="font-heading text-lg md:text-2xl text-primary font-bold leading-tight group-hover:text-secondary transition-colors">
                        {product.name}
                    </h3>
                </div>
            </Link>
        );
    };

    return (
        <section className="bg-white py-24 md:py-40 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center">

                {/* Extremely spaced out, minimal header */}
                <div className="text-center flex flex-col gap-4 md:gap-6 items-center mb-16 md:mb-32">
                    <span className="w-16 h-[2px] bg-accent"></span>
                    <h2 className="text-h1 text-primary">New Arrivals</h2>
                    <p className="text-body1 text-primary/70 max-w-lg mx-auto italic">
                        Fresh off the loom. Clean prints, sharp contrast, and traditional wax resilience.
                    </p>
                </div>

                {/* Asymmetrical Editorial Grid Layout */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24 w-full">
                    
                    {/* Left Column (Huge Focus) */}
                    <div className="w-full md:w-[60%] flex flex-col gap-16 md:gap-32">
                        {renderProductCard(heroProduct, "h-[60vh] md:h-[800px] w-full")}
                        
                        {/* Hidden on mobile, staggered right on desktop */}
                        <div className="hidden md:block w-[70%] ml-auto">
                            {renderProductCard(product3, "aspect-[3/4] w-full")}
                        </div>
                    </div>

                    {/* Right Column (Offset Downward) */}
                    <div className="w-full md:w-[40%] flex flex-col gap-12 md:gap-24 md:mt-48">
                        {renderProductCard(product2, "aspect-[4/5] w-full")}
                        
                        {/* Visible on mobile to keep stacking */}
                        <div className="block md:hidden w-full">
                            {renderProductCard(product3, "aspect-[3/4] w-full")}
                        </div>
                    </div>
                </div>
                
                {/* Shop All Collection Link */}
                <div className="mt-20 md:mt-32 w-full flex justify-center border-t border-primary/5 pt-12">
                   <Link href="/new-batik-prints" className="text-sm font-bold uppercase tracking-[0.2em] text-primary hover:text-accent flex items-center gap-2 transition-colors">
                       View Complete Collection <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                   </Link>
                </div>
            </div>
        </section>
    );
}
