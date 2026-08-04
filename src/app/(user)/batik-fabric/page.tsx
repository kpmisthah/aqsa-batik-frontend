import Image from "next/image";
import Link from "next/link";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";

import ProductGrid from "@/modules/user/components/ProductGrid";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import AdvantageSection from "@/modules/user/components/AdvantageSection";
import HowToOrderSection from "@/modules/user/components/HowToOrderSection";
import ProductFilterLayout from "@/modules/user/components/ProductFilterLayout";
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import ScrollIndicator from "@/modules/user/components/ScrollIndicator";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts({ page = "1", search = "", sort = "", minPrice = "", maxPrice = "" }: any) {
    try {
        const queryParams = new URLSearchParams({
            limit: "12",
            page: page,
            category: "Batik Fabric,Batik Cloth,Batik Cotton",
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
        const res = await fetch(`${API_BASE}/banners/batik-fabric`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/batik_fabric_hero_premium.png";
    } catch (e) {
        return "/batik_fabric_hero_premium.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Batik%20Fabric";

export default async function BatikFabricPage({ searchParams }: { searchParams: Promise<any> }) {
    const resolvedParams = await searchParams;
    const { products, totalPages, currentPage } = await getProducts(resolvedParams || {});
    const heroBannerUrl = await getHeroBanner();

    const perfectFor = [
        {
            t: "Daily Wear Demand",
            d: "Lightweight cotton batik dress material designed for everyday comfort, making it a strong performer in daily wear fashion.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z" />
                    <path d="M12 2v19" />
                </svg>
            )
        },
        {
            t: "Fast-Moving Retail",
            d: "Trendy batik design patterns and stylish prints that attract attention and convert into quick sales for boutiques and retailers.",
            i: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
        {
            t: "Bulk Buyer Ready",
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
        <div className="min-h-screen bg-cream text-primary font-heading selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title><span className='text-accent'>Batik Fabric Online</span> | Cotton Batik Cloth India</title>
            <meta name="description" content="Explore batik fabric in cotton with premium print quality. Ideal for dress materials and wholesale buyers across India." />

            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />
            <ScrollObserver />            {/* ── HERO BANNER ── */}
            <section className="relative min-h-[60svh] md:min-h-screen w-full flex items-end md:items-center pb-8 md:pb-0 overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <Image
                        key={heroBannerUrl}
                        src={heroBannerUrl}
                        alt="Batik Fabric Collection"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-[center_top] md:object-center brightness-[0.8] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/20 via-black/20 to-black/90 md:from-black/80 md:via-black/20 md:to-transparent shadow-2xl"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 pt-20 md:pt-0 w-full flex justify-center md:justify-start text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-6 md:gap-10 items-center md:items-start text-center md:text-left max-w-5xl w-full">
                        <div className="flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-2 rounded-full border border-white/20 w-fit">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-tan animate-pulse"></span>
                            <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Pure Cotton Batik Fabric</span>
                        </div>

                        <div className="flex flex-col gap-2 md:gap-6">
                            <h1 className="text-h1">
                                Premium <span className='text-accent'>Batik Fabric Online</span> <br />
                                <span className="whitespace-nowrap">Cotton Dress <span className='text-accent'>Material Collection</span></span>
                            </h1>
                            <p className="text-body1 opacity-90 mt-2 md:mt-2 max-w-sm md:max-w-5xl text-white/90 text-center md:text-left mx-auto md:mx-0 ">
                                Explore high-demand batik fabric cotton, stylish batik print fabric, and premium batik dress material designed for modern fashion, boutiques, and wholesale buyers across India.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-2 md:pt-10 items-center md:items-start justify-center md:justify-start w-full">
                            <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-accent text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl hover:brightness-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto">
                                Get Wholesale Pricing
                            </a>
                            <a href="#collection" className="inline-block border border-white/40 text-white hover:bg-white hover:text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto">
                                View Collections
                            </a>
                        </div>
                    </div>
                </div>
                <ScrollIndicator />
            </section>
            <GoogleReviewBar />

            {/* ── SECTION: PERFECT FOR + PRODUCT GRID ── */}
            <section id="collection" className="scroll-animate py-16 md:py-32 px-6 bg-[#F9F7F1] relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-16 md:gap-20">
                    <div className="flex flex-col gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline text-secondary">Optimized for Demand</span>
                        <h2 className="text-h2 text-primary">Looking for Batik Fabric <br /> That Actually Sells?</h2>
                        <div className="w-12 h-[2px] bg-secondary/30 mt-4"></div>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mt-4 max-w-3xl">
                            Our collection of premium batik fabric, breathable batik fabric cotton, and high-demand batik print fabric is curated for real market performance—built for boutiques, resellers, and modern women clothing needs across India.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto w-full">
                        {perfectFor.map((item, i) => (
                            <div key={i} className="bg-primary rounded-[24px] md:rounded-[36px] p-8 md:p-10 lg:p-12 shadow-[0_10px_40px_rgba(90,42,31,0.2)] border border-[#E8D9C0]/10 flex flex-col items-center text-center gap-8 group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden h-full">
                                {/* Subtle inner glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8D9C0]/5 rounded-full blur-[80px] pointer-events-none"></div>

                                <div className="text-[#E8D9C0] group-hover:scale-110 transition-transform duration-500 [&>svg]:!w-10 [&>svg]:!h-10 md:[&>svg]:!w-12 md:[&>svg]:!h-12 relative z-10">
                                    {item.i}
                                </div>
                                <div className="flex flex-col flex-1 relative z-10 w-full justify-between">
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-h4 text-cream font-medium tracking-wide">{item.t}</h3>
                                        <p className="text-body2 text-cream/95 leading-relaxed font-medium tracking-wide">{item.d}</p>
                                    </div>
                                    <div className="mt-8 flex items-center justify-center gap-2 text-[#E8D9C0] text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                                        <span>Learn More</span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 md:gap-12 mt-6 md:mt-12">
                        <div className="flex flex-col gap-3 md:gap-4 text-center items-center mx-auto max-w-4xl">
                            <span className="text-overline text-secondary">Best Selling Batik Fabric</span>
                            <h2 className="text-h3 text-primary">Explore High Demand <br className="md:hidden" /> Batik Fabric Collections</h2>
                            <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mt-2 w-full text-center">Discover best-selling batik patterns, consistent quality, and ready-to-move collections trusted by boutiques, fabric shops, cloth shops, and resellers across India.</p>
                        </div>
                        <ProductFilterLayout
                            products={products}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            searchParams={resolvedParams || {}}
                        />
                    </div>
                </div>
            </section>

            <AdvantageSection
                title="Why Choose Our Batik Fabric"
                items={[
                    "Comfortable for the Indian climate",
                    "High-demand boutique patterns",
                    "Consistent bulk quality",
                    "Ready stock availability"
                ]}
                imageSrc="/best-dresses-for-women-quality.webp"
                featureTag="FABRIC STANDARD"
                featureTitle="Pure Cotton 60x60"
                featureDesc="The gold standard for batik fabric, ensuring longevity and maximum comfort in any weather."
            />

            <PremiumFeatureSection
                tag="Why Buyers Choose Our Fabric"
                title={<>Why Our Batik Fabric Stands Out</>}
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
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        )
                    },
                    {
                        t: "Breathable Cotton for All-Day Wear",
                        d: "Designed for Indian weather, our fabric supports sleeveless dress, full sleeve dress, and cotton night dress for ladies with long-lasting comfort.",
                        c: "text-orange-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
                            </svg>
                        )
                    },
                    {
                        t: "Versatile for Modern Women Clothing",
                        d: "Our fabric supports a wide range of styles—from short party dresses for women to elegant daily wear, making it a strong choice for evolving women clothing trends.",
                        c: "text-yellow-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Trusted by Plus Size Clothing Stores",
                        d: "Perfect for inclusive fashion, our fabric works well for plus size clothing, plus size womens clothing, and retailers targeting diverse body types.",
                        c: "text-red-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Reliable for Stitching & Finishing",
                        d: "Clean cuts, smooth texture, and consistent weave quality make it ideal for batik print suit, batik dress, and stitched garments for retail and wholesale.",
                        c: "text-purple-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/batik-fabric-image.webp"
                mobileImageSrc="/cotton-dress-material-image.webp"
                quote="Our batik fabric blends breathable cotton comfort with versatile design possibilities for modern fashion."
            />



            <HowToOrderSection
                title="How to Order Batik Fabric Online"
                whatsappLink={WA}
            />


            {/* ── SECTION: NEXT STEPS ── */}
            <section className="scroll-animate py-16 md:py-32 px-6 bg-white overflow-hidden text-primary">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-left md:text-center max-w-4xl mx-auto w-full">
                        <span className="text-overline text-secondary">Next Step</span>
                        <h2 className="text-h2 font-bold text-primary">Continue Your Buying Journey</h2>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mt-2">
                            Choose what fits your goal—explore designs, source fabric, or scale with wholesale supply.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10">
                        {[
                            {
                                t: "Explore Batik Cloth",
                                l: "/cotton-cloth",
                                img: "/gallery_explore.png",
                                tag: "Category"
                            },
                            {
                                t: "Batik Dress Wholesale",
                                l: "/fabric-wholesale",
                                img: "/gallery_wholesale.png",
                                tag: "Inquiry"
                            },
                            {
                                t: "New Arrival Clothing",
                                l: "/new-batik-prints",
                                img: "/gallery_arrival.png",
                                tag: "Category"
                            }
                        ].map((item, i) => (
                            <Link key={i} href={item.l} className={"group relative rounded-[24px] overflow-hidden bg-primary aspect-[4/5] md:aspect-[3/4] flex flex-col items-center justify-center border border-primary/10"}>
                                <Image
                                    src={item.img}
                                    alt={item.t}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-100 group-hover:brightness-95"
                                />
                                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">{item.tag}</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-10 text-center">
                                    <h3 className="font-heading text-xl md:text-3xl font-bold text-white leading-tight mb-2 md:mb-4">{item.t}</h3>

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
            <section className="scroll-animate py-16 md:py-24 px-4 md:px-6 bg-[#F9F7F1]">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-5xl mx-auto w-full">
                        <span className="text-overline text-secondary tracking-[0.3em] font-bold">FASHION & FABRIC JOURNAL</span>
                        <h2 className="text-h2 font-heading text-primary leading-tight">The Batik Fabric Journal</h2>
                        <div className="w-16 h-[2px] bg-secondary/30 mt-2"></div>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mt-2">
                            Insights on batik fabric, latest batik fabric prints, styling ideas, and trends shaping modern women clothing and dress material demand.
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
                                    <span className="text-[10px] md:text-xs text-primary/50 font-bold uppercase tracking-[0.2em]">
                                        {post.cat} &nbsp;&mdash;&nbsp; {post.date}
                                    </span>

                                    <h4 className="text-2xl md:text-3xl font-heading font-bold text-primary decoration-primary/30 underline-offset-4 group-hover:underline transition-all duration-300">
                                        {post.title}
                                    </h4>

                                    <p className="text-body2 text-primary/90 line-clamp-2">
                                        {post.d}
                                    </p>

                                    {/* Minimalist Read More */}
                                    <div className="flex items-center gap-2 text-primary/90 font-bold text-[10px] uppercase tracking-widest mt-2 group-hover:text-primary transition-colors duration-300">
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
