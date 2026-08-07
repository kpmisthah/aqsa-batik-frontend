"use client";
import Image from "next/image";

export default function PremiumTrustSection() {
    const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20the%20wholesale%20catalogue";

    return (
        <section className="bg-cream pt-16 pb-12 md:pt-20 md:pb-16 px-6 md:px-12 border-t border-border/40">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">

                {/* Top Heading Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 w-full">
                    <div className="flex flex-col gap-3 max-w-xl">
                        <span className="text-overline">The Legacy of Quality</span>
                        <h2 className="text-h2">
                            Trusted By 1000+ Retailers
                        </h2>
                    </div>
                    <div className="max-w-md pb-2 border-l-2 border-accent/30 pl-5">
                        <p className="text-body1">
                            We don't just supply fabric; we build growth for boutiques, wholesalers, and resellers across India with collections engineered for repeating demand.
                        </p>
                    </div>
                </div>

                {/* Minimalist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                    
                    {/* The Cinematic Card (Spans 2 columns & 2 rows on desktop to balance out the 4 small cards) */}
                    <div className="col-span-1 md:col-span-2 lg:row-span-2 h-full min-h-[300px] lg:min-h-0 relative rounded-2xl overflow-hidden group shadow-md border border-border/40">
                        <Image
                            src="/artisanal_batik_workshop.png"
                            alt="Retail and Manufacturing Craftsmanship"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-[4s] ease-out brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                        
                        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white z-10 w-[calc(100%-2.5rem)] flex flex-col gap-1.5">
                            <span className="text-[10px] uppercase font-semibold tracking-[0.15em] text-white/70">Authentic Ujjain Roots</span>
                            <h4 className="text-xl md:text-2xl font-heading font-normal">360° Workshop Tour</h4>
                        </div>
                    </div>

                    {[
                        { num: "01", t: "15+ Years Heritage", d: "Mastering consistency and precision finishing since 2008." },
                        { num: "02", t: "Pan-India Supply", d: "Fulfilling daily demand across all major growing markets." },
                        { num: "03", t: "Ready Dispatch", d: "Fastest exact turnaround with trusted logistics partners." },
                        { num: "04", t: "Direct Margins", d: "We manufacture, allowing you to maximize all profit." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-border/40 hover:-translate-y-1 transition-transform duration-500 text-left relative overflow-hidden">
                            <span className="text-3xl text-accent/15 mb-6 font-heading italic relative z-10">{item.num}</span>
                            <h4 className="text-base font-heading font-medium mb-2 text-primary relative z-10">{item.t}</h4>
                            <p className="text-[13px] leading-relaxed text-foreground relative z-10">{item.d}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Card */}
                <div className="w-full bg-white rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm border border-border/40">
                    <div className="flex flex-col gap-2 text-center lg:text-left">
                        <h4 className="font-heading text-xl md:text-2xl text-primary font-normal">Join Our Verified Retail Network</h4>
                        <p className="text-body2">Partner with an honest, transparent supply chain that scales with you.</p>
                    </div>

                    <a href={WA} target="_blank" rel="noreferrer" className="bg-accent text-white px-8 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] shadow-sm hover:bg-accent/90 transition-colors flex shrink-0 items-center gap-2">
                        Become A Partner <span className="text-base leading-none">&rarr;</span>
                    </a>
                </div>
                
            </div>
        </section>
    );
}
