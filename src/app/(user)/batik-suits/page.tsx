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
        const res = await fetch(`${API_BASE}/products?limit=100`, { cache: 'no-store' });
        const json = await res.json();
        return json.data || [];
    } catch (e) {
        return [];
    }
}

const WA = "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20enquire%20about%20Batik%20Suits";

export default async function BatikSuitsPage() {
    const allProducts = await getProducts();
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
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-sans selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'DM Sans', sans-serif; }
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%235A2A1F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />

            {/* ── HERO BANNER ── */}
            <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#5A2A1F]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/batik_suits_hero_category.png"
                        alt="Batik Cloth Collection"
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
                            <h1 className="font-playfair text-5xl md:text-[84px] font-bold leading-[1.1] md:leading-[1.05] tracking-tight">
                                Batik <span className='hero-highlight'>Suits Online</span> – <br className="md:hidden" /> <span className='hero-highlight'>Cotton Dress Material</span> Collection
                            </h1>
                            <p className="font-sans text-xl md:text-3xl font-black tracking-[-0.01em] opacity-95 leading-[1.3] md:leading-[1.2] mt-1 md:mt-2 max-w-3xl">
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
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F]">Looking for Batik Cloth that actually sell?</h2>
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
                imageSrc="/history.png"
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
            <section className="py-40 px-6 bg-[#E8D9C0]/50 relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-24 relative z-10">
                    <div className="text-center flex flex-col gap-8">
                        <span className="text-sm font-black text-[#8B3A2B] uppercase tracking-[0.5em] mb-2 block">Simple Process</span>
                        <h2 className="font-playfair text-6xl md:text-8xl font-bold text-[#5A2A1F] leading-tight">How to Order Batik <span className='hero-highlight'>Suits Online</span></h2>
                        <p className="text-2xl md:text-3xl text-[#5A2A1F]/70 font-medium italic max-w-4xl mx-auto leading-relaxed">
                            Five simple steps. Zero confusion. Fast delivery of premium batik fabric, Batik Cloth, trending batik color collections, and quality cotton cloth across India.
                        </p>
                    </div>

                    <div className="relative flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[3px] bg-[#5A2A1F]/5 z-0"></div>

                        {[
                            {
                                s: "01", t: "Browse Designs",
                                d: "Explore latest batik fabric prints with fresh collections of Batik Cloth design, and ready-to-sell styles in premium women clothing demand.",
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
                                <div className="w-28 h-28 p-8 bg-white rounded-[40px] shadow-2xl flex items-center justify-center text-5xl hover:scale-110 hover:-rotate-6 transition-all duration-500 cursor-default border border-white relative group">
                                    <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#8B3A2B] text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg">{step.s}</span>
                                    {step.i}
                                </div>
                                <div className="flex flex-col gap-4 px-2">
                                    <h4 className="text-3xl font-black tracking-tight text-[#5A2A1F] leading-tight">{step.t}</h4>
                                    <p className="text-xl text-[#5A2A1F]/60 font-medium leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-[#5A2A1F] text-white px-12 py-6 rounded-3xl font-black text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest group">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.485l-.719 2.624 2.688-.705c.95.514 2.035.804 3.19.803 3.181 0 5.767-2.584 5.768-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.2l-1.006 1.005c-.122.122-.318.159-.477.087-.514-.232-1.02-.555-1.504-1.039-.485-.484-.807-.989-1.039-1.504-.072-.159-.035-.355.087-.477l1.005-1.006c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0l-.798.797c-.506.507-.639 1.243-.374 1.874.457 1.087 1.214 2.064 2.223 3.073 1.009 1.009 1.986 1.766 3.073 2.223.631.265 1.367.132 1.874-.374l.797-.798c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0z" />
                            </svg>
                            <span>Start Your Order on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: CONTINUE EXPLORING ── */}
            <section className="py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
                    <div className="text-center flex flex-col gap-6">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Next Steps</span>
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F]">Continue Your Journey</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <a href="/batik-fabric" className="group relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10">
                            <Image src="/batik_fabric_hero.png" alt="Explore Batik Fabric" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A1F]/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-white/70">Category</span>
                                    <h3 className="font-playfair text-3xl font-bold text-white">Explore Batik Fabric</h3>
                                </div>
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-[#FFD700] group-hover:text-[#5A2A1F] transition-all">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href={WA} target="_blank" rel="noreferrer" className="group relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10">
                            <Image src="/cta_suits.png" alt="Wholesale Inquiry" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#8B3A2B]/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-white/70">Inquiry</span>
                                    <h3 className="font-playfair text-3xl font-bold text-white">Wholesale Inquiries</h3>
                                </div>
                                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="#new-arrivals" className="group relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10">
                            <Image src="/history.png" alt="New Arrivals" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A1F]/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-white/70">Collection</span>
                                    <h3 className="font-playfair text-3xl font-bold text-white">New Arrivals</h3>
                                </div>
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-[#FFD700] group-hover:text-[#5A2A1F] transition-all">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BATIK JOURNAL (BLOG) ── */}
            <section className="py-32 px-6 bg-[#F5F1EC] border-t border-[#5A2A1F]/10">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="text-center flex flex-col gap-6">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Editorial Corner</span>
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F]">The Batik Journal</h2>
                        <p className="text-xl text-[#5A2A1F]/60 font-medium italic">Stories of heritage, craft, and contemporary style.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { slug: "the-art-of-hand-blocked-batik", title: "The Art of Hand-Blocked Batik", date: "May 15, 2024", cat: "Craftsmanship", img: "/hero_bg.png" },
                            { slug: "batik-fashion-trends-2024", title: "Batik Fashion Trends 2024", date: "June 2, 2024", cat: "Fashion", img: "/cta_suits.png" },
                            { slug: "wholesale-success-stories", title: "Wholesale Success Stories", date: "June 10, 2024", cat: "Business", img: "/history.png" }
                        ].map((post, i) => (
                            <a key={i} href={`/blog/${post.slug}`} className="group flex flex-col gap-6 bg-white p-6 rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-[#5A2A1F]/10">
                                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
                                    <Image src={post.img} alt={post.title} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className="flex flex-col gap-1 px-4 pb-4">
                                    <span className="text-xs font-black uppercase tracking-widest text-[#8B3A2B] opacity-60">{post.cat}</span>
                                    <h4 className="font-playfair text-2xl font-bold text-[#5A2A1F] leading-tight mt-2 group-hover:text-[#8B3A2B] transition-colors">{post.title}</h4>
                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-xs font-black uppercase tracking-widest text-[#5A2A1F]/30">{post.date}</span>
                                        <div className="flex items-center gap-2 text-[#8B3A2B] font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
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
