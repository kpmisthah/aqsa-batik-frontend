"use client";
import Image from "next/image";

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20get%20your%20latest%20batik%20catalogue.";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0A0A0A] text-white pt-6 pb-2 px-4 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="footer-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M0 0h100v100H0z" fill="none" />
                        <path d="M10 10l10 10M90 10L80 20M10 90l10-10M90 90l-10-10" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#footer-pattern)" />
                </svg>
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                {/* ── TOP SECTION: BRAND, LINKS & CTA ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-white/5">
                    
                    {/* Brand Section (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl w-fit">
                            <img src="/aqdas-logo.svg" alt="Aqdas Logo" className="h-16 md:h-20 w-auto object-contain" />
                        </div>
                        <p className="opacity-60 text-xs md:text-sm leading-relaxed font-medium max-w-sm">
                            Direct Manufacturer from Ujjain. Specializing in premium batik dress material & wholesale supply.
                        </p>
                        <div className="flex flex-col gap-2 text-xs font-bold mt-2">
                            <div className="flex items-center gap-3 group">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span className="opacity-70">Bherugarh, Ujjain, MP 456010</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <a href={WA} target="_blank" rel="noreferrer" className="font-sans tracking-wide opacity-70 hover:opacity-100 hover:text-[#FFD700] transition-colors">+91 88153 73767</a>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid (5 cols) */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-8">
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[#FFD700]">Quick Links</span>
                            <div className="flex flex-col gap-2">
                                {[
                                    { name: "Home", link: "/" },
                                    { name: "Batik Cloth", link: "/cotton-cloth" },
                                    { name: "Batik Fabric", link: "/batik-fabric" },
                                    { name: "Wholesale", link: "/wholesale" },
                                    { name: "New Arrival", link: "/new-batik-prints" },
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-xs font-bold opacity-50 hover:opacity-100 hover:text-[#FFD700] transition-all">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[#FFD700]">Collections</span>
                            <div className="flex flex-col gap-2">
                                {[
                                    { name: "Batik Dress Material", link: "/cotton-cloth" },
                                    { name: "Cotton Collection", link: "/batik-fabric" },
                                    { name: "Printed Fabric", link: "/wholesale" },
                                    { name: "Ladies Cotton Suit", link: "/new-batik-prints" }
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-xs font-bold opacity-50 hover:opacity-100 hover:text-[#FFD700] transition-all">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Newsletter & CTA (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[#FFD700]">Stay Updated</span>
                        <div className="flex w-full relative">
                            <input type="text" placeholder="Your email..." className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-xs focus:outline-none focus:border-[#FFD700]/50" />
                            <button className="absolute right-1 top-1 bottom-1 px-4 bg-[#FFD700] text-black rounded font-black text-[10px] uppercase hover:bg-white transition-all">
                                Go
                            </button>
                        </div>
                        <a href={WA} target="_blank" rel="noreferrer" className="w-full py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-lg font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all mt-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                            Get Catalogue on WhatsApp
                        </a>
                    </div>
                </div>

                {/* ── MIDDLE SECTION: TRUST STRIP ── */}
                <div className="py-4 grid grid-cols-4 gap-2 text-center border-b border-white/5">
                    {[
                        { val: "15+", label: "Years" },
                        { val: "1000+", label: "Buyers" },
                        { val: "Ready", label: "Stock" },
                        { val: "Fast", label: "Dispatch" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center">
                            <span className="text-sm md:text-lg font-playfair font-black text-[#FFD700]">{stat.val}</span>
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* ── BOTTOM SECTION: LEGAL & COPYRIGHT ── */}
                <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
                        {[
                            { name: "Privacy Policy", link: "/privacy-policy" },
                            { name: "Terms & Conditions", link: "/terms-and-conditions" },
                            { name: "Shipping Policy", link: "/shipping-delivery-policy" }
                        ].map((legal, i) => (
                            <a key={i} href={legal.link} className="text-[9px] font-black uppercase opacity-40 hover:opacity-100 transition-all">
                                {legal.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="text-[9px] font-black uppercase opacity-20">
                            © 2026 AQSHA Batik
                        </p>
                        <a href="#" className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                            <span className="text-[8px] font-black uppercase text-white/50">By:</span>
                            <div className="flex items-center font-black text-[10px] tracking-widest">
                                <span className="text-[#3B82F6]">UFUQ</span>
                                <span className="text-[#06b6d4]">TECHS</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* Scalloped Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent"></div>
        </footer>
    );
}
