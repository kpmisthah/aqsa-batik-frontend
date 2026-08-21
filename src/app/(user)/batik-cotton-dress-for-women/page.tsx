import Image from "next/image";
import Link from "next/link";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";

import ProductGrid from "@/modules/user/components/ProductGrid";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import AdvantageSection from "@/modules/user/components/AdvantageSection";
import HorizontalProcessSection from "@/modules/user/components/HorizontalProcessSection";
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


    const features = [
        { t: "Pure cotton fabric", d: "Breathable and natural material.", i: "🌱" },
        { t: "Batik print design", d: "Traditional wax-resist dyed patterns.", i: "🕯️" },
        { t: "Soft and breathable", d: "Maximum comfort in all seasons.", i: "☁️" },
        { t: "Durable for daily wear", d: "Long-lasting quality and color.", i: "💪" }
    ];

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title>Batik Cotton Dress for Women | Breathable Batik Dresses</title>
            <meta name="description" content="Shop Batik cotton dress for women in breathable, comfortable styles. Explore Batik print dresses, one-piece styles, summer dresses and wholesale options." />

            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />
            <ScrollObserver />
            <CategoryHeroBanner
                tagline="EFFORTLESS COTTON STYLE"
                title={
                    <>
                        Cotton Dress for Women <br className="hidden md:block" />
                        Made for Comfort, Colour & <br className="hidden md:block" />
                        <span className="text-highlight">Everyday Confidence</span>
                    </>
                }
                description="Discover breathable Batik cotton dresses designed to make everyday dressing feel easier. From relaxed one-piece styles to expressive batik print dress designs, find comfortable silhouettes that bring softness, character, and effortless style to every day."
                imageSrc="/batik_fabric_hero_unique.png"
                imageAlt="Batik Fabric Collection"
                bgColor="#D0B598"
                textColor="text-primary"
                buttons={
                    <>
                        <a href="#collection" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                            Shop Cotton Dresses
                        </a>
                        <a href={WA} target="_blank" rel="noreferrer" className="border border-primary/15 hover:border-accent text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent hover:text-accent">
                            Become a Wholesale Partner
                        </a>
                    </>
                }
            />
            <GoogleReviewBar />

            {/* ── SECTION: APPLICATIONS ── */}
            <section className="scroll-animate py-12 md:py-16 px-6 bg-tan relative overflow-hidden text-primary">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-10 md:gap-12">
                    <div className="flex flex-col gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline">EVERYDAY APPLICATIONS</span>
                        <h2 className="text-h2 font-heading text-primary">Cotton Dresses for Women <span className="text-highlight">That Fit Real Life</span></h2>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl font-normal">
                            A good dress should feel as beautiful as it looks. Our Batik cotton collection combines breathable fabrics, expressive prints, and versatile silhouettes for effortless comfort and style all day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
                        {[
                            {
                                t: "EVERYDAY WOMEN DRESSES",
                                d: "Choose easy-to-wear cotton styles for daily routines, casual outings, shopping, travel, and relaxed gatherings.",
                                img: "/app_dress_materials.png"
                            },
                            {
                                t: "SUMMER WOMEN DRESSING",
                                d: "Lightweight cotton helps create a cooler, more breathable feel when temperatures rise. Pair expressive Batik prints with relaxed silhouettes for effortless seasonal dressing.",
                                img: "/app_custom.png"
                            },
                            {
                                t: "BOUTIQUE COLLECTIONS",
                                d: "Build distinctive collections with wearable Batik designs that give customers comfort, colour, and an individual sense of style.",
                                img: "/app_boutique.png"
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-5 md:gap-6 group">
                                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[24px] border border-primary/10 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                                    <Image
                                        src={item.img}
                                        alt={item.t}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 text-center items-center px-2">
                                    <h3 className="text-overline">{item.t}</h3>
                                    <p className="text-[13px] md:text-sm leading-relaxed text-muted font-medium">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION: PRODUCT GRID ── */}
            <section id="collection" className="scroll-animate pt-8 md:pt-12 pb-16 md:pb-32 px-6 bg-cream relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline">BATIK DRESS COLLECTION</span>
                        <h2 className="text-h2 font-heading text-primary">Explore Batik <span className="text-highlight">Cotton Dresses</span> <br className="hidden md:block" /> Designed to Be <span className="text-highlight">Worn Again and Again</span></h2>
                        <p className="text-lg md:text-xl text-primary font-normal leading-relaxed mt-2 max-w-2xl text-center">Discover a curated range of Batik dresses created around comfort, versatility, and distinctive print character.</p>
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
                tag="MADE FOR COMFORT"
                title={<>Why Women Choose Cotton Dress Styles for <span className="text-highlight">Everyday Wear?</span></>}
                items={[
                    { title: "Breathable Feel", desc: "Cotton allows airflow around the body, making it a practical choice for warm-weather dressing and everyday comfort." },
                    { title: "Lightweight Movement", desc: "A lightweight cotton dress moves naturally with you, helping you stay comfortable from morning routines to evening plans." },
                    { title: "Soft Against the Skin", desc: "Cotton offers a naturally soft feel that makes everyday dressing more comfortable." },
                    { title: "Easy Everyday Styling", desc: "A versatile Batik dress can be paired with simple footwear, accessories, or layers to create different looks without overcomplicating your wardrobe." }
                ]}
                imageSrc="/best-dresses-for-women-quality.webp"
                featureTag="FABRIC STANDARD"
                featureTitle="Pure Cotton Dress Comfort You Can Feel"
                featureDesc="Our Batik cotton fabric is selected for the everyday experience."
            />

            <PremiumFeatureSection
                wrapperClassName="pt-8 pb-12 md:pt-24 md:pb-16 px-4 md:px-6 bg-cream"
                tag="THE BATIK ADVANTAGE"
                title={<>More Than a <span className="text-highlight">Women's Dress.</span> <br /> A Style Customers <span className="text-highlight">Want to Wear.</span></>}
                description="For a fashion business, product appeal begins with what customers see. But repeat demand often begins with what they feel. Our Batik cotton collection combines visual individuality with everyday wearability, helping retailers and boutiques offer products that feel both distinctive and practical."
                features={[
                    {
                        t: "Distinctive Batik Prints",
                        d: "Traditional print character gives each style a visual identity beyond ordinary everyday clothing.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            </svg>
                        )
                    },
                    {
                        t: "Wearable Silhouettes",
                        d: "Comfort-focused shapes make the collection easier for customers to incorporate into their daily wardrobes.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                            </svg>
                        )
                    },
                    {
                        t: "Versatile Product Range",
                        d: "Build collections around dresses, Batik kurtis, cotton styles, and complementary ethnic wear.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
                            </svg>
                        )
                    },
                    {
                        t: "Retail-Friendly Appeal",
                        d: "Comfort, colour, and distinctive prints give boutique products that can appeal to customers looking for something different from mass-produced fashion.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                        )
                    },
                    {
                        t: "Consistent Fabric Quality",
                        d: "Reliable cotton standards help create a more dependable product experience across your collection.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                            </svg>
                        )
                    },
                    {
                        t: "Collection-Building Potential",
                        d: "Combine individual dress styles with Batik print designs and complementary pieces to create a stronger, more distinctive women’s fashion assortment.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/batik-fabric-image.webp"
                mobileImageSrc="/cotton-dress-material-image.webp"
                quoteTag="STYLE YOUR WAY"
                quoteTitle="From Cotton Dress Material to Ready-to-Wear Batik Style"
                quoteDesc="Comfortable fabric. Distinctive design. More reasons to wear it."
            />



            <HorizontalProcessSection
                wrapperClassName="pt-8 pb-16 md:pt-12 md:pb-24 border-t-0"
                tag="WHOLESALE, MADE SIMPLE"
                title={<>Bring Batik Cotton <span className="text-highlight">Dresses Into</span> <br /> Your Collection Without <span className="text-highlight">the Guesswork</span></>}
                subtitle="Whether you are building a boutique range, expanding a retail collection, or sourcing new women's fashion products, our simple ordering process helps you move from selection to supply with clarity."
                steps={[
                    { s: "01", t: "Browse Batik Designs", d: "Explore our latest women's clothing collections, including Batik suits, fresh Batik prints, cotton styles, and ready-to-order designs." },
                    { s: "02", t: "Select Quantity", d: "Choose the quantity that fits your needs, whether you're ordering for a boutique, retail store, reseller business, marketplace, or personal wardrobe." },
                    { s: "03", t: "Connect via WhatsApp", d: "Share your requirements with our team and get product availability, pricing, and order guidance directly." },
                    { s: "04", t: "Receive Your Quote", d: "Get clear pricing based on your selected styles, quantities, and order requirements." },
                    { s: "05", t: "Fast Dispatch", d: "Confirm your order and receive your selected collection through trusted delivery partners across India." }
                ]}
                ctaText="Start Your Order on WhatsApp"
                whatsappLink={WA}
            />


            {/* ── SECTION: Navigation / Next Step ── */}
            <section className="scroll-animate py-12 md:py-16 px-6 bg-tan relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-overline">NEXT STEP</span>
                        <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary leading-tight">Explore More <span className="text-highlight">Batik Dress</span> <br className="hidden md:block" /> Collections for <span className="text-highlight">Women</span></h2>
                        <p className="text-body1 mt-3 text-center w-full max-w-xl mx-auto">Discover more Batik styles for modern wardrobes, retail collections, and growing fashion businesses.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <a href="/batik-prints-womens-clothing" className="group relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                                <Image src="/new-batik-print-category-image.webp" alt="Batik Prints Women’s Clothing" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">Batik Prints Women’s Clothing</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-sm text-primary/90 font-medium leading-relaxed">Explore expressive Batik prints, breathable cotton styles, and versatile women's clothing designed for everyday and occasion wear.</p>
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
                                <p className="text-sm text-primary/90 font-medium leading-relaxed">Discover comfortable Batik suits, kurtis, dresses, and ethnic styles created for women who want traditional character with everyday wearability.</p>
                                <div className="flex items-center gap-2 text-primary group-hover:text-accent font-body font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-500 mt-auto pt-4">
                                    <span>Explore Collection</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/new-batik-prints-suits" className="group relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl md:shadow-2xl transition-all hover:-translate-y-2 border border-primary/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                                <Image src="/gallery_arrival.png" alt="New Arrival" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">New Arrival</h3>
                                </div>
                            </div>
                            <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-6 flex-grow">
                                <p className="text-sm text-primary/90 font-medium leading-relaxed">Discover the latest Batik prints, fresh colours, and contemporary women's fashion styles added to the collection.</p>
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
                                <p className="text-sm text-primary/90 font-medium leading-relaxed">Browse wholesale Batik clothing collections designed for boutiques, resellers, retailers, and growing fashion businesses.</p>
                                <div className="flex items-center gap-2 text-primary group-hover:text-accent font-body font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-500 mt-auto pt-4">
                                    <span>Explore Collection</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: EDITORIAL CORNER ── */}
            <section className="scroll-animate pt-16 pb-8 md:pt-24 md:pb-8 px-4 md:px-6 bg-cream">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-5xl mx-auto w-full">
                        <span className="text-overline">FASHION & FABRIC JOURNAL</span>
                        <h2 className="text-h2 font-heading text-primary leading-tight">Trending Dress for Women in <br className="block md:hidden" /> <span className="text-highlight">Batik Handprinted Style</span></h2>
                        <div className="w-16 h-[2px] bg-secondary mt-2"></div>
                        <p className="text-lg md:text-xl text-primary leading-relaxed mt-2">
                            The best dress is one you can live in. Choose breathable fabric, comfortable fits, colours you love, and Batik prints that add personality. Lightweight cotton makes everyday dressing effortless, especially in warmer climates.
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
                                    <span className="text-overline">
                                        {post.cat} &nbsp;&mdash;&nbsp; {post.date}
                                    </span>

                                    <h4 className="text-2xl md:text-3xl font-heading font-normal text-primary decoration-primary/30 underline-offset-4 group-hover:underline transition-all duration-300">
                                        {post.title}
                                    </h4>

                                    <p className="text-body2 text-primary line-clamp-2">
                                        {post.d}
                                    </p>

                                    {/* Minimalist Read More */}
                                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mt-2 group-hover:text-accent transition-colors duration-300">
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
                    q: "What makes a batik cotton dress for women comfortable for everyday wear?",
                    a: "Breathable cotton, lightweight construction, a comfortable fit, and an easy silhouette can make everyday dressing more comfortable. Batik prints add visual character while keeping the overall style versatile."
                },
                {
                    q: "Is Batik cotton suitable for summer?",
                    a: "Yes. Lightweight cotton is naturally breathable and can be a practical choice for warm-weather dressing. A cotton summer dress for women can provide an easy combination of airflow, softness, and relaxed style."
                },
                {
                    q: "Can I wear a Batik dress as a night dress?",
                    a: "Some relaxed cotton styles can work well for home and nighttime wear. A cotton night dress for women should prioritise softness, ease of movement, and a comfortable silhouette."
                },
                {
                    q: "What is the difference between a Batik dress and regular cotton clothing?",
                    a: "The key difference is the design character. Batik combines cotton comfort with distinctive patterns and traditional print techniques, giving everyday clothing a more individual visual identity."
                },
                {
                    q: "Can I buy cotton dress material instead of a ready-made dress?",
                    a: "Yes. Cotton dress material for women can give boutiques, designers, and customers greater flexibility to create their preferred silhouettes, sizes, and styles."
                },
                {
                    q: "Are Batik dresses suitable for plus-size women?",
                    a: "Yes. Batik can be used across different silhouettes and sizes. Comfortable cuts, breathable cotton, and thoughtful placement of Batik print designs can help create appealing plus-size styles."
                },
                {
                    q: "How can I style a Batik cotton dress?",
                    a: "Keep the styling simple. Pair the dress with comfortable flats or sandals for everyday wear, or add jewellery and structured accessories when you want a more polished look."
                },
                {
                    q: "Can retailers order Batik cotton dresses wholesale?",
                    a: "Yes. Retailers, boutiques, and resellers can explore available Batik collections and connect with the team for product availability, quantities, pricing, and wholesale ordering guidance."
                }
            ]} />
        </div>
    );
}
