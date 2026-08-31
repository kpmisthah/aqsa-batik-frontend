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
import ConsistentCTA from "@/modules/user/components/ConsistentCTA";


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
            {/* ── FULL WIDTH RESPONSIVE HERO ── */}
            <section className="relative w-full lg:h-[90vh] lg:min-h-[600px] lg:max-h-[900px] bg-cream lg:bg-transparent overflow-hidden flex flex-col lg:block">
                
                {/* Desktop Background Image */}
                <div className="hidden lg:block absolute inset-0 w-full h-full z-0">
                    <Image
                        src="/category/batik print.webp"
                        alt="New Batik Arrivals"
                        fill
                        priority
                        className="object-cover object-center"
                        unoptimized
                    />
                </div>

                {/* Mobile Image */}
                <div className="relative w-full h-[60vh] min-h-[450px] lg:hidden z-0">
                    <Image
                        src="/category/batik print (1).webp"
                        alt="New Batik Arrivals"
                        fill
                        priority
                        className="object-cover object-top"
                        unoptimized
                    />
                </div>

                {/* Text Content */}
                <div className="relative z-20 max-w-[1600px] mx-auto w-full flex flex-col px-6 lg:px-12 pt-0 pb-16 lg:pb-0 text-primary lg:h-full lg:absolute lg:inset-0 lg:justify-center">
                    <div className="w-full lg:max-w-[400px] xl:max-w-[650px] 2xl:max-w-[700px] flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:gap-6 mt-0 relative z-30">
                        {/* Hook */}
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <span className="text-[#8A4B32] text-xl leading-none">&diams;</span>
                            <span className="text-overline text-[#8A4B32] uppercase tracking-[0.2em] font-bold">FRESH BATIK. FRESH EXPRESSION.</span>
                        </div>
                        
                        <h1 className="text-3xl leading-[1.15] sm:text-4xl lg:text-[30px] xl:text-[44px] 2xl:text-[48px] lg:leading-[1.1] font-heading font-normal tracking-tight text-primary">
                            Discover <span className='text-highlight italic whitespace-nowrap'>New Batik Prints</span> <br className="hidden lg:block" />
                            for Women Who Want <br className="hidden lg:block" />
                            Something Different
                        </h1>
                        
                        <p className="text-[14px] lg:text-[15px] xl:text-lg text-primary/80 leading-relaxed max-w-[380px] xl:max-w-[520px] 2xl:max-w-xl font-medium">
                            Explore the latest Batik prints, fresh colours, expressive patterns, and comfortable cotton styles designed to bring something new to your wardrobe. From Batik print kurtis and dresses to versatile suit styles, discover designs made for everyday confidence and effortless ethnic dressing.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center lg:items-start w-full sm:w-auto mt-2">
                            <a href="#collection" className="bg-highlight hover:bg-highlight/90 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] lg:text-xs flex items-center justify-center transition-all shadow-sm text-center w-full sm:w-auto">
                                Shop New Arrivals
                            </a>
                            <a href="/wholesale-batik-women-dresses" className="border border-primary/20 hover:border-primary/40 text-primary hover:bg-primary/5 px-8 py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] lg:text-xs flex items-center justify-center transition-all backdrop-blur-sm text-center w-full sm:w-auto">
                                Explore Wholesale
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden lg:block">
                    <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex justify-center pt-1.5">
                        <div className="w-1 h-2 rounded-full bg-primary/40 animate-bounce" />
                    </div>
                </div>
            </section>

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
                                    <Image src="/ICONS/fresh-batik-prints-icon.png" alt="Fresh Batik Prints" width={48} height={48} className="w-full h-full p-2 sm:p-2.5 object-contain" unoptimized />
                                )
                            },
                            {
                                t: "Everyday Cotton Styles",
                                d: "Choose comfortable cotton dresses, kurtis, and suit styles designed for easy everyday wear.",
                                i: (
                                    <Image src="/ICONS/everyday-cotton-styles-icon.png" alt="Everyday Cotton Styles" width={48} height={48} className="w-full h-full p-2 sm:p-2.5 object-contain" unoptimized />
                                )
                            },
                            {
                                t: "Modern Ethnic Dressing",
                                d: "Bring traditional print characters into contemporary wardrobes with versatile silhouettes that are easy to style.",
                                i: (
                                    <Image src="/ICONS/modern-ethnic-dressing-icon.png" alt="Modern Ethnic Dressing" width={48} height={48} className="w-full h-full p-2 sm:p-2.5 object-contain" unoptimized />
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className={`flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-8 bg-white rounded-[24px] shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center h-full ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-[16px] bg-[#F5F1EC] border border-border transition-all duration-300 shrink-0 group-hover:shadow-md">
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
                        <h2 className="text-h2">Explore the Latest Batik Prints, <br className="hidden md:block" /> <span className="text-highlight">Dresses & Kurtis</span></h2>
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
                tagColor="#8A4B32"
                title={
                    <>
                        Why Women Choose Our <br className="hidden md:block" /> <span className="text-highlight">Latest Batik Prints?</span>
                        <span className="block text-base md:text-lg text-foreground font-normal leading-relaxed mt-3">
                            The newest style is not always the best style. The right new arrival is one you can actually see yourself wearing.
                        </span>
                    </>
                }
                items={[
                    { title: "Distinctive Batik Design", desc: "Fresh patterns help your wardrobe feel individual without making everyday styling complicated.", icon: "/ICONS/distinctive-batik-design-new-icon.png" },
                    { title: "Comfortable Cotton", desc: "Batik cotton fabric offers a practical foundation for comfortable dresses, kurtis, and ethnic styles.", icon: "/ICONS/comfortable-cotton-new-icon.png" },
                    { title: "Versatile Styling", desc: "A Batik print kurti can work with trousers or palazzos, while a Batik dress can become an easy standalone outfit.", icon: "/ICONS/versatile-styling-icon.png" },
                    { title: "Fresh Colour Choices", desc: "New colour combinations make it easier to discover something that feels different from what you already own.", icon: "/ICONS/fresh-colour-choices-icon.png" }
                ]}
                imageSrc="/premium-cotton-kurtis-for-women-image.webp"
                featureTag="FRESH PRINT."
                featureTitle="New Prints. Authentic Batik Character."
                featureDesc="The appeal of a new Batik print is simple. It gives familiar comfort and a fresh visual identity."
            />

            <PremiumFeatureSection
                tag="FROM PRINT TO OUTFIT"
                tagColor="#8A4B32"
                title={
                    <>
                        More Ways to Wear the <br className="hidden md:block" /> Latest <span className="text-highlight">Batik Suits Collection</span>
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
                            <Image src="/ICONS/everyday-wear-new-icon.png" alt="For Everyday Wear" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" unoptimized />
                        )
                    },
                    {
                        t: "For Summer Days",
                        d: "Pair a lightweight Batik dress with sandals and minimal jewellery for effortless warm-weather dressing.",
                        c: "text-brand",
                        i: (
                            <Image src="/ICONS/summer-days-new-icon.png" alt="For Summer Days" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" unoptimized />
                        )
                    },
                    {
                        t: "For Casual Outings",
                        d: "Choose printed dresses for women who want colour and personality without complicated styling.",
                        c: "text-brand",
                        i: (
                            <Image src="/ICONS/casual-outings-icon.png" alt="For Casual Outings" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" unoptimized />
                        )
                    },
                    {
                        t: "For Ethnic Occasions",
                        d: "Pair a distinctive Batik suit with elegant accessories when you want a more refined traditional look.",
                        c: "text-brand",
                        i: (
                            <Image src="/ICONS/ethnic-occasions-icon.png" alt="For Ethnic Occasions" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" unoptimized />
                        )
                    },
                    {
                        t: "Everyday Wearability",
                        d: "The collection focuses on styles that can move naturally from daily routines to casual gatherings and seasonal dressing.",
                        c: "text-brand",
                        i: (
                            <Image src="/ICONS/everyday-wearability-icon.png" alt="Everyday Wearability" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" unoptimized />
                        )
                    },
                    {
                        t: "Versatile Women’s Clothing",
                        d: "Discover breathable Batik styles, cotton dresses, and printed women’s clothing designed for everyday comfort, effortless styling, and seasonal wear.",
                        c: "text-brand",
                        i: (
                            <Image src="/ICONS/versatile-clothing-icon.png" alt="Versatile Women’s Clothing" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" unoptimized />
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
                tagColor="#8A4B32"
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
                        <span className="text-overline" style={{ color: '#8A4B32' }}>NEXT STEP</span>
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
                                <p className="text-sm text-primary/90 font-medium leading-relaxed">Browse wholesale Batik Prints Women Clothinging collections created for boutiques, resellers, retailers, and growing fashion businesses.</p>
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
                        <span className="text-overline" style={{ color: '#8A4B32' }}>FASHION & FABRIC JOURNAL</span>
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

            {/* ── CONSISTENT CTA ── */}
            <ConsistentCTA />

        </div>
    );
}
