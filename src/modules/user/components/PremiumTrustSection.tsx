"use client";
import Image from "next/image";

export default function PremiumTrustSection() {
    const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20the%20wholesale%20catalogue";

    return (
        <section className="bg-[#FDFBF7] border-y border-primary/5 py-8 md:py-12 px-6 md:px-12">
            <div className="max-w-[1500px] mx-auto flex flex-col gap-8 md:gap-10">

                {/* Top Heading Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 w-full">
                    <div className="flex flex-col gap-4 md:gap-6 max-w-2xl">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-secondary"></span>
                            <span className="text-overline tracking-[0.4em] text-secondary uppercase">The Legacy of Quality</span>
                            <span className="w-12 h-[2px] bg-secondary"></span>
                        </div>
                        <h2 className="text-h1 text-primary leading-tight">
                            Trusted By 1000+ Retailers.
                        </h2>
                    </div>
                    <div className="max-w-md pb-2 border-x-2 border-secondary/30 px-4 md:px-6">
                        <p className="text-body1 text-neutral-900/90 italic">
                            We don't just supply fabric; we build growth for boutiques, wholesalers, and resellers across India with collections engineered for repeating demand.
                        </p>
                    </div>
                </div>

                {/* Modern Bento-Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-[auto] gap-4 md:gap-6 w-full auto-rows-[160px] md:auto-rows-[200px]">
                    
                    {/* Bento Box 1: The Large Cinematic Card (Spans 2 columns, 2 rows on large screens) */}
                    <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-[32px] md:rounded-[40px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                        <Image
                            src="/artisanal_batik_workshop.png"
                            alt="Retail and Manufacturing Craftsmanship"
                            layout="fill"
                            objectFit="cover"
                            unoptimized
                            className="group-hover:scale-105 transition-transform duration-[3s] ease-out brightness-[0.85]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/60 bg-white/10 backdrop-blur-md flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white hover:text-primary transition-all text-white shadow-2xl">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M5 3l14 9-14 9V3z" /></svg>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10 w-[calc(100%-3rem)]">
                            <h4 className="text-h3 mb-2 font-medium">360° Workshop Tour</h4>
                            <p className="text-overline tracking-[0.2em] opacity-80 border-t border-white/20 pt-2">Authentic Ujjain Roots</p>
                        </div>
                    </div>

                    {/* Bento Box 2: Metric 1 */}
                    <div className="bg-white rounded-[32px] md:rounded-[40px] p-5 lg:p-8 border border-primary/5 flex flex-col justify-start gap-4 md:gap-6 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-tan/30 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                            <span className="font-heading font-black text-lg lg:text-xl">01</span>
                        </div>
                        <div className="flex flex-col gap-2 z-10">
                            <h4 className="font-heading text-lg lg:text-2xl text-primary font-bold leading-tight">15+ Years Heritage</h4>
                            <p className="text-xs lg:text-sm font-medium text-primary/70 max-w-[200px]">Mastering consistency and precision finishing since 2008.</p>
                        </div>
                    </div>

                    {/* Bento Box 3: Metric 2 */}
                    <div className="bg-tan/20 rounded-[32px] md:rounded-[40px] p-5 lg:p-8 border border-primary/5 flex flex-col justify-start gap-4 md:gap-6 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                            <span className="font-heading font-black text-lg lg:text-xl">02</span>
                        </div>
                        <div className="flex flex-col gap-2 z-10">
                            <h4 className="font-heading text-lg lg:text-2xl text-primary font-bold leading-tight">Pan-India Supply</h4>
                            <p className="text-xs lg:text-sm font-medium text-primary/70 max-w-[200px]">Fulfilling daily demand across all major growing markets.</p>
                        </div>
                    </div>
                    
                    {/* Bento Box 4: Metric 3 */}
                    <div className="bg-tan/20 rounded-[32px] md:rounded-[40px] p-5 lg:p-8 border border-primary/5 flex flex-col justify-start gap-4 md:gap-6 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                            <span className="font-heading font-black text-lg lg:text-xl">03</span>
                        </div>
                        <div className="flex flex-col gap-2 z-10">
                            <h4 className="font-heading text-lg lg:text-2xl text-primary font-bold leading-tight">Ready Dispatch</h4>
                            <p className="text-xs lg:text-sm font-medium text-primary/70 max-w-[200px]">Fastest exact turnaround with trusted logistics partners.</p>
                        </div>
                    </div>
                    
                    {/* Bento Box 5: Metric 4 */}
                    <div className="bg-white rounded-[32px] md:rounded-[40px] p-5 lg:p-8 border border-primary/5 flex flex-col justify-start gap-4 md:gap-6 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-tan/30 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                            <span className="font-heading font-black text-lg lg:text-xl">04</span>
                        </div>
                        <div className="flex flex-col gap-2 z-10">
                            <h4 className="font-heading text-lg lg:text-2xl text-primary font-bold leading-tight">Direct Margins</h4>
                            <p className="text-xs lg:text-sm font-medium text-primary/70 max-w-[200px]">We manufacture, allowing you to maximize all profit.</p>
                        </div>
                    </div>

                    {/* Bento Box 6: Full Width CTA Card */}
                    <div className="md:col-span-2 lg:col-span-4 bg-[#E5E0D8] rounded-[32px] md:rounded-[40px] px-6 py-5 md:px-10 md:py-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group border border-primary/10">
                        {/* Decorative background element */}
                        <div className="absolute right-0 top-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000 z-0"></div>
                        
                        <div className="flex flex-col gap-2 z-10 w-full lg:w-auto text-center lg:text-left">
                            <h4 className="font-heading text-2xl md:text-4xl text-primary font-black drop-shadow-sm">Join Our Verified Retail Network</h4>
                            <p className="text-sm md:text-base font-bold text-primary/70 mb-2">Partner with an honest, transparent supply chain that scales with you.</p>
                        </div>

                        <a href={WA} target="_blank" rel="noreferrer" className="z-10 inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl md:rounded-3xl hover:bg-black transition-all shadow-xl font-bold uppercase tracking-[0.2em] text-[11px] md:text-sm hover:scale-105 active:scale-95 w-full lg:w-auto shrink-0">
                            BECOME A PARTNER <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
