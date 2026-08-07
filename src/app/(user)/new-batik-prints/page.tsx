import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import ProductGrid from "@/modules/user/components/ProductGrid";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import AdvantageSection from "@/modules/user/components/AdvantageSection";
import ProductFilterLayout from "@/modules/user/components/ProductFilterLayout";
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import ScrollIndicator from "@/modules/user/components/ScrollIndicator";
import WavyHero from "@/modules/user/components/WavyHero";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts({ page = "1", search = "", sort = "newest", minPrice = "", maxPrice = "" }: any) {
    try {
        const queryParams = new URLSearchParams({
            limit: "12",
            page: page,
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
        const res = await fetch(`${API_BASE}/banners/new-arrivals`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/hero_bg.png";
    } catch (e) {
        return "/hero_bg.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20New%20Arrival%20Batik%20Clothing";

export default async function NewArrivalPage({ searchParams }: { searchParams: Promise<any> }) {
    const resolvedParams = await searchParams;
    const { products, totalPages, currentPage } = await getProducts(resolvedParams || {});
    const heroBannerUrl = await getHeroBanner();

    return (
        <div className="min-h-screen bg-cream text-primary font-heading selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title><span className='text-accent'>New Arrival Batik Prints</span> & Cotton Dress Material</title>
            <meta name="description" content="Shop new arrival batik prints, cotton dress material, batik print kurti fabric, and designer printed fabric collections for women fashion and ethnic wear." />

            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />
            <ScrollObserver />            <WavyHero
                pillText="Fresh Batik Styles. Modern Women Fashion."
                pillHighlight=""
                title={
                    <>
                        <span className='text-accent'>New Arrival</span> Batik Prints & <br className="hidden md:block" />
                        Cotton Dress <span className='text-accent'>Material Collection</span>
                    </>
                }
                description="Explore new arrival batik prints, premium cotton dress material, floral cotton fabric, and designer printed fabric collections crafted for cotton kurtis, women clothing, boutiques, and trending ethnic fashion."
                imageSrc="/category_wavy_hero.png" // Updated image
                imageAlt="New Arrival Batik Prints"
                buttons={
                    <>
                        <a href={WA} target="_blank" rel="noreferrer" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                            Shop New Arrivals
                        </a>
                        <a href="/fabric-wholesale" className="border border-primary/15 hover:border-accent text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent hover:text-accent">
                            Get Wholesale Pricing
                        </a>
                    </>
                }
            />

            <GoogleReviewBar />

            {/* ── SECTION: TREND VALUE (WHY NEW ARRIVALS) ── */}
            <section className="scroll-animate py-16 md:py-32 px-6 bg-[#F9F7F1] relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-16 md:gap-20">
                    <div className="flex flex-col gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline text-secondary">Built Around Fashion Demand</span>
                        <h2 className="text-h2 text-primary">New Batik Print Collections Women <br /> Actually Want To Wear</h2>
                        <div className="w-12 h-[2px] bg-secondary/30 mt-4"></div>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mt-4 max-w-3xl">
                            Fashion trends evolve quickly. Women still choose comfort first. Our latest batik print fabric, cotton dress material, and floral print collections are designed around wearable fashion, breathable comfort, and modern ethnic styling trends.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto w-full">
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
                </div>
            </section>

            {/* ── PRODUCT GRID ── */}
            <section id="collection" className="scroll-animate py-16 md:py-24 px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-12 md:gap-16">
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline text-secondary">Fresh Collection</span>
                        <h2 className="text-h3 text-primary">Explore New Arrival Batik Print Fabric Collections</h2>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mt-2 w-full text-center">
                            Browse premium batik print fabric, cotton suit dress material, and designer printed fabric collections created for boutiques, resellers, and modern women clothing trends.
                        </p>
                    </div>

                    <ProductFilterLayout
                        products={products}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        searchParams={{ sort: "newest", ...(resolvedParams || {}) }}
                    />
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
            <section className="scroll-animate py-16 md:py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.4em]">Explore More</span>
                        <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary leading-tight">Continue Your Batik Fashion Shopping Journey</h2>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed leading-relaxed mt-2 text-left md:text-center w-full">Browse breathable cotton fabric, wholesale women dress material, and trending batik print collections designed for boutiques, resellers, and modern women fashion.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        <a href="/cotton-cloth" className="group relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/new-batik-print-category-image.webp" alt="Explore Batik Printed Cotton Cloth" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-heading text-[13px] md:text-2xl font-bold text-white leading-tight">Explore Batik Printed Cotton Cloth</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-sm md:text-base text-primary/90 font-medium leading-relaxed line-clamp-3 md:line-clamp-none">Discover breathable printed cotton fabric and stylish women dress material collections.</p>
                                <div className="hidden md:flex items-center gap-3 text-secondary font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Collection
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>


                        <a href="/batik-fabric" className="group relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/batik-fabric-category-image.webp" alt="Explore Batik Fabric" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-heading text-[13px] md:text-2xl font-bold text-white leading-tight">Explore Batik Fabric</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-sm md:text-base text-primary/90 font-medium leading-relaxed line-clamp-3 md:line-clamp-none">Browse premium cotton fabric and print-focused collections.</p>
                                <div className="hidden md:flex items-center gap-3 text-secondary font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Fabric
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/fabric-wholesale" className="group relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 bg-white flex flex-col h-full col-span-2 md:col-span-1">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/batik-cloth-dresses-for-women-category-image.webp" alt="Explore Wholesale Women Dresses" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-heading text-[13px] md:text-2xl font-bold text-white leading-tight">Explore Wholesale Women Dresses</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-sm md:text-base text-primary/90 font-medium leading-relaxed line-clamp-3 md:line-clamp-none">Browse wholesale-ready women clothing collections with fast-moving fashion demand.</p>
                                <div className="hidden md:flex items-center gap-3 text-secondary font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Wholesale
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BATIK JOURNAL (BLOG) ── */}
            <section className="scroll-animate py-16 md:py-32 px-6 bg-cream border-t border-primary/10">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.4em]">Fashion & Trend Journal</span>
                        <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold text-primary leading-tight whitespace-nowrap sm:whitespace-normal">The Batik Print Fashion Guide</h2>
                        <p className="text-lg md:text-xl text-primary font-medium leading-relaxed mt-2 text-center w-full">Explore insights on batik print fabric, cotton dress material, designer printed fabric, and trending women ethnic fashion collections shaping today’s style market.</p>
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
                                    <span className="text-[8px] md:text-[10px] font-bold text-secondary uppercase tracking-[0.3em]">{post.cat} • {post.date}</span>
                                    <h3 className="font-heading text-[12px] md:text-2xl font-bold text-primary leading-tight group-hover:text-secondary transition-colors">{post.title}</h3>
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
