"use client";
import { UserProduct } from "./ProductCard";
import ProductCard from "./ProductCard";

interface ProductGridProps {
    products: UserProduct[];
    columns?: 3 | 4;
    isWholesalePage?: boolean;
}

export default function ProductGrid({ products, columns = 3, isWholesalePage = false }: ProductGridProps) {
    if (!products || products.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-xl text-[#5A2A1F]/50 font-medium italic">No products found in this category.</p>
            </div>
        );
    }

    const gridColsClass = columns === 4
        ? "grid-cols-2 lg:grid-cols-4"
        : "grid-cols-2 lg:grid-cols-3";

    return (
        <div className={`grid ${gridColsClass} gap-x-3 md:gap-x-8 gap-y-10 md:gap-y-16`}>
            {products.map((product) => (
                <ProductCard key={product._id || product.id} product={product} isWholesalePage={isWholesalePage} />
            ))}
        </div>
    );
}
