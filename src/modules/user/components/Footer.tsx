"use client";
import Image from "next/image";

const WA = "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20get%20your%20latest%20batik%20catalogue.";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0A0A0A] text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
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
                {/* ── TOP SECTION: BRAND & LINKS ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pb-20 border-b border-white/5">
                    {/* Brand Section (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <span className="font-playfair text-5xl font-bold tracking-tight text-[#FFD700]">AQSHA</span>
                            <span className="font-sans text-xs font-black tracking-[0.5em] opacity-50 uppercase">Batik Cloth</span>
                            <div className="h-px w-20 bg-[#FFD700]/30 mt-4"></div>
                        </div>
                        <p className="opacity-60 text-lg leading-relaxed font-medium max-w-sm">
                            Direct Batik Manufacturer from Ujjain, Madhya Pradesh. Specializing in premium batik dress material, cotton fabric, and wholesale supply across India.
                        </p>
                        <div className="flex flex-col gap-6 text-sm font-bold">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <span className="opacity-70 group-hover:opacity-100 transition-opacity">Bherugarh, Ujjain, MP 456010</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <span className="opacity-70 group-hover:opacity-100 transition-opacity">+91 XXXXX XXXXX</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                                </div>
                                <span className="opacity-70 group-hover:opacity-100 transition-opacity">WhatsApp Support Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid (5 cols) */}
                    <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-2 gap-12">
                        {/* Column 1: Quick Navigation */}
                        <div className="flex flex-col gap-10">
                            <span className="text-xs uppercase font-black tracking-[0.4em] text-[#FFD700] flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></div>
                                Quick Links
                            </span>
                            <div className="flex flex-col gap-5">
                                {[
                                    { name: "Home", link: "/" },
                                    { name: "Batik Cloth", link: "/batik-cloth" },
                                    { name: "Batik Fabric", link: "/batik-fabric" },
                                    { name: "New Arrival Batik Clothing", link: "/new-arrival" },
                                    { name: "Wholesale", link: "/wholesale" },
                                    { name: "About Us", link: "/about" },
                                    { name: "Contact Us", link: "/#contact" }
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-sm font-bold opacity-50 hover:opacity-100 hover:text-[#FFD700] transition-all flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-3 h-px bg-[#FFD700] transition-all"></span>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Collections & Categories */}
                        <div className="flex flex-col gap-10">
                            <span className="text-xs uppercase font-black tracking-[0.4em] text-[#FFD700] flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></div>
                                Collections
                            </span>
                            <div className="flex flex-col gap-5">
                                {[
                                    "Batik Dress Material",
                                    "Cotton Collections",
                                    "Printed Fabric",
                                    "Ladies Cotton Suits",
                                    "Pattern Designs",
                                    "Ethnic Block Prints",
                                    "Summer Cotton"
                                ].map((item, i) => (
                                    <a key={i} href="/batik-cloth" className="text-sm font-bold opacity-50 hover:opacity-100 hover:text-[#FFD700] transition-all flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-3 h-px bg-[#FFD700] transition-all"></span>
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Catalogue CTA (3 cols) */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/5 rounded-[40px] p-10 border border-white/10 flex flex-col gap-8 items-center text-center relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="w-20 h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40">Get Our Latest</span>
                                <h3 className="font-playfair text-3xl font-bold">CATALOGUE</h3>
                                <p className="text-xs font-bold opacity-40">on WhatsApp</p>
                            </div>
                            <a href={WA} target="_blank" rel="noreferrer" className="w-full py-5 bg-[#C5A059] text-black rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#FFD700] transition-all shadow-2xl">
                                Chat Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── MIDDLE SECTION: MARKET REACH & TRUST ── */}
                <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-b border-white/5">
                    {/* India Map Side */}
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="relative w-48 h-48 opacity-40 grayscale hover:grayscale-0 transition-all duration-[2s]">
                            <Image src="/history.png" alt="Supplying Across India" layout="fill" objectFit="contain" className="brightness-150" />
                        </div>
                        <div className="flex flex-col gap-6 text-center md:text-left">
                            <h2 className="font-playfair text-4xl font-bold tracking-tight uppercase">EXPANDING <br /> ACROSS INDIA</h2>
                            <div className="h-px w-20 bg-[#FFD700]/30 mx-auto md:mx-0"></div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {["Delhi", "Punjab", "Gujarat", "Rajasthan", "Madhya Pradesh"].map(loc => (
                                    <div key={loc} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FFD700]"><path d="M3 21h18" /><path d="M10 21V8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v13" /><path d="M4 21V10a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v11" /><path d="M16 21V14a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v9" /></svg>
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{loc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Trust Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { val: "15+", label: "Years Manufacturing", icon: "🛡️" },
                            { val: "1000+", label: "Buyers Served", icon: "👥" },
                            { val: "Ready", label: "Stock Available", icon: "📦" },
                            { val: "Fast", label: "Dispatch Across India", icon: "🚚" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col gap-2 group">
                                <span className="text-3xl font-playfair font-black text-[#FFD700] group-hover:scale-110 transition-transform origin-left">{stat.val}</span>
                                <span className="text-[9px] font-black uppercase tracking-widest opacity-40 leading-tight">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── NEWSLETTER & SOCIAL ── */}
                <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#FFD700]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </div>
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <h4 className="font-bold text-lg uppercase tracking-widest">GET LATEST BATIK COLLECTIONS UPDATES</h4>
                            <p className="text-sm opacity-40 font-medium">Subscribe to get new arrivals, offers & updates directly.</p>
                        </div>
                        <div className="flex-grow w-full max-w-md relative">
                            <input type="text" placeholder="Enter your email or phone number" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-sm focus:outline-none focus:border-[#FFD700]/50 transition-all font-medium" />
                            <button className="absolute right-2 top-2 bottom-2 px-8 bg-[#C5A059] text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#FFD700] transition-all">
                                Subscribe →
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-4 flex justify-center lg:justify-end gap-6">
                        {[
                            { name: "Instagram", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
                            { name: "Facebook", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                            { name: "WhatsApp", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg> }
                        ].map((social, i) => (
                            <a key={i} href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#FFD700] hover:text-black transition-all border border-white/10 hover:border-transparent">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── BOTTOM SECTION: LEGAL & COPYRIGHT ── */}
                <div className="pt-12 border-t border-white/5 flex flex-col gap-12">
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                        {[
                            { name: "Privacy Policy", link: "/privacy-policy" },
                            { name: "Terms & Conditions", link: "/terms-and-conditions" },
                            { name: "Shipping Policy", link: "/shipping-delivery-policy" },
                            { name: "Refund & Return Policy", link: "/refund-return-policy" },
                            { name: "Cancellation Policy", link: "/cancellation-policy" }
                        ].map((legal, i) => (
                            <a key={i} href={legal.link} className="text-[11px] font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-[#FFD700] transition-all">
                                {legal.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20 text-center md:text-left">
                            © 2026 AQSHA Batik Cloth. All Rights Reserved.
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-center md:text-right">
                            Designed for wholesale buyers across India
                        </p>
                    </div>
                </div>
            </div>

            {/* Scalloped Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent"></div>
        </footer>
    );
}
