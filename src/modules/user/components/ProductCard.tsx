"use client";
import Image from "next/image";
import Link from "next/link";
import { getProductPathByName } from "@/utils/slugMapper";

export interface UserProduct {
    _id?: string;
    id?: string;
    name: string;
    category: string;
    subCategory?: string;
    images?: string[];
    image?: string;
    isBestSeller?: boolean;
}

interface ProductCardProps {
    product: UserProduct;
    isWholesalePage?: boolean;
}

export default function ProductCard({ product, isWholesalePage = false }: ProductCardProps) {
    const waMessage = `Hi, I'm interested in the ${product.name} (${product.subCategory || product.category}). Could you provide more details and wholesale pricing?`;
    const waLink = `https://wa.me/918815373767?text=${encodeURIComponent(waMessage)}`;
    const imageSrc = product.images?.[0] || product.image || "/placeholder.png";
    const overridePrefix = isWholesalePage ? "/wholesale-women-dresses" : undefined;
    const customPath = getProductPathByName(product.name, product.category, overridePrefix);
    const productHref = customPath
        ? `${customPath}${isWholesalePage ? '?wholesale=true' : ''}`
        : `/products/${product._id || product.id}${isWholesalePage ? '?wholesale=true' : ''}`;

    return (
        <div className="group flex flex-col gap-6 h-full">
            {/* Image Container */}
            <div className="relative aspect-square rounded-[24px] overflow-hidden shadow-xl border border-[#5A2A1F]/5 transition-all duration-700 group-hover:-translate-y-2">
                <Image
                    src={imageSrc}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    unoptimized={true}
                    className="group-hover:scale-110 transition-all duration-1000 brightness-[0.95] group-hover:brightness-100"
                />
                {product.isBestSeller && (
                    <div className="absolute top-6 left-6 bg-[#8B3A2B] text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg z-20">
                        Best Seller
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 px-2 text-center items-center flex-grow">
                <div className="flex flex-col gap-1 items-center">
                    <span className="text-[9px] md:text-[11px] font-bold text-[#8B3A2B]/60 uppercase tracking-[0.3em]">
                        {product.subCategory}
                    </span>
                    <h4 className="font-playfair text-[15px] md:text-2xl font-bold text-[#5A2A1F] leading-tight">
                        {product.name}
                    </h4>
                </div>

                <div className="flex flex-col gap-2 mt-auto w-full px-1">
                    <Link
                        href={productHref}
                        className="w-full py-2.5 md:py-4 border border-[#5A2A1F]/20 rounded-lg md:rounded-xl font-bold text-[9px] md:text-[13px] uppercase tracking-[0.1em] md:tracking-widest text-[#5A2A1F] hover:bg-[#5A2A1F] hover:text-white transition-all duration-300 flex justify-center items-center"
                    >
                        View Details
                    </Link>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 md:py-4 bg-[#5A2A1F] text-white rounded-lg md:rounded-xl font-bold text-[9px] md:text-[13px] uppercase tracking-[0.1em] md:tracking-widest flex items-center justify-center gap-1.5 hover:bg-[#8B3A2B] transition-all duration-300 shadow-md"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.485l-.719 2.624 2.688-.705c.95.514 2.035.804 3.19.803 3.181 0 5.767-2.584 5.768-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.2l-1.006 1.005c-.122.122-.318.159-.477.087-.514-.232-1.02-.555-1.504-1.039-.485-.484-.807-.989-1.039-1.504-.072-.159-.035-.355.087-.477l1.005-1.006c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0l-.798.797c-.506.507-.639 1.243-.374 1.874.457 1.087 1.214 2.064 2.223 3.073 1.009 1.009 1.986 1.766 3.073 2.223.631.265 1.367.132 1.874-.374l.797-.798c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0z" />
                        </svg>
                        Enquiry
                    </a>
                </div>
            </div>
        </div>
    );
}
