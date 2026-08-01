"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect, useRef } from "react";
import useDebounce from "@/hooks/useDebounce";
import { Search, ChevronDown, SlidersHorizontal, Check } from "lucide-react";

interface FilterSidebarProps {
    initialSort?: string;
    initialMinPrice?: string;
    initialMaxPrice?: string;
    initialSearch?: string;
}

const SORT_OPTIONS = [
    { value: "", label: "Recommended" },
    { value: "newest", label: "Newest Arrivals" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" }
];

export default function ProductFilterSidebar({ 
    initialSort = "", 
    initialMinPrice = "", 
    initialMaxPrice = "",
    initialSearch = ""
}: FilterSidebarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(initialSearch);
    const [minPrice, setMinPrice] = useState(initialMinPrice);
    const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
    const [sort, setSort] = useState(initialSort);

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (barRef.current && !barRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Debounce the search input by 800ms to prevent hitting the backend on every keystroke
    const debouncedSearch = useDebounce(search, 800);

    const createQueryString = useCallback(
        (paramsToUpdate: Record<string, string | null>) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("page", "1");
            
            Object.entries(paramsToUpdate).forEach(([key, value]) => {
                if (value === null || value === "") {
                    params.delete(key);
                } else {
                    params.set(key, value);
                }
            });
            return params.toString();
        },
        [searchParams]
    );

    useEffect(() => {
        if (debouncedSearch !== initialSearch) {
            router.push(pathname + "?" + createQueryString({ search: debouncedSearch }), { scroll: false });
        }
    }, [debouncedSearch, pathname, router, createQueryString, initialSearch]);

    const applyPriceFilter = () => {
        router.push(pathname + "?" + createQueryString({ 
            minPrice: minPrice || null, 
            maxPrice: maxPrice || null 
        }), { scroll: false });
    };

    const clearFilters = () => {
        setSearch("");
        setMinPrice("");
        setMaxPrice("");
        setSort("");
        router.push(pathname, { scroll: false });
    };

    const currentSortLabel = SORT_OPTIONS.find(o => o.value === sort)?.label || "Recommended";
    
    const activeFiltersCount = [
        search && "search",
        (minPrice || maxPrice) && "price"
    ].filter(Boolean).length;

    return (
        <div ref={barRef} className="w-full bg-white border-y border-gray-200 py-3 px-3 md:px-0 flex flex-wrap items-center justify-between gap-3 md:gap-4 font-body">
            
            {/* Icon Block */}
            <div className="flex items-center gap-2 shrink-0 order-1 md:order-1 md:mr-2">
                <div className="flex items-center gap-1.5 md:gap-2">
                   <SlidersHorizontal className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
                   <span className="font-bold text-[10px] sm:text-xs tracking-[0.2em] text-primary uppercase md:hidden">Filters</span>
                   {activeFiltersCount > 0 && <span className="text-[10px] font-bold bg-primary text-white w-4 h-4 flex items-center justify-center rounded-full leading-none">{activeFiltersCount}</span>}
                </div>
                {/* Clear All */}
                {(search || minPrice || maxPrice) && (
                    <button onClick={clearFilters} className="text-[9px] md:text-xs tracking-wider uppercase font-bold text-red-500 hover:underline px-2 ml-1">
                        Clear All
                    </button>
                )}
            </div>

            {/* Input Block: Search + Price */}
            <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto order-3 md:order-2 md:mr-auto">
                {/* Search Dropdown */}
                <div className="relative flex-1 md:flex-none">
                    <button 
                        onClick={() => setOpenDropdown(openDropdown === 'search' ? null : 'search')}
                        className={`flex items-center justify-between md:justify-center gap-2 md:gap-3 w-full md:w-auto px-3 md:px-4 py-2 text-overline border transition-colors ${openDropdown === 'search' || search ? 'border-primary text-primary bg-primary/5 shadow-[0_0_0_1px_rgba(90,42,31,1)]' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                    >
                        <span>Search {search && '*'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${openDropdown === 'search' ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === 'search' && (
                        <div className="absolute top-[calc(100%+8px)] left-0 bg-white border border-gray-200 shadow-2xl p-4 min-w-[280px] md:min-w-[320px] z-[100]">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder="Keywords..." 
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full border border-gray-300 focus:border-primary pl-9 pr-3 py-2.5 text-sm font-medium outline-none"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Price Dropdown */}
                <div className="relative flex-1 md:flex-none">
                    <button 
                        onClick={() => setOpenDropdown(openDropdown === 'price' ? null : 'price')}
                        className={`flex items-center justify-between md:justify-center gap-2 md:gap-3 w-full md:w-auto px-3 md:px-4 py-2 text-overline border transition-colors ${openDropdown === 'price' || minPrice || maxPrice ? 'border-primary text-primary bg-primary/5 shadow-[0_0_0_1px_rgba(90,42,31,1)]' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                    >
                        <span>Price {(minPrice || maxPrice) && '*'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${openDropdown === 'price' ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === 'price' && (
                        <div className="absolute top-[calc(100%+8px)] right-0 md:left-0 md:right-auto bg-white border border-gray-200 shadow-2xl p-4 min-w-[280px] md:min-w-[350px] flex gap-2 z-[100]">
                            <input 
                                type="number" 
                                placeholder="Min ₹" 
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                className="w-1/2 border border-gray-300 focus:border-primary px-3 py-2 text-sm font-medium outline-none"
                            />
                            <input 
                                type="number" 
                                placeholder="Max ₹" 
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                className="w-1/2 border border-gray-300 focus:border-primary px-3 py-2 text-sm font-medium outline-none"
                            />
                            <button onClick={() => { applyPriceFilter(); setOpenDropdown(null); }} className="bg-primary text-white border border-primary px-4 py-2 text-sm font-bold shrink-0 hover:bg-secondary transition-colors">
                                Apply
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Side: Sort */}
            <div className="relative shrink-0 order-2 md:order-3 ml-auto md:ml-0">
                <button 
                    onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                    className={`flex items-center justify-between gap-2 md:gap-8 min-w-[120px] md:min-w-[180px] px-3 md:px-4 py-2 text-overline border transition-colors ${openDropdown === 'sort' || sort ? 'border-primary text-primary bg-primary/5 shadow-[0_0_0_1px_rgba(90,42,31,1)]' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                >
                    <span>{currentSortLabel}</span>
                    <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${openDropdown === 'sort' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'sort' && (
                    <div className="absolute top-[calc(100%+8px)] right-0 bg-white border border-gray-200 shadow-2xl min-w-[220px] flex flex-col z-[100]">
                        {SORT_OPTIONS.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => {
                                    setSort(option.value);
                                    setOpenDropdown(null);
                                    router.push(pathname + "?" + createQueryString({ sort: option.value || null }), { scroll: false });
                                }}
                                className={`text-left px-5 py-3.5 text-sm font-medium flex items-center justify-between transition-colors ${sort === option.value ? 'bg-gray-100 text-primary font-bold' : 'hover:bg-gray-50 text-gray-700'}`}
                            >
                                {option.label}
                                {sort === option.value && <Check className="w-4 h-4 text-primary" />}
                            </button>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}
