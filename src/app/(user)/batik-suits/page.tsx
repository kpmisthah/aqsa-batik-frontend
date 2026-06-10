import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";

import ProductGrid from "@/modules/user/components/ProductGrid";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import AdvantageSection from "@/modules/user/components/AdvantageSection";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts() {
    try {
        const res = await fetch(`${API_BASE}/products?limit=100&category=Batik+Cloth`, { cache: 'no-store' });
        const json = await res.json();
        return json.data || [];
    } catch (e) {
        return [];
    }
}

async function getHeroBanner() {
    try {
        const res = await fetch(`${API_BASE}/banners/batik-suits`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/batik_suits_hero_category.png";
    } catch (e) {
        return "/batik_suits_hero_category.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Batik%20Suits";

export default async function BatikSuitsPage() {
    const allProducts = await getProducts();
    const heroBannerUrl = await getHeroBanner();
    const suitProducts = allProducts.filter((p: any) => p.category === "Batik Cloth");

    const collectionHighlights = [
        {
            t: "Daily wear demand",
            d: "Lightweight, breathable, and perfect for everyday use.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46 16 2a4 4 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.62 1.96v4.42a2 2 0 0 0 .39 1.16l2.23 3.1a2 2 0 0 1 .38 1.15V21a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6.75a2 2 0 0 1 .38-1.15l2.23-3.1a2 2 0 0 0 .39-1.16V5.42a2 2 0 0 0-1.62-1.96Z" />
                    <path d="M8 2v1.5a2 2 0 0 0 8 0V2" />
                </svg>
            )
        },
        {
            t: "Fast-moving retail",
            d: "Designs that catch the eye and sell out quickly.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                </svg>
            )
        },
        {
            t: "Bulk buyers",
            d: "Scalable supply with consistent quality for larger orders.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                </svg>
            )
        }
    ];

    const whyChooseUs = [
        "Comfortable for the Indian climate",
        "High resale value",
        "Consistent bulk quality",
        "Ready stock availability"
    ];

    return (
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-playfair selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'Playfair Display', serif; }
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%235A2A1F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />

            {/* ── HERO BANNER ── */}
            <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#5A2A1F]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBannerUrl}
                        alt="Batik Suits Collection"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center 10%"
                        priority
                        className="brightness-[0.8] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/80 shadow-2xl"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full flex justify-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-6 md:gap-10 items-center text-center max-w-5xl">
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">Pure Cotton Dress Materials</span>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-6">
                            <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight">
                                Batik <span className='hero-highlight'>Suits Online</span> – <br className="md:hidden" /> <span className='hero-highlight'>Cotton Dress Material</span> Collection
                            </h1>
                            <p className="font-playfair text-xl md:text-3xl font-black tracking-[-0.01em] opacity-95 leading-[1.3] md:leading-[1.2] mt-1 md:mt-2 max-w-3xl">
                                Explore High-Demand Batik <br className="md:hidden" /> Suit Designs
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-8 md:pt-10 items-center justify-center">
                            <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-[#FFD700] text-[#5A2A1F] px-6 py-3.5 md:px-8 md:py-4.5 rounded-[12px] md:rounded-[18px] font-black text-base md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider border-b-2 md:border-b-4 border-black/10">
                                Get Wholesale Pricing
                            </a>
                            <a href="#collection" className="inline-block bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 py-3.5 md:px-8 md:py-4.5 rounded-[12px] md:rounded-[18px] font-black text-base md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:bg-white hover:text-[#5A2A1F] active:scale-95 transition-all duration-300 uppercase tracking-wider">
                                View Collections
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <GoogleReviewBar />

            {/* ── SECTION: BUILT FOR SALES + PRODUCT GRID ── */}
            <section id="collection" className="py-32 px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center mx-auto max-w-3xl">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Optimized for Profit</span>
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5A2A1F]">Looking for Batik Cloth that actually sell?</h2>
                        <p className="text-xl text-[#5A2A1F]/70 font-medium leading-relaxed italic">Our collection is curated specifically for the demands of the modern Indian market.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {collectionHighlights.map((item, i) => (
                            <div key={i} className="p-12 bg-[#F5F1EC] rounded-[40px] border border-[#5A2A1F]/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block">{item.i}</div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.t}</h3>
                                <p className="text-[#5A2A1F]/60 font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    <ProductGrid products={suitProducts.slice(0, 8)} columns={4} />
                </div>
            </section>

            <AdvantageSection
                title={<>Why Choose Our <br /> Batik Cloth</>}
                items={[
                    "Comfortable for the Indian climate",
                    "High resale value",
                    "Consistent bulk quality",
                    "Ready stock availability"
                ]}
                imageSrc="/cotton-dress-material-image.webp"
                featureTag="FABRIC STANDARD"
                featureTitle="Pure Cotton 60x60"
                featureDesc="The gold standard for Batik Cloth, ensuring longevity and maximum comfort in any weather."
            />

            <PremiumFeatureSection
                title={<>Why Our Batik Cloth <br />Stand Out</>}
                features={[
                    {
                        t: "Premium Cotton 60x60",
                        d: "The gold standard for Batik Cloth, ensuring longevity and maximum comfort in any weather.",
                        c: "text-blue-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                            </svg>
                        )
                    },
                    {
                        t: "High Resale Value",
                        d: "Our designs are market-tested to ensure fast rotation and better margins for resellers and boutique owners.",
                        c: "text-emerald-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        )
                    },
                    {
                        t: "Lightweight & Breathable",
                        d: "Perfect for the Indian climate, our pure cotton suits keep your customers cool and comfortable all day.",
                        c: "text-orange-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
                            </svg>
                        )
                    },
                    {
                        t: "Consistent Bulk Quality",
                        d: "Zero batch variation. We maintain strict quality control for every piece in your bulk order.",
                        c: "text-yellow-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Ready Stock Availability",
                        d: "No long waiting periods. We keep our best-selling designs in stock for immediate dispatch.",
                        c: "text-purple-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                            </svg>
                        )
                    },
                    {
                        t: "Modern Suit Designs",
                        d: "Traditional batik art meets modern silhouettes, perfect for the contemporary Indian woman.",
                        c: "text-red-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M19 10c-2 0-3-1-3-2V5c0-1-1-2-2-2h-4c-1 0-2 1-2 2v3c0 1-1 2-3 2-1 0-2 1-2 2v1c0 1 1 2 2 2h14c1 0 2-1 2-2v-1c0-1-1-2-2-2Z" /><path d="M4 14l1 7h14l1-7" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/batik_suits_hero_category.png"
                quote="The gold standard for Batik Cloth, ensuring longevity and maximum comfort in any weather."
            />

            {/* ── HOW TO ORDER SECTION ── */}
            <section className="py-16 md:py-24 px-6 bg-[#E8D9C0]/50 relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-12 md:gap-16 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-4 max-w-4xl mx-auto w-full">
                        <div className="text-center flex flex-col gap-1 md:gap-2 items-center">
                            <span className="text-[10px] md:text-sm font-black text-[#8B3A2B] uppercase tracking-[0.5em] mb-1 block">Simple Process</span>
                            <h2 className="font-playfair text-3xl md:text-6xl font-bold text-[#5A2A1F] leading-tight">How to Order Batik <span className='hero-highlight'>Suits Online</span></h2>
                        </div>
                        <p className="text-[13px] md:text-xl text-[#5A2A1F]/70 font-medium italic mx-0 lg:mx-auto leading-relaxed text-left md:text-center mt-2">
                            Five simple steps. Zero confusion. Fast delivery of premium batik fabric, Batik Cloth, trending batik color collections, and quality cotton cloth across India.
                        </p>
                    </div>

                    <div className="relative grid grid-cols-2 lg:flex lg:flex-row justify-between gap-6 md:gap-10 lg:gap-6 mt-2 md:mt-0">
                        <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[3px] bg-[#5A2A1F]/5 z-0"></div>

                        {[
                            {
                                s: "01", t: "Browse Designs",
                                d: "Explore latest batik fabric prints with fresh collections of batik suits design, and ready-to-sell styles in premium women clothing demand.",
                                i: (
                                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                                    </svg>
                                )
                            },
                            {
                                s: "02", t: "Select Quantity",
                                d: "Choose required pieces for retail, boutique stock, or bulk orders in quality cotton cloth and ladies cloth collections.",
                                i: (
                                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                                    </svg>
                                )
                            },
                            {
                                s: "03", t: "Contact on WhatsApp",
                                d: "Send your selected designs directly for quick support, stock updates, and easy buying assistance.",
                                i: (
                                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
                                    </svg>
                                )
                            },
                            {
                                s: "04", t: "Get Bulk Pricing",
                                d: "Receive wholesale rates for printed batik fabric, reseller orders, and custom quantity requirements.",
                                i: (
                                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2 2 0 0 0-2.8 0L2.7 5.9a2 2 0 0 0 0 2.8L7 13" /><path d="m19 11-4 4" /><path d="m21 15-4.5 4.5a2 2 0 0 1-2.8 0L10 15.8" /><circle cx="16" cy="16" r="2" />
                                    </svg>
                                )
                            },
                            {
                                s: "05", t: "Fast Dispatch",
                                d: "Your order is packed securely and shipped quickly across India through trusted courier partners.",
                                i: (
                                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
                                    </svg>
                                )
                            }
                        ].map((step, i) => (
                            <div key={i} className={`flex flex-col items-center text-center gap-2 md:gap-4 lg:w-1/5 relative z-10 ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}>
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-[12px] md:rounded-[24px] shadow-lg flex items-center justify-center text-[#5A2A1F] hover:scale-110 transition-all duration-500 cursor-default border border-white relative group">
                                    <span className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 w-5 h-5 md:w-6 md:h-6 bg-[#8B3A2B] text-white text-[8px] md:text-[9px] font-black rounded-full flex items-center justify-center shadow-md">{step.s}</span>
                                    {step.i}
                                </div>
                                <div className="flex flex-col gap-1 md:gap-1.5 px-1 md:px-2">
                                    <h4 className="text-[11px] md:text-lg font-black tracking-tight text-[#5A2A1F] leading-tight">{step.t}</h4>
                                    <p className="text-[9px] md:text-xs text-[#5A2A1F]/70 font-medium leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-6 md:mt-12">
                        <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 md:gap-4 bg-[#5A2A1F] text-white px-4 py-3 md:px-10 md:py-5 rounded-xl md:rounded-3xl font-bold text-[11px] md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest group text-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            START YOUR ORDER ON WHATSAPP
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: CONTINUE EXPLORING ── */}
            <section className="py-16 md:py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-6 text-left md:text-center">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Next Steps</span>
                        <h2 className="font-playfair text-2xl md:text-5xl font-bold text-[#5A2A1F] leading-tight">Continue Your Journey</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        <a href="/batik-fabric" className="group relative h-[200px] md:h-auto md:aspect-[16/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10">
                            <Image src="/cat_batik_fabric.webp" alt="Explore Batik Fabric" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A1F]/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.3em] text-white/70">Category</span>
                                    <h3 className="font-playfair text-sm md:text-3xl font-bold text-white leading-tight">Explore Batik Fabric</h3>
                                </div>
                                <div className="w-8 h-8 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-[#FFD700] group-hover:text-[#5A2A1F] transition-all shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href={WA} target="_blank" rel="noreferrer" className="group relative h-[200px] md:h-auto md:aspect-[16/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10">
                            <Image src="/cat_wholesale.webp" alt="Wholesale Inquiry" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#8B3A2B]/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.3em] text-white/70">Inquiry</span>
                                    <h3 className="font-playfair text-sm md:text-3xl font-bold text-white leading-tight">Wholesale Inquiries</h3>
                                </div>
                                <div className="w-8 h-8 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all shrink-0">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-[28px] md:h-[28px]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/new-batik-prints" className="group relative h-[160px] md:h-auto md:aspect-[16/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 col-span-2 md:col-span-1">
                            <Image src="/cat_new_arrival.webp" alt="New Arrivals" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A1F]/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.3em] text-white/70">Collection</span>
                                    <h3 className="font-playfair text-sm md:text-3xl font-bold text-white leading-tight">New Arrivals</h3>
                                </div>
                                <div className="w-8 h-8 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-[#FFD700] group-hover:text-[#5A2A1F] transition-all shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BATIK JOURNAL (BLOG) ── */}
            <section className="py-16 md:py-32 px-6 bg-[#F5F1EC] border-t border-[#5A2A1F]/10">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-left md:text-center">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Editorial Corner</span>
                        <h2 className="font-playfair text-2xl md:text-5xl font-bold text-[#5A2A1F] leading-tight">The Batik Journal</h2>
                        <p className="text-[13px] md:text-xl text-[#5A2A1F]/60 font-medium italic mt-2">Stories of heritage, craft, and contemporary style.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        {[
                            { slug: "the-art-of-hand-blocked-batik", title: "The Art of Hand-Blocked Batik", date: "May 15, 2024", cat: "Craftsmanship", img: "/hero_bg.png" },
                            { slug: "batik-fashion-trends-2024", title: "Batik Fashion Trends 2024", date: "June 2, 2024", cat: "Fashion", img: "/cta_suits.png" },
                            { slug: "wholesale-success-stories", title: "Wholesale Success Stories", date: "June 10, 2024", cat: "Business", img: "/cat_wholesale.webp" }
                        ].map((post, i) => (
                            <a key={i} href={`/blog/${post.slug}`} className={`group flex flex-col md:flex-col gap-3 md:gap-6 bg-white p-3 md:p-6 rounded-[24px] md:rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-[#5A2A1F]/10 ${i === 2 ? "col-span-2 md:col-span-1 flex-row md:flex-col" : ""}`}>
                                <div className={`relative ${i === 2 ? "w-1/3 md:w-full md:aspect-[4/3] h-24 md:h-auto" : "aspect-[4/3] h-auto"} rounded-[16px] md:rounded-[32px] overflow-hidden`}>
                                    <Image src={post.img} alt={post.title} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className={`flex flex-col gap-1 px-1 md:px-4 pb-1 md:pb-4 flex-1 justify-center ${i === 2 ? "pl-3 md:pl-4" : ""}`}>
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-widest text-[#8B3A2B] opacity-60">{post.cat}</span>
                                    <h4 className="font-playfair text-[12px] md:text-2xl font-bold text-[#5A2A1F] leading-tight mt-1 md:mt-2 group-hover:text-[#8B3A2B] transition-colors">{post.title}</h4>
                                    <div className="flex items-center justify-between mt-auto md:mt-6 pt-2 md:pt-0">
                                        <span className="text-[8px] md:text-xs font-black uppercase tracking-widest text-[#5A2A1F]/30">{post.date}</span>
                                        <div className="hidden md:flex items-center gap-2 text-[#8B3A2B] font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                            Read More
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>


            <FAQ />
        </div>
    );
}
