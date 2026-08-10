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
import WavyHero from "@/modules/user/components/WavyHero";

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
            t: "Boutique Owners", d: "Unique stock for exclusive boutiques.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
                </svg>
            )
        },
        {
            t: "Instagram Resellers", d: "High-quality photos and fast-moving stock.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                </svg>
            )
        },
        {
            t: "Meesho / Amazon Sellers", d: "Reliable supply for high-volume platforms.",
            i: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.56-7.43H5.12" />
                </svg>
            )
        },
        {
            t: "Wholesale Traders", d: "Bulk fabric and suits for regional distribution.",
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
            t: "Dress Material Supply",
            d: "High-quality batik material and batik print material designed for stitching batik dress, ladies batik suits, ladies batik shirt and kurtis and ready-to-sell garments with strong retail demand.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z" />
                    <path d="M12 2v19" />
                </svg>
            )
        },
        {
            t: "Boutique & Clothing Brands",
            d: "Perfect for clothing brand owners and clothing stores who are looking for batik unique designs, consistent supply, and fast-moving fashion inventory.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
        {
            t: "Custom & Bulk Orders",
            d: "Flexible supply for bulk buyers, including fabric wholesale orders for traditional clothes, festive collections, and modern women’s clothing lines.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="m8.12 8.12 3.19 3.19" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title>Fabric Wholesale in India for Batik Clothing & Bulk Orders | AQSHA BATIK</title>
            <meta name="description" content="Direct Batik Manufacturer from Ujjain. Supply high-demand batik fabric wholesale, premium batik print material, and consistent inventory for boutiques and resellers across India." />

            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />
            <ScrollObserver />
            <WavyHero
                pillText="Direct Batik Manufacturer from Ujjain"
                pillHighlight=""
                title={
                    <>
                        <span className='text-accent'>Wholesale Cotton</span> Dresses <br />
                        in India for Batik Clothing & <br />
                        <span className='text-accent'>Bulk Orders</span>
                    </>
                }
                description="Stop guessing what will sell. Work with a direct manufacturer supplying high-demand batik fabric wholesale, premium batik print material, and consistent inventory for boutiques, resellers, and growing batik clothing brands across India."
                imageSrc="/wholesale_wavy_hero.png" // Updated image
                imageAlt="Wholesale Batik Cloth Manufacturing"
                buttons={
                    <>
                        <a href={WA} target="_blank" rel="noreferrer" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                            Contact for Bulk Orders
                        </a>
                        <a href="#collection" className="border border-primary/15 hover:border-accent text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent hover:text-accent">
                            View Collections
                        </a>
                    </>
                }
            />
            <GoogleReviewBar />

            {/* ── SECTION: PROBLEM/SOLUTION (BENTO BOX) ── */}
            <section className="scroll-animate pt-16 md:pt-32 pb-4 md:pb-8 px-6 bg-transparent">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-3xl mx-auto w-full">
                        <span className="text-overline">Streamline Your Sourcing</span>
                        <h2 className="text-h2 font-heading text-primary">Solving Challenges for Retailers</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto w-full">

                        {/* LEFT: THE PROBLEM */}
                        <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 flex flex-col gap-10 hover:-translate-y-1 transition-transform duration-500 justify-center h-full">
                            <h3 className="text-h2 text-accent">If your current supplier is giving you...</h3>

                            <div className="flex flex-col gap-6">
                                {["Inconsistent quality", "Slow-moving designs", "Low margins"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 relative">
                                        <div className="w-2 h-2 rounded-full bg-accent shrink-0"></div>
                                        <h4 className="text-h4 text-primary">{item}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: THE SOLUTION */}
                        <div className="bg-[#F4F0EA] rounded-[32px] md:rounded-[48px] p-8 md:p-12 lg:p-16 border border-border flex flex-col gap-8 relative overflow-hidden hover:-translate-y-1 transition-transform duration-500 justify-center h-full hover:shadow-xl hover:border-transparent">
                            <div className="flex flex-col gap-6 relative z-10">
                                <p className="text-h3 font-heading text-primary">
                                    You don't have a sourcing problem.<br />You have a supply system problem.
                                </p>
                                <h3 className="text-h2 italic text-accent font-heading">We fix that.</h3>
                                <p className="text-body1 text-primary font-normal tracking-wide max-w-lg">
                                    AQSHA Batik Cloth is a 15+ year manufacturer specialising in high-demand, high-rotation batik dress materials.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION: CAPABILITIES + PRODUCT GRID ── */}
            <section id="collection" className="scroll-animate py-16 md:py-32 px-6 bg-[#F4F0EA] relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-16 md:gap-20">
                    <div className="flex flex-col gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline">Built for Real Market Use</span>
                        <h2 className="text-h2 font-heading text-primary">Wholesale Fabric That Supports <br className="hidden md:block" /> Every Business Need</h2>
                        <div className="w-12 h-[2px] bg-secondary mt-4"></div>
                        <p className="text-lg md:text-xl text-primary font-normal leading-relaxed mt-4 max-w-3xl">
                            From boutique collections to bulk supply, our batik fabric wholesale is designed for consistent demand—ideal for batik clothing, printed dresses for women, and scalable retail inventory across India.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto w-full">
                        {wholesaleCapabilities.map((item, i) => (
                            <div key={i} className="bg-white rounded-[24px] p-8 md:p-10 lg:p-12 border border-border flex flex-col items-center text-center gap-6 group hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:border-transparent h-full">

                                <div className="text-primary group-hover:scale-110 transition-transform duration-500 [&>svg]:!w-10 [&>svg]:!h-10 md:[&>svg]:!w-12 md:[&>svg]:!h-12 relative z-10">
                                    {item.i}
                                </div>
                                <div className="flex flex-col flex-1 relative z-10 w-full justify-between gap-6">
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-h4 text-primary font-normal">{item.t}</h3>
                                        <p className="text-body2 text-primary leading-relaxed font-normal">{item.d}</p>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-accent text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Learn More</span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 md:gap-12 mt-6 md:mt-12">
                        <div className="flex flex-col gap-3 md:gap-4 text-center items-center mx-auto max-w-4xl">
                            <span className="text-overline">High-Demand Fabric Library</span>
                            <h2 className="text-h3 font-heading text-primary">Explore Signature Batik Dress Designs for Fabric Wholesale</h2>
                            <p className="text-lg md:text-xl text-primary font-normal leading-relaxed mt-2 w-full text-center">Discover best-selling batik patterns, consistent quality, and ready-to-move collections trusted by boutiques, fabric shops, cloth shops, and resellers across India.</p>
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
                title="Why Our Batik Wholesale System Stands Out"
                features={[
                    {
                        t: "Premium Cotton Fabric Quality",
                        d: "Our cotton fabric is selected for durability, comfort, and repeat use—ideal for cotton dress, ladies cotton suit, and long-lasting retail inventory.",
                        c: "text-emerald-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        )
                    },
                    {
                        t: "Consistent Batik Print Quality",
                        d: "Every batch of batik print material maintains pattern clarity and color consistency—so your batik clothing and stitched products stay uniform across orders.",
                        c: "text-blue-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                            </svg>
                        )
                    },
                    {
                        t: "Breathable & Market-Friendly Fabric",
                        d: "Lightweight and wearable, our fabric supports high-demand categories like pure cotton women dress, daily wear, and seasonal fashion.",
                        c: "text-yellow-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Built for Real Retail Demand",
                        d: "Designed for what actually sells—woman dress, cotton suit, and everyday fashion styles that move fast in local and online markets.",
                        c: "text-red-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
                            </svg>
                        )
                    },
                    {
                        t: "Wholesale Pricing That Protects Margins",
                        d: "Direct manufacturing allows better pricing for fabric wholesale buyers, helping resellers scale without margin pressure.",
                        c: "text-purple-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                            </svg>
                        )
                    },
                    {
                        t: "Ready for Stitching & Bulk Orders",
                        d: "Clean finishing ensures smooth cutting for unstitched cotton dress for women and bulk production without quality issues.",
                        c: "text-orange-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/dress-for-women-image.webp"
                quote="Consistent fabric. Reliable supply. Built for businesses that sell, not just stock."
            />

            <HowToOrderSection
                title="How to Order Batik Fabric Online"
                whatsappLink={WA}
            />


            {/* ── SECTION: NEXT STEPS ── */}
            <section className="scroll-animate py-16 md:py-32 px-6 bg-[#F4F0EA] overflow-hidden text-primary">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-left md:text-center max-w-4xl mx-auto w-full">
                        <span className="text-overline">Next Step</span>
                        <h2 className="text-h2 font-heading text-primary">Continue Your Sourcing Journey</h2>
                        <p className="text-lg md:text-xl text-primary font-normal leading-relaxed mt-2">
                            Explore our batik suit designs, evaluate fabric options, or move directly to bulk ordering—built for businesses ready to scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        {[
                            {
                                t: "Explore Batik Cloth",
                                l: "/cotton-cloth",
                                img: "/gallery_explore.png",
                                tag: "Category"
                            },
                            {
                                t: "Explore Batik Fabric",
                                l: "/batik-fabric",
                                img: "/gallery_wholesale.png",
                                tag: "Category"
                            },
                            {
                                t: "New Arrival Clothing",
                                l: "/new-batik-prints",
                                img: "/gallery_arrival.png",
                                tag: "Category"
                            }
                        ].map((item, i) => (
                            <Link key={i} href={item.l} className="group relative rounded-[24px] overflow-hidden bg-primary aspect-[4/5] md:aspect-[3/4] flex flex-col items-center justify-center border border-primary/10">
                                <Image
                                    src={item.img}
                                    alt={item.t}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-100 group-hover:brightness-95"
                                />
                                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-body font-bold uppercase tracking-widest text-primary shadow-sm">{item.tag}</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-10 text-center">
                                    <h3 className="font-heading text-2xl md:text-3xl font-normal text-white leading-tight mb-2 md:mb-4">{item.t}</h3>

                                    <div className="flex items-center gap-2 mt-2 bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-white font-bold text-[10px] md:text-xs uppercase tracking-widest overflow-hidden">
                                        <span>Explore</span>
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
            <section className="scroll-animate pt-16 md:pt-24 pb-4 md:pb-8 px-4 md:px-6 bg-transparent">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-5xl mx-auto w-full">
                        <span className="text-overline">FASHION & FABRIC JOURNAL</span>
                        <h2 className="text-h2 font-heading text-primary leading-tight">The Batik Wholesale Fabric Journal</h2>
                        <div className="w-16 h-[2px] bg-secondary mt-2"></div>
                        <p className="text-lg md:text-xl text-primary font-normal leading-relaxed mt-2">
                            Insights on fabric wholesale, sourcing strategies, trending batik clothing, and practical dress design ideas to help boutiques and resellers choose the right stock, improve margins, and scale with confidence.
                        </p>
                    </div>

                    {/* Kinfolk Editorial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                        {[
                            { slug: "the-art-of-hand-blocked-batik", title: "The Art of Hand-Blocked Batik", date: "May 15, 2024", cat: "Craftsmanship", img: "/journal_craftsmanship.png", d: "Exploring the traditional craftsmanship behind every piece of fabric." },
                            { slug: "batik-fashion-trends-2024", title: "Batik Fashion Trends 2024", date: "June 2, 2024", cat: "Fashion", img: "/journal_fashion.png", d: "What's trending in the modern batik market for the upcoming season." },
                            { slug: "wholesale-success-stories", title: "Wholesale Success Stories", date: "June 10, 2024", cat: "Business", img: "/journal_business.png", d: "How our partners are scaling their businesses with AQSHA Batik." }
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

                                    <h4 className="text-2xl md:text-3xl font-heading font-normal text-primary decoration-primary/30 underline-offset-4 group-hover:underline transition-all duration-300">
                                        {post.title}
                                    </h4>

                                    <p className="text-body2 text-primary line-clamp-2">
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
            <section className="scroll-animate py-16 md:py-32 px-6 bg-[#F4F0EA] relative overflow-hidden text-primary border-y border-primary/5">
                <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 relative z-10 items-center">

                    {/* LEFT: MOQ CARD */}
                    <div className="bg-white border border-border p-8 md:p-14 lg:p-16 rounded-[24px] md:rounded-[36px] shadow-xl flex flex-col gap-6 md:gap-10 relative overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-500">
                        <div className="flex flex-col gap-3 relative z-10">
                            <span className="text-overline">Commercial Terms</span>
                            <h2 className="text-h2 font-heading text-primary">Minimum Order Requirement</h2>
                        </div>
                        <div className="flex flex-col gap-6 md:gap-8 relative z-10">
                            <div className="flex items-center justify-between py-6 border-b border-border/80">
                                <span className="text-overline">Minimum Billing</span>
                                <span className="text-h2 font-heading font-normal text-primary tracking-tight">₹25,000</span>
                            </div>
                            <p className="text-body1 text-primary font-normal leading-relaxed italic max-w-sm">
                                Bulk pricing available for larger volumes. Flexible repeat order structures for regular buyers. We work with serious retail partners ONLY.
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
                            <h3 className="text-h2 font-heading">Built for serious clothing retailers</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 mt-2">
                            {targetAudience.map((item, i) => (
                                <div key={i} className="flex flex-col items-start gap-4 p-6 sm:p-8 bg-[#F5F1EC] rounded-[20px] shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-left h-full">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-white border border-border text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                                        {item.i}
                                    </div>
                                    <div className="flex flex-col gap-2 mt-1">
                                        <h4 className="text-h4 text-primary leading-tight">{item.t}</h4>
                                        <p className="text-[13px] sm:text-[14px] text-primary/80 leading-relaxed font-medium">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BUSINESS ADVANTAGE ── */}
            <section className="scroll-animate py-16 md:py-32 px-6 bg-transparent overflow-hidden text-primary">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div className="relative h-[400px] md:h-[700px] rounded-[40px] md:rounded-[100px] overflow-hidden shadow-2xl group border-[10px] md:border-[20px] border-cream">
                        {/* 
                        <Image src="/dresses-for-women-image.webp" alt="Manufacturer Advantage" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[3s]" />
                        */}
                        <Image src="/wholesale-inventory-premium.png" alt="High rotation premium wholesale batik inventory" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[3s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-16 md:left-16 md:right-16 flex flex-col gap-3 md:gap-6">
                            <h4 className="text-white text-[22px] md:text-4xl font-heading font-normal leading-tight">"Their products don't sit in inventory. They sell."</h4>
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
                            <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary leading-tight">Most sellers compete on price. Our clients compete on demand.</h2>
                        </div>
                        <div className="flex flex-col gap-5 md:gap-8">
                            {[
                                { t: "Light colour batik = High rotation", d: "Statistically our fastest moving palette across all Indian markets." },
                                { t: "Cotton fabric = Every-day necessity", d: "Breathable material that ensures repeat buys and customer loyalty." },
                                { t: "Affordable pricing = Direct margins", d: "Manufacturer Pricing lets you win the price war while keeping your profit." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 md:gap-6 items-start bg-cream md:bg-transparent p-4 md:p-0 rounded-[16px] md:rounded-none">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white md:bg-tan flex items-center justify-center text-primary font-black shrink-0 text-[10px] md:text-base shadow-sm md:shadow-none">✔</div>
                                    <div className="flex flex-col gap-1 md:gap-2 text-left pt-1">
                                        <h4 className="font-heading font-normal text-xl md:text-2xl text-primary leading-tight">{item.t}</h4>
                                        <p className="text-sm md:text-base text-primary font-normal leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            <FAQ items={[
                {
                    q: "Why choose you for fabric wholesale suppliers in India for bulk buying?",
                    a: "AQSHA BATIK SUITS (Ujjain) offers 15+ years of manufacturing, 1000+ buyers served, and ready stock with fast dispatch—ideal for pure cotton suits and scalable bulk orders."
                },
                {
                    q: "How to find the best fabric suppliers in India for wholesale fabric?",
                    a: "Choose fabric suppliers with proven experience, consistent quality, and wide supply reach. AQSHA BATIK SUITS delivers reliable cotton fabric across Delhi, Punjab, and Gujarat."
                },
                {
                    q: "Why is a batik clothing brand a good option for wholesale fabric buyers?",
                    a: "A trusted clothing brand ensures designs that already match market demand. AQSHA BATIK SUITS supports bulk buyers with ready-to-sell batik clothing collections"
                },
                {
                    q: "Do you provide bulk fabric supply for boutiques and resellers?",
                    a: "Yes. AQSHA BATIK SUITS (Ujjain) supplies bulk fabric wholesale orders for boutiques and resellers with consistent stock, fast dispatch, and scalable collections."
                },
                {
                    q: "What type of products can be made from your wholesale fabric?",
                    a: "Our fabric is ideal for pattern dress, pure cotton suits, and unstitched cotton dress for women, supporting fast-moving retail and everyday fashion demand."
                }
            ]} />

            <LeadGenerationForm />
            <StickyEnquiryButton />
        </div>
    );
}
