import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import ConsistentCTA from "@/modules/user/components/ConsistentCTA";
import { getPageContent } from "@/utils/getPageContent";
import { renderWithHighlight } from "@/utils/textHighlight";
import { renderRichText } from "@/utils/richText";

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Aqsha%20Batik";

const DEFAULT_ABOUT_HERO = {
    overline: "OUR HERITAGE",
    heading: "Legacy Craftsmanship\nBehind Every Design",
    highlightWord: "Every Design",
    paragraph: "Rooted in Bherugarh, Ujjain, we carry forward the legacy of traditional wax batik—refined over 15+ years into premium Batik Prints Women Clothing, batik dresses, and high-quality Batik Cotton Dress for Women.",
    calloutText: "Our collections focus on durable cotton dress material and consistent wholesale fabric, built for real market demand and ready-to-sell use.",
    ctaLabel: "Get In Touch",
    image: "/About-us/about-us.png",
    checklist: [
        { text: "Traditional Batik Prints" },
        { text: "Premium Cotton Quality" },
        { text: "15+ Years Expertise" },
        { text: "Wholesale Ready" },
    ],
};

const DEFAULT_ABOUT_PREMIUM_FEATURES = {
    tag: "Guided by Principles",
    heading: "What We Stand For",
    highlightWord: "Stand For",
    quote: "Every piece of Batik Prints Women Clothing, cotton dress material, and Batik Cotton Dress for Women we produce is guided by principles that ensure quality, consistency, and long-term trust for buyers.",
    image: "/About-us/ujjain batik (3).webp",
    features: [
        { t: "Authentic Craftsmanship", d: "We follow traditional wax-resist techniques to create genuine batik designs, ensuring every piece reflects real craftsmanship—not mass imitation." },
        { t: "Material Integrity", d: "Our collections use high-quality cotton fabric and durable dress material, built for comfort, repeat use, and consistent wholesale demand." },
        { t: "Direct Transparency", d: "As a direct manufacturer, we offer clear pricing, reliable supply, and honest communication for long-term business partnerships." },
        { t: "Bulk Reliability", d: "We maintain ready stock and fast dispatch timelines to ensure your boutique or wholesale business never faces inventory gaps across India." },
    ],
};

const PREMIUM_FEATURE_ICONS = [
    "/ICONS/authentic-craftsmanship-icon.png",
    "/ICONS/material-integrity-icon.png",
    "/ICONS/direct-transparency-icon.png",
    "/ICONS/bulk-reliability-icon.png",
];

const DEFAULT_ABOUT_MANUFACTURING = {
    tag: "The Process",
    heading: "Our Whole Fabric Manufacturing Standards",
    highlightWord: "Manufacturing Standards",
    image: "/round-category/indian dresses for girls.webp",
    steps: [
        { t: "Premium Cotton Selection", d: "We use high-quality cotton fabric (60x60) known for comfort, durability, and suitability for daily wear and stitched garments." },
        { t: "Traditional Wax-Dyeing", d: "Our process follows original wax techniques to create detailed batik print designs with strong pattern suits clarity and lasting color." },
        { t: "Quality Control & Finishing", d: "Each batch is checked for consistency, color accuracy, and clean cutting—ensuring it is ready for bulk supply and retail use." },
    ],
};

const DEFAULT_ABOUT_FINAL_CTA = {
    heading: "Work Directly with the Manufacturer",
    highlightWord: "the Manufacturer",
    paragraph: "Partner with a team focused on consistent quality, reliable supply, and long-term business relationships across Indian markets.",
};

const DEFAULT_ABOUT_JOURNEY = {
    tagline: "From Handmade Batik To Trusted Women Fashion Supply",
    heading: "The Journey Behind AQSHA BATIK SUITS",
    highlightWord: "AQSHA BATIK SUITS",
    quote: "From 15 handmade suits for women in Bherugarh, Ujjain to supplying wholesalers, boutiques, and resellers across India—this journey was built on consistency, correction, and understanding what women actually want to wear.",
    video: "/videos/Video-26729.mp4",
    foundationYear: "2010",
    foundationLabel: "The Foundation Year",
    bodyText: "This didn't start as a brand.\nIt started in Bherugarh, Ujjain — where batik is not just textile work. It is craftsmanship passed through generations of hands.\n\nIn 2010, my father started with only 15 suits for women.\nSimple batik designs. Small production. No team. No big setup.\nIt took nearly 20 days to sell those first 15 pieces.\nThere was no roadmap. No certainty. Only effort.\n\nBut he did not stop.\nHe created another batch. Then another.\nSome suits sold. Some did not.\nThere were fabric mistakes. Quality issues. Losses.\nAt times, dresses had to be sold at lower prices just to recover costs and continue production.\nA small ₹10–20 thousand bank loan helped keep the work moving.\n\nBut instead of giving up, he focused on improving the foundation:\n\n- Better fabric quality\n- Better cutting and fitting\n- Better suit design for women\n- Better understanding of what buyers actually wanted\n\n**That mindset changed everything.**",
    phases: [
        { t: "From Local Selling To Wholesale Supply", d: "Instead of waiting for customers to come, he went directly to them.\nTravelled to different cities. Met wholesalers personally. Carried samples by hand.\nUnderstood what resellers were searching for in women dresses, suit sets, and designer dress collections.\n\n**That was the real turning point.**\n\nThe business slowly shifted:\nFrom retail struggle → to wholesale women fashion supply.\n\nAs demand grew, our collections expanded into:\n\n- suit set for women\n- frock suit for women\n- cotton fashion collections\n- anarkali suits for women\n- party wear suits for women\n- and breathable everyday women clothing" },
        { t: "From 15 Pieces To Thousands", d: "Where it once took 20 days to sell 15 pieces…\nBy 2016, AQSHA BATIK SUITS was supplying nearly 1500–2000 women clothing pieces at the same time.\n\n*That growth did not come from luck.*\n\nIt came from:\n\n- improving quality constantly\n- correcting mistakes quickly\n- understanding women dress design trends\n- and building wearable collections women repeatedly purchased\n\nEvery new design dress for women taught us something.\nEvery market visit improved our understanding of:\n\n- dress designs for women\n- fabric demand\n- fitting preferences\n- and changing fashion behavior" },
        { t: "Taking Batik Fashion Online", d: "In 2017, I brought AQSHA BATIK SUITS online.\n\nThrough:\n\n- WhatsApp\n- social media\n- online marketplaces\n\nour collections started reaching more wholesalers, boutiques, and women fashion buyers across India.\n\n*That digital shift changed our speed completely.*\n\nNow our collections included:\n\n- designer dresses for women\n- trendy suits for women\n- latest dress designs for womens\n- party wear dress collections\n- and breathable cotton fashion styles\n\n**The internet helped our batik craftsmanship reach beyond local markets.**" },
        { t: "The COVID Phase & Rebuilding Again", d: "Like many fashion businesses, COVID during 2019–2020 created losses and uncertainty.\nDemand slowed. Markets paused. Orders became unstable.\n\n*But we adapted again.*\n\nInstead of stopping, we improved systems, stock planning, and production clarity.\n\nAnd from 2022 onwards, the business returned stronger with:\n\n- better operational systems\n- stronger wholesale demand\n- improved product quality\n- and clearer fashion positioning" },
        { t: "Where AQSHA BATIK SUITS Stands Today", d: "Today, AQSHA BATIK SUITS supplies wholesalers, boutiques, and resellers across major Indian markets including:\n\n- Delhi\n- Punjab\n- Gujarat\n- and growing fashion markets across India\n\nWe now manufacture collections across multiple women fashion categories including:\n\n- suits for women\n- designer dress for women\n- party wear suits for women\n- frock suit for women\n- anarkali suits for women\n- night suit for women\n- cotton night suit for women\n- and stylish everyday women clothing\n\nBut even after all these years, our focus remains the same:\n\n- Creating wearable Batik Prints Women Clothinging for women that actually sells repeatedly.\n\n**Because fashion changes. Comfort, quality, and trust do not.**" },
    ],
};

const DEFAULT_ABOUT_FAQ = [
    { q: "Q1. Who is AQSHA BATIK SUITS?", a: "AQSHA BATIK SUITS is a women clothing and Batik Cotton Dress for Women manufacturer based in Ujjain with 15+ years of experience in producing suits for women, batik print dress material, cotton dress collections, and wholesale women fashion products for boutiques, resellers, and wholesalers across India." },
    { q: "Q2. Where is AQSHA BATIK SUITS manufacturing located?", a: "Our manufacturing is based in Bherugarh, Ujjain (Madhya Pradesh), a region widely known for traditional batik craftsmanship, printed textile artistry, and skilled Batik Cotton Dress for Women manufacturing." },
    { q: "Q3. What makes AQSHA BATIK SUITS different from other women clothing manufacturers?", a: "We focus on:\n\n- consistent fabric quality\n- clean cutting\n- wearable women dress design\n- and fashion collections that actually perform in real wholesale markets.\n\nOur collections are built around repeat demand for:\n\n- suits for women\n- party wear suits for women\n- cotton dress material\n- and designer dresses for women." },
    { q: "Q4. Do you supply wholesale women dresses and suits for women?", a: "Yes. AQSHA BATIK SUITS primarily focuses on wholesale women dresses, suit set for women collections, batik cotton fabric, and women fashion supply for wholesalers, boutiques, resellers, and online sellers across India." },
    { q: "Q5. Which women clothing categories do you manufacture?", a: "We manufacture multiple women fashion categories including:\n\n- suits for women\n- party wear dress for women\n- frock suit for women\n- anarkali suits for women\n- cotton dresses for women\n- night suit for women\n- cotton night suit for women\n- designer dresses for women\n- and trendy women's clothing collections." },
    { q: "Q6. Which cities and markets do you currently supply to?", a: "We currently supply wholesale women clothing and batik collections across major Indian markets including Delhi, Punjab, Gujarat, and expanding fashion markets across India." },
    { q: "Q7. Do you offer ready stock for women's dresses and cotton dress material?", a: "Yes. We maintain ready stock for wholesale women dresses, cotton dress material, and batik fashion collections to support faster dispatch and bulk order requirements." },
    { q: "Q8. Can I contact AQSHA BATIK SUITS directly for wholesale women clothing inquiries?", a: "Yes. You can directly connect with AQSHA BATIK SUITS through WhatsApp or call for:\n\n- wholesale women dresses\n- suits for women business inquiries\n- cotton dress material pricing\n- reseller support\n- and bulk fashion orders." },
];

export default async function AboutPage() {
    const [aboutHero, premiumFeatures, manufacturing, finalCta, journey, faqData] = await Promise.all([
        getPageContent("about_hero", DEFAULT_ABOUT_HERO),
        getPageContent("about_premium_features", DEFAULT_ABOUT_PREMIUM_FEATURES),
        getPageContent("about_manufacturing", DEFAULT_ABOUT_MANUFACTURING),
        getPageContent("about_final_cta", DEFAULT_ABOUT_FINAL_CTA),
        getPageContent("about_journey", DEFAULT_ABOUT_JOURNEY),
        getPageContent("about_faq", { items: DEFAULT_ABOUT_FAQ }),
    ]);

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title>About AQSHA BATIK | 15+ Years of Batik Manufacturing Excellence</title>
            <meta name="description" content="Learn about Aqsha Batik's 15-year heritage in manufacturing premium cotton Batik Prints Women Clothing and fabrics. Committed to quality, consistency, and manufacturer-direct pricing." />


            <Nav />
            <ScrollObserver />            
            {/* ── HERO: HERITAGE ── */}
            <section className="relative w-full bg-cream overflow-hidden py-12 md:py-20 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 md:gap-5">
                        {/* Hook */}
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <span className="text-overline text-[#8A4B32] uppercase tracking-[0.2em] font-bold">{aboutHero.overline}</span>
                            <span className="w-10 h-0.5 bg-[#8A4B32]" />
                        </div>

                        <h1 className="text-3xl leading-[1.15] sm:text-4xl md:text-[56px] md:leading-[1.1] font-heading font-normal tracking-tight text-primary">
                            {renderWithHighlight(aboutHero.heading, aboutHero.highlightWord)}
                        </h1>

                        <p className="text-[14px] md:text-lg text-primary/80 leading-relaxed max-w-lg font-medium">
                            {aboutHero.paragraph}
                        </p>

                        {/* Highlighted Callout */}
                        <div className="flex items-start gap-3 bg-[#F4F0EA] border-l-4 border-accent rounded-r-lg px-4 py-3 md:px-6 md:py-4 max-w-lg text-left">
                            <span className="text-accent text-lg leading-none mt-0.5 flex-shrink-0">&diams;</span>
                            <p className="text-[13px] md:text-base text-primary/90 leading-relaxed font-medium">
                                {aboutHero.calloutText}
                            </p>
                        </div>

                        {/* Checklist */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-lg">
                            {aboutHero.checklist.map((point: any) => (
                                <div key={point.text} className="flex items-center gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-md bg-accent/15 text-accent flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                    </span>
                                    <span className="text-[13px] md:text-sm text-primary font-medium">{point.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center md:items-start w-full sm:w-auto mt-2">
                            <a href={WA} target="_blank" rel="noreferrer" className="bg-accent text-white px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-[11px] md:text-sm hover:scale-105 transition-all shadow-xl uppercase tracking-widest border-2 border-accent text-center w-full sm:w-auto">
                                {aboutHero.ctaLabel}
                            </a>
                        </div>
                    </div>

                    {/* Framed Image */}
                    <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl border-[8px] border-white">
                        <Image
                            src={aboutHero.image}
                            alt="Aqsha Batik Heritage"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </section>
            <GoogleReviewBar />

            {/* ── SECTION: OUR STORY ── */}
            <section className="scroll-animate pt-12 pb-0 md:py-16 px-6 bg-[#F4F0EA] relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10 items-start">

                    {/* Left Column (Header + Text) */}
                    <div className="flex flex-col w-full lg:w-1/2 h-full lg:max-h-[600px]">
                        {/* Header */}
                        <div className="flex flex-col gap-3 md:gap-4 text-center lg:text-left mb-6 lg:mb-8 flex-shrink-0">
                            <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] leading-relaxed">{journey.tagline}</span>
                            <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary leading-tight">{renderWithHighlight(journey.heading, journey.highlightWord)}</h2>
                        </div>

                        {/* Mobile Image */}
                        <div className="block lg:hidden relative w-full aspect-square rounded-[24px] overflow-hidden shadow-2xl border-[8px] border-cream mb-8">
                            <video src={journey.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-top brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-primary/5 shadow-xl">
                                <div className="flex flex-col gap-1">
                                    <span className="font-heading text-3xl font-normal text-primary">{journey.foundationYear}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{journey.foundationLabel}</span>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Text Content */}
                        <div className="flex flex-col gap-6 overflow-y-auto max-h-[350px] sm:max-h-[450px] lg:max-h-none pr-2 lg:pr-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/20 [&::-webkit-scrollbar-thumb]:rounded-full pb-0 md:pb-10 overscroll-contain flex-grow relative">
                            <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed text-primary/80">
                                <p className="font-normal text-[14px] md:text-lg text-primary leading-relaxed italic border-l-2 border-accent pl-4 md:pl-6 py-1">
                                    {journey.quote}
                                </p>
                                {renderRichText(journey.bodyText)}
                            </div>

                            {/* ── JOURNEY ACCORDION ── */}
                            <div className="flex flex-col gap-3 mt-2 md:mt-4">
                                {journey.phases.map((phase: any, i: number) => (
                                    <details key={i} className="group border border-primary/10 rounded-xl overflow-hidden bg-cream/30 mb-3">
                                        <summary className="p-4 md:p-5 flex justify-between items-center cursor-pointer list-none hover:bg-cream/50 transition-colors">
                                            <span className="font-bold text-primary uppercase tracking-widest text-[11px] md:text-sm pr-4 leading-tight">{phase.t}</span>
                                            <span className="text-primary group-open:rotate-180 transition-transform flex-shrink-0">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </span>
                                        </summary>
                                        <div className="p-4 md:p-5 pt-0 text-[12px] md:text-[14px] text-primary/80 leading-relaxed flex flex-col gap-3">
                                            {renderRichText(phase.d, `phase-${i}`)}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Desktop Image) */}
                    <div className="hidden lg:block lg:sticky lg:top-32 relative w-full lg:w-1/2 aspect-square rounded-[50px] overflow-hidden shadow-2xl border-[15px] border-cream group">
                        <video src={journey.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-[3s] brightness-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 max-w-[190px] bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-primary/5 shadow-xl">
                            <div className="flex flex-col gap-1">
                                <span className="font-heading text-3xl font-bold text-highlight">{journey.foundationYear}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{journey.foundationLabel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── SECTION: WHAT WE STAND FOR (Premium Layout) ── */}
            <PremiumFeatureSection
                wrapperClassName="py-0 mt-8 md:mt-0 md:py-24 px-4 md:px-6 bg-[#F4F0EA]"
                tag={premiumFeatures.tag}
                title={renderWithHighlight(premiumFeatures.heading, premiumFeatures.highlightWord)}
                imageSrc={premiumFeatures.image}
                imageContainerClassName="aspect-[4/5] w-full h-auto"
                quote={premiumFeatures.quote}
                features={premiumFeatures.features.map((f: any, i: number) => ({
                    t: f.t,
                    d: f.d,
                    c: "text-highlight",
                    i: (
                        <Image src={PREMIUM_FEATURE_ICONS[i] || PREMIUM_FEATURE_ICONS[0]} alt={f.t} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                    ),
                }))}
            />

            {/* ── SECTION: MANUFACTURING EXCELLENCE ── */}
            <section className="scroll-animate pt-8 md:pt-16 pb-12 md:pb-16 px-6 bg-[#F4F0EA] overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center">
                        <div className="order-2 lg:order-1 relative aspect-square w-full h-auto rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl border-[8px] md:border-[15px] border-cream group">
                            <Image src={manufacturing.image} alt="Fabric Quality" fill className="object-cover group-hover:scale-105 transition-all duration-[3s]" />
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col gap-6 md:gap-10">
                            <div className="flex flex-col gap-2 md:gap-6 text-center lg:text-left">
                                <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] md:tracking-[0.4em]">{manufacturing.tag}</span>
                                <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary">{renderWithHighlight(manufacturing.heading, manufacturing.highlightWord)}</h2>
                            </div>
                            <div className="flex flex-col gap-5 md:gap-8">
                                {manufacturing.steps.map((item: any, i: number) => (
                                    <div key={i} className="flex gap-4 md:gap-6 items-start group">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-tan flex items-center justify-center text-primary text-sm md:text-base font-bold shrink-0 group-hover:bg-primary group-hover:text-white transition-all">{i + 1}</div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="font-bold text-[15px] md:text-xl text-primary">{item.t}</h3>
                                            <p className="text-sm md:text-base text-primary/80 font-normal leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FINAL CTAS ── */}
            <section className="scroll-animate py-12 md:py-16 bg-transparent text-center px-6 border-t border-primary/5">
                <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-10">
                    <div className="flex flex-col gap-3 md:gap-5">
                        <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary leading-tight">{renderWithHighlight(finalCta.heading, finalCta.highlightWord)}</h2>
                        <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto font-normal leading-relaxed">
                            {finalCta.paragraph}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-5">
                        <a href={WA} target="_blank" rel="noreferrer" className="bg-accent text-white px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-[11px] md:text-sm hover:scale-105 transition-all shadow-xl uppercase tracking-widest border-2 border-accent">
                            Get Wholesale Catalogue
                        </a>
                        <a href="/wholesale-batik-women-dresses" className="bg-transparent text-accent border-2 border-accent px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-[11px] md:text-sm hover:bg-accent hover:text-white transition-all shadow-md uppercase tracking-widest">
                            View Wholesale Terms
                        </a>
                    </div>
                </div>
            </section>


            <FAQ items={faqData.items.map((item: any, i: number) => ({ q: item.q, a: renderRichText(item.a, `faq-${i}`) }))} />

            {/* ── CONSISTENT CTA ── */}
            <ConsistentCTA />

        </div>
    );
}
