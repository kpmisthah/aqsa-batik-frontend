"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { useCartStore } from "@/hooks/useCartStore";
import { useWishlistStore } from "@/hooks/useWishlistStore";

export default function ProductInteractive({ product }: { product: any }) {
    const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image || "/product_white_mustard.png");
    const [selectedColor, setSelectedColor] = useState(product.colours?.[0] || "");
    const [lensState, setLensState] = useState<{ show: boolean, x: number, y: number, bgPosX: number, bgPosY: number, containerW: number, containerH: number }>({ show: false, x: 0, y: 0, bgPosX: 0, bgPosY: 0, containerW: 0, containerH: 0 });
    const [toast, setToast] = useState<{ show: boolean, message: string }>({ show: false, message: "" });
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const { addItem: addCartItem } = useCartStore();
    const { addItem: addWishlistItem, isInWishlist, removeItem: removeWishlistItem } = useWishlistStore();
    
    const showToast = (message: string) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: "" }), 3000);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!imageContainerRef.current) return;
        const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
        
        // Mouse position relative to container
        const x = e.clientX - left;
        const y = e.clientY - top;

        const zoom = 2.5;
        const lensRadius = 110; // Half of 220px width/height

        const bgPosX = (x * zoom) - lensRadius;
        const bgPosY = (y * zoom) - lensRadius;

        setLensState({ show: true, x, y, bgPosX, bgPosY, containerW: width, containerH: height });
    };

    const handleMouseLeave = () => {
        setLensState({ ...lensState, show: false });
    };

    const handleAddToCart = () => {
        addCartItem({
            productId: product._id || product.id,
            name: product.name,
            image: product.images?.[0] || product.image || "/product_white_mustard.png",
            fullPrice: product.fullPrice,
            discountPrice: product.discountPrice || product.fullPrice,
            variantColour: selectedColor,
            isWholesaleOnly: product.isWholesale || false,
        });
        showToast("Added to Cart successfully!");
    };

    const handleAddToWishlist = () => {
        const id = product._id || product.id;
        if (isInWishlist(id)) {
            removeWishlistItem(id);
            showToast("Removed from Wishlist");
        } else {
            addWishlistItem({
                productId: id,
                name: product.name,
                image: product.images?.[0] || product.image || "/product_white_mustard.png",
                fullPrice: product.fullPrice,
                discountPrice: product.discountPrice || product.fullPrice,
            });
            showToast("Added to Wishlist!");
        }
    };

    const isWished = isInWishlist(product._id || product.id);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Image Gallery */}
            <div className="lg:col-span-7 flex flex-col gap-6">
                <div 
                    ref={imageContainerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl border border-[#5A2A1F]/5 bg-white cursor-none group"
                >
                    <Image
                        src={selectedImage}
                        alt={product.seoTitle || product.name}
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="transition-opacity duration-300"
                    />
                    
                    {/* Circle Lens Zoomer */}
                    {lensState.show && (
                        <div 
                            className="absolute pointer-events-none rounded-full border-2 border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.3)] z-50 bg-white"
                            style={{
                                width: "220px",
                                height: "220px",
                                left: `${lensState.x - 110}px`, // Center horizontally over cursor
                                top: `${lensState.y - 110}px`,  // Center vertically over cursor
                                backgroundImage: `url(${selectedImage})`,
                                backgroundSize: `${lensState.containerW * 2.5}px ${lensState.containerH * 2.5}px`, // 2.5x zoom magnification of container
                                backgroundPosition: `-${lensState.bgPosX}px -${lensState.bgPosY}px`,
                                backgroundRepeat: "no-repeat"
                            }}
                        />
                    )}
                </div>
                {/* Thumbnails */}
                {product.images && product.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((img: string, i: number) => (
                            <div 
                                key={i} 
                                onClick={() => setSelectedImage(img)}
                                className={`aspect-square rounded-2xl overflow-hidden border-4 transition-all cursor-pointer ${selectedImage === img ? 'border-[#8B3A2B] scale-105' : 'border-transparent hover:border-[#8B3A2B]/30'}`}
                            >
                                <Image src={img} alt={`Thumbnail ${i+1}`} width={200} height={200} objectFit="cover" className="brightness-95 hover:brightness-100 h-full" />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Right: Product Info */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32 h-fit">
                <div className="flex flex-col gap-4">
                    {product.isBestSeller && (
                        <div className="flex items-center gap-3 bg-[#8B3A2B]/5 border border-[#8B3A2B]/10 px-4 py-2 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#8B3A2B] animate-pulse"></span>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B3A2B]">Best Seller</span>
                        </div>
                    )}
                    <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#5A2A1F] leading-[1.1]">
                        {product.name}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="flex text-[#FFD700] text-lg">{"★★★★★"}</div>
                        <span className="text-xs font-black uppercase tracking-widest text-[#5A2A1F]/40">(4.9 • 1,200+ Reviews)</span>
                    </div>

                    <div className="flex flex-col gap-6 mt-4">
                        <p className="text-lg md:text-xl text-[#5A2A1F]/80 font-medium leading-[1.8] whitespace-pre-wrap">
                            {product.description || "A premium, handcrafted addition to your collection. Designed with comfort and style in mind, this piece offers the perfect blend of ethnic charm and modern sophistication."}
                        </p>
                    </div>
                </div>

                {/* Colours */}
                {product.colours && product.colours.length > 0 && (
                    <div className="flex flex-col gap-4 pt-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#5A2A1F]">Available Colors</h4>
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                {product.colours.map((color: string, i: number) => (
                                    <div 
                                        key={i} 
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-12 h-12 rounded-xl border-4 cursor-pointer transition-all ${selectedColor === color ? 'border-[#8B3A2B] scale-110' : 'border-transparent hover:border-[#5A2A1F]/20'}`} 
                                        title={color}
                                    >
                                        <div style={{ backgroundColor: color }} className="w-full h-full rounded-lg shadow-inner border border-[#5A2A1F]/10"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div className="space-y-6 py-8 border-y border-[#5A2A1F]/10">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-black uppercase tracking-widest text-[#8B3A2B]">Retail Price</span>
                        <div className="flex flex-col items-end">
                            <span className="text-lg font-bold text-[#5A2A1F]">₹{product.discountPrice?.toLocaleString()}</span>
                            {product.fullPrice > product.discountPrice && (
                                <span className="text-sm text-[#5A2A1F]/50 line-through">₹{product.fullPrice?.toLocaleString()}</span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-black uppercase tracking-widest text-[#8B3A2B]">Wholesale/Bulk</span>
                        <span className="text-lg font-bold text-green-600">Contact for Rates</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 pt-4">
                    <button 
                        onClick={handleAddToCart}
                        className="flex items-center justify-center gap-4 bg-[#5A2A1F] text-white px-8 py-6 rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(90,42,31,0.2)] hover:bg-[#8B3A2B] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest"
                    >
                        Add to Cart
                    </button>
                    <button 
                        onClick={handleAddToWishlist}
                        className={`flex items-center justify-center gap-4 border-2 px-8 py-4 rounded-2xl font-black text-lg transition-all uppercase tracking-widest ${isWished ? 'bg-[#5A2A1F] text-white border-[#5A2A1F]' : 'bg-white text-[#5A2A1F] border-[#5A2A1F]/20 hover:border-[#5A2A1F] hover:bg-[#5A2A1F]/5'}`}
                    >
                        {isWished ? '❤️ Saved to Wishlist' : '🤍 Add to Wishlist'}
                    </button>
                </div>
            </div>

            {/* Custom Toast Notification */}
            {toast.show && (
                <div className="fixed top-24 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border transition-all duration-300 text-sm font-bold bg-emerald-50 border-emerald-200 text-emerald-800 animate-in fade-in slide-in-from-top-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>{toast.message}</span>
                </div>
            )}
        </div>
    );
}
