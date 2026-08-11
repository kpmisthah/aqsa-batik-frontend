import Image from "next/image";
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
import CategoryHeroBanner from "@/modules/user/components/CategoryHeroBanner";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts({ page = "1", search = "", sort = "", minPrice = "", maxPrice = "" }: any) {
    try {
        const queryParams = new URLSearchParams({
            limit: "12",
            page: page,
            category: "Batik Suits,Batik Suit",
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
        const res = await fetch(`${API_BASE}/banners/batik-suits`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/batik_suits_hero_category.png";
    } catch (e) {
        return "/batik_suits_hero_category.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Batik%20Suits";

export default async function BatikSuitsPage({ searchParams }: { searchParams: Promise<any> }) {
    const resolvedParams = await searchParams;
    const { products, totalPages, currentPage } = await getProducts(resolvedParams || {});
    const heroBannerUrl = await getHeroBanner();

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
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />

            <ScrollObserver />
            <CategoryHeroBanner
                tagline="PURE COTTON DRESS MATERIALS"
                title={
                    <>
                        <span className='text-accent'>Batik Suits</span> Online – <br className="md:hidden" /> Cotton Dress Material Collection
                    </>
                }
                description="Explore high-demand batik suit designs crafted for modern women fashion, boutiques, and wholesale buyers across India."
                imageSrc="/clean_slider_1.png"
                imageAlt="Batik Suits Collection"
                bgColor="#E4D3BC"
                textColor="text-primary"
                buttons={
                    <>
                        <a href={WA} target="_blank" rel="noreferrer" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                            Get Wholesale Pricing
                        </a>
                        <a href="#collection" className="border border-primary/15 hover:border-accent text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent hover:text-accent">
                            View Collections
                        </a>
                    </>
                }
            />
            <GoogleReviewBar />

            {/* ── SECTION: BUILT FOR SALES + PRODUCT GRID ── */}
            <section id="collection" className="py-32 px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center mx-auto max-w-3xl">
                        <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Optimized for Profit</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Looking for Batik Cloth that actually sell?</h2>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed">Our collection is curated specifically for the demands of the modern Indian market.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {collectionHighlights.map((item, i) => (
                            <div key={i} className="p-12 bg-cream rounded-[40px] border border-primary/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block">{item.i}</div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.t}</h3>
                                <p className="text-primary/80 font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
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

            <HowToOrderSection
                title={<>How to Order <span className='text-accent'>Batik Suits</span> Online</>}
                whatsappLink={WA}
            />


            {/* ── SECTION: CONTINUE EXPLORING ── */}
            <section className="py-16 md:py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center">
                        <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.4em]">Next Steps</span>
                        <h2 className="font-heading text-2xl md:text-5xl font-bold text-primary leading-tight">Continue Your Journey</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        <a href="/batik-fabric" className="group relative h-[200px] md:h-auto md:aspect-[16/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10">
                            <Image src="/cat_batik_fabric.webp" alt="Explore Batik Fabric" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.3em] text-white/70">Category</span>
                                    <h3 className="font-heading text-sm md:text-3xl font-bold text-white leading-tight">Explore Batik Fabric</h3>
                                </div>
                                <div className="w-8 h-8 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href={WA} target="_blank" rel="noreferrer" className="group relative h-[200px] md:h-auto md:aspect-[16/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10">
                            <Image src="/cat_wholesale.webp" alt="Wholesale Inquiry" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.3em] text-white/70">Inquiry</span>
                                    <h3 className="font-heading text-sm md:text-3xl font-bold text-white leading-tight">Wholesale Inquiries</h3>
                                </div>
                                <div className="w-8 h-8 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all shrink-0">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-[28px] md:h-[28px]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/new-batik-prints" className="group relative h-[160px] md:h-auto md:aspect-[16/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 col-span-2 md:col-span-1">
                            <Image src="/cat_new_arrival.webp" alt="New Arrivals" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.3em] text-white/70">Collection</span>
                                    <h3 className="font-heading text-sm md:text-3xl font-bold text-white leading-tight">New Arrivals</h3>
                                </div>
                                <div className="w-8 h-8 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BATIK JOURNAL (BLOG) ── */}
            <section className="py-16 md:py-32 px-6 bg-cream border-t border-primary/10">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center">
                        <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.4em]">Editorial Corner</span>
                        <h2 className="font-heading text-2xl md:text-5xl font-bold text-primary leading-tight">The Batik <br className="block md:hidden"/> Journal</h2>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mt-2">Stories of heritage, craft, and contemporary style.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        {[
                            { slug: "the-art-of-hand-blocked-batik", title: "The Art of Hand-Blocked Batik", date: "May 15, 2024", cat: "Craftsmanship", img: "/journal_craftsmanship.png" },
                            { slug: "batik-fashion-trends-2024", title: "Batik Fashion Trends 2024", date: "June 2, 2024", cat: "Fashion", img: "/journal_fashion.png" },
                            { slug: "wholesale-success-stories", title: "Wholesale Success Stories", date: "June 10, 2024", cat: "Business", img: "/journal_business.png" }
                        ].map((post, i) => (
                            <a key={i} href={`/blog/${post.slug}`} className={`group flex flex-col md:flex-col gap-3 md:gap-6 bg-white p-3 md:p-6 rounded-[24px] md:rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-primary/10 ${i === 2 ? "col-span-2 md:col-span-1 flex-row md:flex-col" : ""}`}>
                                <div className={`relative ${i === 2 ? "w-1/3 md:w-full md:aspect-[4/3] h-24 md:h-auto" : "aspect-[4/3] h-auto"} rounded-[16px] md:rounded-[32px] overflow-hidden`}>
                                    <Image src={post.img} alt={post.title} layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className={`flex flex-col gap-1 px-1 md:px-4 pb-1 md:pb-4 flex-1 justify-center ${i === 2 ? "pl-3 md:pl-4" : ""}`}>
                                    <span className="text-overline">{post.cat}</span>
                                    <h4 className="font-heading text-[12px] md:text-2xl font-bold text-primary leading-tight mt-1 md:mt-2 group-hover:text-secondary transition-colors">{post.title}</h4>
                                    <div className="flex items-center justify-between mt-auto md:mt-6 pt-2 md:pt-0">
                                        <span className="text-overline">{post.date}</span>
                                        <div className="hidden md:flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
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
