"use client";
import { useState, useEffect } from "react";

const GOOGLE_REVIEW_URL = "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review";

const reviews = [
    {
        name: "Farhan Sheikh",
        text: "Outstanding quality Batik Cloth! The cotton fabric is premium and the prints are absolutely beautiful. Ordered wholesale and every piece was perfect. Will definitely order again!",
    },
    {
        name: "Aisha Begum",
        text: "Best Batik Cloth manufacturer in Ujjain. Their 60×60 cotton quality is unmatched. Very professional and timely delivery across India. Highly recommended for wholesale buyers.",
    },
    {
        name: "Rizwan Ali",
        text: "Great place to get premium Batik Cloth! They have an amazing collection with beautiful patterns. The pricing is very competitive for wholesale. Very happy with the quality and service.",
    },
];

function StarIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#FBBC04"
        >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

function GoogleGIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
            />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
            />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
            />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
            />
        </svg>
    );
}

export default function GoogleReviewBar() {
    const [reviewIndex, setReviewIndex] = useState(0);

    useEffect(() => {
        setReviewIndex(Math.floor(Date.now() / 86400000) % reviews.length);
    }, []);

    const review = reviews[reviewIndex];

    return (
        <section className="relative z-20 bg-[#f5f5f5] border-y border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* LEFT — Business + Rating */}
                <div className="flex items-center gap-5 shrink-0">
                    {/* Logo mark */}
                    <div className="flex flex-col items-center leading-none select-none">
                        <span className="font-playfair text-lg font-bold tracking-tight text-[#1a0f0a]">
                            AQSHA
                        </span>
                        <span className="text-[6px] font-black tracking-[0.2em] uppercase text-[#1a0f0a]/50">
                            Batik Cloth
                        </span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <GoogleGIcon />
                            <span className="font-semibold text-[#1a0f0a] text-base">
                                Google Review
                            </span>
                        </div>
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                            Rating 4.9 | 794 reviews
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                            Premium Batik Manufacturer
                        </span>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="hidden lg:block w-px h-20 bg-gray-300" />

                {/* CENTER — Testimonial */}
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-base text-[#1a0f0a] mb-1">
                        {review.name}
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
                        &ldquo;{review.text}&rdquo;
                    </p>
                </div>

                {/* RIGHT — Badge + CTA */}
                <div className="flex items-center gap-5 shrink-0">
                    {/* Rating badge */}
                    <div className="bg-[#1a0f0a] text-white rounded-lg px-4 py-3 flex flex-col items-center justify-center gap-1 min-w-[64px]">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    width="10"
                                    height="10"
                                    viewBox="0 0 24 24"
                                    fill="#FBBC04"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-xl font-bold leading-none">4.9</span>
                    </div>

                    <a
                        href={GOOGLE_REVIEW_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-400 text-[#1a0f0a] text-sm font-semibold px-5 py-2.5 rounded hover:bg-gray-200 transition-colors whitespace-nowrap"
                    >
                        Go to Google Reviews
                    </a>
                </div>
            </div>
        </section>
    );
}
