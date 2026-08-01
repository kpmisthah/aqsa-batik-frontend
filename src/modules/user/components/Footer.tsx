"use client";
import Image from "next/image";

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20get%20your%20latest%20batik%20catalogue.";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0A0A0A] text-[#FDFBF7] pt-16 pb-28 md:pb-8 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Texture Glows */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-accent opacity-[0.03] rounded-full blur-[100px] pointer-events-none transition-all"></div>
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-accent opacity-[0.03] rounded-full blur-[100px] pointer-events-none transition-all"></div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-16 border-b border-[#FDFBF7]/10">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <img src="/aqsha-logo.png" alt="Aqsha Logo" className="h-16 md:h-20 w-auto object-contain self-start brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
                        <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium max-w-sm">
                            Direct Fabric Manufacturer from Ujjain. Specializing in premium batik printed dress materials and wholesale supply for the modern Indian market.
                        </p>
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-[#FDB953] rounded-full"></span>
                                <span className="opacity-90 font-medium tracking-wide">Bherugarh, Ujjain, MP 456010</span>
                            </div>
                            <div className="flex items-center gap-3 group w-fit">
                                <span className="w-1.5 h-1.5 bg-[#FDB953] rounded-full group-hover:scale-150 transition-transform"></span>
                                <a href={WA} target="_blank" rel="noreferrer" className="font-heading text-lg tracking-wide opacity-90 group-hover:opacity-100 group-hover:text-[#FDB953] transition-colors">+91 88153 73767</a>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex flex-col gap-8">
                            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#FDB953]">Quick Links</span>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: "Batik Cloth", link: "/cotton-cloth" },
                                    { name: "Batik Fabric", link: "/batik-fabric" },
                                    { name: "Wholesale", link: "/fabric-wholesale" },
                                    { name: "New Arrival", link: "/new-batik-prints" },
                                    { name: "Blog", link: "/blog" },
                                    { name: "Contact Us", link: "/contact-us" },
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-sm font-medium text-white/60 hover:text-white hover:translate-x-1 transition-all">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#FDB953]">Collections</span>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: "Batik Dress Material", link: "/cotton-cloth" },
                                    { name: "Cotton Collection", link: "/batik-fabric" },
                                    { name: "Printed Fabric", link: "/fabric-wholesale" },
                                    { name: "Ladies Cotton Suit", link: "/new-batik-prints" }
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-sm font-medium text-white/60 hover:text-white hover:translate-x-1 transition-all">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Newsletter & CTA */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#FDB953]">Catalogue Access</span>
                        
                        <div className="flex flex-col gap-4 w-full relative">
                            <label className="text-white/60 text-xs uppercase tracking-widest font-black">Stay updated on new stock</label>
                            <div className="flex border-b border-white/20 hover:border-white focus-within:border-[#FDB953] transition-colors pb-2">
                                <input type="text" placeholder="Your email address" className="w-full bg-transparent text-sm placeholder:text-white/30 focus:outline-none" />
                                <button className="text-[10px] uppercase font-black tracking-widest text-[#FDB953] hover:brightness-125 transition-all">Submit</button>
                            </div>
                        </div>

                        <a href={WA} target="_blank" rel="noreferrer" className="w-full mt-4 py-5 px-6 bg-[#FDB953] text-primary rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(253,185,83,0.2)]">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                            Direct WhatsApp Chat
                        </a>
                    </div>
                </div>

                {/* ── MIDDLE SECTION: TRUST RIBBON ── */}
                <div className="py-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 border-b border-[#FDFBF7]/10">
                    {[
                        { val: "15+", label: "Years Experience" },
                        { val: "1000+", label: "Wholesale Buyers" },
                        { val: "Ready", label: "Stock Availability" },
                        { val: "Fast", label: "National Dispatch" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-1 md:gap-2 text-center group">
                            <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#FDB953] italic group-hover:scale-105 transition-transform">{stat.val}</span>
                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] opacity-60 max-w-[120px] leading-relaxed">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* ── BOTTOM SECTION: LEGAL & COPYRIGHT ── */}
                <div className="pt-8 pb-4 flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                        {[
                            { name: "Privacy Policy", link: "/privacy-policy" },
                            { name: "Terms & Conditions", link: "/terms-and-conditions" },
                            { name: "Shipping Policy", link: "/shipping-delivery-policy" }
                        ].map((legal, i) => (
                            <a key={i} href={legal.link} className="text-[10px] font-black uppercase tracking-[0.1em] text-white/50 hover:text-white transition-colors">
                                {legal.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 text-center">
                            © 2026 AQSHA Batik
                        </p>
                        
                        <div className="hidden md:block h-1 w-1 bg-white/20 rounded-full mx-2"></div>

                        <a href="https://ufuqtechs.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 cursor-pointer group">
                            <span className="text-[8px] uppercase tracking-[0.3em] text-white/50 font-black group-hover:text-white transition-colors">Powered By</span>
                            <img src="/partner-logo.jpeg" alt="Partner Logo" className="h-6 w-auto md:h-8 object-contain rounded opacity-80 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
