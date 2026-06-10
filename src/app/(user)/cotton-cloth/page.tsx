import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
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

async function getHeroBanner() {
    try {
        const res = await fetch(`${API_BASE}/banners/batik-cloth`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/batik_fabric_hero_premium.png";
    } catch (e) {
        return "/batik_fabric_hero_premium.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Batik%20Cloth";

export default async function CottonClothPage() {
    const allProducts = await getProducts();
    const clothProducts = allProducts.filter((p: any) => p.category === "Batik Fabric" || p.category === "Batik Cloth" || p.category === "Batik Cotton"); // Cloth and Fabric share products
    const heroBannerUrl = await getHeroBanner();

    return (
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-playfair selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <title>Batik Printed Cotton Cloth & Cotton Fabric Online</title>
            <meta name="description" content="Shop premium batik printed cotton cloth, printed cotton fabric, and women dress material online. Breathable cotton fabric for daily wear and women fashion." />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'Playfair Display', serif; }
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%235A2A1F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />

            {/* ── HERO BANNER ── */}
            <section className="relative min-h-[60svh] md:min-h-screen w-full flex items-end md:items-center pb-8 md:pb-0 overflow-hidden bg-[#5A2A1F]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBannerUrl}
                        alt="Premium Batik Cloth Collection"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-[center_top] md:object-center brightness-[0.8] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/20 via-black/20 to-black/90 md:from-black/20 md:via-transparent md:to-black/80 shadow-2xl"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 w-full flex justify-start text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-4 md:gap-10 items-start text-left max-w-5xl">
                        <div className="flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-2 rounded-full border border-white/20 w-fit">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                            <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Traditional Batik Craft. Modern Cotton Comfort.</span>
                        </div>

                        <div className="flex flex-col gap-2 md:gap-6">
                            <h1 className="font-playfair text-2xl md:text-4xl font-bold leading-[1.2] md:leading-[1.3] tracking-tight">
                                <span className='hero-highlight'>Batik Printed Cotton Cloth</span> & Premium <br className="hidden md:block" /> <span className='hero-highlight'>Cotton Fabric Online</span>
                            </h1>
                            <p className="font-playfair text-xs md:text-2xl font-medium tracking-tight opacity-95 leading-[1.3] md:leading-relaxed mt-1 md:mt-2 max-w-[280px] md:max-w-4xl">
                                Explore breathable batik printed cotton cloth, stylish printed cotton fabric, and premium women dress material collections designed for cotton dresses, boutiques, resellers, and everyday women fashion across India.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-2 md:pt-10 items-start justify-start w-full">
                            <a href="#collection" className="inline-block bg-[#FFD700] text-[#5A2A1F] px-4 py-3 md:px-8 md:py-4.5 rounded-[10px] md:rounded-[18px] font-black text-sm md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider border-b-2 md:border-b-4 border-black/10 w-full sm:w-auto text-center">
                                Shop Now
                            </a>
                            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-4 py-3 md:px-8 md:py-4.5 rounded-[10px] md:rounded-[18px] font-black text-sm md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:bg-white hover:text-[#5A2A1F] active:scale-95 transition-all duration-300 uppercase tracking-wider w-full sm:w-auto text-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                Get Wholesale Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <GoogleReviewBar />

            {/* ── SECTION: APPLICATIONS ── */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-[#F5F1EC] relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
                    <div className="flex flex-col gap-4 md:gap-6 text-left md:text-center items-start md:items-center mx-auto max-w-4xl">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em] self-center md:self-auto mb-2 md:mb-0">Applications</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F]">Perfect Batik Printed Cotton Cloth For Every Fashion Creation</h2>
                        <p className="text-base md:text-lg text-[#5A2A1F]/70 font-medium leading-relaxed italic">Our premium batik printed cotton cloth combines breathable cotton fabric with modern women fashion styling—perfect for batik print dress material, cotton dresses, women dress material, and boutique clothing collections.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {[
                            {
                                t: "DRESS MATERIALS",
                                d: "Perfect for elegant printed cotton dress material, stitched suits, cotton dresses, and breathable cotton clothing for women designed for daily wear comfort.",
                                i: (
                                    <svg className="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z" />
                                        <path d="M12 2v19" />
                                    </svg>
                                )
                            },
                            {
                                t: "BOUTIQUE COLLECTIONS",
                                d: "Premium printed cotton fabric and batik cotton fabric collections crafted for boutiques, resellers, and stylish women clothing businesses.",
                                i: (
                                    <svg className="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                )
                            },
                            {
                                t: "CUSTOM DESIGNS",
                                d: "Versatile cotton cloth suitable for custom stitching, ethnic wear, plus size outfits, cotton summer dresses, and women fashion collections.",
                                i: (
                                    <svg className="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="m8.12 8.12 3.19 3.19" />
                                    </svg>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-4 md:p-8 bg-white rounded-[20px] md:rounded-[32px] border border-[#5A2A1F]/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left md:text-center flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[20px] bg-[#F5F1EC] text-[#5A2A1F] flex items-center justify-center group-hover:bg-[#5A2A1F] group-hover:text-white transition-colors duration-500 shrink-0">
                                    {item.i}
                                </div>
                                <div className="flex flex-col gap-1 md:gap-4">
                                    <h3 className="text-base md:text-xl font-black tracking-tight text-[#5A2A1F] uppercase">{item.t}</h3>
                                    <p className="text-[13px] md:text-base text-[#5A2A1F]/60 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRODUCT GRID ── */}
            <section id="collection" className="py-16 md:py-32 px-4 md:px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-10 md:gap-20">
                    <div className="flex flex-col gap-4 md:gap-6 text-left md:text-center items-start md:items-center mx-auto max-w-4xl">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em] self-center md:self-auto mb-2 md:mb-0">Fabric Library</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F]">Explore Signature Batik Cotton Fabric Designs</h2>
                        <p className="text-base md:text-xl text-[#5A2A1F]/70 font-medium leading-relaxed italic">Discover premium printed cotton cloth, breathable dress fabric, and stylish batik print dress material collections designed for modern women clothing and everyday fashion demand.</p>
                    </div>

                    <ProductGrid products={clothProducts.slice(0, 8)} columns={4} />
                </div>
            </section>

            <AdvantageSection
                title={<>Why Women Prefer Our <br /> Batik Cotton Fabric</>}
                items={[
                    "Comfortable For Indian Weather",
                    "High Resale Value",
                    "Consistent Bulk Quality",
                    "Ready Stock Availability"
                ]}
                imageSrc="/cotton-fabric-quality-banner.webp"
                mobileImageSrc="/cotton-summer-dresses-image.webp"
                featureTag="FABRIC STANDARD"
                featureTitle="Pure Cotton 60x60"
                featureDesc="The gold standard for batik suits, ensuring longevity and maximum comfort in any weather."
            />

            <PremiumFeatureSection
                tag="The AQSHA Fabric Advantage"
                title={<>Why Our Batik Printed Cotton Cloth <br />Stands Out</>}
                features={[
                    {
                        t: "Pure Cotton Excellence",
                        d: "We use premium-quality 60 x 60 cotton fabric designed for breathable comfort, durability, and wearable daily fashion.",
                        c: "text-blue-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                            </svg>
                        )
                    },
                    {
                        t: "Durable Batik Print Designs",
                        d: "Our printed cotton fabric combines traditional batik artistry with modern women clothing trends.",
                        c: "text-emerald-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        )
                    },
                    {
                        t: "Lightweight Daily Wear",
                        d: "Soft thin cotton cloth suitable for cotton dresses, women dress material, and breathable everyday styling.",
                        c: "text-orange-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
                            </svg>
                        )
                    },
                    {
                        t: "Versatile Fashion Applications",
                        d: "Perfect for kurtis, cotton dresses, coordinated outfits, plus size clothing, and boutique collections.",
                        c: "text-yellow-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Traditional Batik Craftsmanship",
                        d: "Inspired by Bherugarh’s batik heritage and refined through years of women fashion manufacturing experience.",
                        c: "text-red-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Wearable Everyday Comfort",
                        d: "Breathable cotton cloth designed for long wear comfort and easy movement throughout the day.",
                        c: "text-purple-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/batik-fabric-manufacturing.webp"
                mobileImageSrc="/cotton-dress-material-image.webp"
                quote="Our premium batik cloth offers the perfect canvas for your fashion creations, blending traditional art with superior comfort."
            />
            {/* ── HOW TO START SECTION ── */}
            <section className="py-16 md:py-24 px-6 bg-[#F5F1EC] text-[#5A2A1F] relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-12 md:gap-16 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-4 max-w-4xl mx-auto w-full">
                        <div className="text-center flex flex-col gap-1 md:gap-2 items-center">
                            <span className="text-[10px] md:text-sm font-black text-[#8B3A2B] uppercase tracking-[0.5em] mb-1 block">Simple Process</span>
                            <h2 className="font-playfair text-2xl md:text-4xl font-bold leading-tight">How to Order Batik Cloth Online</h2>
                        </div>
                        <p className="text-[13px] md:text-xl text-[#5A2A1F]/70 font-medium italic mx-0 lg:mx-auto leading-relaxed text-left md:text-center mt-2">
                            Five simple steps. Zero confusion. Fast delivery of premium batik fabric, Batik Cloth, trending batik color collections, and quality cotton cloth across India.
                        </p>
                    </div>

                    <div className="relative grid grid-cols-2 lg:flex lg:flex-row justify-between gap-6 md:gap-10 lg:gap-6 mt-2 md:mt-0">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[1px] bg-[#5A2A1F]/10 z-0"></div>

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
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-[12px] md:rounded-[24px] shadow-lg flex items-center justify-center text-[#5A2A1F] hover:scale-110 transition-all duration-500 cursor-default border border-[#5A2A1F]/5 relative group">
                                    <span className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 w-5 h-5 md:w-6 md:h-6 bg-[#8B3A2B] text-white text-[8px] md:text-[9px] font-black rounded-full flex items-center justify-center shadow-md">{step.s}</span>
                                    {step.i}
                                </div>
                                <div className="flex flex-col gap-1 md:gap-1.5 px-1 md:px-2">
                                    <h4 className="text-[11px] md:text-lg font-black tracking-tight text-[#5A2A1F] leading-tight">{step.t}</h4>
                                    <p className="text-[9px] md:text-xs text-[#5A2A1F]/60 font-medium leading-relaxed">{step.d}</p>
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

            {/* ── SECTION: NEXT STEPS ── */}
            <section className="py-16 md:py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-left md:text-center max-w-3xl mx-auto w-full">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Next Step</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F] leading-tight">Continue Your Batik Fabric Shopping Journey</h2>
                        <p className="text-[13px] md:text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed mt-2">
                            Explore premium cotton fabric collections, wholesale women dress material, and breathable printed cotton cloth designed for modern women clothing businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                        {[
                            {
                                t: "Explore Batik Fabric",
                                d: "Discover premium batik fabric, printed collections, cotton materials, and stylish designs for women clothing and boutiques.",
                                l: "/batik-fabric",
                                img: "/cat_batik_fabric.webp",
                                tag: "Category"
                            },
                            {
                                t: "Explore Wholesale Women Dresses",
                                d: "Discover wholesale cotton cloth collections with bulk-ready stock and repeat-demand women fashion styles.",
                                l: "/wholesale",
                                img: "/cat_wholesale.webp",
                                tag: "Inquiry"
                            },
                            {
                                t: "Explore New Arrival Batik Clothing",
                                d: "Stay updated with fresh batik print dress material, stylish women clothing, and trending cotton fashion collections.",
                                l: "/new-batik-prints",
                                img: "/cat_new_arrival.webp",
                                tag: "Category"
                            }
                        ].map((item, i) => (
                            <a key={i} href={item.l} className={`group relative h-[220px] md:h-[500px] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl ${i === 2 ? "col-span-2 md:col-span-1 h-[180px] md:h-[500px]" : ""}`}>
                                <Image
                                    src={item.img}
                                    alt={item.t}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                    className="group-hover:scale-110 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.5]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 md:opacity-80"></div>
                                <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 flex flex-col gap-2 md:gap-4">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#FFD700] bg-white/10 backdrop-blur-md px-2 py-1 md:px-4 md:py-1.5 rounded-full w-fit border border-white/20">{item.tag}</span>
                                    <h4 className="text-white text-base md:text-3xl font-playfair font-bold leading-tight">{item.t}</h4>
                                    <p className="text-white/70 font-medium text-[9px] md:text-sm leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">{item.d}</p>
                                    <div className="hidden md:flex items-center gap-3 text-[#FFD700] font-black uppercase text-[10px] tracking-widest mt-2 group-hover:gap-5 transition-all">
                                        Explore More
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── SECTION: EDITORIAL CORNER ── */}
            <section className="py-16 md:py-32 px-6 bg-[#F5F1EC]">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-left md:text-center max-w-4xl mx-auto w-full">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Fashion & Fabric Journal</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F] leading-tight">The Printed Cotton Fabric Style Guide</h2>
                        <p className="text-[13px] md:text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed mt-2">Explore insights on printed cotton fabric, breathable dress fabric, cotton dresses, and modern women clothing trends shaping today’s fashion market.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
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
                            <div key={i} className={`bg-white rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl border border-[#5A2A1F]/5 group cursor-pointer hover:shadow-2xl transition-all duration-500 flex flex-col ${i === 2 ? "col-span-2 md:col-span-1 flex-row md:flex-col" : ""}`}>
                                <div className={`relative overflow-hidden ${i === 2 ? "w-1/3 md:w-full h-auto md:h-64" : "h-32 md:h-64"}`}>
                                    <Image src={post.img} alt={post.t} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-2 left-2 md:top-6 md:left-6">
                                        <span className="bg-white/90 backdrop-blur-md px-2 py-1 md:px-4 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#5A2A1F]">{post.c}</span>
                                    </div>
                                </div>
                                <div className={`p-4 md:p-10 flex flex-col gap-2 md:gap-4 flex-1 justify-center`}>
                                    <h4 className="text-[13px] md:text-2xl font-playfair font-bold text-[#5A2A1F] leading-tight">{post.t}</h4>
                                    <div className="flex justify-between items-center mt-auto md:mt-4">
                                        <span className="text-[9px] md:text-xs font-medium text-[#5A2A1F]/40 uppercase tracking-widest">{post.date}</span>
                                        <div className="hidden md:flex items-center gap-2 text-[#8B3A2B] font-bold text-[10px] uppercase tracking-widest">
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


            <FAQ items={[
                {
                    q: "What is batik printed cotton cloth used for?",
                    a: "Batik printed cotton cloth is commonly used for kurtis, cotton dresses, ethnic wear, daily wear outfits, and stylish women dress material because of its breathable texture and fashionable print designs."
                },
                {
                    q: "Is printed cotton fabric good for summer wear?",
                    a: "Yes. Printed cotton fabric is lightweight, breathable, and comfortable for summer wear. It helps keep the body cool and is ideal for cotton summer dresses and daily wear women clothing."
                },
                {
                    q: "Where can I buy cotton fabric online?",
                    a: "You can buy cotton fabric online from AQSHA BATIK SUITS offering premium printed cotton fabric, batik cotton fabric, and women dress material collections for boutiques and resellers."
                },
                {
                    q: "Why is batik cotton fabric popular for women's clothing?",
                    a: "Batik cotton fabric is popular because it combines traditional batik prints with soft cotton cloth, creating breathable and stylish women's clothing suitable for everyday fashion."
                },
                {
                    q: "What is the difference between printed cotton fabric and regular cotton fabric?",
                    a: "Printed cotton fabric includes stylish patterns and fashion-focused batik print designs on cotton material, while regular cotton fabric is usually plain without decorative prints."
                }
            ]} />
        </div>
    );
}
