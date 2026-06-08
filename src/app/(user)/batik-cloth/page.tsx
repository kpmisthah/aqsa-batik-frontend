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

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Batik%20Cloth";

export default async function BatikClothPage() {
    const allProducts = await getProducts();
    const clothProducts = allProducts.filter((p: any) => p.category === "Batik Fabric" || p.category === "Batik Cloth"); // Cloth and Fabric share products

    return (
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-playfair selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <title>Batik Cloth Online | Premium Cotton Batik Material</title>
            <meta name="description" content="Shop premium batik cloth in pure cotton. Handcrafted Batik Cloth wax-dye prints, soft texture, and durable quality for boutiques and resellers." />

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
                        src="/batik_fabric_hero_premium.png"
                        alt="Premium Batik Cloth Collection"
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
                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">Traditional Wax-Dye Technique</span>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-6">
                            <h1 className="font-playfair text-3xl md:text-4xl font-bold leading-[1.4] md:leading-[1.3] tracking-tight">
                                <span className='hero-highlight'>Batik Cloth</span> in Cotton – Premium <span className='hero-highlight'>Printed Batik Fabric</span>
                            </h1>
                            <p className="font-playfair text-xl md:text-2xl font-medium tracking-tight opacity-95 leading-relaxed mt-1 md:mt-2 max-w-4xl mx-auto">
                                Shop high-quality Batik Cloth, stylish batik dress material, and breathable cotton cloth for modern women clothing, boutique stock, and wholesale buyers across India.
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

            {/* ── SECTION: APPLICATIONS ── */}
            <section className="py-32 px-6 bg-[#F5F1EC] relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center items-center mx-auto max-w-4xl">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Applications</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">Perfect Batik Cloth for Every Creation</h2>
                        <p className="text-xl text-[#5A2A1F]/70 font-medium leading-relaxed italic">Our premium batik fabric blends traditional artistry with modern fashion—ideal for batik dress material, boutique wear, and custom women clothing collections.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                t: "DRESS MATERIALS",
                                d: "Perfect for elegant batik dress material, stitched suits, daily wear outfits, and breathable cotton cloth fashion.",
                                i: (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z" />
                                        <path d="M12 2v19" />
                                    </svg>
                                )
                            },
                            {
                                t: "BOUTIQUE COLLECTIONS",
                                d: "Stylish printed batik fabric and unique patterns designed for boutiques, resellers, and premium ladies wear collections.",
                                i: (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                )
                            },
                            {
                                t: "CUSTOM DESIGNS",
                                d: "Versatile Batik Cloth for tailored outfits, festive styles, plus size clothing, and custom stitching projects.",
                                i: (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="m8.12 8.12 3.19 3.19" />
                                    </svg>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-12 bg-white rounded-[40px] border border-[#5A2A1F]/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center gap-8">
                                <div className="w-20 h-20 rounded-3xl bg-[#F5F1EC] text-[#5A2A1F] flex items-center justify-center group-hover:bg-[#5A2A1F] group-hover:text-white transition-colors duration-500">
                                    {item.i}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl font-black tracking-tight text-[#5A2A1F] uppercase">{item.t}</h3>
                                    <p className="text-[#5A2A1F]/60 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRODUCT GRID ── */}
            <section id="collection" className="py-32 px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center items-center mx-auto max-w-4xl">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Fabric Library</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">Explore Signature Batik Cloth Designs</h2>
                        <p className="text-xl text-[#5A2A1F]/70 font-medium leading-relaxed italic">Our premium cloth collections offer the perfect canvas for your fashion creations.</p>
                    </div>

                    <ProductGrid products={clothProducts.slice(0, 8)} columns={4} />
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
                featureDesc="The gold standard for batik suits, ensuring longevity and maximum comfort in any weather."
            />

            <PremiumFeatureSection
                tag="The Batik Cloth Advantage"
                title={<>Why Our Batik Cloth <br />Stands Out</>}
                features={[
                    {
                        t: "Pure Cotton Excellence",
                        d: "We use only the finest long-staple cotton for our cloth, ensuring a soft touch and exceptional durability for daily wear.",
                        c: "text-blue-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                            </svg>
                        )
                    },
                    {
                        t: "Durable Wax-Dye Prints",
                        d: "Our traditional wax-resist dyeing process ensures that colors stay vibrant even after multiple washes.",
                        c: "text-emerald-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        )
                    },
                    {
                        t: "Lightweight Daily Wear",
                        d: "Designed for maximum comfort in warm climates, our cloth is lightweight and highly breathable.",
                        c: "text-orange-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
                            </svg>
                        )
                    },
                    {
                        t: "Versatile Applications",
                        d: "From ethnic wear to modern fusion fashion, our batik cloth is versatile enough for any design project.",
                        c: "text-yellow-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Handcrafted <span className='hero-highlight'>Batik Cloth</span> Authenticity",
                        d: "Each yard of cloth is handcrafted by skilled artisans in Ujjain, preserving the authentic batik heritage.",
                        c: "text-red-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Sustainable Craft",
                        d: "We follow eco-friendly processes and support artisan communities through fair trade practices.",
                        c: "text-purple-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/batik_fabric_hero.png"
                quote="Our premium batik cloth offers the perfect canvas for your fashion creations, blending traditional art with superior comfort."
            />
            {/* ── HOW TO START SECTION ── */}
            <section className="py-16 md:py-24 px-6 bg-[#F5F1EC] text-[#5A2A1F] relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-12 md:gap-16 relative z-10">
                    <div className="text-center flex flex-col gap-4">
                        <span className="text-sm font-black text-[#8B3A2B] uppercase tracking-[0.5em] mb-2 block text-center">Simple Process</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold leading-tight">How to Order Batik Cloth Online</h2>
                        <p className="text-lg md:text-xl text-[#5A2A1F]/70 font-medium italic max-w-4xl mx-auto leading-relaxed">
                            Five simple steps. Zero confusion. Fast delivery of premium batik fabric, Batik Cloth, trending batik color collections, and quality cotton cloth across India.
                        </p>
                    </div>

                    <div className="relative flex flex-col lg:flex-row justify-between gap-10 lg:gap-6">
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
                            <div key={i} className="flex flex-col items-center text-center gap-3 md:gap-4 lg:w-1/5 relative z-10">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-[16px] md:rounded-[24px] shadow-lg flex items-center justify-center text-[#5A2A1F] hover:scale-110 transition-all duration-500 cursor-default border border-[#5A2A1F]/5 relative group">
                                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-[#8B3A2B] text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-md">{step.s}</span>
                                    {step.i}
                                </div>
                                <div className="flex flex-col gap-1.5 px-2">
                                    <h4 className="text-base md:text-lg font-black tracking-tight text-[#5A2A1F] leading-tight">{step.t}</h4>
                                    <p className="text-[11px] md:text-xs text-[#5A2A1F]/60 font-medium leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8 md:mt-12">
                        <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#5A2A1F] text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl md:rounded-3xl font-bold text-lg md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest group">
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
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Next Steps</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">Continue Your Batik Shopping Journey</h2>
                        <p className="text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed">
                            Explore our premium fabric collections, enquire about wholesale opportunities, or stay ahead with our newest arrivals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                t: "Explore Batik Fabric",
                                d: "Discover premium batik fabric, printed collections, cotton materials, and stylish designs for women clothing and boutiques.",
                                l: "/batik-fabric",
                                img: "/cta_suits.png",
                                tag: "Category"
                            },
                            {
                                t: "Batik Cotton Cloth Wholesale Inquiries",
                                d: "Get bulk pricing for batik dress material, premium cotton cloth, reseller orders, boutique stock, and wholesale supply across India.",
                                l: "/wholesale",
                                img: "/history.png",
                                tag: "Inquiry"
                            },
                            {
                                t: "Explore New Arrival Batik Clothing",
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
                                    <h4 className="text-white text-3xl font-playfair font-bold leading-tight">{item.t}</h4>
                                    <p className="text-white/70 font-medium text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.d}</p>
                                    <div className="flex items-center gap-3 text-[#FFD700] font-black uppercase text-[10px] tracking-widest mt-2 group-hover:gap-5 transition-all">
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
            <section className="py-32 px-6 bg-[#F5F1EC]">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="text-center flex flex-col gap-6 max-w-4xl mx-auto">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Editorial Corner</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">The Batik Cloth Journal</h2>
                        <p className="text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed">Insights on batik fabric, design trends, craftsmanship, wholesale ideas, and modern women clothing inspiration.</p>
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


            <FAQ items={[
                {
                    q: "What can I make from batik dress material?",
                    a: "Batik dress material is ideal for stitched suits, kurtis, coordinated sets, casual wear, and festive outfits. Many buyers choose batik print dress material for elegant everyday fashion with traditional style."
                },
                {
                    q: "Is batik cotton dress material good for daily wear?",
                    a: "Yes. Batik cotton dress material is popular for daily wear because it is breathable, lightweight, and comfortable. It is perfect for warm weather, office outfits, and practical women clothing needs."
                },
                {
                    q: "Do you sell batik printed fabric for boutiques and resellers?",
                    a: "Yes. We offer premium batik printed fabric and printed batik fabric collections suitable for boutiques, resellers, and retailers looking for stylish fast-moving stock and reliable quality."
                },
                {
                    q: "Do you have batik dresses and shirts for women?",
                    a: "Yes. Our collection includes cotton batik dresses, elegant batik dress styles, modern batik shirt ladies designs, and fashionable batik shirt womens collections for daily and occasion wear."
                },
                {
                    q: "Do you offer plus size clothing in batik fabric?",
                    a: "Yes. Our Batik Cloth is suitable for tailored plus size clothing, plus size womens clothing, and custom stitching for all body types. Many boutiques and plus size clothing stores choose batik fabric for stylish inclusive fashion."
                }
            ]} />
        </div>
    );
}
