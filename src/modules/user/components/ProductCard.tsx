"use client";
import Image from "next/image";
import Link from "next/link";
import { getProductPathByName } from "@/utils/slugMapper";
import { useCartStore } from "@/hooks/useCartStore";
import { useState } from "react";

export interface UserProduct {
    _id?: string;
    id?: string;
    name: string;
    category: string;
    subCategory?: string;
    images?: string[];
    image?: string;
    isBestSeller?: boolean;
    isWholesale?: boolean;
    fullPrice?: number;
    discountPrice?: number;
}

interface ProductCardProps {
    product: UserProduct;
    isWholesalePage?: boolean;
}

export default function ProductCard({ product, isWholesalePage = false }: ProductCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const { addItem } = useCartStore();
    
    const waMessage = `Hi, I'm interested in the ${product.name} (${product.subCategory || product.category}). Could you provide more details and wholesale pricing?`;
    const waLink = `https://wa.me/918815373767?text=${encodeURIComponent(waMessage)}`;
    const imageSrc = product.images?.[0] || product.image || "/placeholder.png";
    const overridePrefix = isWholesalePage ? "/wholesale-women-dresses" : undefined;
    const customPath = getProductPathByName(product.name, product.category, overridePrefix);
    const productHref = customPath
        ? `${customPath}${isWholesalePage ? '?wholesale=true' : ''}`
        : `/products/${product._id || product.id}${isWholesalePage ? '?wholesale=true' : ''}`;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            addItem({
                productId: (product._id || product.id || "").toString(),
                name: product.name,
                image: imageSrc,
                fullPrice: product.fullPrice || 0,
                discountPrice: product.discountPrice || product.fullPrice || 0,
                isWholesaleOnly: product.isWholesale || false,
            });
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
        } catch (err: any) {
            alert(err.message || "Failed to add to cart");
        }
    };

    return (
        <div className="group flex flex-col h-full bg-transparent w-full">
            <Link href={productHref} className="flex flex-col flex-grow relative block group/link">
                
                {/* Image Container - Tall Aspect Ratio, Edge to Edge */}
                <div className={`relative aspect-[3/4] w-full overflow-hidden ${!imageLoaded ? 'bg-gray-100 animate-pulse' : 'bg-transparent'}`}>
                    <Image
                        src={imageSrc}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        unoptimized={true}
                        onLoadingComplete={() => setImageLoaded(true)}
                        className={`transition-transform duration-[1200ms] ${imageLoaded ? 'opacity-100 group-hover/link:scale-105' : 'opacity-0'}`}
                    />
                    
                    {/* Bestseller Badge (If applicable, adapted to new style) */}
                    {product.isBestSeller && (
                        <div className="absolute top-2 left-2 bg-black text-white text-[9px] px-2 py-1 z-10 font-bold uppercase tracking-widest">
                            Signature
                        </div>
                    )}

                    {/* Circular Brand Discount Badge */}
                    {product.fullPrice && product.discountPrice && product.fullPrice > product.discountPrice && (
                        <div className="absolute top-3 left-3 bg-secondary text-primary text-[9px] font-bold rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-sm leading-none">
                            -{Math.round(((product.fullPrice - product.discountPrice) / product.fullPrice) * 100)}%
                        </div>
                    )}
                    
                    {/* Gradient Overlay for Hover Icons */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>

                    {/* Hover Icons Overlay (Heart and Eye) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 translate-y-2 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all duration-300 z-20">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm pointer-events-auto hover:bg-primary hover:text-white transition-colors">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm pointer-events-auto hover:bg-primary hover:text-white transition-colors">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Content - Left Aligned Minimalist */}
                <div className="flex flex-col text-left gap-1 mt-3 mb-4">
                    <h4 className="text-[13px] md:text-sm font-medium text-primary w-full truncate font-body">
                        {product.name}
                    </h4>
                    
                    {/* Premium Pricing */}
                    <div className="flex items-center gap-2 mt-0.5">
                        {product.discountPrice ? (
                            <>
                                <span className="text-[13px] font-bold text-accent">
                                    Rs. {product.discountPrice.toFixed(2)}
                                </span>
                                {product.fullPrice && product.fullPrice > product.discountPrice && (
                                    <span className="text-[11px] font-medium text-primary/50 line-through">
                                        Rs. {product.fullPrice.toFixed(2)}
                                    </span>
                                )}
                            </>
                        ) : product.fullPrice ? (
                             <span className="text-[13px] font-bold text-accent">
                                 Rs. {product.fullPrice.toFixed(2)}
                             </span>
                        ) : (
                             <span className="text-[11px] font-bold text-accent">
                                 Price Upon Request
                             </span>
                        )}
                    </div>
                </div>
            </Link>

            {/* Add to Cart Border Button */}
            <button
                onClick={isWholesalePage ? (e) => { e.preventDefault(); window.open(waLink, '_blank'); } : handleAddToCart}
                className={`w-full mt-auto py-2.5 border border-primary text-[11px] font-bold uppercase tracking-wider transition-colors ${isAdded ? 'bg-secondary text-primary border-secondary' : 'text-primary hover:bg-primary hover:text-white'}`}
            >
                {isWholesalePage ? 'Inquire Wholesale' : (isAdded ? 'Added to Cart' : 'Add to Cart')}
            </button>
        </div>
    );
}
