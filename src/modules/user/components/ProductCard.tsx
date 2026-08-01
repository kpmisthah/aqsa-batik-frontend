"use client";
import Image from "next/image";
import Link from "next/link";
import { getProductPathByName } from "@/utils/slugMapper";
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
    
    const waMessage = `Hi, I'm interested in the ${product.name} (${product.subCategory || product.category}). Could you provide more details and wholesale pricing?`;
    const waLink = `https://wa.me/918815373767?text=${encodeURIComponent(waMessage)}`;
    const imageSrc = product.images?.[0] || product.image || "/placeholder.png";
    const overridePrefix = isWholesalePage ? "/wholesale-women-dresses" : undefined;
    const customPath = getProductPathByName(product.name, product.category, overridePrefix);
    const productHref = customPath
        ? `${customPath}${isWholesalePage ? '?wholesale=true' : ''}`
        : `/products/${product._id || product.id}${isWholesalePage ? '?wholesale=true' : ''}`;

    return (
        <div className="group flex flex-col h-full cursor-pointer relative">
            <Link href={productHref} className="flex flex-col gap-4 flex-grow relative block">
                {/* Image Container - Tall Aspect Ratio, Edge to Edge */}
                <div className={`relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden ${!imageLoaded ? 'bg-[#F9F7F1] animate-pulse' : 'bg-transparent'}`}>
                    <Image
                        src={imageSrc}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        unoptimized={true}
                        onLoadingComplete={() => setImageLoaded(true)}
                        className={`transition-all duration-[1200ms] ${imageLoaded ? 'opacity-100 group-hover:scale-105' : 'opacity-0'}`}
                    />
                    
                    {/* Bestseller Badge */}
                    {product.isBestSeller && (
                        <div className="absolute top-4 left-4 bg-primary text-white text-overline px-3 py-1.5 z-10">
                            Signature
                        </div>
                    )}

                    {/* Discount Badge */}
                    {product.fullPrice && product.discountPrice && product.fullPrice > product.discountPrice && (
                        <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-secondary text-white text-[9px] md:text-sm font-black uppercase tracking-widest px-2 py-1 md:px-3 md:py-1.5 z-10 shadow-sm">
                            {Math.round(((product.fullPrice - product.discountPrice) / product.fullPrice) * 100)}% OFF
                        </div>
                    )}
                    
                    {/* Gradient Overlay for Text Clarity (Bottom) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Content - Editorial Minimalist Aligned */}
                <div className="flex flex-col items-center text-center gap-1.5 pb-4 mt-5 px-2">
                    <span className="text-[9px] font-black tracking-[0.25em] text-secondary uppercase opacity-70">
                        {product.subCategory || product.category}
                        {product.isWholesale && <span className="ml-1.5 bg-secondary/10 text-secondary px-1.5 py-0.5 rounded-sm">WS</span>}
                    </span>
                    <h4 className="text-sm md:text-base font-medium text-primary w-full group-hover:text-secondary transition-colors font-heading leading-tight truncate">
                        {product.name}
                    </h4>
                    
                    {/* Premium Pricing */}
                    <div className="flex items-center justify-center gap-2.5 mt-1">
                        {product.discountPrice ? (
                            <>
                                <span className="text-sm font-bold text-primary tracking-[0.05em]">
                                    INR {product.discountPrice.toLocaleString()}
                                </span>
                                {product.fullPrice && product.fullPrice > product.discountPrice && (
                                    <span className="text-xs font-medium text-black line-through decoration-black">
                                        INR {product.fullPrice.toLocaleString()}
                                    </span>
                                )}
                            </>
                        ) : product.fullPrice ? (
                             <span className="text-sm font-bold text-primary tracking-[0.05em]">
                                 INR {product.fullPrice.toLocaleString()}
                             </span>
                        ) : (
                             <span className="text-[10px] font-black text-primary/80 uppercase tracking-widest">
                                 Price Upon Request
                             </span>
                        )}
                    </div>
                </div>
            </Link>

            {/* Quick Action Floating Overlay */}
            <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-20 md:bottom-24 right-4 bg-white/90 backdrop-blur-md text-primary w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:bg-primary hover:text-white hover:scale-110 z-30"
                aria-label="Quick Enquiry"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7 pl-[1px]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
            </a>
        </div>
    );
}
