"use client";
import Image from "next/image";

export default function PremiumTrustSection() {
    const stats = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            ),
            title: "15+ YEARS OF EXPERIENCE",
            desc: "Since 2008, delivering premium Batik Cloth collections with consistency and care.",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: "SUPPLY ACROSS INDIA",
            desc: "Proudly supplying to fashion businesses in Delhi, Punjab, Gujarat and beyond.",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: "1000+ BUYERS SERVED",
            desc: "Empowering boutique owners and resellers with high-demand Batik Cloth designs.",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
            ),
            title: "READY STOCK & FAST DISPATCH",
            desc: "Extensive ready-stock and quick dispatch across India through trusted logistics.",
        }
    ];

    return (
        <section className="bg-[#F5F1EC] py-32 px-6 border-t border-[#5A2A1F]/5">
            <div className="max-w-6xl mx-auto flex flex-col gap-24 items-center">

                {/* ── HEADER ── */}
                <div className="text-center max-w-5xl w-full flex flex-col gap-6">
                    <div className="flex justify-center items-center gap-3 opacity-60">
                        <span className="w-4 h-[1px] bg-[#5A2A1F]"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5A2A1F]">The Legacy of Quality</span>
                        <span className="w-4 h-[1px] bg-[#5A2A1F]"></span>
                    </div>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F] md:whitespace-nowrap">
                        Join 1000+ Satisfied Business Owners
                    </h2>
                    <p className="text-lg text-[#5A2A1F]/70 font-medium px-4 max-w-3xl mx-auto">
                        Trusted by boutique owners and resellers across India for premium Batik Cloth designs, quality you can rely on, service you can trust.
                    </p>
                </div>

                {/* ── ICONS ROW ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 w-full">
                    {stats.map((stat, i) => (
                        <div key={i} className={`flex flex-col items-center text-center gap-6 px-4 md:px-8 group ${i !== 3 ? 'lg:border-r border-[#5A2A1F]/10' : ''}`}>
                            <div className="relative w-20 h-20 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                <div className="absolute inset-0 text-[#E8D9C0]/80">
                                    <svg viewBox="0 0 100 100" fill="currentColor" className="animate-slow-spin">
                                        <path d="M50 0 C55 10 65 10 70 15 C80 20 85 30 85 40 C85 50 95 55 95 65 C95 75 85 85 75 85 C65 85 60 95 50 95 C40 95 35 85 25 85 C15 85 5 75 5 65 C5 55 15 50 15 40 C15 30 20 20 30 15 C35 10 45 10 50 0" />
                                    </svg>
                                </div>
                                <div className="relative z-10 text-[#5A2A1F]">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="font-black text-[13px] uppercase tracking-widest text-[#5A2A1F] leading-tight">
                                    {stat.title}
                                </h4>
                                <p className="text-sm font-medium text-[#5A2A1F]/60 leading-relaxed">
                                    {stat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── VIDEO BANNER ── */}
                <div className="w-full relative group cursor-pointer mt-8">
                    <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white/50">
                        <Image
                            src="/cotton dress for women image.webp"
                            alt="Manufacturing View"
                            fill
                            className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl border border-white/30 group-hover:bg-white group-hover:text-[#5A2A1F] transition-all">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 ml-1">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <div className="text-white">
                                    <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-1">360° Manufacturing View</h3>
                                    <p className="text-sm md:text-base font-medium opacity-80">Authentic Craftsmanship from Ujjain</p>
                                </div>
                            </div>
                            <button className="hidden md:block bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
                                Visit Plant
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── BOTTOM PILL ── */}
                <div className="w-full max-w-4xl bg-[#E8D9C0] rounded-full p-2 md:p-3 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm border border-[#5A2A1F]/5">
                    <div className="flex items-center gap-4 pl-4 md:pl-6 pt-4 md:pt-0 pb-2 md:pb-0">
                        <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-[#5A2A1F] shrink-0">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-sm font-bold text-[#5A2A1F]">Your growth is our priority.</p>
                            <p className="text-xs font-medium text-[#5A2A1F]/60">Let's build something beautiful together.</p>
                        </div>
                    </div>
                    <a href="https://wa.me/918815373767" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-[#3E1C15] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-3">
                        Partner With Us
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
