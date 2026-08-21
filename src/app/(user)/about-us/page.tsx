"use client";
import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import { useBanner } from "@/modules/user/hooks/useBanner";
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import ScrollIndicator from "@/modules/user/components/ScrollIndicator";
import CategoryHeroBanner from "@/modules/user/components/CategoryHeroBanner";

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Aqsha%20Batik";

export default function AboutPage() {
    const heroBannerUrl = useBanner("about", "/about_hero.png");
    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <title>About AQSHA BATIK | 15+ Years of Batik Manufacturing Excellence</title>
            <meta name="description" content="Learn about Aqsha Batik's 15-year heritage in manufacturing premium cotton Batik Cloth and fabrics. Committed to quality, consistency, and manufacturer-direct pricing." />


            <Nav />
            <ScrollObserver />            
            <CategoryHeroBanner
                tagline="OUR HERITAGE"
                title={
                    <>
                        <span className="block md:whitespace-nowrap">Legacy Craftsmanship</span>
                        <span className="block md:whitespace-nowrap">Behind <span className='text-highlight'>Every Design</span></span>
                    </>
                }
                description="Rooted in Bherugarh, Ujjain, we carry forward the legacy of traditional wax batik—refined over 15+ years into premium batik cloth, batik dresses, and high-quality batik fabric. Our collections focus on durable cotton dress material and consistent women cotton wholesale fabric, built for real market demand and ready-to-sell use."
                imageSrc="/batik_suit_hero.png"
                imageAlt="Aqsha Batik Heritage"
                bgColor="#F2EEE9"
                buttons={
                    <a href={WA} target="_blank" rel="noreferrer" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
                        Get In Touch
                    </a>
                }
            />
            <GoogleReviewBar />

            {/* ── SECTION: OUR STORY ── */}
            <section className="scroll-animate pt-12 pb-0 md:py-16 px-6 bg-[#F4F0EA] relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10 items-start">

                    {/* Left Column (Header + Text) */}
                    <div className="flex flex-col w-full lg:w-1/2 h-full lg:max-h-[600px]">
                        {/* Header */}
                        <div className="flex flex-col gap-3 md:gap-4 text-center lg:text-left mb-6 lg:mb-8 flex-shrink-0">
                            <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] leading-relaxed">From Handmade Batik To Trusted <br className="lg:hidden" /> Women Fashion Supply</span>
                            <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary leading-tight">The Journey Behind <span className="text-highlight">AQSHA BATIK SUITS</span></h2>
                        </div>

                        {/* Mobile Image */}
                        <div className="block lg:hidden relative w-full h-[300px] sm:h-[400px] rounded-[24px] overflow-hidden shadow-2xl border-[8px] border-cream mb-8">
                            <Image src="/cotton-dress-material-image.webp" alt="Aqsha Batik Legacy Journey" layout="fill" objectFit="cover" objectPosition="top" className="brightness-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-primary/5 shadow-xl">
                                <div className="flex flex-col gap-1">
                                    <span className="font-heading text-3xl font-normal text-primary">2010</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">The Foundation Year</span>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Text Content */}
                        <div className="flex flex-col gap-6 overflow-y-auto max-h-[350px] sm:max-h-[450px] lg:max-h-none pr-2 lg:pr-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/20 [&::-webkit-scrollbar-thumb]:rounded-full pb-0 md:pb-10 overscroll-contain flex-grow relative">
                            <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed text-primary/80">
                                <p className="font-normal text-[14px] md:text-lg text-primary leading-relaxed italic border-l-2 border-accent pl-4 md:pl-6 py-1">
                                    From 15 handmade suits for women in Bherugarh, Ujjain to supplying wholesalers, boutiques, and resellers across India—this journey was built on consistency, correction, and understanding what women actually want to wear.
                                </p>
                                <p className="font-medium text-primary/90">
                                    This didn’t start as a brand.
                                    <br />
                                    It started in Bherugarh, Ujjain — where batik is not just textile work. It is craftsmanship passed through generations of hands.
                                </p>
                                <p>
                                    In 2010, my father started with only 15 suits for women.
                                    <br />Simple batik designs. Small production. No team. No big setup.
                                    <br />It took nearly 20 days to sell those first 15 pieces.
                                    <br />There was no roadmap. No certainty. Only effort.
                                </p>
                                <p>
                                    But he did not stop.
                                    <br />He created another batch. Then another.
                                    <br />Some suits sold. Some did not.
                                    <br />There were fabric mistakes. Quality issues. Losses.
                                    <br />At times, dresses had to be sold at lower prices just to recover costs and continue production.
                                    <br />A small ₹10–20 thousand bank loan helped keep the work moving.
                                </p>
                                <p>
                                    But instead of giving up, he focused on improving the foundation:
                                </p>
                                <ul className="list-none space-y-2 pl-4 md:pl-6 border-l-2 border-primary/20 font-medium text-primary/90">
                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Better fabric quality</li>
                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Better cutting and fitting</li>
                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Better suit design for women</li>
                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Better understanding of what buyers actually wanted</li>
                                </ul>
                                <p className="font-bold text-accent italic mt-2">That mindset changed everything.</p>
                            </div>

                            {/* ── JOURNEY ACCORDION ── */}
                            <div className="flex flex-col gap-3 mt-2 md:mt-4">
                                {[
                                    {
                                        t: "From Local Selling To Wholesale Supply",
                                        d: (
                                            <div className="flex flex-col gap-3">
                                                <p>
                                                    Instead of waiting for customers to come, he went directly to them.
                                                    <br />Travelled to different cities. Met wholesalers personally. Carried samples by hand.
                                                    <br />Understood what resellers were searching for in women dresses, suit sets, and designer dress collections.
                                                </p>
                                                <p className="font-bold text-[14px] md:text-base text-accent italic">That was the real turning point.</p>
                                                <p>
                                                    The business slowly shifted:
                                                    <br />From retail struggle → to wholesale women fashion supply.
                                                </p>
                                                <p>As demand grew, our collections expanded into:</p>
                                                <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20 font-medium text-primary/90">
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> suit set for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> frock suit for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> cotton fashion collections</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> anarkali suits for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> party wear suits for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> and breathable everyday women clothing</li>
                                                </ul>
                                            </div>
                                        )
                                    },
                                    {
                                        t: "From 15 Pieces To Thousands",
                                        d: (
                                            <div className="flex flex-col gap-3">
                                                <p>
                                                    Where it once took 20 days to sell 15 pieces…
                                                    <br />By 2016, AQSHA BATIK SUITS was supplying nearly 1500–2000 women clothing pieces at the same time.
                                                </p>
                                                <p className="font-bold text-[14px] md:text-base text-primary">That growth did not come from luck.</p>
                                                <p>It came from:</p>
                                                <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20 font-medium text-primary/90">
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> improving quality constantly</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> correcting mistakes quickly</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> understanding women dress design trends</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> and building wearable collections women repeatedly purchased</li>
                                                </ul>
                                                <p>
                                                    Every new design dress for women taught us something.
                                                    <br />Every market visit improved our understanding of:
                                                </p>
                                                <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20 font-medium text-primary/90">
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> dress designs for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> fabric demand</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> fitting preferences</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> and changing fashion behavior</li>
                                                </ul>
                                            </div>
                                        )
                                    },
                                    {
                                        t: "Taking Batik Fashion Online",
                                        d: (
                                            <div className="flex flex-col gap-3">
                                                <p>In 2017, I brought AQSHA BATIK SUITS online.</p>
                                                <p>Through:</p>
                                                <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20 font-medium text-primary/90">
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> WhatsApp</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> social media</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> online marketplaces</li>
                                                </ul>
                                                <p>our collections started reaching more wholesalers, boutiques, and women fashion buyers across India.</p>
                                                <p className="font-bold text-[14px] md:text-base text-primary">That digital shift changed our speed completely.</p>
                                                <p>Now our collections included:</p>
                                                <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20 font-medium text-primary/90">
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> designer dresses for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> trendy suits for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> latest dress designs for womens</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> party wear dress collections</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> and breathable cotton fashion styles</li>
                                                </ul>
                                                <p className="font-bold text-accent italic">The internet helped our batik craftsmanship reach beyond local markets.</p>
                                            </div>
                                        )
                                    },
                                    {
                                        t: "The COVID Phase & Rebuilding Again",
                                        d: (
                                            <div className="flex flex-col gap-3">
                                                <p>
                                                    Like many fashion businesses, COVID during 2019–2020 created losses and uncertainty.
                                                    <br />Demand slowed. Markets paused. Orders became unstable.
                                                </p>
                                                <p className="font-bold text-[14px] md:text-base text-primary">But we adapted again.</p>
                                                <p>Instead of stopping, we improved systems, stock planning, and production clarity.</p>
                                                <p>And from 2022 onwards, the business returned stronger with:</p>
                                                <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20 font-medium text-primary/90">
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> better operational systems</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> stronger wholesale demand</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> improved product quality</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> and clearer fashion positioning</li>
                                                </ul>
                                            </div>
                                        )
                                    },
                                    {
                                        t: "Where AQSHA BATIK SUITS Stands Today",
                                        d: (
                                            <div className="flex flex-col gap-3">
                                                <p>Today, AQSHA BATIK SUITS supplies wholesalers, boutiques, and resellers across major Indian markets including:</p>
                                                <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20 font-medium text-primary/90">
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Delhi</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Punjab</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Gujarat</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> and growing fashion markets across India</li>
                                                </ul>
                                                <p>We now manufacture collections across multiple women fashion categories including:</p>
                                                <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20 font-medium text-primary/90">
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> suits for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> designer dress for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> party wear suits for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> frock suit for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> anarkali suits for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> night suit for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> cotton night suit for women</li>
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> and stylish everyday women clothing</li>
                                                </ul>
                                                <p>But even after all these years, our focus remains the same:</p>
                                                <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20 font-medium text-primary/90">
                                                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Creating wearable batik clothing for women that actually sells repeatedly.</li>
                                                </ul>
                                                <p className="font-bold text-[14px] md:text-base text-accent italic mt-2">
                                                    Because fashion changes. Comfort, quality, and trust do not.
                                                </p>
                                            </div>
                                        )
                                    }
                                ].map((phase, i) => (
                                    <details key={i} className="group border border-primary/10 rounded-xl overflow-hidden bg-cream/30 mb-3">
                                        <summary className="p-4 md:p-5 flex justify-between items-center cursor-pointer list-none hover:bg-cream/50 transition-colors">
                                            <span className="font-bold text-primary uppercase tracking-widest text-[11px] md:text-sm pr-4 leading-tight">{phase.t}</span>
                                            <span className="text-primary group-open:rotate-180 transition-transform flex-shrink-0">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </span>
                                        </summary>
                                        <div className="p-4 md:p-5 pt-0 text-[12px] md:text-[14px] text-primary/80 leading-relaxed">
                                            {phase.d}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Desktop Image) */}
                    <div className="hidden lg:block lg:sticky lg:top-32 relative w-full lg:w-1/2 h-[600px] rounded-[50px] overflow-hidden shadow-2xl border-[15px] border-cream group">
                        <Image src="/cotton-dress-material-image.webp" alt="Aqsha Batik Legacy Journey" layout="fill" objectFit="cover" objectPosition="top" className="group-hover:scale-110 transition-all duration-[3s] brightness-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-10 rounded-[40px] border border-primary/5 shadow-xl">
                            <div className="flex flex-col gap-2">
                                <span className="font-heading text-5xl font-normal text-primary">2010</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">The Foundation Year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── SECTION: WHAT WE STAND FOR (Premium Layout) ── */}
            <PremiumFeatureSection
                wrapperClassName="py-0 mt-8 md:mt-0 md:py-24 px-4 md:px-6 bg-[#F4F0EA]"
                tag="Guided by Principles"
                title={<>What We <span className="text-highlight">Stand For</span></>}
                imageSrc="/cotton-summer-dresses-image.webp"
                quote="Every piece of batik cloth, cotton dress material, and batik fabric we produce is guided by principles that ensure quality, consistency, and long-term trust for buyers."
                features={[
                    {
                        t: "Authentic Craftsmanship",
                        d: "We follow traditional wax-resist techniques to create genuine batik designs, ensuring every piece reflects real craftsmanship—not mass imitation.",
                        c: "text-primary",
                        i: (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        )
                    },
                    {
                        t: "Material Integrity",
                        d: "Our collections use high-quality cotton fabric and durable dress material, built for comfort, repeat use, and consistent wholesale demand.",
                        c: "text-primary",
                        i: (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            </svg>
                        )
                    },
                    {
                        t: "Direct Transparency",
                        d: "As a direct manufacturer, we offer clear pricing, reliable supply, and honest communication for long-term business partnerships.",
                        c: "text-primary",
                        i: (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        )
                    },
                    {
                        t: "Bulk Reliability",
                        d: "We maintain ready stock and fast dispatch timelines to ensure your boutique or wholesale business never faces inventory gaps across India.",
                        c: "text-primary",
                        i: (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                            </svg>
                        )
                    }
                ]}
            />

            {/* ── SECTION: MANUFACTURING EXCELLENCE ── */}
            <section className="scroll-animate pt-8 md:pt-16 pb-12 md:pb-16 px-6 bg-[#F4F0EA] overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center">
                        <div className="order-2 lg:order-1 relative h-[300px] md:h-[600px] rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl border-[8px] md:border-[15px] border-cream group">
                            {/* <Image src="/batik-fabric-manufacturing.webp" alt="Fabric Quality" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[3s]" /> */}
                            <Image src="/batik-fabric-manufacturing-new.png" alt="Fabric Quality" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[3s]" />
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col gap-6 md:gap-10">
                            <div className="flex flex-col gap-2 md:gap-6 text-center lg:text-left">
                                <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] md:tracking-[0.4em]">The Process</span>
                                <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary">Our Whole Fabric <span className="text-highlight">Manufacturing Standards</span></h2>
                            </div>
                            <div className="flex flex-col gap-5 md:gap-8">
                                {[
                                    { t: "Premium Cotton Selection", d: "We use high-quality cotton fabric (60x60) known for comfort, durability, and suitability for daily wear and stitched garments." },
                                    { t: "Traditional Wax-Dyeing", d: "Our process follows original wax techniques to create detailed batik print designs with strong pattern suits clarity and lasting color." },
                                    { t: "Quality Control & Finishing", d: "Each batch is checked for consistency, color accuracy, and clean cutting—ensuring it is ready for bulk supply and retail use." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 md:gap-6 items-start group">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-tan flex items-center justify-center text-primary text-sm md:text-base font-bold shrink-0 group-hover:bg-primary group-hover:text-white transition-all">{i + 1}</div>
                                        <div className="flex flex-col gap-1">
                                            <h4 className="font-bold text-[15px] md:text-xl text-primary">{item.t}</h4>
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
                        <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary leading-tight">Work Directly with <span className="text-highlight">the Manufacturer</span></h2>
                        <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto font-normal leading-relaxed">
                            Partner with a team focused on consistent quality, reliable supply, and long-term business relationships across Indian markets.
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


            <FAQ items={[
                {
                    q: "Q1. Who is AQSHA BATIK SUITS?",
                    a: "AQSHA BATIK SUITS is a women clothing and batik fabric manufacturer based in Ujjain with 15+ years of experience in producing suits for women, batik print dress material, cotton dress collections, and wholesale women fashion products for boutiques, resellers, and wholesalers across India."
                },
                {
                    q: "Q2. Where is AQSHA BATIK SUITS manufacturing located?",
                    a: "Our manufacturing is based in Bherugarh, Ujjain (Madhya Pradesh), a region widely known for traditional batik craftsmanship, printed textile artistry, and skilled batik fabric manufacturing."
                },
                {
                    q: "Q3. What makes AQSHA BATIK SUITS different from other women clothing manufacturers?",
                    a: (
                        <div className="flex flex-col gap-2">
                            <p>We focus on:</p>
                            <ul className="list-disc pl-5 space-y-1 text-primary marker:text-primary/50 font-semibold">
                                <li><span className="text-primary/80 font-medium">consistent fabric quality</span></li>
                                <li><span className="text-primary/80 font-medium">clean cutting</span></li>
                                <li><span className="text-primary/80 font-medium">wearable women dress design</span></li>
                                <li><span className="text-primary/80 font-medium">and fashion collections that actually perform in real wholesale markets.</span></li>
                            </ul>
                            <p className="mt-2">Our collections are built around repeat demand for:</p>
                            <ul className="list-disc pl-5 space-y-1 text-primary marker:text-primary/50 font-semibold">
                                <li><span className="text-primary/80 font-medium">suits for women</span></li>
                                <li><span className="text-primary/80 font-medium">party wear suits for women</span></li>
                                <li><span className="text-primary/80 font-medium">cotton dress material</span></li>
                                <li><span className="text-primary/80 font-medium">and designer dresses for women.</span></li>
                            </ul>
                        </div>
                    )
                },
                {
                    q: "Q4. Do you supply wholesale women dresses and suits for women?",
                    a: "Yes. AQSHA BATIK SUITS primarily focuses on wholesale women dresses, suit set for women collections, batik cotton fabric, and women fashion supply for wholesalers, boutiques, resellers, and online sellers across India."
                },
                {
                    q: "Q5. Which women clothing categories do you manufacture?",
                    a: (
                        <div className="flex flex-col gap-2">
                            <p>We manufacture multiple women fashion categories including:</p>
                            <ul className="list-disc pl-5 space-y-1 text-primary marker:text-primary/50 font-semibold">
                                <li><span className="text-primary/80 font-medium">suits for women</span></li>
                                <li><span className="text-primary/80 font-medium">party wear dress for women</span></li>
                                <li><span className="text-primary/80 font-medium">frock suit for women</span></li>
                                <li><span className="text-primary/80 font-medium">anarkali suits for women</span></li>
                                <li><span className="text-primary/80 font-medium">cotton dresses for women</span></li>
                                <li><span className="text-primary/80 font-medium">night suit for women</span></li>
                                <li><span className="text-primary/80 font-medium">cotton night suit for women</span></li>
                                <li><span className="text-primary/80 font-medium">designer dresses for women</span></li>
                                <li><span className="text-primary/80 font-medium">and trendy women's clothing collections.</span></li>
                            </ul>
                        </div>
                    )
                },
                {
                    q: "Q6. Which cities and markets do you currently supply to?",
                    a: "We currently supply wholesale women clothing and batik collections across major Indian markets including Delhi, Punjab, Gujarat, and expanding fashion markets across India."
                },
                {
                    q: "Q7. Do you offer ready stock for women's dresses and cotton dress material?",
                    a: "Yes. We maintain ready stock for wholesale women dresses, cotton dress material, and batik fashion collections to support faster dispatch and bulk order requirements."
                },
                {
                    q: "Q8. Can I contact AQSHA BATIK SUITS directly for wholesale women clothing inquiries?",
                    a: (
                        <div className="flex flex-col gap-2">
                            <p>Yes. You can directly connect with AQSHA BATIK SUITS through WhatsApp or call for:</p>
                            <ul className="list-disc pl-5 space-y-1 text-primary marker:text-primary/50 font-semibold">
                                <li><span className="text-primary/80 font-medium">wholesale women dresses</span></li>
                                <li><span className="text-primary/80 font-medium">suits for women business inquiries</span></li>
                                <li><span className="text-primary/80 font-medium">cotton dress material pricing</span></li>
                                <li><span className="text-primary/80 font-medium">reseller support</span></li>
                                <li><span className="text-primary/80 font-medium">and bulk fashion orders.</span></li>
                            </ul>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
