import Image from "next/image";
import Link from "next/link";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import LeadGenerationForm from "@/modules/user/components/LeadGenerationForm";
import StickyEnquiryButton from "@/modules/user/components/StickyEnquiryButton";

import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import HowToOrderSection from "@/modules/user/components/HowToOrderSection";
import ProductFilterLayout from "@/modules/user/components/ProductFilterLayout";
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import ConsistentCTA from "@/modules/user/components/ConsistentCTA";
import { getPageContent } from "@/utils/getPageContent";
import { renderWithHighlight } from "@/utils/textHighlight";

const DEFAULT_WHOLESALE_HERO = {
    overline: "DIRECT MANUFACTURER · BULK SUPPLY",
    heading: "Premium Wholesale\nWomen Dresses in\nBatik & Cotton",
    highlightWord: "Batik & Cotton",
    paragraph: "Source high-demand women dresses, Batik prints, cotton styles, and ready to sell collections directly from the manufacturer. Built for boutiques, resellers, retailers, and fashion businesses looking for distinctive designs, reliable supply, and better wholesale value.",
    imageDesktop: "/Hero Banner/imp.png",
    imageMobile: "/Hero Banner/mobile-version/ige(3).png",
    ctaLabel1: "Become a Wholesale Partner",
    ctaLabel2: "Chat on WhatsApp",
};

const DEFAULT_WHOLESALE_SOURCING = {
    tag: "# STREAMLINE YOUR SOURCING",
    heading: "Stop Stocking\nDresses That Do Not Move",
    paragraph: "You don't need more products. You need a wholesale collection built around what customers want to wear.",
    quoteBubbleText: "We help you build that collection.",
    bioText: "AQSHA Batik Suits is a 15+ year manufacturer specialising in Batik Prints Women Clothinging, cotton styles, and high-demand women dresses for wholesale buyers.",
};

const DEFAULT_WHOLESALE_CAPABILITIES = {
    overline: "BUILT FOR REAL MARKET USE",
    heading: "Wholesale Women Dresses\nfor Growing Fashion Businesses",
    highlightWord: "Fashion Businesses",
    paragraph: "From boutique collections to bulk supply, our wholesale range combines distinctive Batik design, comfortable cotton, and versatile silhouettes made for everyday and occasion wear.",
    overline2: "HIGH-DEMAND DRESS COLLECTION",
    heading2: "Explore Wholesale Women Dresses\nCustomers Want to Wear",
    highlightWord2: "Want to Wear",
    paragraph2: "Discover Batik dresses, cotton dresses for women, casual styles, floral prints, and versatile silhouettes selected for retail appeal.",
    items: [
        { t: "Batik Dress Supply", d: "Source Batik dresses, Batik print dresses, and distinctive Batik dress designs created for retail collections and everyday customer demand.", img: "/wholesale/dresses for women.webp" },
        { t: "Boutique & Clothing Brands", d: "Build a more memorable collection with trendy dresses for women, floral styles, cotton dresses, and unique Batik prints.", img: "/wholesale/dresses for women (1).webp" },
        { t: "Custom & Bulk Orders", d: "Flexible wholesale supply for retailers, resellers, boutiques, and fashion businesses looking for bulk women dresses and cotton dress material.", img: "/wholesale/dresses for women (2).webp" },
    ],
};

const DEFAULT_WHOLESALE_PREMIUM_FEATURES = {
    tag: "Why Buyers Choose Our Supply",
    heading: "Why Our Wholesale Women\nDresses Stand Out",
    highlightWord: "Stand Out",
    image: "/wholesale/women dresses.webp",
    quote: "Distinctive designs. Reliable supply. Built for businesses that sell.",
    features: [
        { t: "Distinctive Batik Design", d: "Our Batik designs bring traditional print character into modern dresses for women, helping your collection feel different from ordinary mass-market styles." },
        { t: "Consistent Print Quality", d: "Consistent Batik printing helps maintain colour, pattern clarity, and product quality across wholesale orders." },
        { t: "Comfortable Cotton", d: "Cotton dresses for women offer breathable comfort and everyday wearability—ideal for customers who value both style and ease." },
        { t: "Versatile Dress Styles", d: "From casual dresses for women to floral dresses, one-piece styles, and occasion-ready designs, our collection supports different customer preferences." },
        { t: "Wholesale Pricing", d: "Direct manufacturer sourcing helps businesses access competitive wholesale pricing and protect retail margins." },
        { t: "Ready for Retail", d: "Our women clothing collections are selected with practical retail use in mind—from boutique displays to online fashion stores." },
    ],
};

const PREMIUM_FEATURE_ICONS = [
    "/ICONS/distinctive-design-wholesale-icon.png",
    "/ICONS/consistent-print-quality-icon.png",
    "/ICONS/comfortable-cotton-wholesale-icon.png",
    "/ICONS/versatile-dress-styles-icon.png",
    "/ICONS/wholesale-pricing-icon.png",
    "/ICONS/ready-for-retail-icon.png",
];

const DEFAULT_WHOLESALE_HOW_TO_ORDER = {
    tag: "WHOLESALE PROCESS",
    heading: "How to Order Wholesale Women Dresses",
    highlightWord: "Women Dresses",
    subtitle: "Five simple steps to move from product discovery to bulk supply.",
    ctaText: "Become a Wholesale Partner",
};

const DEFAULT_WHOLESALE_MOQ = {
    overline: "Commercial Terms",
    heading: "Minimum Wholesale Women Dresses Order",
    highlightWord: "Women Dresses Order",
    minBillingLabel: "Minimum Billing",
    minBillingValue: "₹25,000",
    paragraph: "Bulk pricing is available for larger volumes, with flexible repeat-order structures for regular buyers.",
    ctaLabel: "Request Wholesale Quote",
    overline2: "Who This Is For",
    heading2: "Built for Serious Women Fashion Retailers",
    highlightWord2: "Fashion Retailers",
    audiences: [
        { t: "Boutique Owners", d: "Distinctive women dresses for collections that stand apart." },
        { t: "Instagram Resellers", d: "Fresh Batik styles with strong visual appeal for online selling." },
        { t: "Meesho / Amazon Sellers", d: "Reliable supply for growing online fashion businesses." },
        { t: "Wholesale Traders", d: "Bulk women dresses and Batik collections for regional distribution." },
    ],
};

const DEFAULT_WHOLESALE_BUSINESS_ADVANTAGE = {
    quoteText: "\"Stock your store with styles customers want to buy—not products that sit on the rack.\"",
    overline: "The Market Reality",
    heading: "Customers Do Not Buy More Choices.\nThey Buy Better Choices.",
    highlightWord: "Better Choices.",
    items: [
        { t: "Distinctive Batik Prints", d: "Unique designs give customers a reason to notice your collection." },
        { t: "Cotton Comfort", d: "Breathable cotton supports everyday wear and repeat customer demand." },
        { t: "Manufacturer Pricing", d: "Direct sourcing helps businesses maintain competitive retail pricing and healthier margins." },
    ],
};

const DEFAULT_WHOLESALE_FAQ = [
    { q: "Where can I buy wholesale women dresses in India?", a: "You can source wholesale women dresses directly from AQSHA Batik Suits, a Ujjain-based Batik manufacturer offering Batik dresses, cotton styles, printed designs, and ethnic clothing collections." },
    { q: "What types of women dresses are available wholesale?", a: "Wholesale options can include Batik dresses, Batik print dresses, cotton dresses for women, casual dresses, floral dresses, one-piece styles, and occasion-ready designs." },
    { q: "Are Batik dresses suitable for boutiques?", a: "Yes. Batik dresses combine distinctive prints, comfortable fabrics, and versatile styling, making them suitable for boutiques looking to create a more memorable women's fashion collection." },
    { q: "Can I order plus size Batik dresses wholesale?", a: "Businesses can enquire about available plus size Batik dress designs, sizes, quantities, pricing, and wholesale availability." },
    { q: "Do you provide bulk supply for retailers and resellers?", a: "Yes. AQSHA Batik Suits provides wholesale supply for boutiques, retailers, resellers, and fashion businesses looking to source women dresses and Batik Prints Women Clothinging in bulk." },
];

const DEFAULT_WHOLESALE_LEAD_FORM = {
    title: "Get Personalized Batik Fabric\nPricing & Catalog",
    highlightWord: "Batik Fabric",
    description: "Explore our latest wholesale women dresses, cotton styles, and floral Batik designs with personalized bulk pricing, ready-stock updates, and collection catalogs.",
    benefits: [
        { text: "Latest Women Dresses Design Catalog" },
        { text: "Wholesale Pricing & Bulk Order Support" },
        { text: "Plus Size & Custom Ordering Options" },
        { text: "Batik & Cotton Dress Collections" },
        { text: "Fast WhatsApp Assistance" },
        { text: "Ready-Stock & New Collection Updates" },
    ],
};


const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts({ page = "1", search = "", sort = "", minPrice = "", maxPrice = "" }: any) {
    try {
        const queryParams = new URLSearchParams({
            limit: "12",
            page: page,
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

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20Wholesale%20Manufacturer%20Pricing";

const TARGET_AUDIENCE_ICONS = [
    <svg key="0" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
    </svg>,
    <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
    </svg>,
    <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.56-7.43H5.12" />
    </svg>,
    <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
    </svg>,
];

export default async function WholesalePage({ searchParams }: { searchParams: Promise<any> }) {
    const resolvedParams = await searchParams;
    const [{ products, totalPages, currentPage }, hero, sourcing, capabilities, premiumFeatures, howToOrder, moq, businessAdvantage, faqData, leadForm] = await Promise.all([
        getProducts(resolvedParams || {}),
        getPageContent("wholesale_hero", DEFAULT_WHOLESALE_HERO),
        getPageContent("wholesale_sourcing", DEFAULT_WHOLESALE_SOURCING),
        getPageContent("wholesale_capabilities", DEFAULT_WHOLESALE_CAPABILITIES),
        getPageContent("wholesale_premium_features", DEFAULT_WHOLESALE_PREMIUM_FEATURES),
        getPageContent("wholesale_how_to_order", DEFAULT_WHOLESALE_HOW_TO_ORDER),
        getPageContent("wholesale_moq", DEFAULT_WHOLESALE_MOQ),
        getPageContent("wholesale_business_advantage", DEFAULT_WHOLESALE_BUSINESS_ADVANTAGE),
        getPageContent("wholesale_faq", { items: DEFAULT_WHOLESALE_FAQ }),
        getPageContent("wholesale_lead_form", DEFAULT_WHOLESALE_LEAD_FORM),
    ]);

    const targetAudience = moq.audiences.map((a: any, i: number) => ({ ...a, i: TARGET_AUDIENCE_ICONS[i] || TARGET_AUDIENCE_ICONS[0] }));
    const wholesaleCapabilities = capabilities.items;

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title>Wholesale Women Dresses | Batik Dresses & Cotton Styles</title>
            <meta name="description" content="Source wholesale women dresses in Batik prints, cotton styles, floral designs and casual silhouettes directly from a Ujjain Batik manufacturer." />

            <style>{`
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />
            <ScrollObserver />
            {/* ── FULL WIDTH RESPONSIVE HERO ── */}
            <section className="relative w-full max-w-[1920px] mx-auto lg:h-[90vh] lg:min-h-[600px] lg:max-h-[900px] bg-cream lg:bg-transparent overflow-hidden flex flex-col lg:block">

                {/* Desktop Background Image */}
                <div className="hidden lg:block absolute inset-0 w-full h-full z-0">
                    <Image
                        src={hero.imageDesktop}
                        alt="Wholesale Batik Supply"
                        fill
                        priority
                        className="object-cover object-top"
                    />
                    {/* Gradient overlay so the text column always stays readable and clear of the photo, regardless of viewport width.
                        The models in this photo start at ~40% of the image width, so this stays fully opaque until 36% and only
                        fades out after that, in the last 12% of its own box. */}
                    <div
                        className="absolute inset-0 w-full lg:w-[48%] pointer-events-none"
                        style={{ background: 'linear-gradient(to right, #F4E9D8 0%, #F4E9D8 75%, transparent 100%)' }}
                    />
                </div>

                {/* Mobile Image */}
                <div className="relative w-full h-[60vh] min-h-[450px] lg:hidden z-0">
                    <Image
                        src={hero.imageMobile}
                        alt="Wholesale Batik Supply"
                        fill
                        priority
                        className="object-cover object-[center_72%]"
                    />
                </div>

                {/* Text Content */}
                <div className="relative z-20 max-w-[1600px] mx-auto w-full flex flex-col px-6 lg:px-12 pt-8 lg:pt-0 pb-16 lg:pb-0 text-primary lg:h-full lg:absolute lg:inset-0 lg:justify-center">
                    <div className="w-full lg:max-w-[37%] flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:gap-6 mt-0 relative z-30">
                        {/* Hook */}
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <span className="text-[#8A4B32] text-xl leading-none">&diams;</span>
                            <span className="text-overline text-[#8A4B32] uppercase tracking-[0.2em] font-bold">{hero.overline}</span>
                        </div>

                        <h1 className="text-3xl leading-[1.15] sm:text-4xl lg:text-[36px] xl:text-[48px] 2xl:text-[60px] lg:leading-[1.1] font-heading font-normal tracking-tight text-primary lg:whitespace-nowrap">
                            {renderWithHighlight(hero.heading, hero.highlightWord)}
                        </h1>

                        <p className="text-[14px] lg:text-lg text-primary/80 leading-relaxed max-w-2xl lg:max-w-full font-medium">
                            {hero.paragraph}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center lg:items-start w-full sm:w-auto mt-2">
                            <a href="#wholesale-form" className="bg-highlight hover:bg-highlight/90 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] lg:text-xs flex items-center justify-center transition-all shadow-sm text-center w-full sm:w-auto">
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

            {/* ── SECTION: TO STREAMLINE YOUR SOURCING ── */}
            <section className="scroll-animate w-full bg-cream overflow-hidden pt-0 relative">
                {/* Decorative background element for left side (optional leaf/pattern hint) */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-pattern opacity-10 pointer-events-none mix-blend-multiply"></div>
                
                <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-stretch relative z-10">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-8 md:py-12 relative z-10 bg-cream">
                        <div className="flex flex-col max-w-2xl mx-auto w-full">
                            <div className="flex items-center gap-4 mb-3 md:mb-4">
                                <span className="text-overline uppercase tracking-[0.2em] font-bold text-brand">
                                    {sourcing.tag}
                                </span>
                            </div>
                            <h2 className="text-h2 mb-6 md:mb-8">
                                {renderWithHighlight(sourcing.heading)}
                            </h2>

                            <div className="flex flex-col gap-5 mb-6 md:mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary/60 border border-border flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-highlight"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                    </div>
                                    <p className="text-lg md:text-xl font-semibold italic text-brand">If your current supplier is giving you...</p>
                                </div>
                                <div className="flex flex-col gap-3.5 pl-[52px]">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-border shadow-sm shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-highlight"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                        </span>
                                        <span className="font-semibold text-sm md:text-[15px] text-foreground">Inconsistent quality</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-border shadow-sm shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-highlight"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11v6"></path><path d="M9 14h6"></path></svg>
                                        </span>
                                        <span className="font-semibold text-sm md:text-[15px] text-foreground">Repetitive designs</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-border shadow-sm shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-highlight"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                        </span>
                                        <span className="font-semibold text-sm md:text-[15px] text-foreground">Low margins</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-body1 text-foreground leading-relaxed max-w-lg mb-5 mt-1 font-medium">
                                {sourcing.paragraph}
                            </p>

                            <div className="flex items-center gap-3 bg-brand text-white rounded-full px-5 py-2.5 w-fit mb-6 shadow-md">
                                <span className="text-white/90">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
                                </span>
                                <span className="font-heading text-lg md:text-xl italic tracking-wide pr-2">{sourcing.quoteBubbleText}</span>
                            </div>

                            <div className="flex items-start gap-3 p-3 bg-white/40 rounded-2xl border border-primary/5 backdrop-blur-sm relative z-20">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 text-white font-serif italic text-xl border border-white/20 shadow-sm mt-1">
                                    A
                                </div>
                                <p className="text-sm md:text-[15px] text-foreground leading-relaxed max-w-md">
                                    {sourcing.bioText}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image with curved overlay */}
                    <div className="w-full lg:w-[45%] relative min-h-[400px] lg:min-h-0 bg-cream z-0">
                        {/* Inner container bleeds to right window edge */}
                        <div className="absolute top-0 bottom-0 left-0 w-full lg:w-[calc(100%+max(0px,50vw-800px))]">
                            {/* The curved separator logic (overlapping left slightly to prevent sub-pixel seams) */}
                            <div className="absolute inset-y-0 -left-[2px] right-0 bg-cream z-10 hidden lg:block" style={{ clipPath: 'ellipse(22% 60% at 0% 50%)' }}></div>
                            
                            <div className="absolute inset-0 w-full h-full">
                                <Image 
                                    src="/wholesale_rack_batik.png"
                                    alt="Wholesale collection"
                                    fill
                                    className="object-cover object-left"
                                />
                            </div>
                            
                            {/* The circular badge on the image */}
                            <div className="absolute left-1/2 lg:left-[8%] bottom-8 z-20 bg-cream backdrop-blur-md rounded-full w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-cream -translate-x-1/2 lg:-translate-x-1/2 group hover:scale-105 transition-transform duration-500">
                                <div className="mb-2 text-brand">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 6h-3c0-2.21-1.79-4-4-4S8 3.79 8 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm7 16H5V8h3v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h3v12z"/></svg>
                                </div>
                                <p className="text-[10px] md:text-[11px] font-semibold text-brand leading-snug">
                                    Better Stock.<br/>Better Margins.<br/>Happier Customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full bg-brand text-surface py-5 md:py-6 px-6 relative z-20">
                    <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 text-left divide-x-0 md:divide-x divide-white/20">
                        <div className="flex items-center gap-3 px-2 md:px-6">
                            <div className="p-2 border border-white/30 rounded-full shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                            </div>
                            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight">15+ Years<br /> Manufacturing Experience</span>
                        </div>
                        <div className="flex items-center gap-3 px-2 md:px-6">
                            <div className="p-2 border border-white/30 rounded-full shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z"></path></svg>
                            </div>
                            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight">Premium Batik &<br /> Cotton Styles</span>
                        </div>
                        <div className="flex items-center gap-3 px-2 md:px-6">
                            <div className="p-2 border border-white/30 rounded-full shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            </div>
                            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight">Reliable Supply<br /> For Bulk Orders</span>
                        </div>
                        <div className="flex items-center gap-3 px-2 md:px-6">
                            <div className="p-2 border border-white/30 rounded-full shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight">Trusted By Boutiques,<br /> Resellers & Retailers</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION: CAPABILITIES + PRODUCT GRID ── */}
            <section id="collection" className="scroll-animate py-10 md:py-16 px-6 bg-cream relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-10 md:gap-12">
                    <div className="flex flex-col gap-3 text-center items-center mx-auto max-w-4xl">
                        <span className="text-overline">{capabilities.overline}</span>
                        <h2 className="text-h2">{renderWithHighlight(capabilities.heading, capabilities.highlightWord)}</h2>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-1 max-w-3xl">
                            {capabilities.paragraph}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto w-full">
                        {wholesaleCapabilities.map((item: any, i: number) => (
                            <div key={i} className="flex flex-col gap-5 md:gap-6 group">
                                <div className="relative w-full aspect-square overflow-hidden rounded-[24px] border border-primary/10 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                                    <Image
                                        src={item.img}
                                        alt={item.t}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 text-center items-center px-2">
                                    <h3 className="text-h4">{item.t}</h3>
                                    <p className="text-[13px] md:text-sm leading-relaxed text-muted font-medium">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 md:gap-12 mt-6 md:mt-12">
                        <div className="flex flex-col gap-3 md:gap-4 text-center items-center mx-auto max-w-4xl">
                            <span className="text-overline">{capabilities.overline2}</span>
                            <h2 className="text-h2">{renderWithHighlight(capabilities.heading2, capabilities.highlightWord2)}</h2>
                            <p className="text-lg md:text-xl text-foreground leading-relaxed mt-1 w-full text-center">{capabilities.paragraph2}</p>
                        </div>
                        <ProductFilterLayout
                            products={products}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            searchParams={resolvedParams || {}}
                            isWholesalePage={true}
                        />
                    </div>
                </div>
            </section>

            <PremiumFeatureSection
                tag={premiumFeatures.tag}
                tagColor="#8A4B32"
                title={renderWithHighlight(premiumFeatures.heading, premiumFeatures.highlightWord)}
                features={premiumFeatures.features.map((f: any, i: number) => ({
                    t: f.t,
                    d: f.d,
                    c: "text-brand",
                    i: <Image src={PREMIUM_FEATURE_ICONS[i] || PREMIUM_FEATURE_ICONS[0]} alt={f.t} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />,
                }))}
                imageSrc={premiumFeatures.image}
                imageContainerClassName="aspect-[4/5] w-full h-auto"
                quote={premiumFeatures.quote}
            />

            <HowToOrderSection
                tag={howToOrder.tag}
                title={renderWithHighlight(howToOrder.heading, howToOrder.highlightWord)}
                subtitle={howToOrder.subtitle}
                whatsappLink={WA}
                ctaText={howToOrder.ctaText}
                steps={[
                    {
                        s: "01",
                        t: "Browse Designs",
                        d: "Explore Batik dresses, cotton dresses, floral styles, trendy dresses, and new collections."
                    },
                    {
                        s: "02",
                        t: "Select Quantity",
                        d: "Choose products and quantities according to your boutique, retail, or wholesale requirements."
                    },
                    {
                        s: "03",
                        t: "Connect on WhatsApp",
                        d: "Share your requirements and receive product availability, pricing, and ordering support."
                    },
                    {
                        s: "04",
                        t: "Receive Your Quote",
                        d: "Get wholesale pricing based on your selected products and order volume."
                    },
                    {
                        s: "05",
                        t: "Confirm & Dispatch",
                        d: "Confirm your order and receive your selected collection through available delivery arrangements."
                    }
                ]}
            />


            {/* ── SECTION: NEXT STEPS ── */}
            <section className="scroll-animate pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-[#F4F0EA] overflow-hidden text-primary">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-4xl mx-auto w-full">
                        <span className="text-overline">NEXT STEP</span>
                        <h2 className="text-h2">Continue Your Batik Dresses <br className="hidden md:block" /> Wholesale <span className="text-highlight">Sourcing Journey</span></h2>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-1 max-w-3xl">
                            Explore complementary collections to build a stronger women's fashion assortment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                t: "Batik Prints Women Clothing",
                                d: "Explore expressive Batik prints, comfortable cotton styles, and versatile women's clothing for everyday and occasion wear.",
                                l: "/batik-prints-womens-clothing",
                                img: "/gallery_explore.png",
                                tag: "Category"
                            },
                            {
                                t: "Ethnic Wear for Women",
                                d: "Discover Batik dresses, kurtis, and suit styles that bring traditional character into modern wardrobes.",
                                l: "/batik-suits",
                                img: "/gallery_wholesale.png",
                                tag: "Category"
                            },
                            {
                                t: "Batik Cotton Dress",
                                d: "Explore soft, breathable Batik cotton dresses designed for effortless everyday comfort and graceful styling.",
                                l: "/batik-cotton-dress-for-women",
                                img: "/dress-for-women-image.webp",
                                tag: "Category"
                            },
                            {
                                t: "New Arrival",
                                d: "Discover the latest Batik prints, fresh colours, and contemporary women's clothing styles.",
                                l: "/new-batik-prints-suits",
                                img: "/gallery_arrival.png",
                                tag: "Category"
                            }
                        ].map((item, i) => (
                            <Link key={i} href={item.l} className="group relative rounded-[24px] overflow-hidden bg-primary aspect-[4/5] md:aspect-[3/4] flex flex-col items-center justify-center border border-primary/10">
                                <Image
                                    src={item.img}
                                    alt={item.t}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-90 group-hover:brightness-75"
                                />
                                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-body font-bold uppercase tracking-widest text-primary shadow-sm">{item.tag}</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-center">
                                    <h3 className="font-heading text-xl md:text-2xl font-medium text-white leading-tight mb-2">{item.t}</h3>
                                    <p className="text-white/90 text-sm font-normal leading-relaxed mb-4 hidden md:block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">{item.d}</p>

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
            <section className="scroll-animate pt-12 md:pt-16 pb-4 md:pb-8 px-4 md:px-6 bg-transparent">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-5xl mx-auto w-full">
                        <span className="text-overline">FASHION & FABRIC JOURNAL</span>
                        <h2 className="text-h2 font-heading text-primary leading-tight">The Wholesale <span className="text-highlight">Women Dresses</span> Journal</h2>
                        <div className="w-16 h-[2px] bg-secondary mt-2"></div>
                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-2">
                            Explore insights on Batik dress designs, cotton dresses, printed fabrics, women's fashion trends, and practical sourcing ideas to help retailers choose better stock and build stronger collections.
                        </p>
                    </div>

                    {/* Kinfolk Editorial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                        {[
                            { slug: "the-art-of-hand-blocked-batik", title: "The Art of Hand-Blocked Batik", date: "May 15, 2024", cat: "Craftsmanship", img: "/journal_craftsmanship.png", d: "Explore the traditional craftsmanship behind distinctive Batik Cotton Dress for Women and dress designs." },
                            { slug: "batik-fashion-trends-2024", title: "Batik Fashion Trends", date: "June 2, 2024", cat: "Fashion", img: "/journal_fashion.png", d: "Discover changing Batik fashion trends and styles shaping modern women's clothing collections." },
                            { slug: "wholesale-success-stories", title: "Wholesale Success Stories", date: "June 10, 2024", cat: "Business", img: "/journal_business.png", d: "See how boutiques and resellers can build stronger fashion collections with the right Batik supply." }
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



            {/* ── SECTION: MOQ & TARGET ── */}
            <section className="scroll-animate pt-16 pb-8 md:pt-32 md:pb-16 px-6 bg-[#F4F0EA] relative overflow-hidden text-primary border-y border-primary/5">
                <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 relative z-10 items-center">

                    {/* LEFT: MOQ CARD */}
                    <div className="bg-white border border-border p-8 md:p-14 lg:p-16 rounded-[24px] md:rounded-[36px] shadow-xl flex flex-col gap-6 md:gap-10 relative overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-500">
                        <div className="flex flex-col gap-3 relative z-10">
                            <span className="text-overline">{moq.overline}</span>
                            <h2 className="text-h2 font-heading text-primary">{renderWithHighlight(moq.heading, moq.highlightWord)}</h2>
                        </div>
                        <div className="flex flex-col gap-6 md:gap-8 relative z-10">
                            <div className="flex items-center justify-between py-6 border-b border-border/80">
                                <span className="text-overline">{moq.minBillingLabel}</span>
                                <span className="text-h2 font-heading font-normal text-primary tracking-tight">{moq.minBillingValue}</span>
                            </div>
                            <p className="text-body1 leading-relaxed italic max-w-sm">
                                {moq.paragraph}
                            </p>
                        </div>
                        <a href={WA} target="_blank" rel="noreferrer" className="w-full bg-accent text-white py-4 md:py-5 rounded-xl text-xs md:text-sm hover:bg-accent/90 transition-colors text-center uppercase tracking-[0.2em] font-semibold mt-2 flex items-center justify-center gap-3 relative z-10">
                            {moq.ctaLabel}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        </a>
                    </div>

                    {/* RIGHT: WHO THIS IS FOR */}
                    <div className="flex flex-col gap-8 md:gap-12 text-primary lg:pl-10">
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <span className="text-overline">{moq.overline2}</span>
                            <h3 className="text-h2 font-heading">{renderWithHighlight(moq.heading2, moq.highlightWord2)}</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 mt-2">
                            {targetAudience.map((item: any, i: number) => (
                                <div key={i} className="flex flex-col items-start gap-4 p-6 sm:p-8 bg-[#F5F1EC] rounded-[20px] shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-left h-full">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-white border border-border text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                                        {item.i}
                                    </div>
                                    <div className="flex flex-col gap-2 mt-1">
                                        <h4 className="text-h4 leading-tight">{item.t}</h4>
                                        <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed font-medium">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BUSINESS ADVANTAGE ── */}
            <section className="scroll-animate pt-8 pb-16 md:pt-16 md:pb-32 px-6 bg-transparent overflow-hidden text-primary">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div className="relative aspect-square w-full rounded-[40px] md:rounded-[100px] overflow-hidden shadow-2xl group border-[10px] md:border-[20px] border-cream">
                        <Image src="/wholesale/party wear dress for women.webp" alt="High rotation premium wholesale batik inventory" fill className="object-cover group-hover:scale-105 transition-all duration-[3s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-16 md:left-16 md:right-16 flex flex-col gap-3 md:gap-6">
                            <h3 className="text-white text-[22px] md:text-4xl font-heading font-medium leading-tight">{businessAdvantage.quoteText}</h3>
                            <div className="flex gap-2 md:gap-4">
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                                <span className="bg-accent p-1.5 md:p-2 rounded text-[10px] md:text-base text-primary">★</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 md:gap-12">
                        <div className="flex flex-col gap-3 md:gap-6 text-center lg:text-left">
                            <span className="text-overline">{businessAdvantage.overline}</span>
                            <h2 className="text-h2">{renderWithHighlight(businessAdvantage.heading, businessAdvantage.highlightWord)}</h2>
                        </div>
                        <div className="flex flex-col gap-5 md:gap-8">
                            {businessAdvantage.items.map((item: any, i: number) => (
                                <div key={i} className="flex gap-4 md:gap-6 items-start bg-cream md:bg-transparent p-4 md:p-0 rounded-[16px] md:rounded-none">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white md:bg-tan flex items-center justify-center text-primary font-black shrink-0 text-[10px] md:text-base shadow-sm md:shadow-none">✔</div>
                                    <div className="flex flex-col gap-1 md:gap-2 text-left pt-1">
                                        <h3 className="font-heading font-medium text-xl md:text-2xl text-primary leading-tight">{item.t}</h3>
                                        <p className="text-sm md:text-base text-foreground leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            <FAQ items={faqData.items} />

            {/* ── CONSISTENT CTA ── */}
            <ConsistentCTA />


            <LeadGenerationForm
                title={renderWithHighlight(leadForm.title, leadForm.highlightWord)}
                description={leadForm.description}
                benefits={leadForm.benefits.map((b: any) => b.text)}
            />
            <StickyEnquiryButton />
        </div>
    );
}
