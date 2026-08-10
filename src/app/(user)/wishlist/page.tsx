"use client";
import React from "react";
import Link from "next/link";
import Nav from "@/modules/user/components/Nav";
import { useWishlistStore } from "@/hooks/useWishlistStore";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";
import { useCartStore } from "@/hooks/useCartStore";
import { Trash2, Heart, ShoppingBag } from "lucide-react";

export default function WishlistPage() {
    const { addItem: addCartItem } = useCartStore();
    const { removeId: removeWishlistId } = useWishlistStore();
    const { isSignedIn, loading: authLoading } = useAuthSync();
    const [toast, setToast] = React.useState<{ message: string; type: "success" | "error" } | null>(null);

    const [items, setItems] = React.useState<any[]>([]);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const [loading, setLoading] = React.useState(true);

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

    const fetchWishlist = async (pageNumber: number) => {
        if (!isSignedIn) return;
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE}/wishlist?page=${pageNumber}&limit=12`, {
                credentials: "include"
            });
            const data = await res.json();
            if (res.ok) {
                setItems(data.items || []);
                setTotalPages(data.pages || 1);
            }
        } catch (err) {
            console.error("Failed to fetch wishlist", err);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (!authLoading) {
            if (isSignedIn) {
                fetchWishlist(page);
            } else {
                setLoading(false);
            }
        }
    }, [page, isSignedIn, authLoading]);

    const showToast = (message: string, type: "success" | "error") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 4000);
    };

    const handleRemove = async (productId: string) => {
        // Optimistic
        removeWishlistId(productId);
        setItems(prev => prev.filter(item => item.product._id !== productId && item.product.id !== productId));
        
        try {
            await fetch(`${API_BASE}/wishlist/toggle`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ productId })
            });
            showToast("Removed from wishlist", "success");
        } catch (err) {
            showToast("Failed to remove item", "error");
        }
    };

    const handleMoveToCart = async (item: any) => {
        try {
            const prod = item.product;
            addCartItem({
                productId: prod._id || prod.id,
                name: prod.name,
                image: prod.images?.[0] || prod.image || "/product_white_mustard.png",
                fullPrice: prod.fullPrice,
                discountPrice: prod.discountPrice || prod.fullPrice,
                isWholesaleOnly: false,
            });
            await handleRemove(prod._id || prod.id);
            showToast("Moved to Cart!", "success");
        } catch (error: any) {
            showToast(error.message || "Failed to move to cart.", "error");
        }
    };

    return (
        <div className="min-h-screen bg-cream flex flex-col text-primary">
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

            <main className="flex-1 max-w-[1300px] w-full mx-auto px-6 py-12 flex flex-col">
                <h1 className="font-heading text-3xl md:text-4xl font-normal text-left mb-2 tracking-tight">Your Wishlist</h1>
                <p className="text-sm text-primary/60 text-left mb-10 font-normal">
                    Keep track of all the beautiful Batik items you'd love to own.
                </p>

                {authLoading || loading ? (
                    <div className="flex-1 flex justify-center items-center opacity-50 py-20">
                        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                    </div>
                ) : !isSignedIn ? (
                    <div className="bg-surface rounded-[32px] border border-primary/10 p-12 text-center shadow-xl max-w-xl mx-auto my-12">
                        <h2 className="font-heading text-2xl font-normal mb-2">Sign in to view Wishlist</h2>
                        <p className="text-xs text-primary/60 max-w-xs mx-auto mb-8 font-normal">Log in to save items across all your devices and seamlessly pick up where you left off.</p>
                        <Link href="/login" className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-md">
                            Sign In / Register
                        </Link>
                    </div>
                ) : items.length === 0 ? (
                    <div className="bg-surface rounded-[32px] border border-primary/10 p-12 text-center shadow-xl max-w-xl mx-auto my-12 relative overflow-hidden">
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow border border-primary/5 text-3xl">❤️</div>
                        <h2 className="font-heading text-2xl font-normal mb-2">Your wishlist is empty</h2>
                        <p className="text-xs text-primary/60 max-w-xs mx-auto mb-8 font-normal">Explore our premium collections and add your favorite items to save them for later.</p>
                        <Link href="/cotton-cloth" className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-md">
                            Explore Collections
                        </Link>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {items.map((item) => {
                                const prod = item.product;
                                return (
                                    <div key={prod._id || prod.id} className="bg-white rounded-[32px] border border-primary/10 p-5 flex flex-col gap-5 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                                        <button
                                            onClick={() => handleRemove(prod._id || prod.id)}
                                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm opacity-0 group-hover:opacity-100"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                        <Link href={`/products/${prod._id || prod.id}`}>
                                            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-surface border border-primary/5">
                                                <img src={prod.images?.[0] || prod.image || "/product_white_mustard.png"} alt={prod.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                                            </div>
                                        </Link>
                                        <div className="flex flex-col gap-2">
                                            <Link href={`/products/${prod._id || prod.id}`}>
                                                <h3 className="font-heading font-normal text-lg leading-tight hover:text-accent transition-colors">{prod.name}</h3>
                                            </Link>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-xl text-accent">₹{prod.discountPrice?.toLocaleString()}</span>
                                                {prod.fullPrice > prod.discountPrice && (
                                                    <span className="text-sm text-primary/40 line-through">₹{prod.fullPrice?.toLocaleString()}</span>
                                                )}
                                            </div>
                                        </div>
                                        <button onClick={() => handleMoveToCart(item)} className="mt-auto w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-full font-bold uppercase tracking-wider text-xs shadow hover:shadow-lg flex items-center justify-center gap-2">
                                            <ShoppingBag size={16} /> <span>Move to Cart</span>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-4 mt-auto pt-8 border-t border-primary/10">
                                <button
                                    onClick={() => setPage(Math.max(1, page - 1))}
                                    disabled={page === 1}
                                    className="px-6 py-3 border border-primary/20 rounded-full font-bold text-xs uppercase tracking-widest disabled:opacity-30 hover:bg-accent hover:text-white transition-all"
                                >
                                    Previous
                                </button>
                                <span className="font-bold text-sm tracking-widest">
                                    {page} / {totalPages}
                                </span>
                                <button
                                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                                    disabled={page === totalPages}
                                    className="px-6 py-3 border border-primary/20 rounded-full font-bold text-xs uppercase tracking-widest disabled:opacity-30 hover:bg-accent hover:text-white transition-all"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
