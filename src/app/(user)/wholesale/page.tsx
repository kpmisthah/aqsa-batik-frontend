import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import LeadGenerationForm from "@/modules/user/components/LeadGenerationForm";
import StickyEnquiryButton from "@/modules/user/components/StickyEnquiryButton";

import ProductGrid from "@/modules/user/components/ProductGrid";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import AdvantageSection from "@/modules/user/components/AdvantageSection";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts() {
    try {
        const res = await fetch(`${API_BASE}/products?limit=100&category=Wholesale`, { cache: 'no-store' });
        const json = await res.json();
        return json.data || [];
    } catch (e) {
        return [];
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Wholesale%20Manufacturer%20Pricing";

export default async function WholesalePage() {
    const allProducts = await getProducts();
    const wholesaleProducts = allProducts.filter((p: any) => p.category === "Wholesale" || p.isWholesale === true);

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
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-sans selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <title>Fabric Wholesale in India for Batik Clothing & Bulk Orders | AQSHA BATIK</title>
            <meta name="description" content="Direct Batik Manufacturer from Ujjain. Supply high-demand batik fabric wholesale, premium batik print material, and consistent inventory for boutiques and resellers across India." />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'DM Sans', sans-serif; }
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%235A2A1F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />

            {/* ── HERO SECTION ── */}
            <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#5A2A1F]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/cta_suits.png"
                        alt="Wholesale Batik Cloth Manufacturing"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center 10%"
                        priority
                        className="brightness-75 contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/90"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full flex justify-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-6 md:gap-10 items-center text-center max-w-5xl">
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Direct Batik Manufacturer from Ujjain</span>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-6">
                            <h1 className="font-playfair text-5xl md:text-[84px] font-bold leading-[1.4] md:leading-[1.3] tracking-tight">
                                Fabric <span className='hero-highlight'>Wholesale in India</span> for <br className="md:hidden" /> <span className='hero-highlight'>Batik Clothing</span> & <span className='hero-highlight'>Bulk Orders</span>
                            </h1>
                            <p className="font-sans text-xl md:text-2xl font-medium tracking-tight opacity-95 leading-relaxed mt-2 max-w-4xl mx-auto">
                                Stop guessing what will sell. Work with a direct manufacturer supplying high-demand batik fabric wholesale, premium batik print material, and consistent inventory for boutiques, resellers, and growing batik clothing brands across India.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-8 md:pt-10 items-center justify-center">
                            <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-[#FFD700] text-[#5A2A1F] px-6 py-3.5 md:px-8 md:py-4.5 rounded-[12px] md:rounded-[18px] font-black text-base md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider border-b-2 md:border-b-4 border-black/10">
                                Contact for Bulk Orders
                            </a>
                            <a href="#collection" className="inline-block bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 py-3.5 md:px-8 md:py-4.5 rounded-[12px] md:rounded-[18px] font-black text-base md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:bg-white hover:text-[#5A2A1F] active:scale-95 transition-all duration-300 uppercase tracking-wider">
                                View Collections
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <GoogleReviewBar />

            {/* ── SECTION: PROBLEM/SOLUTION ── */}
            <section className="py-32 px-6 bg-[#1a0f0a] text-white">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="flex flex-col gap-10">
                            <h2 className="font-playfair text-5xl md:text-7xl font-bold leading-tight">If your current supplier is giving you...</h2>
                            <div className="flex flex-col gap-4">
                                {["Inconsistent quality", "Slow-moving designs", "Low margins"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-5 text-2xl font-bold opacity-60">
                                        <span className="text-red-500">✕</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-16 bg-white/5 backdrop-blur-3xl rounded-[60px] border border-white/10 flex flex-col gap-8 shadow-2xl">
                            <p className="text-2xl md:text-3xl font-playfair font-bold text-[#FFD700]">You don't have a sourcing problem. You have a supply system problem.</p>
                            <h3 className="text-4xl md:text-5xl font-black italic">We fix that.</h3>
                            <p className="text-lg opacity-70 leading-relaxed font-medium">AQSHA Batik Cloth is a 15+ year manufacturer specialising in high-demand, high-rotation batik dress materials.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION: WHOLESALE CAPABILITIES ── */}
            <section className="py-32 px-6 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center items-center mx-auto max-w-4xl">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Built for Real Market Use</span>
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F]">Wholesale Fabric That Supports Every Batik Business Need</h2>
                        <p className="text-xl text-[#5A2A1F] font-medium leading-relaxed italic">From boutique collections to bulk supply, our batik fabric wholesale is designed for consistent demand—ideal for batik clothing, printed dresses for women, and scalable retail inventory across India.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {wholesaleCapabilities.map((item, i) => (
                            <div key={i} className="p-12 bg-[#F5F1EC] rounded-[40px] border border-[#5A2A1F]/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block text-[#5A2A1F]">{item.i}</div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-[#5A2A1F]">{item.t}</h3>
                                <p className="text-[#5A2A1F]/70 font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION: PRODUCT GRID INTRO ── */}
            <section id="collection" className="py-32 px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center mx-auto max-w-4xl">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">High-Demand Fabric Library</span>
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F]">Explore Signature Batik Dress Designs for Fabric Wholesale</h2>
                        <p className="text-xl text-[#5A2A1F]/70 font-medium italic leading-relaxed">Discover best-selling batik patterns, consistent quality, and ready-to-move collections trusted by boutiques, fabric shops, cloth shops, and resellers across India.</p>
                    </div>

                    <ProductGrid products={wholesaleProducts.slice(0, 8)} columns={4} isWholesalePage={true} />
                </div>
            </section>

            <PremiumFeatureSection
                tag="Why Buyers Choose Our Supply"
                title={<>Why Our Batik Wholesale <br /> System Stands Out</>}
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
                imageSrc="/cta_suits.png"
                quote="Consistent fabric. Reliable supply. Built for businesses that sell, not just stock."
            />

            {/* ── HOW TO START SECTION ── */}
            <section className="py-40 px-6 bg-[#F5F1EC] text-[#5A2A1F] relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-24 relative z-10">
                    <div className="text-center flex flex-col gap-8">
                        <span className="text-sm font-black text-[#8B3A2B] uppercase tracking-[0.5em] mb-2 block text-center">Simple Process</span>
                        <h2 className="font-playfair text-6xl md:text-8xl font-bold leading-tight">How to Order Batik Fabric Online</h2>
                        <p className="text-2xl md:text-3xl text-[#5A2A1F]/70 font-medium italic max-w-4xl mx-auto leading-relaxed">
                            Five simple steps. Zero confusion. Fast delivery of premium batik fabric, Batik Cloth, trending batik color collections, and quality cotton cloth across India.
                        </p>
                    </div>

                    <div className="relative flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-[#5A2A1F]/10 z-0"></div>

                        {[
                            {
                                s: "01", t: "Browse Designs",
                                d: "Explore latest batik fabric prints with fresh collections of batik suits design, and ready-to-sell styles in premium women clothing demand.",
                                i: (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                                    </svg>
                                )
                            },
                            {
                                s: "02", t: "Select Quantity",
                                d: "Choose required pieces for retail, boutique stock, or bulk orders in quality cotton cloth and ladies cloth collections.",
                                i: (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                                    </svg>
                                )
                            },
                            {
                                s: "03", t: "Contact on WhatsApp",
                                d: "Send your selected designs directly for quick support, stock updates, and easy buying assistance.",
                                i: (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
                                    </svg>
                                )
                            },
                            {
                                s: "04", t: "Get Bulk Pricing",
                                d: "Receive wholesale rates for printed batik fabric, reseller orders, and custom quantity requirements.",
                                i: (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2 2 0 0 0-2.8 0L2.7 5.9a2 2 0 0 0 0 2.8L7 13" /><path d="m19 11-4 4" /><path d="m21 15-4.5 4.5a2 2 0 0 1-2.8 0L10 15.8" /><circle cx="16" cy="16" r="2" />
                                    </svg>
                                )
                            },
                            {
                                s: "05", t: "Fast Dispatch",
                                d: "Your order is packed securely and shipped quickly across India through trusted courier partners.",
                                i: (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
                                    </svg>
                                )
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-10 lg:w-1/5 relative z-10">
                                <div className="w-28 h-28 p-8 bg-white rounded-[40px] shadow-2xl flex items-center justify-center text-[#5A2A1F] hover:scale-110 hover:-rotate-6 transition-all duration-500 cursor-default border border-[#5A2A1F]/5 relative group">
                                    <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#8B3A2B] text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg">{step.s}</span>
                                    {step.i}
                                </div>
                                <div className="flex flex-col gap-4 px-2">
                                    <h4 className="text-3xl font-black tracking-tight text-[#5A2A1F] leading-tight">{step.t}</h4>
                                    <p className="text-xl text-[#5A2A1F]/50 font-medium leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-[#5A2A1F] text-white px-10 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                            <span className="w-3 h-3 rounded-full bg-[#FFD700] animate-pulse"></span>
                            START YOUR ORDER ON WHATSAPP
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: NEXT STEPS ── */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Next Step</span>
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F]">Continue Your Sourcing Journey</h2>
                        <p className="text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed">
                            Explore our batik suit designs, evaluate fabric options, or move directly to bulk ordering—built for businesses ready to scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                t: "Explore Batik Cloth",
                                d: "Browse ready-to-sell collections including cotton dress, ladies cotton suit, and everyday woman dress styles built for fast-moving retail demand.",
                                l: "/batik-cloth",
                                img: "/history.png",
                                tag: "Category"
                            },
                            {
                                t: "Explore Batik Fabric",
                                d: "Discover premium cotton fabric, detailed prints, and versatile materials ideal for unstitched cotton dress for women and bulk stitching needs.",
                                l: "/batik-fabric",
                                img: "/cta_suits.png",
                                tag: "Category"
                            },
                            {
                                t: "New Arrival Batik Clothing",
                                d: "Stay ahead of demand with fresh collections of batik clothing, trending styles, and newly added designs in cotton dress and fast-moving fashion inventory.",
                                l: "/batik-cloth#collection",
                                img: "/batik_fabric_hero_premium.png",
                                tag: "Category"
                            }
                        ].map((item, i) => (
                            <a key={i} href={item.l} className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                                <Image
                                    src={item.img}
                                    alt={item.t}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-110 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.5]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD700] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full w-fit border border-white/20">{item.tag}</span>
                                    <h4 className="text-white text-3xl font-playfair font-bold">{item.t}</h4>
                                    <p className="text-white/70 font-medium text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.d}</p>
                                    <div className="flex items-center gap-3 text-[#FFD700] font-black uppercase text-[10px] tracking-widest mt-2 group-hover:gap-5 transition-all">
                                        Explore Collection
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION: EDITORIAL CORNER ── */}
            <section className="py-32 px-6 bg-[#F5F1EC]">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="text-center flex flex-col gap-6 max-w-4xl mx-auto">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Editorial Corner</span>
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F]">The Batik Wholesale Fabric Journal</h2>
                        <p className="text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed">Insights on fabric wholesale, sourcing strategies, trending batik clothing, and practical dress design ideas to help boutiques and resellers choose the right stock, improve margins, and scale with confidence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                t: "The Art of Hand-Blocked Batik",
                                d: "Exploring the traditional craftsmanship behind every piece of fabric.",
                                c: "Craftsmanship",
                                date: "May 15, 2024",
                                img: "/history.png"
                            },
                            {
                                t: "Batik Fashion Trends 2024",
                                d: "What's trending in the modern batik market for the upcoming season.",
                                c: "Fashion",
                                date: "June 2, 2024",
                                img: "/batik_fabric_hero_premium.png"
                            },
                            {
                                t: "Wholesale Success Stories",
                                d: "How our partners are scaling their businesses with AQSHA Batik.",
                                c: "Business",
                                date: "June 10, 2024",
                                img: "/cta_suits.png"
                            }
                        ].map((post, i) => (
                            <div key={i} className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-[#5A2A1F]/5 group cursor-pointer hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-64 overflow-hidden">
                                    <Image src={post.img} alt={post.t} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#5A2A1F]">{post.c}</span>
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col gap-4">
                                    <h4 className="text-2xl font-playfair font-bold text-[#5A2A1F] leading-tight">{post.t}</h4>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-xs font-medium text-[#5A2A1F]/40 uppercase tracking-widest">{post.date}</span>
                                        <div className="flex items-center gap-2 text-[#8B3A2B] font-bold text-[10px] uppercase tracking-widest">
                                            Read More
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── SECTION: MOQ & TARGET ── */}
            <section className="py-32 px-6 bg-[#E8D9C0] relative overflow-hidden text-[#5A2A1F]">
                <div className="absolute inset-0 bg-pattern opacity-[0.05]"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
                    <div className="bg-white p-16 rounded-[60px] shadow-2xl flex flex-col gap-8 border border-white">
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-black text-[#8B3A2B] uppercase tracking-[0.4em]">Commercial Terms</span>
                            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#5A2A1F]">Minimum Order Requirement</h2>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between py-6 border-b border-[#5A2A1F]/10">
                                <span className="font-black uppercase text-sm tracking-widest text-[#8B3A2B]">Minimum Billing</span>
                                <span className="text-4xl font-black">₹25,000</span>
                            </div>
                            <p className="text-lg font-medium text-[#5A2A1F]/70 italic leading-relaxed">
                                Bulk pricing available for larger volumes. Flexible repeat order structures for regular buyers. We work with serious retail partners ONLY.
                            </p>
                        </div>
                        <a href={WA} target="_blank" rel="noreferrer" className="w-full bg-[#5A2A1F] text-white py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl text-center uppercase tracking-widest">
                            Request Wholesale Quote
                        </a>
                    </div>
                    <div className="flex flex-col gap-12 text-[#5A2A1F]">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Who This Is For</span>
                            <h3 className="font-playfair text-4xl md:text-5xl font-bold">Built for serious clothing retailers</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {targetAudience.map((item, i) => (
                                <div key={i} className="p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 flex flex-col gap-3">
                                    <span className="text-3xl mb-2">{item.i}</span>
                                    <h4 className="font-bold text-lg">{item.t}</h4>
                                    <p className="text-sm font-medium opacity-60 leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BUSINESS ADVANTAGE ── */}
            <section className="py-32 px-6 bg-white overflow-hidden text-[#5A2A1F]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative h-[700px] rounded-[100px] overflow-hidden shadow-2xl group border-[20px] border-[#F5F1EC]">
                        <Image src="/hero_bg.png" alt="Manufacturer Advantage" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[3s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A1F]/80 to-transparent"></div>
                        <div className="absolute bottom-16 left-16 right-16 flex flex-col gap-6">
                            <h4 className="text-white text-4xl font-playfair font-bold">"Their products don't sit in inventory. They sell."</h4>
                            <div className="flex gap-4">
                                <span className="bg-[#FFD700] p-2 rounded text-[#5A2A1F]">★</span>
                                <span className="bg-[#FFD700] p-2 rounded text-[#5A2A1F]">★</span>
                                <span className="bg-[#FFD700] p-2 rounded text-[#5A2A1F]">★</span>
                                <span className="bg-[#FFD700] p-2 rounded text-[#5A2A1F]">★</span>
                                <span className="bg-[#FFD700] p-2 rounded text-[#5A2A1F]">★</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-6">
                            <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">The Market Reality</span>
                            <h2 className="font-playfair text-5xl md:text-7xl font-bold leading-tight">Most sellers compete on price. Our clients compete on demand.</h2>
                        </div>
                        <div className="flex flex-col gap-8">
                            {[
                                { t: "Light colour batik = High rotation", d: "Statistically our fastest moving palette across all Indian markets." },
                                { t: "Cotton fabric = Every-day necessity", d: "Breathable material that ensures repeat buys and customer loyalty." },
                                { t: "Affordable pricing = Direct margins", d: "Manufacturer Pricing lets you win the price war while keeping your profit." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#E8D9C0] flex items-center justify-center text-[#5A2A1F] font-black shrink-0">✔</div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="font-bold text-xl">{item.t}</h4>
                                        <p className="text-base text-[#5A2A1F]/60 font-medium">{item.d}</p>
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
