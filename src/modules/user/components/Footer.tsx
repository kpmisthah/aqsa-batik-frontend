"use client";
import Image from "next/image";

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20get%20your%20latest%20batik%20catalogue.";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#181311] text-cream pt-20 pb-28 md:pb-16 px-6 lg:px-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col gap-16">
                {/* ── TOP SECTION: LOGO & LINKS ── */}
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 pb-16 border-b border-cream/10">

                    {/* Brand Section */}
                    <div className="lg:w-1/3 flex flex-col gap-8">
                        <img src="/aqsha-logo.png" alt="Aqsha Logo" className="h-16 md:h-20 w-auto object-contain self-start brightness-0 invert" />
                        <p className="text-cream text-sm leading-relaxed max-w-sm">
                            Direct Fabric Manufacturer from Ujjain. Specializing in premium batik printed dress materials and wholesale supply for the modern Indian market.
                        </p>
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="flex items-center gap-3 text-cream text-sm font-medium">
                                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                Bherugarh, Ujjain, MP 456010
                            </div>
                            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cream hover:text-white transition-colors text-sm font-medium w-fit">
                                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                +91 88153 73767
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-cream/50">Shop</span>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: "Batik Cloth", link: "/cotton-cloth" },
                                    { name: "Batik Fabric", link: "/batik-fabric" },
                                    { name: "Wholesale", link: "/fabric-wholesale" },
                                    { name: "New Arrival", link: "/new-batik-prints" },
                                    { name: "Contact Us", link: "/contact-us" },
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-sm text-cream hover:text-white hover:translate-x-1 transition-all">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-cream/50">Collections</span>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: "Batik Dress Material", link: "/cotton-cloth" },
                                    { name: "Cotton Collection", link: "/batik-fabric" },
                                    { name: "Printed Fabric", link: "/fabric-wholesale" },
                                    { name: "Ladies Cotton Suit", link: "/new-batik-prints" }
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-sm text-cream hover:text-white hover:translate-x-1 transition-all">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="hidden md:flex flex-col gap-6">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-cream/50">Catalogue Access</span>
                            <p className="text-sm text-cream leading-relaxed">
                                Get the latest batik wholesale catalogue on your WhatsApp directly.
                            </p>
                            <a href={WA} target="_blank" rel="noreferrer" className="w-max mt-2 py-3 px-6 bg-accent text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-accent/90 transition-colors">
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── BOTTOM SECTION: LEGAL & COPYRIGHT ── */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-2">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4">
                        {[
                            { name: "Privacy Policy", link: "/privacy-policy" },
                            { name: "Terms & Conditions", link: "/terms-and-conditions" },
                            { name: "Shipping Policy", link: "/shipping-delivery-policy" }
                        ].map((legal, i) => (
                            <a key={i} href={legal.link} className="text-[10px] uppercase font-semibold tracking-[0.1em] text-cream hover:text-white transition-colors">
                                {legal.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="text-[10px] uppercase font-semibold tracking-[0.1em] text-cream">
                            © {new Date().getFullYear()} AQSHA Batik
                        </p>
                        <div className="h-1 w-1 bg-cream/20 rounded-full"></div>
                        <a href="https://ufuqtechs.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                            <span className="text-[9px] uppercase tracking-widest text-cream group-hover:text-white transition-colors">Powered By</span>
                            <img src="/partner-logo.jpeg" alt="Partner Logo" className="h-4 w-auto object-contain rounded" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
