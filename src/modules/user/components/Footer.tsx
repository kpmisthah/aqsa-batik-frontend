"use client";
import Image from "next/image";

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20get%20your%20latest%20batik%20catalogue.";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#181311] text-cream pt-20 pb-36 md:pb-32 px-6 lg:px-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col gap-16">
                {/* ── TOP SECTION: LOGO & LINKS ── */}
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 pb-16 border-b border-cream/10">

                    {/* Brand Section */}
                    <div className="lg:w-1/3 flex flex-col gap-8">
                        <div className="bg-white p-3 rounded-2xl w-fit">
                            <img src="/aqsha-logo.png" alt="Aqsha Logo" className="h-12 md:h-16 w-auto object-contain self-start" />
                        </div>
                        <p className="text-cream text-sm leading-relaxed max-w-sm">
                            Direct Batik Cotton Dress for Women Manufacturer from Ujjain. Specializing in premium suits for women, batik print fabric, women's dress material, cotton 60 x 60 dress material, and batik suit designs for wholesale buyers, boutiques, resellers, and the modern Indian market.
                        </p>
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="flex items-center gap-3 text-cream text-sm font-medium">
                                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                Bherugarh, Ujjain, Madhya Pradesh 456010, India
                            </div>
                            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cream hover:text-white transition-colors text-sm font-medium w-fit">
                                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                +91 88153 73767
                            </a>
                            <a href="mailto:customersupport@aqshbatiksuits.com" className="flex items-center gap-3 text-cream hover:text-white transition-colors text-sm font-medium w-fit">
                                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                customersupport@aqshbatiksuits.com
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-6">
                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-cream/50">Shop</span>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: "Batik Prints Women Clothing", link: "/batik-cotton-dress-for-women" },
                                    { name: "Ethnic Wear for Women", link: "/batik-prints-womens-clothing" },
                                    { name: "Cotton Dress for Women", link: "/batik-prints-womens-clothing" },
                                    { name: "Suit Design for Women", link: "/batik-cotton-dress-for-women" },
                                    { name: "New Arrival", link: "/new-batik-prints-suits" },
                                    { name: "Wholesale", link: "/wholesale-batik-women-dresses" },
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-sm text-cream hover:text-white hover:translate-x-1 transition-all leading-tight">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-cream/50">Collections</span>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: "Batik Design Collection", link: "/batik-cotton-dress-for-women" },
                                    { name: "Women Daily Wear", link: "/batik-prints-womens-clothing" },
                                    { name: "Women's Cotton Dresses", link: "/batik-prints-womens-clothing" },
                                    { name: "Casual Dresses for Women", link: "/new-batik-prints-suits" },
                                    { name: "Cotton Dress Material", link: "/batik-cotton-dress-for-women" },
                                    { name: "Designer Printed Fabric", link: "/wholesale-batik-women-dresses" },
                                    { name: "Ladies Cotton Suit", link: "/batik-cotton-dress-for-women" }
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-sm text-cream hover:text-white hover:translate-x-1 transition-all leading-tight">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-cream/50">Wholesale</span>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: "Batik Cotton Dress for Women Wholesale", link: "/wholesale-batik-women-dresses" },
                                    { name: "Wholesale Women's Dress Material", link: "/wholesale-batik-women-dresses" },
                                    { name: "Wholesale Cotton Fabric", link: "/wholesale-batik-women-dresses" },
                                    { name: "Batik Suit Wholesale", link: "/wholesale-batik-women-dresses" },
                                    { name: "Bulk Order Support", link: "/contact-us" },
                                    { name: "Ready Stock Collection", link: "/new-batik-prints-suits" }
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="text-sm text-cream hover:text-white hover:translate-x-1 transition-all leading-tight">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="hidden md:flex flex-col gap-6">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-cream/50">Catalogue Access</span>
                            <p className="text-sm text-cream leading-relaxed">
                                Get the latest batik suits wholesale catalogue, new batik print collections, fabric options, and wholesale pricing directly on WhatsApp.
                            </p>
                            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary w-max mt-2 px-6 py-3">
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
                            { name: "Shipping & Delivery Policy", link: "/shipping-delivery-policy" },
                            { name: "Refund & Return Policy", link: "/refund-return-policy" },
                            { name: "Cancellation Policy", link: "/cancellation-policy" }
                        ].map((legal, i) => (
                            <a key={i} href={legal.link} className="text-[10px] uppercase font-semibold tracking-[0.1em] text-cream hover:text-white transition-colors">
                                {legal.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="text-[10px] uppercase font-semibold tracking-[0.1em] text-cream">
                            © 2026 AQSHA Batik Suits. All Rights Reserved.
                        </p>
                        <div className="h-1 w-1 bg-cream/20 rounded-full"></div>
                        <a href="https://ufuqtechs.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                            <span className="text-[10px] font-bold text-cream group-hover:text-white transition-colors">Powered By UfuqTechs</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
