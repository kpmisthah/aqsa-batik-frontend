"use client";

import React from "react";
import Link from "next/link";
import Nav from "@/modules/user/components/Nav";
import { useWishlistStore } from "@/hooks/useWishlistStore";
import { useCartStore } from "@/hooks/useCartStore";
import { Trash2, Heart, ShoppingBag } from "lucide-react";

export default function WishlistPage() {
    const { items, removeItem } = useWishlistStore();
    const { addItem } = useCartStore();
    const [toast, setToast] = React.useState<{ message: string; type: "success" | "error" } | null>(null);

    const showToast = (message: string, type: "success" | "error") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 4000);
    };

    const handleMoveToCart = (item: any) => {
        try {
            addItem({
                productId: item.productId,
                name: item.name,
                image: item.image,
                fullPrice: item.fullPrice,
                discountPrice: item.discountPrice,
                isWholesaleOnly: false,
            });
            removeItem(item.productId);
            showToast("Moved to Cart!", "success");
        } catch (error: any) {
            showToast(error.message || "Failed to move to cart.", "error");
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col text-[#5A2A1F]">
            <Nav />

            {/* Dynamic Toast Alerts */}
            {toast && (
                <div className={`fixed top-24 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border transition-all duration-300 text-sm font-bold ${
                    toast.type === "success" 
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                        : "bg-red-50 border-red-200 text-red-800"
                }`}>
                    <span className={`w-2.5 h-2.5 rounded-full ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'} ${toast.type === 'success' ? 'animate-ping' : ''}`} />
                    <span>{toast.message}</span>
                </div>
            )}

            <main className="flex-1 max-w-[1300px] w-full mx-auto px-6 py-12">
                <h1 className="font-playfair text-3xl md:text-4xl font-black text-left mb-2 tracking-tight">Your Wishlist</h1>
                <p className="text-sm opacity-60 text-left mb-10 font-medium font-playfair">
                    Keep track of all the beautiful Batik items you'd love to own.
                </p>

                {items.length === 0 ? (
                    /* Empty Wishlist State */
                    <div className="bg-[#FAF6F0] rounded-[32px] border border-[#5A2A1F]/10 p-12 text-center shadow-xl max-w-xl mx-auto my-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B3A2B]/30 rounded-tl-[32px]" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B3A2B]/30 rounded-br-[32px]" />

                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow border border-[#5A2A1F]/5 text-3xl">
                            ❤️
                        </div>
                        <h2 className="font-playfair text-2xl font-black mb-2">Your wishlist is empty</h2>
                        <p className="text-xs opacity-60 max-w-xs mx-auto mb-8 leading-relaxed font-medium">
                            Explore our premium collections and add your favorite items to save them for later.
                        </p>
                        <Link
                            href="/cotton-cloth"
                            className="inline-block bg-[#5A2A1F] hover:bg-black text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-md active:scale-95"
                        >
                            Explore Collections
                        </Link>
                    </div>
                ) : (
                    /* Wishlist Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item) => (
                            <div
                                key={item.productId}
                                className="bg-white rounded-[32px] border border-[#5A2A1F]/10 p-5 flex flex-col gap-5 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
                            >
                                <button
                                    onClick={() => removeItem(item.productId)}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm opacity-0 group-hover:opacity-100"
                                    title="Remove from Wishlist"
                                >
                                    <Trash2 size={18} />
                                </button>

                                <Link href={`/products/${item.productId}`}>
                                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#5A2A1F]/5">
                                        <img
                                            src={item.image || "/product_white_mustard.png"}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </Link>

                                <div className="flex flex-col gap-2">
                                    <Link href={`/products/${item.productId}`}>
                                        <h3 className="font-bold text-lg leading-tight hover:text-[#8B3A2B] transition-colors">{item.name}</h3>
                                    </Link>

                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-xl text-[#5A2A1F]">₹{item.discountPrice?.toLocaleString()}</span>
                                        {item.fullPrice > item.discountPrice && (
                                            <span className="text-sm text-[#5A2A1F]/40 line-through">₹{item.fullPrice?.toLocaleString()}</span>
                                        )}
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleMoveToCart(item)}
                                    className="mt-auto w-full bg-[#5A2A1F] hover:bg-[#8B3A2B] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs shadow hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    <ShoppingBag size={16} />
                                    <span>Move to Cart</span>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
