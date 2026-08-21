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
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import ScrollIndicator from "@/modules/user/components/ScrollIndicator";
import CategoryHeroBanner from "@/modules/user/components/CategoryHeroBanner";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Batik Prints Women’s Clothing | Cotton Styles & Batik Suits",
    description: "Batik prints for women’s clothing in breathable 60x60 cotton. Explore batik suits, kurtis, dresses, ethnic styles and wholesale collections.",
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts({ page = "1", search = "", sort = "", minPrice = "", maxPrice = "" }: any) {
    try {
        const queryParams = new URLSearchParams({
            limit: "12",
            page: page,
            category: "Batik Cotton Dress for Women,Batik Prints Women Clothing,Batik Cotton",
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
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title><span className='text-accent'>Batik Printed Cotton Cloth</span> & <span className='text-accent'>Cotton Fabric Online</span></title>
            <meta name="description" content="Shop premium batik printed cotton cloth, printed cotton fabric, and women dress material online. Breathable cotton fabric for daily wear and women fashion." />

            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />
            <ScrollObserver />
            <CategoryHeroBanner
                tagline="Trending Batik Prints Women Clothinges"
                title={
                    <>
                        Batik Prints for Women’s <br className="hidden md:block" /> Clothing, Made for <br className="hidden md:block" /><span className="text-highlight">Everyday Life</span>
                    </>
                }
                description="Discover distinctive batik prints, breathable cotton cloth comfort, and versatile women’s styles made for everyday living."
                imageSrc="/cotton_cloth_hero_matched.png"
                imageAlt="Premium Batik Prints Women Clothing Collection"
                bgClassName="bg-tan"
                textColor="text-primary"
                buttons={
                    <>
                        <a href="#collection" className="btn-primary rounded-full shadow-sm">
                            Shop Batik Suits
                        </a>
                        <a href={WA} target="_blank" rel="noreferrer" className="btn-secondary rounded-full">
                            Become a Wholesale Partner
                        </a>
                    </>
                }
            />
            <GoogleReviewBar />

            {/* ── SECTION: APPLICATIONS ── */}
            <section id="applications" className="scroll-animate py-12 md:py-16 px-6 bg-tan relative overflow-hidden text-primary">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-10 md:gap-12">
                    <div className="flex flex-col gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline">Applications</span>
                        <h2 className="text-h2 font-heading text-primary">Batik Prints for Every <span className="text-highlight">Women’s Clothing Style</span></h2>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl font-normal">
                            Breathable batik-print fabric made for versatile cotton dresses for women, kurtis, suits, and custom fashion creations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
                        {[
                            {
                                t: "DRESS MATERIALS",
                                d: "Create comfortable batik print kurtis, suits, and everyday cotton dresses with breathable fabric.",
                                img: "/app_dress_materials.png"
                            },
                            {
                                t: "BOUTIQUE COLLECTIONS",
                                d: "Build distinctive womens clothing collections with versatile batik prints and easy-to-style cotton designs.",
                                img: "/app_boutique.png"
                            },
                            {
                                t: "CUSTOM DESIGNS",
                                d: "Create personalized suits, blouse styles, plus-size looks, and seasonal outfits from versatile Batik Cotton Dress for Women.",
                                img: "/app_custom.png"
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
            <section id="collection" className="scroll-animate py-16 md:py-32 px-6 bg-cream relative overflow-hidden text-primary">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline">Batik Cotton Dress for Women Library</span>
                        <h2 className="text-h3 font-heading text-primary">Explore Signature Batik Prints for <br className="md:hidden" /> <span className="text-highlight">Women Clothes</span></h2>
                        <p className="text-lg md:text-xl text-foreground font-normal leading-relaxed mt-2 w-full text-center">
                            Discover expressive batik prints, distinctive colours, and versatile styles designed for modern women’s wardrobes.
                        </p>
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
                tag="Made for Comfort"
                title={<>Why Women Choose Batik Prints Women Clothing for Everyday <span className="text-highlight">Comfort</span></>}
                items={[
                    "<span class='block font-semibold mb-0.5 text-[15px]'>Breathable Construction</span><span class='block text-sm font-normal opacity-85 leading-snug'>Helps maintain airflow and comfort in warm weather.</span>",
                    "<span class='block font-semibold mb-0.5 text-[15px]'>Lightweight Feel</span><span class='block text-sm font-normal opacity-85 leading-snug'>Soft, easy to wear, and suitable for everyday styling.</span>",
                    "<span class='block font-semibold mb-0.5 text-[15px]'>Durable Quality</span><span class='block text-sm font-normal opacity-85 leading-snug'>Built to retain its comfort and character through regular wear.</span>",
                    "<span class='block font-semibold mb-0.5 text-[15px]'>Soft & Skin-Friendly</span><span class='block text-sm font-normal opacity-85 leading-snug'>Smooth against the skin, offering comfortable wear all day.</span>"
                ]}
                imageSrc="/advantage_batik_cotton.png"
                mobileImageSrc="/advantage_batik_cotton.png"
                featureTag="FABRIC STANDARD"
                featureTitle="Pure Cotton 60x60"
                featureDesc="Made from pure 60x60 cotton, our fabric is lightweight, breathable, soft to the touch, and durable enough for comfortable everyday batik womens clothing."
            />

            <PremiumFeatureSection
                tag="THE AQSHA ADVANTAGE"
                title={<>Premium Quality <span className="text-highlight">That Works</span> <br /> for Women’s <span className="text-highlight">Clothing Business</span></>}
                features={[
                    {
                        t: "Consistent Quality",
                        d: "Reliable standards across fabric, prints, and finishing help you maintain a dependable collection.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                            </svg>
                        )
                    },
                    {
                        t: "Ready Stock",
                        d: "Access selected batik styles with ready availability for faster retail and wholesale ordering.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
                            </svg>
                        )
                    },
                    {
                        t: "Wholesale Reliability",
                        d: "Designed for boutiques, resellers, and fashion businesses seeking consistent bulk supply and dependable quality.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                            </svg>
                        )
                    },
                    {
                        t: "Strong Resale Potential",
                        d: "Distinctive designs and wearable styles give retailers products suited to varied customer preferences.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Design Variety",
                        d: "Choose from expressive batik designs, versatile silhouettes, and styles suited to different wardrobes and occasions.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Boutique Ready",
                        d: "Build distinctive collections with carefully selected batik suits, kurtis, dresses, and women’s clothing.",
                        c: "text-brand",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/premium_fabric_hero.png"
                mobileImageSrc="/premium_fabric_hero.png"
                quote="Our premium Batik Prints Women Clothing offers the perfect canvas for your fashion creations, blending traditional art with superior comfort."
            />
            <HowToOrderSection
                tag="Wholesale, Made Simple"
                title={<>How to Order Batik <span className="text-highlight">Cloth Online</span></>}
                subtitle="From choosing your batik suits online to receiving ready-to-sell collections for women’s clothing, our simple process keeps every wholesale order smooth, clear, and reliable."
                whatsappLink={WA}
            />

            {/* ── SECTION: NEXT STEPS ── */}
            <section className="scroll-animate py-16 md:py-32 px-6 bg-tan overflow-hidden text-primary">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-overline">NEXT STEP</span>
                        <h2 className="text-h2 font-heading text-primary">Explore Batik Prints for <span className="text-highlight">Women’s Clothing</span></h2>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-2">
                            Explore batik prints across ethnic women wear, new arrivals, and wholesale collections created for modern women’s wardrobes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10">
                        {[
                            {
                                t: "Ethnic Wear for Women",
                                d: "Explore distinctive batik prints, breathable cotton styles, and timeless silhouettes made for everyday and occasion wear.",
                                l: "/batik-cotton-dress-for-women",
                                img: "/gallery_explore.png",
                                tag: "Category"
                            },
                            {
                                t: "Batik Cotton Dress for Women",
                                d: "Soft, breathable batik cotton made for effortless everyday style, comfort, and graceful dressing.",
                                l: "/batik-prints-womens-clothing",
                                img: "/gallery_arrival.png",
                                tag: "Collection"
                            },
                            {
                                t: "Wholesale",
                                d: "Browse wholesale Batik Prints Women Clothinging collections designed for boutiques, resellers, and growing women fashion businesses.",
                                l: "/wholesale-batik-women-dresses",
                                img: "/gallery_wholesale.png",
                                tag: "Inquiry"
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-center">
                                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-white leading-tight mb-2">{item.t}</h3>
                                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6">{item.d}</p>

                                    <div className="flex items-center gap-2 mt-2 bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-white font-bold text-[10px] md:text-xs uppercase tracking-widest overflow-hidden">
                                        <span>Explore Collection</span>
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
            <section className="scroll-animate py-16 md:py-24 px-4 md:px-6 bg-cream">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-5xl mx-auto w-full">
                        <span className="text-overline">FASHION & FABRIC JOURNAL</span>
                        <h2 className="text-h2 font-heading text-primary leading-tight">Trending Clothes for Women in <span className="text-highlight">Batik Style Guide</span></h2>
                        <div className="w-16 h-[2px] bg-secondary mt-2"></div>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-2">
                            Explore practical womens clothing style ideas, seasonal inspiration, and fresh trends for women choosing comfortable Batik Prints Women Clothinging for everyday life.
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

                                    <h4 className="text-2xl md:text-3xl font-heading font-medium text-primary decoration-primary/30 underline-offset-4 group-hover:underline transition-all duration-300">
                                        {post.title}
                                    </h4>

                                    <p className="text-body2 line-clamp-2">
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
                    q: "What makes batik suitable for daily wear?",
                    a: "Batik made from breathable 60x60 cotton offers lightweight comfort for everyday dressing. Its distinctive batik design also adds character to casual suits, kurtis, and other womens clothing styles."
                },
                {
                    q: "Can Batik Prints Women Clothinging work as gym clothes for women or yoga wear?",
                    a: "Lightweight cotton batik can work for gentle workouts, stretching, yoga, and low-impact movement. Its breathable construction helps provide airflow and comfort, although it is not intended to replace performance-specific activewear."
                },
                {
                    q: "Is Batik Prints Women Clothing suitable for plus size womens clothing?",
                    a: "Yes. Batik Prints Women Clothinging can be created in comfortable, inclusive silhouettes for plus size womens clothing. Relaxed cuts, breathable cotton, and thoughtfully placed batik print designs can provide both ease and style."
                },
                {
                    q: "Which batik colours work best for formal clothes for women?",
                    a: "Deep indigo, navy, black, maroon, charcoal, earthy brown, and muted green are excellent choices for formal clothes for women. Refined batik print designs in these tones can create an elegant look without feeling overly casual."
                },
                {
                    q: "Can batik suits be worn as summer clothes for women?",
                    a: "Yes. Lightweight 60x60 cotton makes batik suits a comfortable choice for summer clothes for women. Breathable fabric and easy silhouettes can help you stay comfortable while enjoying expressive batik prints during warmer days."
                }
            ]} />
        </div>
    );
}
