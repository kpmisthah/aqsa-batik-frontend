"use client";
import { useEffect, useState } from "react";
import ProductCard, { UserProduct } from "./ProductCard";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function YouMightAlsoLike({ currentProductId }: { currentProductId?: string }) {
    const [products, setProducts] = useState<UserProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products?limit=8`);
                const json = await res.json();
                if (json.data) {
                    // Filter out the current product if provided
                    const filtered = currentProductId
                        ? json.data.filter((p: UserProduct) => (p._id || p.id) !== currentProductId)
                        : json.data;
                    setProducts(filtered.slice(0, 4));
                }
            } catch (error) {
                console.error("Failed to fetch recommended products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [currentProductId]);

    if (loading || products.length === 0) return null;

    return (
        <section className="py-10 md:py-14 px-6 bg-cream border-t border-primary/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-10">
                    <span className="text-overline mb-2 inline-block">Curated For You</span>
                    <h2 className="font-heading text-2xl md:text-3xl font-normal text-primary">
                        You Might Also Like
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product) => (
                        <ProductCard key={product._id || product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
