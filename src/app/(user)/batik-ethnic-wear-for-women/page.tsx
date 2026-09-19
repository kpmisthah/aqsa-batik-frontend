import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";

import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import AdvantageSection from "@/modules/user/components/AdvantageSection";
import HowToOrderSection from "@/modules/user/components/HowToOrderSection";
import ProductFilterLayout from "@/modules/user/components/ProductFilterLayout";
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import { Metadata } from 'next';
import ConsistentCTA from "@/modules/user/components/ConsistentCTA";
import { getPageContent } from "@/utils/getPageContent";
import { renderWithHighlight } from "@/utils/textHighlight";


export const metadata: Metadata = {
    title: "Ethnic Wear for Women | Batik Dresses, Kurtis & Suits",
    description: "Shop ethnic wear for women featuring Batik dresses, kurtis, cotton suits and traditional-inspired styles for everyday, festive and occasion wear."
};

const DEFAULT_ETHNIC_HERO = {
    overline: "TRADITION, REIMAGINED",
    heading: "Ethnic Wear for Women\nThat Feels Traditional\nYet Effortlessly Modern",
    highlightWord: "Yet Effortlessly Modern",
    paragraph: "Discover Batik ethnic wear for women designed to bring traditional character into everyday wardrobes. Explore breathable cotton dresses, expressive Batik kurtis, comfortable suit sets, and occasion-ready styles created for women who want culture, comfort, and individuality in every look.",
    imageDesktop: "/Hero Banner/i.png",
    imageMobile: "/Hero Banner/mobile-version/img3.png",
    ctaLabel1: "Shop Ethnic Wear",
    ctaLabel2: "Become a Wholesale Partner",
};

const DEFAULT_ETHNIC_COLLECTION = {
    overline1: "Everyday Ethnic Style",
    heading1: "Indian Ethnic Wear for Women\nDesigned for Real Life",
    highlightWord1: "Real Life",
    paragraph1: "Our Batik suits collection brings together comfortable silhouettes, handcrafted-inspired prints, and versatile styles that can move naturally from everyday routines to festive gatherings.",
    overline2: "Batik Ethnic Collection",
    heading2: "Explore Ethnic Wear for Women\nMade to Be Worn Beyond One Occasion",
    highlightWord2: "Beyond One Occasion",
    paragraph2: "The right ethnic outfit should feel traditional, comfortable, and easy to wear again. Explore Batik dresses, kurtis, cotton styles, and suit sets made for effortless everyday style.",
    highlights: [
        { t: "Everyday Ethnic Wear", d: "Choose comfortable Batik dresses, kurtis, and suit styles for shopping, travel, casual outings, workdays, and relaxed social occasions.", img: "/ethnic/ethnic wear for women.webp" },
        { t: "Occasion Dressing", d: "Create a more expressive look with distinctive Batik designs, elegant silhouettes, and accessories that complement your personal style.", img: "/ethnic/ethnic wear for women (1).webp" },
        { t: "Boutique & Retail", d: "Explore distinctive ethnic styles that can help boutiques and resellers build collections with stronger visual identity and everyday wearability.", img: "/ethnic/ethnic wear for women (2).webp" },
    ],
};

const DEFAULT_ETHNIC_ADVANTAGE = {
    tag: "WHY BATIK WORKS",
    heading: "Why Choose Batik Ethnic Wear for Women?",
    highlightWord: "Ethnic Wear",
    description: "The best ethnic wear balances how you look with how you feel. Batik makes that balance easier by combining expressive design with practical silhouettes and comfortable fabrics.",
    image: "/ethnic/indian ethnic wear for women.webp",
    featureTag: "FABRIC MEETS HERITAGE",
    featureTitle: "Traditional Character. Everyday Comfort.",
    featureDesc: "The right ethnic outfit should feel traditional, comfortable, and easy to wear again. Explore Batik dresses, kurtis, cotton styles, and suit sets made for effortless everyday style.",
    items: [
        { title: "Distinctive Batik Design", desc: "A thoughtfully designed Batik print can instantly give an outfit more personality without relying on excessive styling." },
        { title: "Comfortable Cotton", desc: "Cotton ethnic wear offers a breathable, practical option for women who want comfort throughout the day." },
        { title: "Versatile Silhouettes", desc: "From Batik kurtis to dresses and suit sets, versatile silhouettes make it easier to build multiple looks from one collection." },
        { title: "Made for Different Occasions", desc: "The right Batik style can work for everyday wear, summer dressing, casual gatherings, festive occasions, and selected formal settings." },
    ],
};

const ADVANTAGE_ICONS = [
    "/ICONS/distinctive-batik-design-icon.png",
    "/ICONS/comfortable-cotton-icon.png",
    "/ICONS/versatile-silhouettes-icon.png",
    "/ICONS/different-occasions-icon.png",
];

const DEFAULT_ETHNIC_PREMIUM_FEATURES = {
    tag: "FROM DAILY TO DRESSED-UP",
    heading: "One Ethnic Wardrobe. More Ways to Wear It.",
    highlightWord: "Wear It.",
    description: "Ethnic wear does not have to mean one fixed style. The right collection gives you options.",
    image: "/ethnic/ethnic wear for women (3).webp",
    quoteTag: "STYLE WITH PURPOSE",
    quoteTitle: "From Traditional Ethnic Wear to Contemporary Women's Fashion",
    quoteDesc: "Modern ethnic dressing is about choosing pieces that work with your lifestyle.",
    features: [
        { t: "For Everyday Wear", d: "Choose lightweight Batik kurtis, relaxed dresses, and comfortable cotton styles for routines that demand ease." },
        { t: "For Work & Casual Meetings", d: "Pair a structured Batik kurti or coordinated suit set with simple accessories for a polished ethnic look." },
        { t: "For Festive Occasions", d: "Select richer Batik prints, expressive colours, and elegant silhouettes when you want your ethnic look to feel more celebratory." },
        { t: "For Weddings & Gatherings", d: "Wedding ethnic wear for women can become more memorable when traditional-inspired prints are paired with refined silhouettes and thoughtful accessories." },
        { t: "For Summer Days", d: "Choose breathable cotton ethnic styles when comfort matters as much as appearance." },
        { t: "Simple Styling Formula", d: "Batik Kurti + Straight Pants + Flats. A practical combination for everyday errands, workdays, and casual meetings." },
    ],
};

const PREMIUM_FEATURE_ICONS = [
    "/ICONS/everyday-wear-icon.png",
    "/ICONS/work-meetings-icon.png",
    "/ICONS/festive-occasions-icon.png",
    "/ICONS/weddings-gatherings-icon.png",
    "/ICONS/summer-days-icon.png",
    "/ICONS/simple-styling-icon.png",
];

const DEFAULT_ETHNIC_HOW_TO_ORDER = {
    tag: "WHOLESALE OPPORTUNITY",
    heading: "Bring Distinctive Indian Ethnic Wear\nfor Women Into Your Collection",
    highlightWord: "Ethnic Wear",
    subtitle: "For boutiques, resellers, and retailers, Batik ethnic collections offer distinctive designs customers can wear and love again. Build a more memorable women's fashion assortment with traditional character and everyday appeal.",
    ctaText: "Start Your Wholesale Order",
};

const DEFAULT_ETHNIC_FAQ = [
    { q: "What is ethnic wear for women?", a: "Ethnic wear for women includes clothing inspired by traditional regional styles, prints, silhouettes, and cultural design elements. It can include dresses, kurtis, suit sets, and other Indian-inspired women's clothing." },
    { q: "Is Batik suitable for Indian ethnic wear for women?", a: "Yes. Batik brings distinctive print character to ethnic clothing, while cotton-based styles provide practical comfort for everyday dressing." },
    { q: "What Batik ethnic wear is best for everyday use?", a: "Batik kurtis, cotton Batik dresses, lightweight suit sets, and relaxed silhouettes are practical choices for comfortable everyday ethnic dressing." },
    { q: "Where can I buy ethnic wear for women online?", a: "You can explore Batik ethnic wear collections for women's suits online from No. 1 Ujjain Batik manufacturer, Aqsha Batik Suits, and discover dresses, kurtis, suit sets, and other ethnic styles suited to your preferred design and occasion." },
    { q: "Can I buy Batik ethnic wear wholesale?", a: "Yes. Boutiques, retailers, resellers, and fashion businesses can explore available Batik collections and contact the team for product availability, quantities, pricing, and wholesale ordering." },
];

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts({ page = "1", search = "", sort = "", minPrice = "", maxPrice = "" }: any) {
    try {
        const queryParams = new URLSearchParams({
            limit: "12",
            page: page,
            category: "Ethnic Wear for Women",
            ...(search && { search }),
            ...(sort && { sort }),
            ...(minPrice && { minPrice }),
            ...(maxPrice && { maxPrice }),
        });

        const res = await fetch(`${API_BASE}/products?${queryParams.toString()}`, { next: { revalidate: 60 } });
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

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Ethnic%20Wear";

export default async function BatikSuitsPage({ searchParams }: { searchParams: Promise<any> }) {
    const resolvedParams = await searchParams;
    const [{ products, totalPages, currentPage }, hero, collection, advantage, premiumFeatures, howToOrder, faqData] = await Promise.all([
        getProducts(resolvedParams || {}),
        getPageContent("ethnic_hero", DEFAULT_ETHNIC_HERO),
        getPageContent("ethnic_collection", DEFAULT_ETHNIC_COLLECTION),
        getPageContent("ethnic_advantage", DEFAULT_ETHNIC_ADVANTAGE),
        getPageContent("ethnic_premium_features", DEFAULT_ETHNIC_PREMIUM_FEATURES),
        getPageContent("ethnic_how_to_order", DEFAULT_ETHNIC_HOW_TO_ORDER),
        getPageContent("ethnic_faq", { items: DEFAULT_ETHNIC_FAQ }),
    ]);

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
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
                        src={hero.imageDesktop}
                        alt="Ethnic Wear for Women Collection"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>

                {/* Mobile Image */}
                <div className="relative w-full h-[60vh] min-h-[450px] lg:hidden z-0">
                    <Image
                        src={hero.imageMobile}
                        alt="Ethnic Wear for Women Collection"
                        fill
                        priority
                        className="object-cover object-[center_79%]"
                    />
                </div>

                {/* Text Content */}
                <div className="relative z-20 max-w-[1600px] mx-auto w-full flex flex-col px-6 lg:px-12 pt-8 lg:pt-0 pb-16 lg:pb-0 text-primary lg:h-full lg:absolute lg:inset-0 lg:justify-center">
                    <div className="w-full lg:max-w-[420px] xl:max-w-[550px] 2xl:max-w-[750px] flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:gap-6 mt-0 relative z-30">
                        {/* Hook */}
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <span className="text-[#8A4B32] text-xl leading-none">&diams;</span>
                            <span className="text-overline text-[#8A4B32] uppercase tracking-[0.2em] font-bold">{hero.overline}</span>
                        </div>

                        <h1 className="text-3xl leading-[1.15] sm:text-4xl lg:text-[36px] xl:text-[48px] 2xl:text-[60px] lg:leading-[1.1] font-heading font-normal tracking-tight text-primary">
                            {renderWithHighlight(hero.heading, hero.highlightWord)}
                        </h1>

                        <p className="text-[14px] lg:text-lg text-primary/80 leading-relaxed max-w-2xl font-medium">
                            {hero.paragraph}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center lg:items-start w-full sm:w-auto mt-2">
                            <a href="#collection" className="bg-highlight hover:bg-highlight/90 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] lg:text-xs flex items-center justify-center transition-all shadow-sm text-center w-full sm:w-auto">
                                {hero.ctaLabel1}
                            </a>
                            <a href={WA} target="_blank" rel="noreferrer" className="border border-primary/20 hover:border-primary/40 text-primary hover:bg-primary/5 px-8 py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] lg:text-xs flex items-center justify-center transition-all backdrop-blur-sm text-center w-full sm:w-auto">
                                {hero.ctaLabel2}
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

            {/* ── SECTION: EVERYDAY ETHNIC STYLE + PRODUCT GRID ── */}
            <section id="collection" className="pt-10 md:pt-16 pb-20 md:pb-32 px-6 bg-cream relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center mx-auto max-w-3xl">
                        <span className="text-overline text-[#8A4B32] font-bold">{collection.overline1}</span>
                        <h2 className="text-h2">{renderWithHighlight(collection.heading1, collection.highlightWord1)}</h2>
                        <p className="text-body1">{collection.paragraph1}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
                        {collection.highlights.map((item: any, i: number) => (
                            <div key={i} className="flex flex-col gap-5 md:gap-6 group">
                                <div className="relative w-full aspect-square overflow-hidden rounded-[24px] border border-border shadow-sm group-hover:shadow-xl transition-shadow duration-500">
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
                        <span className="text-overline text-[#8A4B32] font-bold">{collection.overline2}</span>
                        <h2 className="text-h2 mt-4 max-w-3xl mx-auto">{renderWithHighlight(collection.heading2, collection.highlightWord2)}</h2>
                        <p className="text-body1 text-primary/80 max-w-3xl mx-auto mt-4 leading-relaxed">
                            {collection.paragraph2}
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
                tag={advantage.tag}
                tagColor="#8A4B32"
                title={renderWithHighlight(advantage.heading, advantage.highlightWord)}
                description={advantage.description}
                items={advantage.items.map((it: any, i: number) => ({ ...it, icon: ADVANTAGE_ICONS[i] || ADVANTAGE_ICONS[0] }))}
                imageSrc={advantage.image}
                featureTag={advantage.featureTag}
                featureTitle={advantage.featureTitle}
                featureDesc={advantage.featureDesc}
            />

            <PremiumFeatureSection
                tag={premiumFeatures.tag}
                tagColor="#8A4B32"
                title={renderWithHighlight(premiumFeatures.heading, premiumFeatures.highlightWord)}
                description={premiumFeatures.description}
                features={premiumFeatures.features.map((f: any, i: number) => ({
                    t: f.t,
                    d: f.d,
                    c: "text-[#8A4B32]",
                    i: <Image src={PREMIUM_FEATURE_ICONS[i] || PREMIUM_FEATURE_ICONS[0]} alt={f.t} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />,
                }))}
                imageSrc={premiumFeatures.image}
                imageContainerClassName="aspect-[1240/1748] w-full h-auto"
                quoteTag={premiumFeatures.quoteTag}
                quoteTitle={premiumFeatures.quoteTitle}
                quoteDesc={premiumFeatures.quoteDesc}
            />


            <HowToOrderSection
                tag={howToOrder.tag}
                tagColor="#8A4B32"
                title={renderWithHighlight(howToOrder.heading, howToOrder.highlightWord)}
                subtitle={howToOrder.subtitle}
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
                ctaText={howToOrder.ctaText}
                whatsappLink={WA}
            />

            {/* ── SECTION: CONTINUE EXPLORING ── */}
            <section className="pt-8 md:pt-12 pb-8 md:pb-12 px-6 bg-cream relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                    <div className="flex flex-col gap-3 md:gap-6 text-center items-center max-w-3xl mx-auto">
                        <span className="text-overline text-[#8A4B32] font-bold">Next Step</span>
                        <h2 className="text-h2">Explore More <span className="text-highlight">Ethnic Wear</span> <br className="hidden md:block" /> Collections for Women</h2>
                        <p className="text-body1">Explore Batik styles across everyday clothing, ethnic wardrobes, new arrivals, and wholesale collections.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Batik Prints Women Clothing", desc: "Explore expressive Batik prints, comfortable cotton styles, and versatile women's clothing created for everyday and occasion wear.", link: "/batik-prints-womens-clothing", img: "/cat_batik_fabric.webp" },
                            { name: "Batik Cotton Dress for Women", desc: "Discover soft, breathable Batik cotton dresses designed for effortless everyday comfort and graceful styling.", link: "/batik-cotton-dress-for-women", img: "/cat_batik_cloth.webp" },
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
                        <span className="text-overline text-[#8A4B32] font-bold">Fashion & Fabric Journal</span>
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

            <FAQ items={faqData.items} />

            {/* ── CONSISTENT CTA ── */}
            <ConsistentCTA />

        </div>
    );
}
