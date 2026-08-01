import Image from "next/image";
import Link from "next/link";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import ProductGrid from "@/modules/user/components/ProductGrid";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import AdvantageSection from "@/modules/user/components/AdvantageSection";
import HowToOrderSection from "@/modules/user/components/HowToOrderSection";

import ProductFilterLayout from "@/modules/user/components/ProductFilterLayout";

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
        const res = await fetch(`${API_BASE}/banners/batik-cloth`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/batik_fabric_hero_premium.png";
    } catch (e) {
        return "/batik_fabric_hero_premium.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Batik%20Cloth";

export default async function CottonClothPage({ searchParams }: { searchParams: Promise<any> }) {
    const resolvedParams = await searchParams;
    const { products, totalPages, currentPage } = await getProducts(resolvedParams || {});
    const heroBannerUrl = await getHeroBanner();

    return (
        <div className="min-h-screen bg-cream text-primary font-heading selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title><span className='text-accent'>Batik Printed Cotton Cloth</span> & <span className='text-accent'>Cotton Fabric Online</span></title>
            <meta name="description" content="Shop premium batik printed cotton cloth, printed cotton fabric, and women dress material online. Breathable cotton fabric for daily wear and women fashion." />

            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />

            {/* ── HERO BANNER ── */}
            <section className="relative min-h-[60svh] md:min-h-screen w-full flex items-end md:items-center pb-8 md:pb-0 overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <Image
                        key={heroBannerUrl}
                        src={heroBannerUrl}
                        alt="Premium Batik Cloth Collection"
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
                            <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Traditional Batik Craft. Modern Cotton Comfort.</span>
                        </div>

                        <div className="flex flex-col gap-2 md:gap-6">
                            <h1 className="text-h1">
                                <span className='text-accent'>Batik Printed</span> Cotton Cloth & <br className="hidden md:block" />
                                Premium Cotton <span className='text-accent'>Fabric Online</span>
                            </h1>
                            <p className="text-body1 opacity-90 mt-2 md:mt-2 max-w-sm md:max-w-5xl text-white/90 text-center md:text-left mx-auto md:mx-0 ">
                                Explore breathable batik printed cotton cloth, stylish printed cotton fabric, and premium women dress material collections designed for cotton dresses, boutiques, resellers, and everyday women fashion across India.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-2 md:pt-10 items-center md:items-start justify-center md:justify-start w-full">
                            <a href="#collection" className="inline-block bg-accent text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl hover:brightness-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto">
                                Shop Now
                            </a>
                            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 md:gap-3 border border-white/40 text-white hover:bg-white hover:text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                Get Wholesale Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <GoogleReviewBar />

            {/* ── SECTION: APPLICATIONS ── */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-cream relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
                    <div className="flex flex-col gap-4 md:gap-6 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline text-secondary mb-2 md:mb-0">Applications</span>
                        <h2 className="text-h2 text-primary">Perfect Batik Printed Cotton Cloth For Every Fashion Creation</h2>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed">Our premium batik printed cotton cloth combines breathable cotton fabric with modern women fashion styling—perfect for batik print dress material, cotton dresses, women dress material, and boutique clothing collections.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            {
                                t: "DRESS MATERIALS",
                                d: "Perfect for elegant printed cotton dress material, stitched suits, cotton dresses, and breathable cotton clothing for women designed for daily wear comfort.",
                                img: "/app_dress_materials.png"
                            },
                            {
                                t: "BOUTIQUE COLLECTIONS",
                                d: "Premium printed cotton fabric and batik cotton fabric collections crafted for boutiques, resellers, and stylish women clothing businesses.",
                                img: "/app_boutique.png"
                            },
                            {
                                t: "CUSTOM DESIGNS",
                                d: "Versatile cotton cloth suitable for custom stitching, ethnic wear, plus size outfits, cotton summer dresses, and women fashion collections.",
                                img: "/app_custom.png"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative flex flex-col gap-5 md:gap-6">
                                <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden bg-primary/5">
                                    <Image
                                        src={item.img}
                                        alt={item.t}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-[1500ms]"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                                </div>
                                <div className="flex flex-col gap-2 md:gap-3 px-1 md:px-0 text-center items-center mx-auto max-w-sm">
                                    <h3 className="text-h4 tracking-widest text-primary uppercase">{item.t}</h3>
                                    <p className="text-body2 text-primary/90">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRODUCT GRID ── */}
            <section id="collection" className="py-16 md:py-32 px-4 md:px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-10 md:gap-20">
                    <div className="flex flex-col gap-4 md:gap-6 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline text-secondary mb-2 md:mb-0">Fabric Library</span>
                        <h2 className="text-h2 text-primary">Explore Signature Batik Cotton <br className="hidden md:block" /> Fabric Designs</h2>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed">Discover premium printed cotton cloth, breathable dress fabric, and stylish batik print dress material collections designed for modern women clothing and everyday fashion demand.</p>
                    </div>

                    <ProductFilterLayout
                        products={products}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        searchParams={resolvedParams || {}}
                    />
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
                imageSrc="/advantage_hero_fashion.png"
                mobileImageSrc="/advantage_hero_fashion.png"
                featureTag="FABRIC STANDARD"
                featureTitle="Pure Cotton 60x60"
                featureDesc="The gold standard for batik suits, ensuring longevity and maximum comfort in any weather."
            />

            <PremiumFeatureSection
                tag="The AQSHA Fabric Advantage"
                title={<>Why Our <span className='text-accent'>Batik Printed</span> <br /> Cotton Cloth <span className='text-accent'>Stands Out</span></>}
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
                imageSrc="/premium_fabric_hero.png"
                mobileImageSrc="/premium_fabric_hero.png"
                quote="Our premium batik cloth offers the perfect canvas for your fashion creations, blending traditional art with superior comfort."
            />
            <HowToOrderSection
                title="How to Order Batik Cloth Online"
                whatsappLink={WA}
            />

            {/* ── SECTION: NEXT STEPS ── */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-2xl mx-auto w-full">
                        <span className="text-overline text-accent tracking-[0.3em] font-bold">NEXT STEP</span>
                        <h2 className="text-h2 font-heading text-primary leading-tight">Continue Your Batik Fabric Shopping Journey</h2>
                        <div className="w-16 h-[2px] bg-accent/30 mt-2"></div>
                    </div>

                    {/* Editorial Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {[
                            {
                                t: "Explore Batik Fabric",
                                l: "/batik-fabric",
                                img: "/gallery_explore.png", // old: "/batik-fabric-category-image.webp"
                                tag: "Category"
                            },
                            {
                                t: "Wholesale Women Dresses",
                                l: "/fabric-wholesale",
                                img: "/gallery_wholesale.png", // old: "/batik-cloth-dresses-for-women-category-image.webp"
                                tag: "Inquiry"
                            },
                            {
                                t: "New Arrival Batik Clothing",
                                l: "/new-batik-prints",
                                img: "/gallery_arrival.png", // old: "/new-batik-print-category-image.webp"
                                tag: "Collection"
                            }
                        ].map((item, i) => (
                            <Link key={i} href={item.l} className="group relative h-[350px] md:h-[450px] lg:h-[550px] w-full rounded-[24px] overflow-hidden block border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-500">
                                <Image
                                    src={item.img}
                                    alt={item.t}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                                />
                                {/* Top Badge */}
                                <div className="absolute top-5 left-5 z-20">
                                    <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-sm">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Bottom Gradient for Text Legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                                {/* Bottom Content Content */}
                                <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 flex flex-col gap-2 md:gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h4 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white leading-snug drop-shadow-md">
                                        {item.t}
                                    </h4>

                                    <div className="flex items-center gap-2 text-white/80 group-hover:text-accent font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-500 mt-2">
                                        <span>Explore</span>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
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
            {/* ── SECTION: EDITORIAL CORNER ── */}
            <section className="py-16 md:py-32 px-6 bg-cream">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-left md:text-center max-w-4xl mx-auto w-full">
                        <span className="text-overline text-secondary">Fashion & Fabric Journal</span>
                        <h2 className="text-h2 text-primary">The Printed Cotton Fabric Style Guide</h2>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mt-2">Explore insights on printed cotton fabric, breathable dress fabric, cotton dresses, and modern women clothing trends shaping today’s fashion market.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        {[
                            {
                                t: "The Art of Hand-Blocked Batik",
                                d: "Exploring the traditional craftsmanship behind every piece of fabric.",
                                c: "Craftsmanship",
                                date: "May 15, 2024",
                                img: "/journal_craftsmanship.png"
                            },
                            {
                                t: "Batik Fashion Trends 2024",
                                d: "What's trending in the modern batik market for the upcoming season.",
                                c: "Fashion",
                                date: "June 2, 2024",
                                img: "/journal_fashion.png"
                            },
                            {
                                t: "Wholesale Success Stories",
                                d: "How our partners are scaling their businesses with AQSHA Batik.",
                                c: "Business",
                                date: "June 10, 2024",
                                img: "/journal_business.png"
                            }
                        ].map((post, i) => (
                            <div key={i} className={`bg-transparent group cursor-pointer flex flex-col gap-4 ${i === 2 ? "col-span-2 md:col-span-1 flex-row md:flex-col" : ""}`}>
                                <div className={`relative overflow-hidden shrink-0 ${i === 2 ? "w-1/3 md:w-full h-32 md:h-80" : "h-64 md:h-80"}`}>
                                    <Image src={post.img} alt={post.t} layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-105 transition-transform duration-[1200ms]" />
                                </div>
                                <div className={`py-4 flex flex-col gap-2 md:gap-3 flex-1`}>
                                    <span className="text-overline text-secondary">{post.c}</span>
                                    <h4 className="text-h4 text-primary group-hover:text-accent transition-colors">{post.t}</h4>
                                    <div className="flex justify-between items-center mt-auto pt-6 border-t border-primary/20">
                                        <span className="text-overline text-primary/50">{post.date}</span>
                                        <div className="hidden md:flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                            Read More
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
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
