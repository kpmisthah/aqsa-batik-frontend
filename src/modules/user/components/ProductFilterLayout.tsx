import { UserProduct } from "./ProductCard";
import ProductGrid from "./ProductGrid";
import ProductFilterSidebar from "./ProductFilterSidebar";
import Pagination from "./Pagination";

interface ProductFilterLayoutProps {
    products: UserProduct[];
    currentPage: number;
    totalPages: number;
    searchParams: any;
    isWholesalePage?: boolean;
}

export default function ProductFilterLayout({
    products,
    currentPage,
    totalPages,
    searchParams,
    isWholesalePage = false
}: ProductFilterLayoutProps) {
    const minPrice = searchParams.minPrice || "";
    const maxPrice = searchParams.maxPrice || "";
    const sort = searchParams.sort || "";
    const search = searchParams.search || "";

    return (
        <div className="flex flex-col gap-6 md:gap-10 w-full max-w-[1600px] mx-auto items-start">
            
            {/* Horizontal Filter Bar Header (replaces sidebar) */}
            <div className="w-full z-20 sticky top-[70px] md:top-[80px]">
                <ProductFilterSidebar 
                    initialSort={sort}
                    initialMinPrice={minPrice}
                    initialMaxPrice={maxPrice}
                    initialSearch={search}
                />
            </div>

            {/* Product Grid Area */}
            <div className="w-full flex flex-col gap-10 min-w-0">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100/50">
                    <p className="text-sm font-semibold text-gray-500 tracking-wide">
                        Showing <span className="text-primary font-bold">{products.length}</span> Results
                    </p>
                </div>

                <ProductGrid 
                    products={products} 
                    columns={4}
                    isWholesalePage={isWholesalePage} 
                />

                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                />
            </div>
        </div>
    );
}
