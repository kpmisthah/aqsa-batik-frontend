"use client";
import Image from "next/image";

export default function PremiumTrustSection() {
    const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20the%20wholesale%20catalogue";

    return (
        <section className="bg-[#F5F1EC] py-6 md:py-10 px-6 border-t border-[#5A2A1F]/5">
            <div className="max-w-[1200px] mx-auto flex flex-col items-start md:items-center text-left md:text-center gap-4">
                <div className="flex flex-col items-start md:items-center gap-2 md:gap-3 max-w-4xl">
                    <div className="flex items-center justify-center gap-2 md:gap-3 w-full">
                        <span className="w-8 h-[1px] bg-[#8B3A2B]/30"></span>
                        <span className="text-[9px] md:text-[10px] font-black text-[#8B3A2B] uppercase tracking-[0.4em]">THE LEGACY OF QUALITY</span>
                        <span className="w-8 h-[1px] bg-[#8B3A2B]/30"></span>
                    </div>

                    <h2 className="font-playfair text-[18px] md:text-2xl lg:text-[28px] font-semibold leading-[1.2] text-[#5A2A1F] px-0 md:px-4">
                        Join 1000+ Retailers, Boutiques & Resellers Growing With AQSHA BATIK
                    </h2>

                    <p className="text-[11px] md:text-[14px] text-[#5A2A1F]/70 font-medium leading-relaxed max-w-3xl px-0 md:px-2">
                        Trusted across Delhi, Punjab, Gujarat, Rajasthan, Maharashtra, UP, Kolkata, Bangalore and growing markets for premium batik cloth, breathable cotton fabric, and stylish women clothing collections that actually move.
                    </p>
                </div>

                {/* Mini Trust Boxes */}
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-y-4 gap-x-2 lg:gap-y-0 lg:gap-x-0 lg:divide-x divide-[#5A2A1F]/10 border-t border-[#5A2A1F]/10 pt-4 mt-2">
                    {[
                        {
                            t: "15+ Years Experience",
                            d: "Manufacturing batik fabric and cotton dress material with consistency, finishing, and reliable quality since 2008.",
                            i: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        },
                        {
                            t: "Pan India Supply",
                            d: "Supplying boutiques, wholesalers, and women clothing sellers across multiple Indian states.",
                            i: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        },
                        {
                            t: "1000+ Buyers Served",
                            d: "Helping resellers grow with fast-moving batik print design and repeat-demand collections.",
                            i: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        },
                        {
                            t: "Ready Stock Dispatch",
                            d: "Quick dispatch support through trusted courier partners across India.",
                            i: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        }
                    ].map((box, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-1.5 group px-1 lg:px-4">
                            <div className="relative w-10 h-10 flex items-center justify-center shrink-0 mb-1">
                                <div className="absolute inset-0 bg-[#E8D9C0] opacity-60 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] group-hover:rotate-[30deg] transition-transform duration-700"></div>
                                <div className="relative z-10 text-[#8B3A2B]">
                                    {box.i}
                                </div>
                            </div>
                            <h4 className="font-black text-[10px] lg:text-[13px] uppercase tracking-wider text-[#5A2A1F]">{box.t}</h4>
                            <p className="text-[10px] lg:text-xs font-medium text-[#5A2A1F]/70 leading-relaxed max-w-[240px]">{box.d}</p>
                        </div>
                    ))}
                </div>

                {/* Video / Plant View Banner */}
                <div className="w-full relative mt-4 rounded-[32px] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.2)] h-[300px] md:h-[450px]">
                    <Image src="/cotton dress for women image.webp" alt="Manufacturing Plant" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-[2s] brightness-[0.65]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col md:flex-row items-start md:items-center justify-between w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 cursor-pointer hover:bg-white/30 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.3)] shrink-0">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1 opacity-90"><path d="M5 3l14 9-14 9V3z" /></svg>
                            </div>
                            <div className="flex flex-col text-left">
                                <h3 className="font-playfair text-2xl md:text-3xl font-medium text-white tracking-tight">360° Manufacturing View</h3>
                                <p className="text-xs md:text-sm text-white/70 font-medium mt-1 uppercase tracking-widest">Authentic Craftsmanship from Ujjain</p>
                            </div>
                        </div>
                        <a href={WA} target="_blank" rel="noreferrer" className="px-6 py-3 border border-white/20 bg-white/10 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-[#5A2A1F] transition-all duration-300 whitespace-nowrap shrink-0">
                            VISIT PLANT
                        </a>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="bg-[#E8D9C0]/80 rounded-full py-1.5 px-4 flex flex-col md:flex-row items-center justify-between w-full max-w-3xl mx-auto gap-3 mt-2 shadow-sm border border-[#5A2A1F]/5">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 text-[#8B3A2B]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-bold text-[#5A2A1F] text-[11px] tracking-tight leading-tight">Your growth is our priority.</span>
                            <span className="text-[9px] text-[#5A2A1F]/70 font-medium leading-none">Let&apos;s build something beautiful together.</span>
                        </div>
                    </div>
                    <a href={WA} target="_blank" rel="noreferrer" className="bg-[#5A2A1F] text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[#8B3A2B] transition-colors flex items-center gap-1.5 shrink-0">
                        PARTNER WITH US <span className="text-xs font-bold leading-none">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
