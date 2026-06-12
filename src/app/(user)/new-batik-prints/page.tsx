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
        const res = await fetch(`${API_BASE}/banners/new-arrivals`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/hero_bg.png";
    } catch (e) {
        return "/hero_bg.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20New%20Arrival%20Batik%20Clothing";

export default async function NewArrivalPage() {
    const allProducts = await getProducts();
    const heroBannerUrl = await getHeroBanner();

    // Sort all products by createdAt in descending order (newest first)
    const sortedProducts = [...allProducts].sort((a: any, b: any) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return dateB - dateA;
    });

    // Display the 12 most recent products
    const displayProducts = sortedProducts.slice(0, 12);

    return (
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-playfair selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <title>New Arrival Batik Prints & Cotton Dress Material</title>
            <meta name="description" content="Shop new arrival batik prints, cotton dress material, batik print kurti fabric, and designer printed fabric collections for women fashion and ethnic wear." />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'Playfair Display', serif; }
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%235A2A1F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />

            {/* ── HERO SECTION ── */}
            <section className="relative min-h-[60svh] md:min-h-screen w-full flex items-end md:items-center pb-8 md:pb-0 overflow-hidden bg-[#5A2A1F]">
                <div className="absolute inset-0 z-0">
                    <Image
                        key={heroBannerUrl}
                        src={heroBannerUrl}
                        alt="New Arrival Batik Prints"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-[center_top] md:object-[center_20%] brightness-[0.7] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/20 via-black/20 to-black/90 md:from-black/80 md:via-black/20 md:to-transparent shadow-2xl"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 w-full flex justify-start text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-4 md:gap-10 items-start text-left max-w-5xl">
                        <div className="flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-2 rounded-full border border-white/20 w-fit">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                            <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Fresh Batik Styles. Modern Women Fashion.</span>
                        </div>

                        <div className="flex flex-col gap-2 md:gap-6">
                            <h1 className="font-playfair text-2xl md:text-4xl font-bold leading-[1.2] md:leading-[1.3] tracking-tight">
                                <span className='hero-highlight'>New Arrival Batik Prints</span> & <br className="hidden md:block" /><span className='hero-highlight'>Cotton Dress Material</span> Collection
                            </h1>
                            <p className="font-playfair text-xs md:text-2xl font-medium tracking-tight opacity-95 leading-[1.3] md:leading-relaxed max-w-[280px] md:max-w-4xl">
                                Explore new arrival batik prints, premium cotton dress material, floral cotton fabric, and designer printed fabric collections crafted for cotton kurtis, women clothing, boutiques, and trending ethnic fashion.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-2 md:pt-10 items-start justify-start w-full">
                            <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-[#FFD700] text-[#5A2A1F] px-4 py-3 md:px-10 md:py-5 rounded-[10px] md:rounded-2xl font-black text-sm md:text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest border-b-2 md:border-b-4 border-black/10 w-full sm:w-auto text-center">
                                Shop New Arrivals
                            </a>
                            <a href="/fabric-wholesale" className="inline-block bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-4 py-3 md:px-10 md:py-5 rounded-[10px] md:rounded-2xl font-black text-sm md:text-xl shadow-xl hover:bg-white hover:text-[#5A2A1F] active:scale-95 transition-all duration-300 uppercase tracking-widest w-full sm:w-auto text-center">
                                Get Wholesale Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviewBar />

            {/* ── SECTION: TREND VALUE (WHY NEW ARRIVALS) ── */}
            <section className="py-16 md:py-24 px-6 bg-[#F5F1EC] relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-12 md:gap-16">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center mx-auto max-w-4xl">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Built Around Fashion Demand</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F] leading-tight">New Batik Print Collections Women Actually Want To Wear</h2>
                        <p className="text-[13px] md:text-xl text-[#5A2A1F]/80 font-medium italic leading-relaxed mt-2 text-left md:text-center w-full">Fashion trends evolve quickly. Women still choose comfort first. Our latest batik print fabric, cotton dress material, and floral print collections are designed around wearable fashion, breathable comfort, and modern ethnic styling trends.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                t: "Trending Batik Print Designs",
                                d: "Fresh batik print patterns inspired by modern women fashion and ethnic wear styling.",
                                i: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z" />
                                        <path d="M12 2v19" />
                                    </svg>
                                )
                            },
                            {
                                t: "Breathable Cotton Comfort",
                                d: "Soft pure cotton dress material suitable for daily wear and summer-friendly women clothing.",
                                i: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
                                    </svg>
                                )
                            },
                            {
                                t: "Fashion-Forward Collections",
                                d: "Latest cotton dress material for women, batik print kurti styles, and stylish everyday ethnic wear.",
                                i: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                                    </svg>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-4 md:p-8 bg-white rounded-[20px] md:rounded-[32px] border border-[#5A2A1F]/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left md:text-center flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[20px] bg-[#F5F1EC] text-[#5A2A1F] flex items-center justify-center group-hover:bg-[#5A2A1F] group-hover:text-white transition-colors duration-500 shrink-0 [&>svg]:!w-6 [&>svg]:!h-6 md:[&>svg]:!w-8 md:[&>svg]:!h-8">
                                    {item.i}
                                </div>
                                <div className="flex flex-col gap-1 md:gap-3 flex-1">
                                    <h3 className="text-base md:text-xl font-black uppercase tracking-tight text-[#5A2A1F]">{item.t}</h3>
                                    <p className="text-[13px] md:text-base text-[#5A2A1F]/70 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRODUCT GRID ── */}
            <section id="collection" className="py-16 md:py-24 px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-12 md:gap-16">
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Fresh Collection</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F] leading-tight">Explore New Arrival Batik Print Fabric Collections</h2>
                        <p className="text-[13px] md:text-xl text-[#5A2A1F]/70 font-medium italic leading-relaxed mt-2 text-left md:text-center w-full">Browse premium batik print fabric, cotton suit dress material, and designer printed fabric collections created for boutiques, resellers, and modern women clothing trends.</p>
                    </div>

                    <ProductGrid products={displayProducts} columns={4} />
                </div>
            </section>

            <AdvantageSection
                tag="Fashion Buyer Psychology"
                title="Why New Batik Print Styles Perform Faster"
                items={[
                    "Modern Ethnic Styling",
                    "Summer-Friendly Fabric",
                    "Fast-Moving Women Fashion",
                    "Wearable Cotton Comfort"
                ]}
                imageSrc="/premium-cotton-kurtis-for-women-image.webp"
                featureTag="JUST IN"
                featureTitle="Season 2024 Designs"
                featureDesc="Freshly manufactured batik clothing optimized for current retail and wholesale demand."
            />

            <PremiumFeatureSection
                tag="The AQSHA Print Advantage"
                title={<>Why Our Batik Print Fabric <br className="hidden md:block" />Collections Stand Out</>}
                features={[
                    {
                        t: "Artistic Batik Print Designs",
                        d: "Traditional batik artistry blended with modern women fashion aesthetics.",
                        c: "text-blue-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        )
                    },
                    {
                        t: "Pure Cotton Comfort",
                        d: "Soft pure cotton dress material suitable for long wear comfort and breathable styling.",
                        c: "text-emerald-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                            </svg>
                        )
                    },
                    {
                        t: "Fashion-Ready Ethnic Wear",
                        d: "Perfect for batik print kurti collections, cotton dresses, and modern women ethnic fashion.",
                        c: "text-purple-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z" />
                            </svg>
                        )
                    },
                    {
                        t: "Designer Printed Fabric",
                        d: "Premium designer printed fabric collections with stylish patterns and wearable comfort.",
                        c: "text-yellow-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            </svg>
                        )
                    },
                    {
                        t: "Summer-Friendly Cotton Fabric",
                        d: "Breathable cotton fabric ideal for warm weather and everyday fashion wear.",
                        c: "text-orange-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        )
                    },
                    {
                        t: "Wholesale Ready Collections",
                        d: "Reliable stock support for boutiques, resellers, and wholesale women clothing businesses.",
                        c: "text-red-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/cotton-kurti-for-women-image.webp"
                quote="Our new arrivals represent the pinnacle of modern batik—designed for boutiques that value both heritage and high-speed sales."
            />

            {/* ── SECTION: Navigation / Next Step ── */}
            <section className="py-16 md:py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Explore More</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F] leading-tight">Continue Your Batik Fashion Shopping Journey</h2>
                        <p className="text-[13px] md:text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed mt-2 text-left md:text-center w-full">Browse breathable cotton fabric, wholesale women dress material, and trending batik print collections designed for boutiques, resellers, and modern women fashion.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        <a href="/cotton-cloth" className="group relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/new-batik-print-category-image.webp" alt="Explore Batik Printed Cotton Cloth" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-playfair text-[13px] md:text-2xl font-bold text-white leading-tight">Explore Batik Printed Cotton Cloth</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-[9px] md:text-base text-[#5A2A1F]/70 font-medium leading-relaxed line-clamp-3 md:line-clamp-none">Discover breathable printed cotton fabric and stylish women dress material collections.</p>
                                <div className="hidden md:flex items-center gap-3 text-[#8B3A2B] font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Collection
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>


                        <a href="/batik-fabric" className="group relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/batik-fabric-category-image.webp" alt="Explore Batik Fabric" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#8B3A2B]/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-playfair text-[13px] md:text-2xl font-bold text-white leading-tight">Explore Batik Fabric</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-[9px] md:text-base text-[#5A2A1F]/70 font-medium leading-relaxed line-clamp-3 md:line-clamp-none">Browse premium cotton fabric and print-focused collections.</p>
                                <div className="hidden md:flex items-center gap-3 text-[#8B3A2B] font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Fabric
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/fabric-wholesale" className="group relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 bg-white flex flex-col h-full col-span-2 md:col-span-1">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/batik-cloth-dresses-for-women-category-image.webp" alt="Explore Wholesale Women Dresses" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-playfair text-[13px] md:text-2xl font-bold text-white leading-tight">Explore Wholesale Women Dresses</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-[9px] md:text-base text-[#5A2A1F]/70 font-medium leading-relaxed line-clamp-3 md:line-clamp-none">Browse wholesale-ready women clothing collections with fast-moving fashion demand.</p>
                                <div className="hidden md:flex items-center gap-3 text-[#8B3A2B] font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Wholesale
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BATIK JOURNAL (BLOG) ── */}
            <section className="py-16 md:py-32 px-6 bg-[#F5F1EC] border-t border-[#5A2A1F]/10">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-[10px] md:text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Fashion & Trend Journal</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F] leading-tight">The Batik Print Fashion Guide</h2>
                        <p className="text-[13px] md:text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed mt-2 text-left md:text-center w-full">Explore insights on batik print fabric, cotton dress material, designer printed fabric, and trending women ethnic fashion collections shaping today’s style market.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        {[
                            { slug: "the-art-of-hand-blocked-batik", title: "The Art of Hand-Blocked Batik", date: "May 15, 2024", cat: "Craftsmanship", img: "/journal_craftsmanship.png" },
                            { slug: "batik-fashion-trends-2024", title: "Batik Fashion Trends 2024", date: "June 2, 2024", cat: "Fashion", img: "/journal_fashion.png" },
                            { slug: "wholesale-success-stories", title: "Wholesale Success Stories", date: "June 10, 2024", cat: "Business", img: "/journal_business.png" }
                        ].map((post, i) => (
                            <a key={i} href={`/blog/${post.slug}`} className={`group flex flex-col md:flex-col gap-3 md:gap-6 bg-white p-3 md:p-6 rounded-[24px] md:rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-[#5A2A1F]/10 ${i === 2 ? "col-span-2 md:col-span-1 flex-row md:flex-col" : ""}`}>
                                <div className={`relative ${i === 2 ? "w-1/3 md:w-full md:aspect-[4/3] h-24 md:h-auto" : "aspect-[4/3] h-auto"} rounded-[16px] md:rounded-[32px] overflow-hidden`}>
                                    <Image src={post.img} alt={post.title} layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className={`flex flex-col gap-1 px-1 md:px-4 pb-1 md:pb-4 flex-1 justify-center ${i === 2 ? "pl-3 md:pl-4" : ""}`}>
                                    <span className="text-[8px] md:text-[10px] font-bold text-[#8B3A2B] uppercase tracking-[0.3em]">{post.cat} • {post.date}</span>
                                    <h3 className="font-playfair text-[12px] md:text-2xl font-bold text-[#5A2A1F] leading-tight group-hover:text-[#8B3A2B] transition-colors">{post.title}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ items={[
                {
                    q: "What is special about batik print fabric?",
                    a: "Batik print fabric is known for its artistic patterns, traditional textile craftsmanship, and stylish ethnic appeal, making it popular for dresses, kurtis, and women fashion collections."
                },
                {
                    q: "Why is cotton dress material popular for women?",
                    a: "Cotton dress material is popular because it is soft, breathable, lightweight, and comfortable for daily wear as well as festive ethnic outfits."
                },
                {
                    q: "Is pure cotton dress material good for summer?",
                    a: "Yes. Pure cotton dress material is ideal for summer because it allows airflow, absorbs sweat easily, and keeps the body cool and comfortable."
                },
                {
                    q: "Why are batik print kurtis trending in women's fashion?",
                    a: "Batik print kurtis are trending because they combine traditional print styles with modern ethnic fashion, creating comfortable and stylish women's clothing collections."
                },
                {
                    q: "What is designer printed fabric used for?",
                    a: "Designer printed fabric is commonly used for kurtis, dresses, ethnic outfits, cotton suits, and fashionable women's clothing because of its unique patterns and designs."
                }
            ]} />
        </div>
    );
}
