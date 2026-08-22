import Image from "next/image";
import Link from "next/link";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import LeadGenerationForm from "@/modules/user/components/LeadGenerationForm";
import StickyEnquiryButton from "@/modules/user/components/StickyEnquiryButton";

import ProductGrid from "@/modules/user/components/ProductGrid";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import AdvantageSection from "@/modules/user/components/AdvantageSection";
import HowToOrderSection from "@/modules/user/components/HowToOrderSection";
import ProductFilterLayout from "@/modules/user/components/ProductFilterLayout";
import { useBanner } from "@/modules/user/hooks/useBanner";
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import ScrollIndicator from "@/modules/user/components/ScrollIndicator";
import CategoryHeroBanner from "@/modules/user/components/CategoryHeroBanner";
import ConsistentCTA from "@/modules/user/components/ConsistentCTA";


const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts({ page = "1", search = "", sort = "", minPrice = "", maxPrice = "" }: any) {
    try {
        const queryParams = new URLSearchParams({
            limit: "12",
            page: page,
            category: "Wholesale",
            ...(search && { search }),
            ...(sort && { sort }),
            ...(minPrice && { minPrice }),
            ...(maxPrice && { maxPrice }),
        });

        const res = await fetch(`${API_BASE}/products?${queryParams.toString()}`, { cache: 'no-store' });
        const json = await res.json();
        return {
            products: json.data || [],
            totalPages: json.totalPages || 1,
            currentPage: json.page || 1
        };
    } catch (e) {
        return { products: [], totalPages: 1, currentPage: 1 };
    }
}

async function getHeroBanner() {
    try {
        const res = await fetch(`${API_BASE}/banners/wholesale`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/cta_suits.png";
    } catch (e) {
        return "/cta_suits.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Wholesale%20Manufacturer%20Pricing";

export default async function WholesalePage({ searchParams }: { searchParams: Promise<any> }) {
    const resolvedParams = await searchParams;
    const { products, totalPages, currentPage } = await getProducts(resolvedParams || {});
    const heroBannerUrl = await getHeroBanner();

    const partnershipBenefits = [
        {
            t: "Consistent Quality",
            d: "15+ years of manufacturing expertise ensures zero batch variation.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 5-10 13L2 8z" />
                    <path d="M11 3 8 8l3 13 3-13z" />
                    <path d="M2 8h20" />
                </svg>
            )
        },
        {
            t: "Market-Aligned Designs",
            d: "We manufacture what sells — focusing on high-rotation light colors.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                </svg>
            )
        },
        {
            t: "Ready Stock Availability",
            d: "No long waiting periods. We maintain ready inventory for bulk orders.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                </svg>
            )
        },
        {
            t: "Direct Manufacturer Pricing",
            d: "Eliminate the middleman and maximize your retail margins.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20V9l5 2V9l5 2V9l10 3v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                    <path d="M7 21v-4" />
                    <path d="M12 21v-4" />
                    <path d="M17 21v-4" />
                    <path d="M2 14h20" />
                </svg>
            )
        }
    ];

    const targetAudience = [
        {
            t: "Boutique Owners", d: "Distinctive women dresses for collections that stand apart.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
                </svg>
            )
        },
        {
            t: "Instagram Resellers", d: "Fresh Batik styles with strong visual appeal for online selling.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                </svg>
            )
        },
        {
            t: "Meesho / Amazon Sellers", d: "Reliable supply for growing online fashion businesses.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.56-7.43H5.12" />
                </svg>
            )
        },
        {
            t: "Wholesale Traders", d: "Bulk women dresses and Batik collections for regional distribution.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
                </svg>
            )
        }
    ];

    const startingProcess = [
        {
            s: "01", t: "Contact on WhatsApp", d: "Connect with our wholesale team instantly.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
                </svg>
            )
        },
        {
            s: "02", t: "Get Latest Catalog", d: "Explore over 100+ high-demand designs.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
            )
        },
        {
            s: "03", t: "Select Designs", d: "Curate your collection for your specific market.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                </svg>
            )
        },
        {
            s: "04", t: "Confirm Bulk Order", d: "Get your proforma and manufacturer pricing.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                </svg>
            )
        },
        {
            s: "05", t: "Dispatch Across India", d: "Fast delivery via trusted courier partners.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
                </svg>
            )
        }
    ];

    const wholesaleCapabilities = [
        {
            t: "Batik Dress Supply",
            d: "Source Batik dresses, Batik print dresses, and distinctive Batik dress designs created for retail collections and everyday customer demand.",
            img: "/app_dress_materials.png"
        },
        {
            t: "Boutique & Clothing Brands",
            d: "Build a more memorable collection with trendy dresses for women, floral styles, cotton dresses, and unique Batik prints.",
            img: "/app_boutique.png"
        },
        {
            t: "Custom & Bulk Orders",
            d: "Flexible wholesale supply for retailers, resellers, boutiques, and fashion businesses looking for bulk women dresses and cotton dress material.",
            img: "/app_custom.png"
        }
    ];

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title>Wholesale Women Dresses | Batik Dresses & Cotton Styles</title>
            <meta name="description" content="Source wholesale women dresses in Batik prints, cotton styles, floral designs and casual silhouettes directly from a Ujjain Batik manufacturer." />

            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />
            <ScrollObserver />
            <CategoryHeroBanner
                tagline="♦ DIRECT MANUFACTURER · BULK SUPPLY"
                title={
                    <>
                        Premium Wholesale <br className="hidden md:block" />
                        Women Dresses in <br className="hidden md:block" />
                        <span className="text-highlight">Batik & Cotton</span>
                    </>
                }
                description="Source high-demand women dresses, Batik prints, cotton styles, and ready-to-sell collections directly from the manufacturer. Built for boutiques, resellers, retailers, and fashion businesses looking for distinctive designs, reliable supply, and better wholesale value."
                imageSrc="/gallery_wholesale.png"
                imageAlt="Wholesale Batik Supply"
                bgColor="#CECECB"
                buttons={
                    <>
                        <a href="#wholesale-form" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                            Become a Wholesale Partner
                        </a>
                        <a href={WA} target="_blank" rel="noreferrer" className="border border-primary/15 hover:border-accent text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent hover:text-accent">
                            Chat on WhatsApp
                        </a>
                    </>
                }
            />
            <GoogleReviewBar />

            {/* ── SECTION: TO STREAMLINE YOUR SOURCING ── */}
            <section className="scroll-animate w-full bg-cream overflow-hidden pt-0 relative">
                {/* Decorative background element for left side (optional leaf/pattern hint) */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-pattern opacity-10 pointer-events-none mix-blend-multiply"></div>
                
                <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-stretch relative z-10">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-8 md:py-12 relative z-10 bg-cream">
                        <div className="flex flex-col max-w-2xl mx-auto w-full">
                            <div className="flex items-center gap-4 mb-3 md:mb-4">
                                <span className="text-overline uppercase tracking-[0.2em] font-bold text-brand">
                                    # STREAMLINE YOUR SOURCING
                                </span>
                            </div>
                            <h2 className="text-h2 mb-6 md:mb-8">
                                Stop Stocking <br />
                                Dresses That Do Not Move
                            </h2>

                            <div className="flex flex-col gap-5 mb-6 md:mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary/60 border border-border flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-highlight"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                    </div>
                                    <p className="text-lg md:text-xl font-semibold italic text-brand">If your current supplier is giving you...</p>
                                </div>
                                <div className="flex flex-col gap-3.5 pl-[52px]">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-border shadow-sm shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-highlight"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                        </span>
                                        <span className="font-semibold text-sm md:text-[15px] text-foreground">Inconsistent quality</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-border shadow-sm shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-highlight"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11v6"></path><path d="M9 14h6"></path></svg>
                                        </span>
                                        <span className="font-semibold text-sm md:text-[15px] text-foreground">Repetitive designs</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-border shadow-sm shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-highlight"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                        </span>
                                        <span className="font-semibold text-sm md:text-[15px] text-foreground">Low margins</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-body1 text-foreground leading-relaxed max-w-lg mb-5 mt-1 font-medium">
                                You don't need more products. You need <br className="hidden md:block"/>
                                <span className="font-bold text-brand">a wholesale collection built around what <br className="hidden md:block"/>customers want to wear.</span>
                            </p>

                            <div className="flex items-center gap-3 bg-brand text-white rounded-full px-5 py-2.5 w-fit mb-6 shadow-md">
                                <span className="text-white/90">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
                                </span>
                                <span className="font-heading text-lg md:text-xl italic tracking-wide pr-2">We help you build that collection.</span>
                            </div>

                            <div className="flex items-start gap-3 p-3 bg-white/40 rounded-2xl border border-primary/5 backdrop-blur-sm relative z-20">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 text-white font-serif italic text-xl border border-white/20 shadow-sm mt-1">
                                    A
                                </div>
                                <p className="text-sm md:text-[15px] text-foreground leading-relaxed max-w-md">
                                    <strong className="text-brand">AQSHA Batik Suits</strong> is a 15+ year manufacturer specialising in Batik Prints Women Clothinging, cotton styles, and high-demand <strong className="text-brand">women dresses</strong> for wholesale buyers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image with curved overlay */}
                    <div className="w-full lg:w-[45%] relative min-h-[400px] lg:min-h-0 bg-cream">
                        {/* The curved separator logic (ellipse cutting out of the background, acting as a mask) */}
                        <div className="absolute inset-0 bg-cream z-10 hidden lg:block translate-x-[1px]" style={{ clipPath: 'ellipse(18% 60% at 0% 50%)' }}></div>
                        
                        <div className="absolute inset-0 w-full h-full lg:pl-6">
                            <Image 
                                src="/wholesale-inventory-premium.png"
                                alt="Wholesale collection"
                                fill
                                className="object-cover object-center lg:rounded-l-[60px]"
                            />
                        </div>
                        
                        {/* The circular badge on the image */}
                        <div className="absolute left-1/2 lg:left-[5%] bottom-8 z-20 bg-cream backdrop-blur-md rounded-full w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-white -translate-x-1/2 lg:-translate-x-1/2 group hover:scale-105 transition-transform duration-500">
                            <div className="mb-2 text-brand">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 6h-3c0-2.21-1.79-4-4-4S8 3.79 8 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm7 16H5V8h3v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h3v12z"/></svg>
                            </div>
                            <p className="text-[10px] md:text-[11px] font-semibold text-brand leading-snug">
                                Better Stock.<br/>Better Margins.<br/>Happier Customers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full bg-brand text-surface py-5 md:py-6 px-6 relative z-20">
                    <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 text-left divide-x-0 md:divide-x divide-white/20">
                        <div className="flex items-center gap-3 px-2 md:px-6">
                            <div className="p-2 border border-white/30 rounded-full shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                            </div>
                            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight">15+ Years<br /> Manufacturing Experience</span>
                        </div>
                        <div className="flex items-center gap-3 px-2 md:px-6">
                            <div className="p-2 border border-white/30 rounded-full shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z"></path></svg>
                            </div>
                            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight">Premium Batik &<br /> Cotton Styles</span>
                        </div>
                        <div className="flex items-center gap-3 px-2 md:px-6">
                            <div className="p-2 border border-white/30 rounded-full shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            </div>
                            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight">Reliable Supply<br /> For Bulk Orders</span>
                        </div>
                        <div className="flex items-center gap-3 px-2 md:px-6">
                            <div className="p-2 border border-white/30 rounded-full shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight">Trusted By Boutiques,<br /> Resellers & Retailers</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION: CAPABILITIES + PRODUCT GRID ── */}
            <section id="collection" className="scroll-animate py-10 md:py-16 px-6 bg-cream relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-10 md:gap-12">
                    <div className="flex flex-col gap-3 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline">BUILT FOR REAL MARKET USE</span>
                        <h2 className="text-h2">Wholesale Women Dresses for <br className="hidden md:block" /> <span className="text-highlight">Growing Fashion Businesses</span></h2>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-1 max-w-3xl">
                            From boutique collections to bulk supply, our wholesale range combines distinctive Batik design, comfortable cotton, and versatile silhouettes made for everyday and occasion wear.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto w-full">
                        {wholesaleCapabilities.map((item, i) => (
                            <div key={i} className="flex flex-col gap-5 md:gap-6 group">
                                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[24px] border border-primary/10 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                                    <Image 
                                        src={item.img} 
                                        alt={item.t} 
                                        fill 
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" 
                                    />
                                </div>
                                <div className="flex flex-col gap-3 text-center items-center px-2">
                                    <h3 className="text-h4">{item.t}</h3>
                                    <p className="text-[13px] md:text-sm leading-relaxed text-muted font-medium">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 md:gap-12 mt-6 md:mt-12">
                        <div className="flex flex-col gap-3 md:gap-4 text-center items-center mx-auto max-w-4xl">
                            <span className="text-overline">HIGH-DEMAND DRESS COLLECTION</span>
                            <h2 className="text-h3">Explore Wholesale Women Dresses <span className="text-highlight">Customers Want to Wear</span></h2>
                            <p className="text-lg md:text-xl text-foreground leading-relaxed mt-1 w-full text-center">Discover Batik dresses, cotton dresses for women, casual styles, floral prints, and versatile silhouettes selected for retail appeal.</p>
                        </div>
                        <ProductFilterLayout
                            products={products}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            searchParams={resolvedParams || {}}
                            isWholesalePage={true}
                        />
                    </div>
                </div>
            </section>

            <PremiumFeatureSection
                tag="Why Buyers Choose Our Supply"
                title={<>Why Our Wholesale Women Dresses <span className="text-highlight">Stand Out</span></>}
                features={[
                    {
                        t: "Distinctive Batik Design",
                        d: "Our Batik designs bring traditional print character into modern dresses for women, helping your collection feel different from ordinary mass-market styles.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                            </svg>
                        )
                    },
                    {
                        t: "Consistent Print Quality",
                        d: "Consistent Batik printing helps maintain colour, pattern clarity, and product quality across wholesale orders.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
                            </svg>
                        )
                    },
                    {
                        t: "Comfortable Cotton",
                        d: "Cotton dresses for women offer breathable comfort and everyday wearability—ideal for customers who value both style and ease.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>
                            </svg>
                        )
                    },
                    {
                        t: "Versatile Dress Styles",
                        d: "From casual dresses for women to floral dresses, one-piece styles, and occasion-ready designs, our collection supports different customer preferences.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.62 1.96v14.16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5.42a2 2 0 0 0-1.62-1.96Z"/>
                            </svg>
                        )
                    },
                    {
                        t: "Wholesale Pricing",
                        d: "Direct manufacturer sourcing helps businesses access competitive wholesale pricing and protect retail margins.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/>
                            </svg>
                        )
                    },
                    {
                        t: "Ready for Retail",
                        d: "Our women clothing collections are selected with practical retail use in mind—from boutique displays to online fashion stores.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                            </svg>
                        )
                    }
                ]}
                imageSrc="/dress-for-women-image.webp"
                quote="Distinctive designs. Reliable supply. Built for businesses that sell."
            />

            <HowToOrderSection
                tag="WHOLESALE PROCESS"
                title="How to Order Wholesale Women Dresses"
                subtitle="Five simple steps to move from product discovery to bulk supply."
                whatsappLink={WA}
                ctaText="Become a Wholesale Partner"
                steps={[
                    {
                        s: "01",
                        t: "Browse Designs",
                        d: "Explore Batik dresses, cotton dresses, floral styles, trendy dresses, and new collections."
                    },
                    {
                        s: "02",
                        t: "Select Quantity",
                        d: "Choose products and quantities according to your boutique, retail, or wholesale requirements."
                    },
                    {
                        s: "03",
                        t: "Connect on WhatsApp",
                        d: "Share your requirements and receive product availability, pricing, and ordering support."
                    },
                    {
                        s: "04",
                        t: "Receive Your Quote",
                        d: "Get wholesale pricing based on your selected products and order volume."
                    },
                    {
                        s: "05",
                        t: "Confirm & Dispatch",
                        d: "Confirm your order and receive your selected collection through available delivery arrangements."
                    }
                ]}
            />


            {/* ── SECTION: NEXT STEPS ── */}
            <section className="scroll-animate pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-[#F4F0EA] overflow-hidden text-primary">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-overline">NEXT STEP</span>
                        <h2 className="text-h2">Continue Your <span className="text-highlight">Batik Dresses</span> <br className="hidden md:block" /> Wholesale <span className="text-highlight">Sourcing Journey</span></h2>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-1 max-w-3xl">
                            Explore complementary collections to build a stronger women's fashion assortment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                t: "Batik Prints Women Clothing",
                                d: "Explore expressive Batik prints, comfortable cotton styles, and versatile women's clothing for everyday and occasion wear.",
                                l: "/batik-prints-womens-clothing",
                                img: "/gallery_explore.png",
                                tag: "Category"
                            },
                            {
                                t: "Ethnic Wear for Women",
                                d: "Discover Batik dresses, kurtis, and suit styles that bring traditional character into modern wardrobes.",
                                l: "/batik-suits",
                                img: "/gallery_wholesale.png",
                                tag: "Category"
                            },
                            {
                                t: "Batik Cotton Dress",
                                d: "Explore soft, breathable Batik cotton dresses designed for effortless everyday comfort and graceful styling.",
                                l: "/batik-cotton-dress-for-women",
                                img: "/dress-for-women-image.webp",
                                tag: "Category"
                            },
                            {
                                t: "New Arrival",
                                d: "Discover the latest Batik prints, fresh colours, and contemporary women's clothing styles.",
                                l: "/new-batik-prints-suits",
                                img: "/gallery_arrival.png",
                                tag: "Category"
                            }
                        ].map((item, i) => (
                            <Link key={i} href={item.l} className="group relative rounded-[24px] overflow-hidden bg-primary aspect-[4/5] md:aspect-[3/4] flex flex-col items-center justify-center border border-primary/10">
                                <Image
                                    src={item.img}
                                    alt={item.t}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-90 group-hover:brightness-75"
                                />
                                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-body font-bold uppercase tracking-widest text-primary shadow-sm">{item.tag}</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-center">
                                    <h3 className="font-heading text-xl md:text-2xl font-medium text-white leading-tight mb-2">{item.t}</h3>
                                    <p className="text-white/90 text-sm font-normal leading-relaxed mb-4 hidden md:block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">{item.d}</p>

                                    <div className="flex items-center gap-2 mt-2 bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-white font-bold text-[10px] md:text-xs uppercase tracking-widest overflow-hidden">
                                        <span>Explore Collection</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                            <path d="M5 12h14m-7-7 7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION: EDITORIAL CORNER ── */}
            <section className="scroll-animate pt-12 md:pt-16 pb-4 md:pb-8 px-4 md:px-6 bg-transparent">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-5xl mx-auto w-full">
                        <span className="text-overline">FASHION & FABRIC JOURNAL</span>
                        <h2 className="text-h2 font-heading text-primary leading-tight">The Wholesale <span className="text-highlight">Women Dresses Journal</span></h2>
                        <div className="w-16 h-[2px] bg-secondary mt-2"></div>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-2">
                            Explore insights on Batik dress designs, cotton dresses, printed fabrics, women's fashion trends, and practical sourcing ideas to help retailers choose better stock and build stronger collections.
                        </p>
                    </div>

                    {/* Kinfolk Editorial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                        {[
                            { slug: "the-art-of-hand-blocked-batik", title: "The Art of Hand-Blocked Batik", date: "May 15, 2024", cat: "Craftsmanship", img: "/journal_craftsmanship.png", d: "Explore the traditional craftsmanship behind distinctive Batik Cotton Dress for Women and dress designs." },
                            { slug: "batik-fashion-trends-2024", title: "Batik Fashion Trends", date: "June 2, 2024", cat: "Fashion", img: "/journal_fashion.png", d: "Discover changing Batik fashion trends and styles shaping modern women's clothing collections." },
                            { slug: "wholesale-success-stories", title: "Wholesale Success Stories", date: "June 10, 2024", cat: "Business", img: "/journal_business.png", d: "See how boutiques and resellers can build stronger fashion collections with the right Batik supply." }
                        ].map((post, i) => (
                            <Link key={i} href={`/blog/${post.slug}`} className="group flex flex-col gap-5 md:gap-6 block">
                                {/* Image Wrapper */}
                                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-primary/5">
                                    <Image
                                        src={post.img}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-[0.95] group-hover:brightness-100"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-2 md:gap-3 px-2">
                                    <span className="text-overline">
                                        {post.cat} &nbsp;&mdash;&nbsp; {post.date}
                                    </span>

                                    <h4 className="text-2xl md:text-3xl font-heading font-medium text-primary decoration-primary/30 underline-offset-4 group-hover:underline transition-all duration-300">
                                        {post.title}
                                    </h4>

                                    <p className="text-body2 line-clamp-2">
                                        {post.d}
                                    </p>

                                    {/* Minimalist Read More */}
                                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mt-2 group-hover:text-accent transition-colors duration-300">
                                        <span>Read Article</span>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transform transition-transform duration-500 group-hover:translate-x-1"
                                        >
                                            <path d="M5 12h14m-7-7 7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── SECTION: MOQ & TARGET ── */}
            <section className="scroll-animate pt-16 pb-8 md:pt-32 md:pb-16 px-6 bg-[#F4F0EA] relative overflow-hidden text-primary border-y border-primary/5">
                <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 relative z-10 items-center">

                    {/* LEFT: MOQ CARD */}
                    <div className="bg-white border border-border p-8 md:p-14 lg:p-16 rounded-[24px] md:rounded-[36px] shadow-xl flex flex-col gap-6 md:gap-10 relative overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-500">
                        <div className="flex flex-col gap-3 relative z-10">
                            <span className="text-overline">Commercial Terms</span>
                            <h2 className="text-h2 font-heading text-primary">Minimum Wholesale <span className="text-highlight">Women Dresses Order</span></h2>
                        </div>
                        <div className="flex flex-col gap-6 md:gap-8 relative z-10">
                            <div className="flex items-center justify-between py-6 border-b border-border/80">
                                <span className="text-overline">Minimum Billing</span>
                                <span className="text-h2 font-heading font-normal text-primary tracking-tight">₹25,000</span>
                            </div>
                            <p className="text-body1 leading-relaxed italic max-w-sm">
                                Bulk pricing is available for larger volumes, with flexible repeat-order structures for regular buyers.
                            </p>
                        </div>
                        <a href={WA} target="_blank" rel="noreferrer" className="w-full bg-accent text-white py-4 md:py-5 rounded-xl text-xs md:text-sm hover:bg-accent/90 transition-colors text-center uppercase tracking-[0.2em] font-semibold mt-2 flex items-center justify-center gap-3 relative z-10">
                            Request Wholesale Quote
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        </a>
                    </div>

                    {/* RIGHT: WHO THIS IS FOR */}
                    <div className="flex flex-col gap-8 md:gap-12 text-primary lg:pl-10">
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <span className="text-overline">Who This Is For</span>
                            <h3 className="text-h2 font-heading">Built for Serious Women <span className="text-highlight">Fashion Retailers</span></h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 mt-2">
                            {targetAudience.map((item, i) => (
                                <div key={i} className="flex flex-col items-start gap-4 p-6 sm:p-8 bg-[#F5F1EC] rounded-[20px] shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-left h-full">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-white border border-border text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                                        {item.i}
                                    </div>
                                    <div className="flex flex-col gap-2 mt-1">
                                        <h4 className="text-h4 leading-tight">{item.t}</h4>
                                        <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed font-medium">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BUSINESS ADVANTAGE ── */}
            <section className="scroll-animate pt-8 pb-16 md:pt-16 md:pb-32 px-6 bg-transparent overflow-hidden text-primary">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div className="relative h-[400px] md:h-[700px] rounded-[40px] md:rounded-[100px] overflow-hidden shadow-2xl group border-[10px] md:border-[20px] border-cream">
                        {/* 
                        <Image src="/dresses-for-women-image.webp" alt="Manufacturer Advantage" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[3s]" />
                        */}
                        <Image src="/wholesale-inventory-premium.png" alt="High rotation premium wholesale batik inventory" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[3s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-16 md:left-16 md:right-16 flex flex-col gap-3 md:gap-6">
                            <h4 className="text-white text-[22px] md:text-4xl font-heading font-medium leading-tight">"Stock your store with styles customers want to buy—not products that sit on the rack."</h4>
                            <div className="flex gap-2 md:gap-4">
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 md:gap-12">
                        <div className="flex flex-col gap-3 md:gap-6 text-center lg:text-left">
                            <span className="text-overline">The Market Reality</span>
                            <h2 className="font-heading text-2xl md:text-4xl font-medium text-primary leading-tight">Customers Do Not Buy More Choices. <br className="hidden lg:block"/> <span className="text-highlight">They Buy Better Choices.</span></h2>
                        </div>
                        <div className="flex flex-col gap-5 md:gap-8">
                            {[
                                { t: "Distinctive Batik Prints", d: "Unique designs give customers a reason to notice your collection." },
                                { t: "Cotton Comfort", d: "Breathable cotton supports everyday wear and repeat customer demand." },
                                { t: "Manufacturer Pricing", d: "Direct sourcing helps businesses maintain competitive retail pricing and healthier margins." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 md:gap-6 items-start bg-cream md:bg-transparent p-4 md:p-0 rounded-[16px] md:rounded-none">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white md:bg-tan flex items-center justify-center text-primary font-black shrink-0 text-[10px] md:text-base shadow-sm md:shadow-none">✔</div>
                                    <div className="flex flex-col gap-1 md:gap-2 text-left pt-1">
                                        <h4 className="font-heading font-medium text-xl md:text-2xl text-primary leading-tight">{item.t}</h4>
                                        <p className="text-sm md:text-base text-foreground leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            <FAQ items={[
                {
                    q: "Where can I buy wholesale women dresses in India?",
                    a: "You can source wholesale women dresses directly from AQSHA Batik Suits, a Ujjain-based Batik manufacturer offering Batik dresses, cotton styles, printed designs, and ethnic clothing collections."
                },
                {
                    q: "What types of women dresses are available wholesale?",
                    a: "Wholesale options can include Batik dresses, Batik print dresses, cotton dresses for women, casual dresses, floral dresses, one-piece styles, and occasion-ready designs."
                },
                {
                    q: "Are Batik dresses suitable for boutiques?",
                    a: "Yes. Batik dresses combine distinctive prints, comfortable fabrics, and versatile styling, making them suitable for boutiques looking to create a more memorable women's fashion collection."
                },
                {
                    q: "Can I order plus size Batik dresses wholesale?",
                    a: "Businesses can enquire about available plus size Batik dress designs, sizes, quantities, pricing, and wholesale availability."
                },
                {
                    q: "Do you provide bulk supply for retailers and resellers?",
                    a: "Yes. AQSHA Batik Suits provides wholesale supply for boutiques, retailers, resellers, and fashion businesses looking to source women dresses and Batik Prints Women Clothinging in bulk."
                }
            ]} />

            {/* ── CONSISTENT CTA ── */}
            <ConsistentCTA />


            <LeadGenerationForm 
                title={<>Get Personalized <span className="text-highlight italic">Women Dresses</span> <br className="hidden md:block" /> Pricing & Catalog</>}
                description="Explore our latest wholesale women dresses, cotton styles, and floral Batik designs with personalized bulk pricing, ready-stock updates, and collection catalogs."
                benefits={[
                    "Latest Women Dresses Design Catalog",
                    "Wholesale Pricing & Bulk Order Support",
                    "Plus Size & Custom Ordering Options",
                    "Batik & Cotton Dress Collections",
                    "Fast WhatsApp Assistance",
                    "Ready-Stock & New Collection Updates"
                ]}
            />
            <StickyEnquiryButton />
        </div>
    );
}
