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
        const res = await fetch(`${API_BASE}/products?limit=100&category=Batik+Fabric`, { cache: 'no-store' });
        const json = await res.json();
        return json.data || [];
    } catch (e) {
        return [];
    }
}

async function getHeroBanner() {
    try {
        const res = await fetch(`${API_BASE}/banners/batik-fabric`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/batik_fabric_hero_premium.png";
    } catch (e) {
        return "/batik_fabric_hero_premium.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Batik%20Fabric";

export default async function BatikFabricPage() {
    const allProducts = await getProducts();
    const heroBannerUrl = await getHeroBanner();
    const fabricProducts = allProducts.filter((p: any) => p.category === "Batik Fabric");

    const perfectFor = [
        {
            t: "DAILY WEAR DEMAND",
            d: "Lightweight cotton batik dress material designed for everyday comfort, making it a strong performer in daily wear fashion.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z" />
                    <path d="M12 2v19" />
                </svg>
            )
        },
        {
            t: "FAST-MOVING RETAIL",
            d: "Trendy batik design patterns and stylish prints that attract attention and convert into quick sales for boutiques and retailers.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
        {
            t: "BULK BUYER READY",
            d: "Reliable supply of batik dress material and batik cloth with consistent quality, ideal for wholesale orders and scalable business growth.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="20" y1="4" x2="8.12" y2="15.88" />
                    <line x1="14.47" y1="14.48" x2="20" y2="20" />
                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
            )
        }
    ];

    const features = [
        { t: "Pure cotton fabric", d: "Breathable and natural material.", i: "🌱" },
        { t: "Batik print design", d: "Traditional wax-resist dyed patterns.", i: "🕯️" },
        { t: "Soft and breathable", d: "Maximum comfort in all seasons.", i: "☁️" },
        { t: "Durable for daily wear", d: "Long-lasting quality and color.", i: "💪" }
    ];

    return (
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-playfair selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <title>Batik Fabric Online | Cotton Batik Cloth India</title>
            <meta name="description" content="Explore batik fabric in cotton with premium print quality. Ideal for dress materials and wholesale buyers across India." />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
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
                        alt="Batik Fabric Collection"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                        className="brightness-[0.8] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/80 shadow-2xl"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full flex justify-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-6 md:gap-10 items-center text-center max-w-5xl">
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">Pure Cotton Batik Fabric</span>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-6">
                            <h1 className="font-playfair text-3xl md:text-4xl font-bold leading-[1.4] md:leading-[1.3] tracking-tight">
                                Premium Batik Fabric Online <br /> <span className='hero-highlight'>Cotton Dress Material</span> Collection
                            </h1>
                            <p className="font-playfair text-xl md:text-2xl font-medium tracking-tight opacity-95 leading-[1.4] md:leading-[1.3] mt-1 md:mt-2 max-w-4xl mx-auto">
                                Explore high-demand batik fabric cotton, stylish batik print fabric, and premium batik dress material designed for modern fashion, boutiques, and wholesale buyers across India.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-8 md:pt-10 items-center justify-start">
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

            {/* ── SECTION: PERFECT FOR + PRODUCT GRID ── */}
            <section id="collection" className="py-32 px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center items-center mx-auto max-w-4xl">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Optimized for Demand</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">Looking for Batik Fabric That Actually Sells?</h2>
                        <p className="text-xl text-[#5A2A1F] font-medium leading-relaxed italic">Our collection of premium batik fabric, breathable batik fabric cotton, and high-demand batik print fabric is curated for real market performance—built for boutiques, resellers, and modern women clothing needs across India.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {perfectFor.map((item, i) => (
                            <div key={i} className="p-12 bg-[#F5F1EC] rounded-[40px] border border-[#5A2A1F]/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block">{item.i}</div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.t}</h3>
                                <p className="text-[#5A2A1F] font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-12 mt-12">
                        <div className="flex flex-col gap-4 text-center items-center mx-auto max-w-4xl">
                            <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">High-Demand Fabric Library</span>
                            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">Explore Signature Batik Dress Designs for Fabric Wholesale</h3>
                            <p className="text-xl text-[#5A2A1F]/70 font-medium italic leading-relaxed">Discover best-selling batik patterns, consistent quality, and ready-to-move collections trusted by boutiques, fabric shops, cloth shops, and resellers across India.</p>
                        </div>
                        <ProductGrid products={fabricProducts.slice(0, 8)} columns={4} />
                    </div>
                </div>
            </section>

            <AdvantageSection
                title={<>Why Choose Our <br /> Batik Fabric</>}
                items={[
                    "Comfortable for the Indian climate",
                    "High-demand boutique patterns",
                    "Consistent bulk quality",
                    "Ready stock availability"
                ]}
                imageSrc="/history.png"
                featureTag="FABRIC STANDARD"
                featureTitle="Pure Cotton 60x60"
                featureDesc="The gold standard for batik fabric, ensuring longevity and maximum comfort in any weather."
            />

            <PremiumFeatureSection
                tag="Why Buyers Choose Our Fabric"
                title={<>Why Our Batik Fabric <br />Stands Out</>}
                features={[
                    {
                        t: "Premium Batik Fabric Cotton",
                        d: "Our batik fabric cotton is crafted for softness, durability, and comfort—ideal for cotton batik dress, latest ladies dress, and everyday fashion wear.",
                        c: "text-blue-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                            </svg>
                        )
                    },
                    {
                        t: "High-Quality Batik Fabric Prints",
                        d: "We deliver refined batik fabric prints with clear patterns, rich colors, and consistent quality, perfect for batik design clothing and boutique collections.",
                        c: "text-emerald-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Breathable Cotton for All-Day Wear",
                        d: "Designed for Indian weather, our fabric supports sleeveless dress, full sleeve dress, and cotton night dress for ladies with long-lasting comfort.",
                        c: "text-orange-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        )
                    },
                    {
                        t: "Versatile for Modern Women Clothing",
                        d: "Our fabric supports a wide range of styles—from short party dresses for women to elegant daily wear, making it a strong choice for evolving women clothing trends.",
                        c: "text-pink-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M6 2L3 22h18L18 2H6zM6 2l3 7h6l3-7" />
                            </svg>
                        )
                    },
                    {
                        t: "Trusted by Plus Size Clothing Stores",
                        d: "Perfect for inclusive fashion, our fabric works well for plus size clothing, plus size womens clothing, and retailers targeting diverse body types.",
                        c: "text-purple-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                            </svg>
                        )
                    },
                    {
                        t: "Reliable for Stitching & Finishing",
                        d: "Clean cuts, smooth texture, and consistent weave quality make it ideal for batik print suit, batik dress, and stitched garments for retail and wholesale.",
                        c: "text-red-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="m8.12 8.12 3.19 3.19" />
                            </svg>
                        )
                    }
                ]}
                quote="Our batik fabric blends breathable cotton comfort with versatile design possibilities for modern fashion."
            />

            {/* ── HOW TO ORDER SECTION ── */}
            <section className="py-16 md:py-24 px-6 bg-[#E8D9C0]/50 relative overflow-hidden text-[#5A2A1F]">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-12 md:gap-16 relative z-10">
                    <div className="text-center flex flex-col gap-4">
                        <span className="text-sm font-black text-[#8B3A2B] uppercase tracking-[0.5em] mb-2 block">Simple Process</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold leading-tight">How to Order Batik Fabric Online</h2>
                        <p className="text-lg md:text-xl text-[#5A2A1F]/70 font-medium italic max-w-4xl mx-auto leading-relaxed">
                            Five simple steps. Zero confusion. Fast delivery of premium batik fabric, Batik Cloth, trending batik color collections, and quality cotton cloth across India.
                        </p>
                    </div>

                    <div className="relative flex flex-col lg:flex-row justify-between gap-10 lg:gap-6">
                        <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[3px] bg-[#5A2A1F]/5 z-0"></div>

                        {[
                            {
                                s: "01", t: "Browse Designs",
                                d: "Explore latest batik fabric prints with fresh collections of Batik Cloth design, and ready-to-sell styles in premium women clothing demand.",
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
                            <div key={i} className="flex flex-col items-center text-center gap-3 md:gap-4 lg:w-1/5 relative z-10">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-[16px] md:rounded-[24px] shadow-lg flex items-center justify-center text-[#5A2A1F] hover:scale-110 transition-all duration-500 cursor-default border border-white relative group">
                                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-[#8B3A2B] text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-md">{step.s}</span>
                                    {step.i}
                                </div>
                                <div className="flex flex-col gap-1.5 px-2">
                                    <h4 className="text-base md:text-lg font-black tracking-tight text-[#5A2A1F] leading-tight">{step.t}</h4>
                                    <p className="text-[11px] md:text-xs text-[#5A2A1F]/70 font-medium leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8 md:mt-12">
                        <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#5A2A1F] text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl md:rounded-3xl font-bold text-lg md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest group">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.485l-.719 2.624 2.688-.705c.95.514 2.035.804 3.19.803 3.181 0 5.767-2.584 5.768-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.2l-1.006 1.005c-.122.122-.318.159-.477.087-.514-.232-1.02-.555-1.504-1.039-.485-.484-.807-.989-1.039-1.504-.072-.159-.035-.355.087-.477l1.005-1.006c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0l-.798.797c-.506.507-.639 1.243-.374 1.874.457 1.087 1.214 2.064 2.223 3.073 1.009 1.009 1.986 1.766 3.073 2.223.631.265 1.367.132 1.874-.374l.797-.798c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0z" />
                            </svg>
                            <span>Start Your Order on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>


            <section className="py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
                    <div className="text-center flex flex-col gap-6 max-w-4xl mx-auto">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Next Step</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">Continue Your Batik Fabric Buying Journey</h2>
                        <p className="text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed">Choose what fits your goal—explore designs, source fabric, or scale with wholesale supply.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <a href="/batik-cloth" className="group relative rounded-[40px] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/cta_suits.png" alt="Explore Batik Cloth" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-playfair text-2xl font-bold text-white">Explore Batik Cloth</h3>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col gap-6 flex-grow">
                                <p className="text-[#5A2A1F]/70 font-medium leading-relaxed">Discover premium Batik Cloth, stylish prints, breathable cotton materials, and versatile designs for modern women clothing and boutique collections.</p>
                                <div className="flex items-center gap-3 text-[#8B3A2B] font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Collection
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/wholesale" className="group relative rounded-[40px] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/batik_fabric_hero_premium.png" alt="Wholesale Inquiries" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#8B3A2B]/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Inquiry</span>
                                    <h3 className="font-playfair text-2xl font-bold text-white">Batik Dress Wholesale Inquiries</h3>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col gap-6 flex-grow">
                                <p className="text-[#5A2A1F]/70 font-medium leading-relaxed">Get bulk pricing for batik dress material, ready-to-sell collections, reseller orders, and consistent wholesale supply across India.</p>
                                <div className="flex items-center gap-3 text-[#8B3A2B] font-bold text-sm uppercase tracking-widest mt-auto">
                                    Contact Wholesale
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/new-arrival" className="group relative rounded-[40px] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/history.png" alt="New Arrivals" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-playfair text-2xl font-bold text-white">Explore New Arrival Batik Clothing</h3>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col gap-6 flex-grow">
                                <p className="text-[#5A2A1F]/70 font-medium leading-relaxed">Stay ahead of demand with fresh collections of batik clothing, trending styles, and newly added designs in cotton dress, pure cotton women dress, and fast-moving fashion inventory.</p>
                                <div className="flex items-center gap-3 text-[#8B3A2B] font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Trends
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BATIK JOURNAL (BLOG) ── */}
            <section className="py-32 px-6 bg-[#F5F1EC] border-t border-[#5A2A1F]/10">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="text-center flex flex-col gap-6 max-w-4xl mx-auto">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Editorial Corner</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">The Batik Fabric Journal</h2>
                        <p className="text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed">Insights on batik fabric, latest batik fabric prints, styling ideas, and trends shaping modern women clothing and dress material demand.</p>
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
                                    <h4 className="font-playfair text-xl font-bold text-[#5A2A1F] leading-tight mt-2 group-hover:text-[#8B3A2B] transition-colors">{post.title}</h4>
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


            <FAQ items={[
                {
                    q: "How to choose the best batik fabric prints for stylish women's clothing?",
                    a: "Choose batik fabric prints with clear patterns, balanced colors, and soft batik fabric cotton quality. High-quality batik prints and breathable fabric ensure stylish and comfortable women clothing for daily and occasion wear."
                },
                {
                    q: "Which cotton batik dress is best for summer and daily wear use?",
                    a: "A cotton batik dress made from lightweight batik fabric cotton in 60x60 quality is ideal for summer. It offers breathable comfort, keeps you cool all day, and works perfectly for daily wear, office outfits, and casual styling."
                },
                {
                    q: "Why is batik print fabric popular for suits and dress material in India?",
                    a: "You can buy batik cloth online in India from trusted manufacturers like AQSHA Batik Cloth, Ujjain, offering quality fabric, multiple designs, and wholesale options. Choose suppliers known for consistent quality and reliable delivery."
                },
                {
                    q: "Where can you buy batik cloth online in India at affordable prices?",
                    a: "You can buy batik cloth online India from trusted manufacturers and suppliers offering quality fabric, multiple designs, and wholesale options. Look for consistent quality and reliable delivery when purchasing."
                },
                {
                    q: "Why is batik fabric cotton a good choice for daily wear dresses in India?",
                    a: "Batik fabric cotton is ideal for daily wear because it is breathable, soft, and comfortable for long hours. It supports both full sleeve dress and sleeveless dress styles, making it perfect for everyday ladies clothing."
                }
            ]} />
        </div>
    );
}
