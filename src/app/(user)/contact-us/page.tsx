import React from 'react';
import { Metadata } from 'next';
import Nav from '@/modules/user/components/Nav';
import Image from 'next/image';
import ContactForm from './ContactForm';
import FAQ from '@/modules/user/components/FAQ';
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import ScrollIndicator from "@/modules/user/components/ScrollIndicator";
import CategoryHeroBanner from "@/modules/user/components/CategoryHeroBanner";

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20discuss%20a%20business%20inquiry.";

export const metadata: Metadata = {
    title: "Contact Aqsha Batik | Batik Fabric Manufacturer & Wholesale Supplier",
    description: "Get in touch with Aqsha Batik for premium batik fabric, women clothing collections, wholesale pricing, catalogue requests, and bulk order support across India.",
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getHeroBanner() {
    try {
        const res = await fetch(`${API_BASE}/banners/contact`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/best-dresses-for-women-hero-banner-image.webp";
    } catch (e) {
        return "/best-dresses-for-women-hero-banner-image.webp";
    }
}

export default async function ContactPage() {
    const heroBannerUrl = await getHeroBanner();
    return (
        <div className="bg-[#FDFBF7] min-h-screen font-body text-[#3B1C14] selection:bg-primary selection:text-white">
            <Nav />
            <ScrollObserver />
            <CategoryHeroBanner
                tagline="CONTACT AQSHA BATIK"
                title={
                    <>
                        Let's Talk about Your <br className="hidden md:block" /> Batik Fabric <span className='text-accent'>Requirements</span>
                    </>
                }
                description="Looking for premium batik fabric, batik cloth, women clothing, or the latest cotton dresses for women? Whether you're a retailer, wholesaler, boutique owner, or fashion brand, our team is here to help you source high-quality collections directly from a trusted manufacturer."
                imageSrc="/batik_suit_contact_hero.png"
                imageAlt="Contact Aqsha Batik"
                bgColor="#E6D9C8"
                buttons={
                    <>
                        <a href="#form" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm text-center">
                            Get Wholesale Pricing
                        </a>
                        <a href={WA} target="_blank" rel="noreferrer" className="border border-primary/20 hover:border-accent hover:text-accent text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent text-center">
                            Chat On WhatsApp
                        </a>
                    </>
                }
            />

            {/* ── CONTACT INFO SECTION ── */}
            <section className="scroll-animate py-20 md:py-28 px-6 bg-white border-b border-primary/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <span className="text-overline text-accent tracking-[0.3em] font-bold uppercase mb-4 md:mb-6">We're Here To Help</span>
                        <h2 className="text-h2 text-primary mb-6 max-w-3xl leading-[1.1] text-center">Reach Out To Our Team</h2>
                        <p className="text-body1 text-primary/90 max-w-2xl mx-auto text-center leading-relaxed">
                            Have questions about our collections, pricing, or bulk orders? Our experts are ready to assist you with product recommendations, catalogue requests, and wholesale enquiries.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12">
                        {/* Visit Us */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/10 bg-primary/5 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <h3 className="font-heading text-base sm:text-lg md:text-xl font-normal text-primary mb-1.5 sm:mb-3">Visit Us</h3>
                            <p className="text-[10px] sm:text-xs md:text-base font-medium text-primary/90 leading-relaxed">Bherugarh, Ujjain,<br />Madhya Pradesh 456010</p>
                        </div>
                        {/* Call Us */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/10 bg-primary/5 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <h3 className="font-heading text-base sm:text-lg md:text-xl font-normal text-primary mb-1.5 sm:mb-3">Call Us</h3>
                            <p className="text-[10px] sm:text-xs md:text-base font-medium text-primary/90 leading-relaxed">+91 88153 73767</p>
                        </div>
                        {/* Email Us */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/10 bg-primary/5 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="font-heading text-base sm:text-lg md:text-xl font-normal text-primary mb-1.5 sm:mb-3">Email Us</h3>
                            <p className="text-[10px] sm:text-xs md:text-base font-medium text-primary/90 break-all px-1 sm:px-2 leading-relaxed">Aqdaschhipa368<br className="hidden md:block lg:hidden" />@gmail.com</p>
                        </div>
                        {/* WhatsApp Support */}
                        <div className="flex flex-col items-center text-center group">
                            <a href={WA} target="_blank" rel="noreferrer" className="flex flex-col items-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all duration-300">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                </div>
                                <h3 className="font-heading text-base sm:text-lg md:text-xl font-normal text-primary mb-1.5 sm:mb-3 hover:text-primary/90 transition-colors">WhatsApp Support</h3>
                                <p className="text-[10px] sm:text-xs md:text-base font-medium text-primary/90 leading-relaxed">Quick Catalogue &<br />Pricing Assistance</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FORM SECTION ── */}
            <section id="form" className="scroll-animate pt-20 pb-0 md:py-28 px-6 bg-cream border-t border-primary/10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                        <span className="text-overline text-accent tracking-[0.3em] font-bold uppercase mb-4 md:mb-6 block">Get In Touch</span>
                        <h2 className="font-heading text-3xl md:text-4xl text-primary font-normal mb-8 leading-[1.1]">
                            Get Personalized Batik Fabric Pricing & Expert Guidance
                        </h2>

                        <div className="space-y-6 mb-12">
                            <p className="text-body1 text-primary/80">
                                The right supplier doesn't just provide fabric. They help you choose collections that sell.
                            </p>
                            <p className="text-body1 text-primary/80">
                                At Aqsha Batik, we work closely with retailers, wholesalers, and fashion businesses looking for premium batik fabric, women clothing, and indian dresses that customers love.
                            </p>
                            <p className="text-body1 font-medium text-primary">
                                Submit your details and receive direct manufacturer pricing, catalogue access, and expert assistance.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-5 pt-8 border-t border-primary/10 w-fit mx-auto lg:mx-0">
                            {[
                                "Latest Batik Collection Catalog",
                                "Wholesale Pricing Support",
                                "Fast WhatsApp Assistance",
                                "Bulk Order Guidance",
                                "Ready Stock Updates",
                                "Premium Quality Assurance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 group justify-start">
                                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                        <div className="w-2.5 h-2.5 bg-accent rotate-45 group-hover:scale-125 transition-transform duration-300"></div>
                                    </div>
                                    <span className="font-heading font-normal text-lg md:text-xl text-primary tracking-wide text-left">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-1/2 w-full relative group">
                        {/* ── CONCIERGE CARD CONTAINER ── */}
                        <div className="bg-white p-8 md:p-12 lg:p-14 shadow-sm rounded-[24px] md:rounded-[32px] border border-primary/10 relative overflow-hidden transition-transform duration-500">
                            <div className="relative z-10">
                                <h3 className="font-heading text-2xl md:text-3xl font-normal text-primary mb-8 text-center">Request Wholesale Access</h3>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRUST SECTION ── */}
            <section className="scroll-animate pt-8 pb-24 md:py-24 px-6 bg-cream">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 flex flex-col items-center w-full">
                        <span className="text-overline text-accent tracking-[0.3em] font-bold uppercase mb-4 md:mb-6">Why Choose Aqsha Batik</span>
                        <h2 className="font-heading text-2xl md:text-4xl font-normal text-primary mb-4 text-center">Trusted By Retailers & Fashion Businesses</h2>
                        <p className="text-primary/80 max-w-2xl mx-auto text-sm md:text-base text-center font-medium">For over 15 years, Aqsha Batik has helped businesses source premium-quality batik collections with confidence.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-7xl mx-auto w-full">
                        {[
                            { title: "Direct Manufacturer", desc: "Buy directly from the manufacturer for better pricing, consistent quality, and reliable support.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                            { title: "Ready Stock Available", desc: "Access a wide range of ready-to-dispatch batik collections and dress materials.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
                            { title: "Fast Dispatch", desc: "Quick processing and delivery to help your business maintain inventory without delays.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                            { title: "Premium Quality", desc: "Carefully crafted collections designed for retailers, wholesalers, and fashion brands.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-[20px] md:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm border border-primary/10 hover:border-primary/20 hover:shadow-[0_10px_40px_rgba(90,42,31,0.06)] flex flex-col items-center text-center gap-4 sm:gap-6 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/5 rounded-[16px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10 w-fit mx-auto">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={item.icon}></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col flex-1 relative z-10 w-full justify-start items-center gap-2 sm:gap-3">
                                    <h4 className="font-heading text-base sm:text-lg md:text-xl text-primary font-normal tracking-wide">{item.title}</h4>
                                    <p className="text-[11px] sm:text-xs md:text-sm text-primary/80 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ SECTION ── */}
            <FAQ items={[
                { q: "Can I order batik fabric in bulk quantities?", a: "Yes. We specialize in wholesale batik fabric supply for retailers, wholesalers, boutiques, and fashion businesses across India." },
                { q: "Do you provide wholesale pricing?", a: "Yes. Contact our team or submit the enquiry form to receive the latest wholesale pricing and catalogue." },
                { q: "What is the minimum order quantity?", a: "The minimum order quantity may vary depending on the collection. Our team will guide you based on your requirements." },
                { q: "Do you ship across India?", a: "Yes. We provide reliable dispatch and delivery services across India." },
                { q: "How can I get the latest catalogue?", a: "Simply submit the enquiry form or contact us on WhatsApp to receive the latest batik fabric catalogue and pricing details." }
            ]} />

            {/* ── FINAL CTA ── */}
            <section className="scroll-animate pt-2 pb-24 md:py-24 px-6 bg-cream border-t-0 border-primary/10">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 md:p-16 text-center border border-primary/10 shadow-sm flex flex-col items-center">
                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-normal text-primary mb-4 leading-tight">Looking For Premium Batik Fabric At Wholesale Prices?</h2>
                    <p className="text-primary/80 text-base md:text-lg mb-10 max-w-2xl font-medium">Get direct manufacturer pricing, expert guidance, and access to our latest batik fabric, women clothing, indian dresses, and wholesale collections.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest transition-colors shadow-sm w-full md:w-auto">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                            Get Catalogue On WhatsApp
                        </a>
                        <button className="flex items-center justify-center gap-3 border border-primary/20 text-primary px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:border-accent hover:text-accent transition-colors w-full md:w-auto bg-transparent">
                            Request Wholesale Pricing
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
