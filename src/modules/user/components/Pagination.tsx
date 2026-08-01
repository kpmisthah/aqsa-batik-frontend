"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 mt-12 md:mt-16 w-full">
            <button
                onClick={() => router.push(pathname + "?" + createQueryString("page", (currentPage - 1).toString()), { scroll: false })}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/5 transition-colors"
                aria-label="Previous Page"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => router.push(pathname + "?" + createQueryString("page", page.toString()), { scroll: false })}
                        className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm transition-colors ${
                            currentPage === page
                                ? "bg-primary text-white"
                                : "text-primary/90 hover:bg-primary/5 border border-transparent hover:border-primary/20"
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => router.push(pathname + "?" + createQueryString("page", (currentPage + 1).toString()), { scroll: false })}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/5 transition-colors"
                aria-label="Next Page"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </div>
    );
}
