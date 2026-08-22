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
import { Metadata } from 'next';
import ConsistentCTA from "@/modules/user/components/ConsistentCTA";


export const metadata: Metadata = {
    title: "Ethnic Wear for Women | Batik Dresses, Kurtis & Suits",
    description: "Shop ethnic wear for women featuring Batik dresses, kurtis, cotton suits and traditional-inspired styles for everyday, festive and occasion wear."
};

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

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Ethnic%20Wear";

export default async function BatikSuitsPage({ searchParams }: { searchParams: Promise<any> }) {
    const resolvedParams = await searchParams;
    const { products, totalPages, currentPage } = await getProducts(resolvedParams || {});
    const heroBannerUrl = await getHeroBanner();

    const collectionHighlights = [
        {
            t: "Everyday Ethnic Wear",
            d: "Choose comfortable Batik dresses, kurtis, and suit styles for shopping, travel, casual outings, workdays, and relaxed social occasions.",
            img: "/cotton-kurti-for-women-image.webp"
        },
        {
            t: "Occasion Dressing",
            d: "Create a more expressive look with distinctive Batik designs, elegant silhouettes, and accessories that complement your personal style.",
            img: "/gallery_arrival.png"
        },
        {
            t: "Boutique & Retail",
            d: "Explore distinctive ethnic styles that can help boutiques and resellers build collections with stronger visual identity and everyday wearability.",
            img: "/cat_wholesale.webp"
        }
    ];

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />

            <ScrollObserver />
            <CategoryHeroBanner
                tagline="TRADITION, REIMAGINED"
                title={
                    <>
                        Ethnic Wear for Women <br className="hidden md:block" /> That Feels Traditional <br className="hidden md:block" />{" "}<span className='text-highlight'>Yet Effortlessly Modern</span>
                    </>
                }
                description="Discover Batik ethnic wear for women designed to bring traditional character into everyday wardrobes. Explore breathable cotton dresses, expressive Batik kurtis, comfortable suit sets, and occasion-ready styles created for women who want culture, comfort, and individuality in every look."
                imageSrc="/batik_suits_hero_category.png"
                imageAlt="Ethnic Wear for Women Collection"
                bgClassName="bg-tan"
                textColor="text-primary"
                buttons={
                    <>
                        <a href="#collection" className="bg-highlight hover:bg-highlight/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                            Shop Ethnic Wear
                        </a>
                        <a href={WA} target="_blank" rel="noreferrer" className="border border-primary/15 hover:border-highlight text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent hover:text-highlight">
                            Become a Wholesale Partner
                        </a>
                    </>
                }
            />
            <GoogleReviewBar />

            {/* ── SECTION: EVERYDAY ETHNIC STYLE + PRODUCT GRID ── */}
            <section id="collection" className="pt-10 md:pt-16 pb-20 md:pb-32 px-6 bg-cream relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center mx-auto max-w-3xl">
                        <span className="text-overline">Everyday Ethnic Style</span>
                        <h2 className="text-h2">Indian Ethnic Wear for Women <br className="hidden md:block" /> Designed for{" "}<span className="text-highlight">Real Life</span></h2>
                        <p className="text-body1">Our Batik suits collection brings together comfortable silhouettes, handcrafted-inspired prints, and versatile styles that can move naturally from everyday routines to festive gatherings.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
                        {collectionHighlights.map((item, i) => (
                            <div key={i} className="flex flex-col gap-5 md:gap-6 group">
                                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[24px] border border-border shadow-sm group-hover:shadow-xl transition-shadow duration-500">
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
                                    <p className="text-body2 text-muted">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <span className="text-overline">Batik Ethnic Collection</span>
                        <h2 className="text-h2 mt-4 max-w-3xl mx-auto">Explore Ethnic Wear for Women <br className="hidden md:block" /> Made to Be Worn{" "}<span className="text-highlight">Beyond One Occasion</span></h2>
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
                tag="THE ADVANTAGE"
                title={<>Batik Gives Everyday Ethnic Wear a More <br className="hidden md:block" /> <span className="text-highlight">Distinctive Identity</span></>}
                items={[
                    "Traditional Character",
                    "Everyday Comfort",
                    "Versatile Styling Options",
                    "Premium Cotton Feel"
                ]}
                imageSrc="/cotton-dress-material-image.webp"
                featureTag="FABRIC MEETS HERITAGE"
                featureTitle="Traditional Character. Everyday Comfort."
                featureDesc="The right ethnic outfit should feel traditional, comfortable, and easy to wear again. Explore Batik dresses, kurtis, cotton styles, and suit sets made for effortless everyday style."
            />

            <PremiumFeatureSection
                tag="FROM DAILY TO DRESSED-UP"
                title={<>One Ethnic Wardrobe. More Ways to <span className="text-highlight">Wear It.</span></>}
                description="Ethnic wear does not have to mean one fixed style. The right collection gives you options."
                features={[
                    {
                        t: "For Everyday Wear",
                        d: "Choose lightweight Batik kurtis, relaxed dresses, and comfortable cotton styles for routines that demand ease.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        )
                    },
                    {
                        t: "For Work & Casual Meetings",
                        d: "Pair a structured Batik kurti or coordinated suit set with simple accessories for a polished ethnic look.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        )
                    },
                    {
                        t: "For Festive Occasions",
                        d: "Select richer Batik prints, expressive colours, and elegant silhouettes when you want your ethnic look to feel more celebratory.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            </svg>
                        )
                    },
                    {
                        t: "For Weddings & Gatherings",
                        d: "Wedding ethnic wear for women can become more memorable when traditional-inspired prints are paired with refined silhouettes and thoughtful accessories.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        )
                    },
                    {
                        t: "For Summer Days",
                        d: "Choose breathable cotton ethnic styles when comfort matters as much as appearance.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        )
                    },
                    {
                        t: "Simple Styling Formula",
                        d: "Batik Kurti + Straight Pants + Flats. A practical combination for everyday errands, workdays, and casual meetings.",
                        c: "text-highlight",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/clean_slider_1.png"
                quoteTag="STYLE WITH PURPOSE"
                quoteTitle="From Traditional Ethnic Wear to Contemporary Women's Fashion"
                quoteDesc="Modern ethnic dressing is about choosing pieces that work with your lifestyle."
            />


            <HowToOrderSection
                tag="WHOLESALE OPPORTUNITY"
                title={<>Bring Distinctive Indian <span className='text-highlight'>Ethnic Wear</span> <br className="hidden md:block" /> for Women Into Your Collection</>}
                subtitle="For boutiques, resellers, and retailers, Batik ethnic collections offer distinctive designs customers can wear and love again. Build a more memorable women’s fashion assortment with traditional character and everyday appeal."
                steps={[
                    {
                        s: "01",
                        t: "Explore the Collection",
                        d: "Browse Batik dresses, kurtis, suit designs, cotton styles, and new ethnic collections.",
                        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>,
                    },
                    {
                        s: "02",
                        t: "Select Your Styles",
                        d: "Choose the products, designs, and quantities that fit your business requirements.",
                        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" /></svg>,
                    },
                    {
                        s: "03",
                        t: "Connect on WhatsApp",
                        d: "Share your requirements directly with the team for availability, pricing, and ordering guidance.",
                        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" /></svg>,
                    },
                    {
                        s: "04",
                        t: "Confirm Your Collection",
                        d: "Review your selected styles and receive a clear quotation based on your requirements.",
                        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2 2 0 0 0-2.8 0L2.7 5.9a2 2 0 0 0 0 2.8L7 13" /><path d="m19 11-4 4" /><path d="m21 15-4.5 4.5a2 2 0 0 1-2.8 0L10 15.8" /><circle cx="16" cy="16" r="2" /></svg>,
                    },
                    {
                        s: "05",
                        t: "Move From Selection to Supply",
                        d: "Confirm your order and receive your collection through available delivery arrangements.",
                        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>,
                    }
                ]}
                ctaText="Start Your Wholesale Order"
                whatsappLink={WA}
            />

            {/* ── SECTION: CONTINUE EXPLORING ── */}
            <section className="pt-8 md:pt-12 pb-8 md:pb-12 px-6 bg-cream relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-3xl mx-auto">
                        <span className="text-overline">Next Step</span>
                        <h2 className="text-h2">Explore More <span className="text-highlight">Ethnic Wear</span> <br className="hidden md:block" /> Collections for Women</h2>
                        <p className="text-body1">Explore Batik styles across everyday clothing, ethnic wardrobes, new arrivals, and wholesale collections.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Batik Prints Women Clothing", desc: "Explore expressive Batik prints, comfortable cotton styles, and versatile women's clothing created for everyday and occasion wear.", link: "/batik-prints-womens-clothing", img: "/cat_batik_fabric.webp" },
                            { name: "Batik Cotton Dress for Women", desc: "Discover soft, breathable Batik cotton dresses designed for effortless everyday comfort and graceful styling.", link: "/batik-cotton-dress-for-women", img: "/gallery_office.png" },
                            { name: "New Arrival", desc: "Discover the latest Batik prints, fresh colours, and contemporary women's clothing styles added to the collection.", link: "/new-batik-prints-suits", img: "/gallery_arrival.png" },
                            { name: "Wholesale", desc: "Browse wholesale Batik clothing collections created for boutiques, resellers, retailers, and growing fashion businesses.", link: "/wholesale-batik-women-dresses", img: "/cat_wholesale.webp" }
                        ].map((cat, i) => (
                            <a key={i} href={cat.link} className="group relative h-[300px] rounded-[24px] overflow-hidden shadow-xl hover:-translate-y-2 transition-all border border-border">
                                <Image src={cat.img} alt={cat.name} layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[2s] brightness-75 group-hover:brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                                    <h3 className="font-heading text-xl font-semibold text-surface leading-tight">{cat.name}</h3>
                                    <p className="text-surface/90 text-xs font-body leading-relaxed line-clamp-3">{cat.desc}</p>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-highlight font-bold mt-2 flex items-center gap-2 group-hover:text-surface transition-colors">
                                        Explore Collection <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION: BATIK JOURNAL (BLOG) ── */}
            <section className="pt-8 md:pt-12 pb-16 md:pb-24 px-6 bg-cream">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-3xl mx-auto">
                        <span className="text-overline">Fashion & Fabric Journal</span>
                        <h2 className="text-h2">The Ethnic Wear <span className="text-highlight">Style Guide</span> for Women</h2>
                        <p className="text-body1 mt-2">Explore insights on Indian ethnic wear, Batik dresses, printed kurtis, cotton suit sets, and modern ethnic styles shaping today’s women’s fashion.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
                        {[
                            { slug: "the-art-of-hand-blocked-batik", title: "The Art of Hand-Blocked Batik", date: "May 15, 2024", cat: "Craftsmanship", img: "/journal_craftsmanship.png" },
                            { slug: "batik-fashion-trends-2024", title: "Batik Fashion Trends 2024", date: "June 2, 2024", cat: "Fashion", img: "/journal_fashion.png" },
                            { slug: "wholesale-success-stories", title: "Wholesale Success Stories", date: "June 10, 2024", cat: "Business", img: "/journal_business.png" }
                        ].map((post, i) => (
                            <a key={i} href={`/blog/${post.slug}`} className={`group flex flex-col md:flex-col gap-3 md:gap-6 bg-surface p-3 md:p-6 rounded-[24px] md:rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-border ${i === 2 ? "col-span-2 md:col-span-1 flex-row md:flex-col" : ""}`}>
                                <div className={`relative ${i === 2 ? "w-1/3 md:w-full md:aspect-[4/3] h-24 md:h-auto" : "aspect-[4/3] h-auto"} rounded-[16px] md:rounded-[32px] overflow-hidden`}>
                                    <Image src={post.img} alt={post.title} layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className={`flex flex-col gap-1 px-1 md:px-4 pb-1 md:pb-4 flex-1 justify-center ${i === 2 ? "pl-3 md:pl-4" : ""}`}>
                                    <span className="text-overline text-[9px] md:text-[10px]">{post.cat}</span>
                                    <h4 className="text-h4 font-bold leading-tight mt-1 md:mt-2 group-hover:text-brand transition-colors">{post.title}</h4>
                                    <div className="flex items-center justify-between mt-auto md:mt-6 pt-2 md:pt-0">
                                        <span className="text-body3">{post.date}</span>
                                        <div className="hidden md:flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
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

            <FAQ items={[
                { q: "What is ethnic wear for women?", a: "Ethnic wear for women includes clothing inspired by traditional regional styles, prints, silhouettes, and cultural design elements. It can include dresses, kurtis, suit sets, and other Indian-inspired women's clothing." },
                { q: "Is Batik suitable for Indian ethnic wear for women?", a: "Yes. Batik brings distinctive print character to ethnic clothing, while cotton-based styles provide practical comfort for everyday dressing." },
                { q: "What Batik ethnic wear is best for everyday use?", a: "Batik kurtis, cotton Batik dresses, lightweight suit sets, and relaxed silhouettes are practical choices for comfortable everyday ethnic dressing." },
                { q: "Where can I buy ethnic wear for women online?", a: "You can explore Batik ethnic wear collections for women's suits online from No. 1 Ujjain Batik manufacturer, Aqsha Batik Suits, and discover dresses, kurtis, suit sets, and other ethnic styles suited to your preferred design and occasion." },
                { q: "Can I buy Batik ethnic wear wholesale?", a: "Yes. Boutiques, retailers, resellers, and fashion businesses can explore available Batik collections and contact the team for product availability, quantities, pricing, and wholesale ordering." }
            ]} />

            {/* ── CONSISTENT CTA ── */}
            <ConsistentCTA />

        </div>
    );
}
