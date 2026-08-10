"use client";
import Image from "next/image";

export default function PremiumTrustSection() {
    const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20the%20wholesale%20catalogue";

    return (
        <section className="bg-cream pt-20 pb-16 md:pt-24 md:pb-20 px-4 md:px-8 border-t border-border/40 overflow-hidden">
            <div className="max-w-[1500px] mx-auto flex flex-col gap-12 md:gap-16">
                
                {/* Top Heading Area */}
                <div className="flex flex-col items-center text-center gap-4 w-full">
                    <span className="text-overline">
                        The Legacy of Quality
                    </span>
                    <h2 className="text-h2 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[1px] after:bg-primary/20">
                        Trusted By 1000+ Retailers
                    </h2>
                    <p className="text-body1 text-accent/90 leading-relaxed max-w-xl mt-2 text-balance border-none">
                        We don't just supply fabric; we build growth for boutiques, wholesalers, and resellers across India with collections engineered for repeating demand.
                    </p>
                </div>

                {/* Bottom Visual & List Content */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                    
                    {/* Left Visual */}
                    <div className="w-full lg:w-1/2 relative group h-[280px] md:h-[400px] lg:h-[550px]">
                        <div className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl shadow-sm z-10 border border-primary/10">
                            <Image
                                src="/artisanal_batik_workshop.png"
                                alt="Workshop"
                                fill
                                unoptimized
                                className="object-cover object-center grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[4s]"
                            />
                            
                            {/* Overlaid elegant badge */}
                            <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl border border-primary/5 flex flex-col shadow-xl">
                                <span className="text-[7.5px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-accent mb-0.5 md:mb-1">Authentic Ujjain Roots</span>
                                <h4 className="text-[12px] md:text-h4 text-primary m-0 uppercase tracking-wide font-heading">360° Workshop Tour</h4>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-0 md:pt-2 border-t md:border-primary/20 border-transparent md:border-t-solid">
                        {[
                            { num: "01", t: "15+ Years Heritage", d: "Mastering consistency and precision finishing since 2008." },
                            { num: "02", t: "Premium Color Fastness", d: "Advanced printing techniques ensure our batik suits never fade or bleed." },
                            { num: "03", t: "Ready Dispatch", d: "Fastest exact turnaround with trusted logistics partners." },
                            { num: "04", t: "Direct Margins", d: "We manufacture, allowing you to maximize all profit." }
                        ].map((item, i) => (
                            <div key={i} className="group relative flex flex-col md:flex-row md:items-start justify-between py-4 md:py-6 border-b border-primary/20 md:hover:bg-primary/[0.02] transition-colors duration-500 cursor-default px-1 md:-mx-4 md:px-4">
                                <div className="flex gap-3 md:gap-6 items-center w-full md:w-auto mb-1 md:mb-0">
                                    <span className="text-xl md:text-2xl text-primary font-heading italic w-6 md:w-8 shrink-0">{item.num}</span>
                                    <h4 className="text-sm md:text-h4 text-primary md:group-hover:text-accent transition-colors">{item.t}</h4>
                                </div>
                                <p className="text-[11px] md:text-body2 text-accent/80 max-w-full md:max-w-[280px] md:text-right pl-9 md:pl-0">
                                    {item.d}
                                </p>
                            </div>
                        ))}

                        {/* Seamless CTA integration */}
                        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-tan/20 border border-primary/10 p-6 md:p-8 rounded-2xl transition-colors hover:bg-tan/30">
                            <div className="flex flex-col gap-1 text-center md:text-left">
                                <h4 className="text-h4 text-primary">Join Our Verified Network</h4>
                                <p className="text-body2 text-accent/80">Partner with an honest, transparent supply chain.</p>
                            </div>
                            <a href={WA} target="_blank" rel="noreferrer" className="group flex flex-shrink-0 items-center justify-center gap-3 px-8 py-3.5 border border-primary/30 text-primary text-[11px] uppercase tracking-[0.15em] font-bold hover:border-accent hover:text-accent transition-all duration-300">
                                <span>Become A Partner</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
