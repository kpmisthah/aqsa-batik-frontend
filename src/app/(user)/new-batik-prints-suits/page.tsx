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
import CategoryHeroBanner from "@/modules/user/components/CategoryHeroBanner";
import HorizontalProcessSection from "@/modules/user/components/HorizontalProcessSection";

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
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title>New Batik Prints & Suits | Latest Batik Designs for Women</title>
            <meta name="description" content="Shop new Batik prints, kurtis, dresses and cotton styles. Discover fresh Batik designs for everyday wear, ethnic occasions and wholesale collections." />

            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />
            <ScrollObserver />
            <CategoryHeroBanner
                tagline="FRESH BATIK. FRESH EXPRESSION."
                title={
                    <>
                        Discover <span className='text-highlight'>New Batik Prints</span> <br className="hidden md:block" />
                        for Women Who Want <br className="hidden md:block" />
                        Something Different
                    </>
                }
                description="Explore the latest Batik prints, fresh colours, expressive patterns, and comfortable cotton styles designed to bring something new to your wardrobe. From Batik print kurtis and dresses to versatile suit styles, discover designs made for everyday confidence and effortless ethnic dressing."
                imageSrc="/gallery_arrival.png"
                imageAlt="New Batik Arrivals"
                bgColor="#D4D1CC"
                buttons={
                    <>
                        <a href="#collection" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                            Shop New Arrivals
                        </a>
                        <a href="/wholesale-batik-women-dresses" className="border border-primary/15 hover:border-accent text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent hover:text-accent">
                            Explore Wholesale
                        </a>
                    </>
                }
            />

            <GoogleReviewBar />

            {/* ── SECTION: TREND VALUE (WHY NEW ARRIVALS) ── */}
            <section className="scroll-animate py-12 md:py-16 px-6 bg-[#F4F0EA] relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-16 md:gap-20">
                    <div className="flex flex-col gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline">NEW SEASON. NEW STYLE.</span>
                        <h2 className="text-h2 text-primary">Fresh Batik Designs Made for <br className="hidden md:block" /> Modern <span className="text-highlight">Everyday Dressing</span></h2>
                        <div className="w-12 h-[2px] bg-secondary/30"></div>
                        <p className="text-lg md:text-xl text-primary/80 font-normal leading-relaxed max-w-3xl">
                            Our latest Batik collection brings together distinctive Batik design, comfortable silhouettes, and versatile styles that work across everyday routines, casual outings, summer dressing, and relaxed occasions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 max-w-6xl mx-auto w-full">
                        {[
                            {
                                t: "Fresh Batik Prints",
                                d: "Discover new patterns, expressive motifs, and contemporary colour combinations that give traditional Batik a fresh direction.",
                                i: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z" />
                                        <path d="M12 2v19" />
                                    </svg>
                                )
                            },
                            {
                                t: "Everyday Cotton Styles",
                                d: "Choose comfortable cotton dresses, kurtis, and suit styles designed for easy everyday wear.",
                                i: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
                                    </svg>
                                )
                            },
                            {
                                t: "Modern Ethnic Dressing",
                                d: "Bring traditional print characters into contemporary wardrobes with versatile silhouettes that are easy to style.",
                                i: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                                    </svg>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className={`flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-8 bg-white rounded-[24px] shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center h-full ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] bg-[#F5F1EC] border border-border text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                                    {item.i}
                                </div>
                                <div className="flex flex-col gap-2 mt-1">
                                    <h4 className="text-[13px] sm:text-h4 text-primary leading-tight font-bold sm:font-heading sm:font-normal">{item.t}</h4>
                                    <p className="text-[11px] sm:text-[14px] text-primary/80 leading-relaxed font-medium">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRODUCT GRID ── */}
            <section id="collection" className="scroll-animate py-12 md:py-16 px-6 bg-transparent relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-12 md:gap-16">
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline">THE NEW COLLECTION</span>
                        <h2 className="text-h3 text-primary font-normal">Explore the Latest <span className="text-highlight">Batik Prints, Dresses & Kurtis</span></h2>
                        <p className="text-lg md:text-xl text-primary/80 font-normal leading-relaxed mt-2 w-full text-center">
                            Discover newly added Batik styles designed around comfort, colour, and individuality.
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
                tag="WHY NEW BATIK"
                title={
                    <>
                        Why Women Choose Our <br className="hidden md:block" /> <span className="text-highlight">Latest Batik Prints?</span>
                        <span className="block text-base md:text-lg text-foreground font-normal leading-relaxed mt-3">
                            The newest style is not always the best style. The right new arrival is one you can actually see yourself wearing.
                        </span>
                    </>
                }
                items={[
                    { title: "Distinctive Batik Design", desc: "Fresh patterns help your wardrobe feel individual without making everyday styling complicated." },
                    { title: "Comfortable Cotton", desc: "Batik cotton fabric offers a practical foundation for comfortable dresses, kurtis, and ethnic styles." },
                    { title: "Versatile Styling", desc: "A Batik print kurti can work with trousers or palazzos, while a Batik dress can become an easy standalone outfit." },
                    { title: "Fresh Colour Choices", desc: "New colour combinations make it easier to discover something that feels different from what you already own." }
                ]}
                imageSrc="/premium-cotton-kurtis-for-women-image.webp"
                featureTag="FRESH PRINT."
                featureTitle="New Prints. Authentic Batik Character."
                featureDesc="The appeal of a new Batik print is simple. It gives familiar comfort and a fresh visual identity."
            />

            <PremiumFeatureSection
                tag="FROM PRINT TO OUTFIT"
                title={
                    <>
                        More Ways to Wear the <br className="hidden md:block" /> <span className="text-highlight">Latest Batik Suits Collection</span>
                        <span className="block text-base md:text-lg text-primary/80 font-normal leading-relaxed mt-4 max-w-2xl mx-auto font-body">
                            New Batik prints become more valuable when they work across your wardrobe.
                        </span>
                    </>
                }
                features={[
                    {
                        t: "For Everyday Wear",
                        d: "Choose a Batik print kurti with straight pants and flats for a simple, polished look.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                            </svg>
                        )
                    },
                    {
                        t: "For Summer Days",
                        d: "Pair a lightweight Batik dress with sandals and minimal jewellery for effortless warm-weather dressing.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        )
                    },
                    {
                        t: "For Casual Outings",
                        d: "Choose printed dresses for women who want colour and personality without complicated styling.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                            </svg>
                        )
                    },
                    {
                        t: "For Ethnic Occasions",
                        d: "Pair a distinctive Batik suit with elegant accessories when you want a more refined traditional look.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        )
                    },
                    {
                        t: "Everyday Wearability",
                        d: "The collection focuses on styles that can move naturally from daily routines to casual gatherings and seasonal dressing.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
                            </svg>
                        )
                    },
                    {
                        t: "Versatile Women’s Clothing",
                        d: "Discover breathable Batik styles, cotton dresses, and printed women’s clothing designed for everyday comfort, effortless styling, and seasonal wear.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="6.5" />
                            </svg>
                        )
                    }
                ]}
                quoteTag="STYLE WITH SOMETHING NEW"
                quoteTitle="Fresh Prints. Easy Styling. More Reasons to Wear Batik."
                quoteDesc="New arrivals should not sit in your wardrobe waiting for the right occasion."
                imageSrc="/cotton-kurti-for-women-image.webp"
            />

            <HorizontalProcessSection
                tag="FOR WOMEN & BUSINESSES"
                title={
                    <>
                        New Batik Prints That Create <span className="text-highlight">Fresh Opportunities</span>
                    </>
                }
                subtitle="For women, new Batik arrivals bring fresh ways to express personal style. For boutiques and retailers, they offer distinctive designs to refresh collections with styles customers want to wear again."
                steps={[
                    {
                        s: "01",
                        t: "Explore New Designs",
                        d: "Browse the latest Batik dresses, kurtis, suit styles, and printed cotton collections."
                    },
                    {
                        s: "02",
                        t: "Select Your Styles",
                        d: "Choose designs and quantities based on your personal or business requirements."
                    },
                    {
                        s: "03",
                        t: "Connect on WhatsApp",
                        d: "Share your requirements and receive availability, pricing, and ordering guidance."
                    },
                    {
                        s: "04",
                        t: "Confirm Your Collection",
                        d: "Review your selected designs and receive a clear quotation."
                    },
                    {
                        s: "05",
                        t: "Move From Selection to Supply",
                        d: "Confirm your order and receive your selected Batik collection through available delivery arrangements."
                    }
                ]}
            />

            {/* ── SECTION: Navigation / Next Step ── */}
            <section className="scroll-animate py-12 md:py-16 px-6 bg-[#F4F0EA] relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-overline">NEXT STEP</span>
                        <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary leading-tight">Explore More <span className="text-highlight">Batik Print Collections</span> for Women</h2>
                        <p className="text-lg md:text-xl text-primary/80 font-normal leading-relaxed mt-2 text-left md:text-center w-full">Discover Batik styles across ethnic wardrobes, comfortable cotton clothing, and wholesale collections.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <a href="/batik-prints-womens-clothing" className="group relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                                <Image src="/new-batik-print-category-image.webp" alt="Batik Prints Women Clothing" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">Batik Prints Women Clothing</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-sm text-primary/90 font-medium leading-relaxed">Explore expressive Batik prints, comfortable cotton styles, and versatile women's clothing designed for everyday and occasion wear.</p>
                                <div className="flex items-center gap-2 text-primary group-hover:text-accent font-body font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-500 mt-auto pt-4">
                                    <span>Explore Collection</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/batik-suits" className="group relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                                <Image src="/cotton-kurti-for-women-image.webp" alt="Ethnic Wear for Women" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">Ethnic Wear for Women</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-sm text-primary/90 font-medium leading-relaxed">Discover Batik dresses, kurtis, and suit styles that bring traditional character into modern wardrobes.</p>
                                <div className="flex items-center gap-2 text-primary group-hover:text-accent font-body font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-500 mt-auto pt-4">
                                    <span>Explore Collection</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/batik-cotton-dress-for-women" className="group relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                                <Image src="/cotton-dress-material-image.webp" alt="Batik Cotton Dress for Women" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">Batik Cotton Dress for Women</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-sm text-primary/90 font-medium leading-relaxed">Explore soft, breathable Batik cotton dresses designed for effortless everyday comfort and graceful styling.</p>
                                <div className="flex items-center gap-2 text-primary group-hover:text-accent font-body font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-500 mt-auto pt-4">
                                    <span>Explore Collection</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/wholesale-batik-women-dresses" className="group relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                                <Image src="/batik-cloth-dresses-for-women-category-image.webp" alt="Wholesale" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">Wholesale</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-sm text-primary/90 font-medium leading-relaxed">Browse wholesale Batik clothing collections created for boutiques, resellers, retailers, and growing fashion businesses.</p>
                                <div className="flex items-center gap-2 text-primary group-hover:text-accent font-body font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-500 mt-auto pt-4">
                                    <span>Explore Collection</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BATIK JOURNAL (BLOG) ── */}
            <section className="scroll-animate py-12 md:py-16 px-6 bg-transparent border-t border-primary/10">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-overline">FASHION & FABRIC JOURNAL</span>
                        <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-normal text-primary leading-tight">The <span className="text-highlight">New Batik Prints</span> <br className="block md:hidden" /> Style Guide</h2>
                        <p className="text-lg md:text-xl text-primary/80 font-normal leading-relaxed mt-2 text-center w-full">Explore the latest Batik prints, Batik print designs, cotton fabrics, Batik dresses, and modern ethnic styles shaping today’s women’s fashion.</p>
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
                                    <span className="text-overline">{post.cat} • {post.date}</span>
                                    <h3 className="font-heading text-[12px] md:text-2xl font-normal text-primary leading-tight group-hover:text-accent transition-colors">{post.title}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ items={[
                {
                    q: "What are the latest Batik print designs?",
                    a: "The latest Batik print designs include fresh patterns, colours, motifs, and contemporary interpretations of traditional Batik. New arrivals may include kurtis, dresses, suits, and other cotton styles."
                },
                {
                    q: "What is a Batik print kurti?",
                    a: "A Batik print kurti combines traditional Batik patterns with a versatile kurti silhouette. It can be styled with trousers, palazzos, leggings, or other everyday bottoms."
                },
                {
                    q: "Are Batik cotton dresses suitable for summer?",
                    a: "Yes. Lightweight Batik cotton dresses can be a practical choice for warmer weather because cotton offers a breathable and comfortable feel."
                },
                {
                    q: "Can I buy Batik print dress material?",
                    a: "Yes. Batik print dress material and Batik cotton fabric can give customers, designers, boutiques, and retailers greater flexibility to create their preferred styles."
                },
                {
                    q: "Can I buy new Batik prints wholesale?",
                    a: "Yes. Boutiques, retailers, resellers, and fashion businesses can explore new Batik collections and contact the team for available designs, quantities, pricing, and wholesale ordering."
                }
            ]} />
        </div>
    );
}
