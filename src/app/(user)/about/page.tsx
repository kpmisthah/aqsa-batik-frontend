"use client";
import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";


const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Aqsha%20Batik";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-sans selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <title>About AQSHA BATIK | 15+ Years of Batik Manufacturing Excellence</title>
            <meta name="description" content="Learn about Aqsha Batik's 15-year heritage in manufacturing premium cotton Batik Cloth and fabrics. Committed to quality, consistency, and manufacturer-direct pricing." />


            <Nav />

            {/* ── HERO SECTION ── */}
            <section className="relative h-[80vh] w-full flex items-center overflow-hidden bg-[#5A2A1F]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/about_hero.png"
                        alt="Aqsha Batik Heritage"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                        priority
                        className="brightness-75 contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A1F]/90 via-[#5A2A1F]/20 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
                    <div className="max-w-5xl flex flex-col gap-6">
                        <span className="text-xs font-bold text-[#FFD700] uppercase tracking-[0.4em]">Our Heritage</span>
                        <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-[1.1]">
                            <span className="block whitespace-nowrap">Legacy <span className='hero-highlight'>Craftsmanship</span></span>
                            <span className="block whitespace-nowrap">Behind Every <span className='hero-highlight'>Design</span></span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium opacity-90 italic">Rooted in Bherugarh, Ujjain, we carry forward the legacy of traditional wax batik—refined over 15+ years into premium batik cloth, batik dresses, and high-quality batik fabric. Our collections focus on durable cotton dress material and consistent women cotton wholesale fabric, built for real market demand and ready-to-sell use.</p>
                    </div>
                </div>
            </section>
            <GoogleReviewBar />

            {/* ── SECTION: OUR STORY ── */}
            <section className="py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-start">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">The Beginning</span>
                            <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F]">A Legacy Built on Real Struggle</h2>
                        </div>
                        <div className="flex flex-col gap-6 text-lg leading-relaxed text-[#5A2A1F]/80">
                            <p className="font-bold text-[#5A2A1F]">
                                This didn’t start as a brand. It started in Bherugarh, Ujjain—where batik is not a business, it’s a craft passed through hands.
                            </p>
                            <p>
                                In 2010, my father began with just 15 Batik Cloth. It took 20 days to sell them. There was no system. No certainty. Just effort.
                            </p>
                            <p>
                                He didn’t stop. He made another 20 suits. Faced losses. Found mistakes in fabric quality. Sold pieces at lower prices just to recover. There were times when money wasn’t enough. A small ₹10–20 thousand bank loan kept things moving.
                            </p>
                            <p>
                                But instead of quitting, he focused on improving what mattered:
                                <span className="block mt-4 pl-4 border-l-2 border-[#8B3A2B]">
                                    👉 Better quality <br />
                                    👉 Better cutting <br />
                                    👉 Better understanding of what buyers actually want
                                </span>
                            </p>
                        </div>

                        {/* ── JOURNEY ACCORDION ── */}
                        <div className="flex flex-col gap-4 mt-4">
                            {[
                                {
                                    t: "Turning Point",
                                    d: "Instead of waiting for customers, he went to them. Travelled to different cities. Met wholesalers. Showed samples. That’s where the shift happened. From retail struggle → to wholesale supply. And slowly, things started changing."
                                },
                                {
                                    t: "Growth Phase",
                                    d: "Where it once took 20 days to sell 15 suits, By 2016, we were selling 1500–2000 pieces at the same time. That growth wasn’t luck. It was built on correction, consistency, and learning from every mistake."
                                },
                                {
                                    t: "Digital Shift",
                                    d: "In 2017, I brought the business online. Through WhatsApp, social media, and marketplaces, our reach expanded and so did our speed."
                                },
                                {
                                    t: "Setback & Comeback",
                                    d: "During COVID (2019–2020), like many others, we faced losses. But we didn’t stop. We adapted again. And from 2022 onwards, the business came back stronger—with better systems, better demand, and better clarity."
                                },
                                {
                                    t: "Today",
                                    d: (
                                        <>
                                            Today, AQSHA Batik Cloth is trusted across major Indian markets: Delhi, Punjab, Gujarat, and beyond. We supply:
                                            <ul className="mt-2 space-y-1">
                                                <li>• Wholesalers</li>
                                                <li>• Resellers</li>
                                                <li>• Boutiques</li>
                                            </ul>
                                            <p className="mt-2 font-bold italic text-[#8B3A2B]">With one focus: Providing batik clothing for women that actually sells</p>
                                        </>
                                    )
                                },
                                {
                                    t: "The Legacy Philosophy",
                                    d: "This journey wasn’t built on perfect conditions. It was built on persistence, mistakes, and consistency. And that’s what still defines us today."
                                }
                            ].map((phase, i) => {
                                // Local state for accordion in About page
                                // Since we can't easily add many useState hooks dynamically, 
                                // we'll use a single state for the About journey if needed, 
                                // but for simplicity and following the 'menu button' request, 
                                // let's just make them expandable.
                                return ( phase && 
                                    <details key={i} className="group border border-[#5A2A1F]/10 rounded-2xl overflow-hidden bg-[#F5F1EC]/30">
                                        <summary className="p-6 flex justify-between items-center cursor-pointer list-none hover:bg-[#F5F1EC]/50 transition-colors">
                                            <span className="font-bold text-[#5A2A1F] uppercase tracking-widest text-sm">{phase.t}</span>
                                            <span className="text-[#8B3A2B] group-open:rotate-180 transition-transform">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                            </span>
                                        </summary>
                                        <div className="p-6 pt-0 text-[#5A2A1F]/80 leading-relaxed font-medium">
                                            {phase.d}
                                        </div>
                                    </details>
                                );
                            })}
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-32 relative h-[700px] rounded-[60px] overflow-hidden shadow-2xl border-[15px] border-[#F5F1EC] group">
                        <Image src="/history.png" alt="Aqsha Batik Legacy Journey" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[3s] brightness-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-10 rounded-[40px] border border-[#5A2A1F]/5 shadow-xl">
                            <div className="flex flex-col gap-2">
                                <span className="font-playfair text-5xl font-black text-[#5A2A1F]">2010</span>
                                <span className="text-xs font-black uppercase tracking-widest text-[#8B3A2B]">The Foundation Year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── SECTION: WHAT WE STAND FOR (Premium Layout) ── */}
            <PremiumFeatureSection
                tag="Guided by Principles"
                title={<>What We <br />Stand For</>}
                imageSrc="/batik_fabric_hero_premium.png"
                quote="Every piece of batik cloth, cotton dress material, and batik fabric we produce is guided by principles that ensure quality, consistency, and long-term trust for buyers."
                features={[
                    {
                        t: "Authentic Craftsmanship",
                        d: "We follow traditional wax-resist techniques to create genuine batik designs, ensuring every piece reflects real craftsmanship—not mass imitation.",
                        c: "text-blue-400",
                        i: (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        )
                    },
                    {
                        t: "Material Integrity",
                        d: "Our collections use high-quality cotton fabric and durable dress material, built for comfort, repeat use, and consistent wholesale demand.",
                        c: "text-emerald-400",
                        i: (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            </svg>
                        )
                    },
                    {
                        t: "Direct Transparency",
                        d: "As a direct manufacturer, we offer clear pricing, reliable supply, and honest communication for long-term business partnerships.",
                        c: "text-orange-400",
                        i: (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        )
                    },
                    {
                        t: "Bulk Reliability",
                        d: "We maintain ready stock and fast dispatch timelines to ensure your boutique or wholesale business never faces inventory gaps across India.",
                        c: "text-purple-400",
                        i: (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                            </svg>
                        )
                    }
                ]}
            />

            {/* ── SECTION: MANUFACTURING EXCELLENCE ── */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col gap-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative h-[600px] rounded-[60px] overflow-hidden shadow-2xl border-[15px] border-[#F5F1EC] group">
                            <Image src="/batik_fabric_hero.png" alt="Fabric Quality" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[3s]" />
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">The Process</span>
                                <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F]">Our Whole Fabric Manufacturing Standards</h2>
                            </div>
                            <div className="flex flex-col gap-8">
                                {[
                                    { t: "Premium Cotton Selection", d: "We use high-quality cotton fabric (60x60) known for comfort, durability, and suitability for daily wear and stitched garments." },
                                    { t: "Traditional Wax-Dyeing", d: "Our process follows original wax techniques to create detailed batik print designs with strong pattern suits clarity and lasting color." },
                                    { t: "Quality Control & Finishing", d: "Each batch is checked for consistency, color accuracy, and clean cutting—ensuring it is ready for bulk supply and retail use." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-10 h-10 rounded-full bg-[#E8D9C0] flex items-center justify-center text-[#5A2A1F] font-black shrink-0 group-hover:bg-[#5A2A1F] group-hover:text-white transition-all">{i + 1}</div>
                                        <div className="flex flex-col gap-1">
                                            <h4 className="font-bold text-xl">{item.t}</h4>
                                            <p className="text-base text-[#5A2A1F]/60 font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FINAL CTAS ── */}
            <section className="py-40 bg-[#F5F1EC] text-center px-6 border-t border-[#5A2A1F]/5">
                <div className="max-w-4xl mx-auto flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <h2 className="font-playfair text-5xl md:text-[90px] font-bold text-[#5A2A1F] leading-tight">Work Directly with the Manufacturer</h2>
                        <p className="text-xl md:text-2xl text-[#5A2A1F]/60 font-medium max-w-2xl mx-auto italic leading-relaxed">
                            Partner with a team focused on consistent quality, reliable supply, and long-term business relationships across Indian markets.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a href={WA} target="_blank" rel="noreferrer" className="bg-[#5A2A1F] text-white px-12 py-7 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl uppercase tracking-widest">
                            Get Wholesale Catalogue
                        </a>
                        <a href="/wholesale" className="bg-white text-[#5A2A1F] border-2 border-[#5A2A1F] px-12 py-7 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest">
                            View Wholesale Terms
                        </a>
                    </div>
                </div>
            </section>


            <FAQ items={[
                {
                    q: "Who is AQSHA Batik Cloth?",
                    a: "AQSHA Batik Cloth (Ujjain) is a batik manufacturer with 15+ years of experience, supplying consistent quality fabric and ready-to-sell collections to wholesalers, resellers, and boutiques across India."
                },
                {
                    q: "Where is your manufacturing based?",
                    a: "Our manufacturing is based in Bherugarh, Ujjain (Madhya Pradesh)—a region known for traditional batik craftsmanship and skilled artisans."
                },
                {
                    q: "What makes your products different from others?",
                    a: "We focus on quality, clean cutting, and consistency. Our fabric is designed to perform in real markets, ensuring repeat demand and reliable supply for buyers."
                },
                {
                    q: "Do you sell wholesale or retail?",
                    a: "We work in both, but our primary focus is on wholesale supply, serving resellers, boutiques, and bulk buyers across multiple states."
                },
                {
                    q: "Which cities do you supply to?",
                    a: "We currently supply across major markets including Delhi, Punjab, Gujarat, and are expanding to more regions across India."
                },
                {
                    q: "Do you offer ready stock or made-to-order?",
                    a: "We maintain ready stock for fast dispatch, while also supporting bulk requirements based on buyer needs."
                },
                {
                    q: "Can I connect with you directly for business inquiries?",
                    a: "Yes. You can connect with us directly via WhatsApp or call to discuss requirements, pricing, and bulk orders."
                }
            ]} />
        </div>
    );
}
