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
                            <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.2em] leading-relaxed">From Handmade Batik To Trusted Women Fashion Supply</span>
                            <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#5A2A1F] leading-tight">The Journey Behind AQSHA BATIK SUITS</h2>
                        </div>
                        <div className="flex flex-col gap-6 text-lg leading-relaxed text-[#5A2A1F]/80">
                            <p className="font-bold text-xl text-[#5A2A1F] leading-relaxed">
                                From 15 handmade suits for women in Bherugarh, Ujjain to supplying wholesalers, boutiques, and resellers across India—this journey was built on consistency, correction, and understanding what women actually want to wear.
                            </p>
                            <p className="font-bold text-[#5A2A1F]">
                                This didn’t start as a brand.
                                <br />
                                It started in Bherugarh, Ujjain — where batik is not just textile work. It is craftsmanship passed through generations of hands.
                            </p>
                            <p>
                                In 2010, my father started with only 15 suits for women.
                                <br />Simple batik designs.
                                <br />Small production.
                                <br />No team.
                                <br />No big setup.
                                <br />It took nearly 20 days to sell those first 15 pieces.
                                <br />There was no roadmap.
                                <br />No certainty.
                                <br />Only effort.
                            </p>
                            <p>
                                But he did not stop.
                                <br />He created another batch.
                                <br />Then another.
                                <br />Some suits sold.
                                <br />Some did not.
                                <br />There were fabric mistakes.
                                <br />Quality issues.
                                <br />Losses.
                                <br />At times, dresses had to be sold at lower prices just to recover costs and continue production.
                                <br />A small ₹10–20 thousand bank loan helped keep the work moving.
                            </p>
                            <p>
                                But instead of giving up, he focused on improving the foundation:
                                <span className="block mt-4 pl-4 border-l-2 border-[#8B3A2B] space-y-1">
                                    <span className="block">👉 Better fabric quality</span>
                                    <span className="block">👉 Better cutting and fitting</span>
                                    <span className="block">👉 Better suit design for women</span>
                                    <span className="block">👉 Better understanding of what buyers actually wanted</span>
                                </span>
                                <span className="block mt-6 font-bold text-xl text-[#8B3A2B] italic">That mindset changed everything.</span>
                            </p>
                        </div>

                        {/* ── JOURNEY ACCORDION ── */}
                        <div className="flex flex-col gap-4 mt-4">
                            {[
                                {
                                    t: "From Local Selling To Wholesale Supply",
                                    d: (
                                        <div className="flex flex-col gap-3">
                                            <p>
                                                Instead of waiting for customers to come, he went directly to them.
                                                <br />Travelled to different cities.
                                                <br />Met wholesalers personally.
                                                <br />Carried samples by hand.
                                                <br />Understood what resellers were searching for in women dresses, suit sets, and designer dress collections.
                                            </p>
                                            <p className="font-bold text-xl text-[#8B3A2B] italic">That was the real turning point.</p>
                                            <p>
                                                The business slowly shifted:
                                                <br />From retail struggle → to wholesale women fashion supply.
                                            </p>
                                            <p>
                                                As demand grew, our collections expanded into:
                                                <span className="block mt-2 pl-4 border-l-2 border-[#8B3A2B] space-y-1 font-medium">
                                                    <span className="block">👉 suit set for women</span>
                                                    <span className="block">👉 frock suit for women</span>
                                                    <span className="block">👉 cotton fashion collections</span>
                                                    <span className="block">👉 anarkali suits for women</span>
                                                    <span className="block">👉 party wear suits for women</span>
                                                    <span className="block">👉 and breathable everyday women clothing</span>
                                                </span>
                                            </p>
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
                                            <p className="font-bold text-lg text-[#5A2A1F]">That growth did not come from luck.</p>
                                            <p>
                                                It came from:
                                                <span className="block mt-2 pl-4 border-l-2 border-[#8B3A2B] space-y-1 font-medium">
                                                    <span className="block">👉 improving quality constantly</span>
                                                    <span className="block">👉 correcting mistakes quickly</span>
                                                    <span className="block">👉 understanding women dress design trends</span>
                                                    <span className="block">👉 and building wearable collections women repeatedly purchased</span>
                                                </span>
                                            </p>
                                            <p>
                                                Every new design dress for women taught us something.
                                                <br />Every market visit improved our understanding of:
                                                <span className="block mt-2 pl-4 border-l-2 border-[#8B3A2B] space-y-1 font-medium">
                                                    <span className="block">👉 dress designs for women</span>
                                                    <span className="block">👉 fabric demand</span>
                                                    <span className="block">👉 fitting preferences</span>
                                                    <span className="block">👉 and changing fashion behavior</span>
                                                </span>
                                            </p>
                                        </div>
                                    )
                                },
                                {
                                    t: "Taking Batik Fashion Online",
                                    d: (
                                        <div className="flex flex-col gap-3">
                                            <p>
                                                In 2017, I brought AQSHA BATIK SUITS online.
                                            </p>
                                            <p>
                                                Through:
                                                <span className="block mt-2 pl-4 border-l-2 border-[#8B3A2B] space-y-1 font-medium">
                                                    <span className="block">👉 WhatsApp</span>
                                                    <span className="block">👉 social media</span>
                                                    <span className="block">👉 online marketplaces</span>
                                                </span>
                                            </p>
                                            <p>
                                                our collections started reaching more wholesalers, boutiques, and women fashion buyers across India.
                                            </p>
                                            <p className="font-bold text-lg text-[#5A2A1F]">That digital shift changed our speed completely.</p>
                                            <p>
                                                Now our collections included:
                                                <span className="block mt-2 pl-4 border-l-2 border-[#8B3A2B] space-y-1 font-medium">
                                                    <span className="block">👉 designer dresses for women</span>
                                                    <span className="block">👉 trendy suits for women</span>
                                                    <span className="block">👉 latest dress designs for womens</span>
                                                    <span className="block">👉 party wear dress collections</span>
                                                    <span className="block">👉 and breathable cotton fashion styles</span>
                                                </span>
                                            </p>
                                            <p className="font-bold text-[#8B3A2B] italic">The internet helped our batik craftsmanship reach beyond local markets.</p>
                                        </div>
                                    )
                                },
                                {
                                    t: "The COVID Phase & Rebuilding Again",
                                    d: (
                                        <div className="flex flex-col gap-3">
                                            <p>
                                                Like many fashion businesses, COVID during 2019–2020 created losses and uncertainty.
                                                <br />Demand slowed.
                                                <br />Markets paused.
                                                <br />Orders became unstable.
                                            </p>
                                            <p className="font-bold text-lg text-[#5A2A1F]">But we adapted again.</p>
                                            <p>
                                                Instead of stopping, we improved systems, stock planning, and production clarity.
                                            </p>
                                            <p>
                                                And from 2022 onwards, the business returned stronger with:
                                                <span className="block mt-2 pl-4 border-l-2 border-[#8B3A2B] space-y-1 font-medium">
                                                    <span className="block">👉 better operational systems</span>
                                                    <span className="block">👉 stronger wholesale demand</span>
                                                    <span className="block">👉 improved product quality</span>
                                                    <span className="block">👉 and clearer fashion positioning</span>
                                                </span>
                                            </p>
                                        </div>
                                    )
                                },
                                {
                                    t: "Where AQSHA BATIK SUITS Stands Today",
                                    d: (
                                        <div className="flex flex-col gap-3">
                                            <p>
                                                Today, AQSHA BATIK SUITS supplies wholesalers, boutiques, and resellers across major Indian markets including:
                                                <span className="block mt-2 pl-4 border-l-2 border-[#8B3A2B] space-y-1 font-medium">
                                                    <span className="block">👉 Delhi</span>
                                                    <span className="block">👉 Punjab</span>
                                                    <span className="block">👉 Gujarat</span>
                                                    <span className="block">👉 and growing fashion markets across India</span>
                                                </span>
                                            </p>
                                            <p>
                                                We now manufacture collections across multiple women fashion categories including:
                                                <span className="block mt-2 pl-4 border-l-2 border-[#8B3A2B] space-y-1 font-medium">
                                                    <span className="block">👉 suits for women</span>
                                                    <span className="block">👉 designer dress for women</span>
                                                    <span className="block">👉 party wear suits for women</span>
                                                    <span className="block">👉 frock suit for women</span>
                                                    <span className="block">👉 anarkali suits for women</span>
                                                    <span className="block">👉 night suit for women</span>
                                                    <span className="block">👉 cotton night suit for women</span>
                                                    <span className="block">👉 and stylish everyday women clothing</span>
                                                </span>
                                            </p>
                                            <p>
                                                But even after all these years, our focus remains the same:
                                                <br /><span className="font-bold text-[#5A2A1F]">👉 Creating wearable batik clothing for women that actually sells repeatedly.</span>
                                            </p>
                                            <p className="font-bold text-lg text-[#8B3A2B] italic mt-2">
                                                Because fashion changes. Comfort, quality, and trust do not.
                                            </p>
                                        </div>
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
                            <ul className="list-disc pl-5 space-y-1 text-[#8B3A2B] marker:text-[#8B3A2B]/50 font-semibold">
                                <li><span className="text-[#5A2A1F]/80 font-medium">consistent fabric quality</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">clean cutting</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">wearable women dress design</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">and fashion collections that actually perform in real wholesale markets.</span></li>
                            </ul>
                            <p className="mt-2">Our collections are built around repeat demand for:</p>
                            <ul className="list-disc pl-5 space-y-1 text-[#8B3A2B] marker:text-[#8B3A2B]/50 font-semibold">
                                <li><span className="text-[#5A2A1F]/80 font-medium">suits for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">party wear suits for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">cotton dress material</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">and designer dresses for women.</span></li>
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
                            <ul className="list-disc pl-5 space-y-1 text-[#8B3A2B] marker:text-[#8B3A2B]/50 font-semibold">
                                <li><span className="text-[#5A2A1F]/80 font-medium">suits for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">party wear dress for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">frock suit for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">anarkali suits for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">cotton dresses for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">night suit for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">cotton night suit for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">designer dresses for women</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">and trendy women's clothing collections.</span></li>
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
                            <ul className="list-disc pl-5 space-y-1 text-[#8B3A2B] marker:text-[#8B3A2B]/50 font-semibold">
                                <li><span className="text-[#5A2A1F]/80 font-medium">wholesale women dresses</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">suits for women business inquiries</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">cotton dress material pricing</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">reseller support</span></li>
                                <li><span className="text-[#5A2A1F]/80 font-medium">and bulk fashion orders.</span></li>
                            </ul>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
