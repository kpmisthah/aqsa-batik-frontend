import React from 'react';
import { Metadata } from 'next';
import Nav from '@/modules/user/components/Nav';
import Image from 'next/image';
import ContactForm from './ContactForm';
import FAQ from '@/modules/user/components/FAQ';

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20discuss%20a%20business%20inquiry.";

export const metadata: Metadata = {
    title: "Contact Aqsha Batik | Batik Fabric Manufacturer & Wholesale Supplier",
    description: "Get in touch with Aqsha Batik for premium batik fabric, women clothing collections, wholesale pricing, catalogue requests, and bulk order support across India.",
};

export default function ContactPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen font-sans text-[#3B1C14] selection:bg-[#5A2A1F] selection:text-white">
            <Nav />

            {/* ── HERO SECTION ── */}
            <section className="relative w-full h-[60vh] md:h-[800px] flex items-center overflow-hidden pt-20 md:pt-0">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/best-dresses-for-women-hero-banner-image.webp"
                        alt="Contact Aqsha Batik"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-[75%_top] md:object-center brightness-[0.8] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/20 via-black/20 to-black/90 md:from-black/80 md:via-black/20 md:to-transparent shadow-2xl"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 w-full flex justify-start text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-4 md:gap-10 items-start text-left max-w-5xl">
                        <div className="flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-2 rounded-full border border-white/20 w-fit">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                            <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Contact Aqsha Batik</span>
                        </div>

                        <div className="flex flex-col gap-2 md:gap-6">
                            <h1 className="font-playfair text-2xl md:text-4xl font-bold leading-[1.2] md:leading-[1.3] tracking-tight">
                                <span className="hero-highlight">Let's Talk</span> About Your <br className="hidden md:block" /> Batik <span className="hero-highlight">Fabric Requirements</span>
                            </h1>
                            <p className="font-playfair text-xs md:text-2xl font-medium tracking-tight opacity-95 leading-[1.3] md:leading-relaxed mt-1 md:mt-2 max-w-[280px] md:max-w-4xl">
                                Looking for premium batik fabric, batik cloth, women clothing, or the latest cotton dresses for women? Whether you're a retailer, wholesaler, boutique owner, or fashion brand, our team is here to help you source high-quality collections directly from a trusted manufacturer.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-2 md:pt-10 items-start justify-start w-full">
                            <a href="#form" className="inline-block bg-[#FFD700] text-[#5A2A1F] px-4 py-3 md:px-8 md:py-4.5 rounded-[10px] md:rounded-[18px] font-black text-sm md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider border-b-2 md:border-b-4 border-black/10 w-full sm:w-auto text-center">
                                Get Wholesale Pricing
                            </a>
                            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-4 py-3 md:px-8 md:py-4.5 rounded-[10px] md:rounded-[18px] font-black text-sm md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:bg-white hover:text-[#5A2A1F] active:scale-95 transition-all duration-300 uppercase tracking-wider w-full sm:w-auto text-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                Chat On WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT INFO CARDS ── */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-center">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-8 h-[1px] bg-[#D4AF37] hidden md:block"></span>
                            <span className="text-[10px] font-bold text-[#8B3A2B] uppercase tracking-[0.2em]">We're Here To Help</span>
                            <span className="w-8 h-[1px] bg-[#D4AF37] hidden md:block"></span>
                        </div>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#3B1C14] mb-4">Reach Out To Our Team</h2>
                        <p className="text-[#3B1C14]/70 max-w-2xl mx-auto text-sm md:text-base text-left md:text-center">Have questions about our collections, pricing, or bulk orders? Our experts are ready to assist you with product recommendations, catalogue requests, and wholesale enquiries.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-[#5A2A1F]/5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5F1EC] flex items-center justify-center text-[#8B3A2B] mb-3 md:mb-4">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <h3 className="font-bold text-[#3B1C14] mb-1">Visit Us</h3>
                            <p className="text-xs md:text-sm font-semibold text-[#3B1C14]/80">Bherugarh, Ujjain,<br />Madhya Pradesh 456010</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-[#5A2A1F]/5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5F1EC] flex items-center justify-center text-[#8B3A2B] mb-3 md:mb-4">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <h3 className="font-bold text-[#3B1C14] mb-1">Call Us</h3>
                            <p className="text-xs md:text-sm font-semibold text-[#3B1C14]/80">+91 88153 73767</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-[#5A2A1F]/5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5F1EC] flex items-center justify-center text-[#8B3A2B] mb-3 md:mb-4">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="font-bold text-[#3B1C14] mb-1">Email Us</h3>
                            <p className="text-[11px] md:text-sm font-semibold text-[#3B1C14]/80 break-all px-1">Aqdaschhipa368@gmail.com</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-[#5A2A1F]/5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5F1EC] flex items-center justify-center text-[#8B3A2B] mb-3 md:mb-4">
                                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                            </div>
                            <h3 className="font-bold text-[#3B1C14] mb-1">WhatsApp Support</h3>
                            <p className="text-xs md:text-sm font-semibold text-[#3B1C14]/80">Quick Catalogue &<br />Pricing Assistance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FORM SECTION ── */}
            <section id="form" className="py-20 px-6 bg-[#F5F1EC]">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
                            <span className="text-[10px] font-bold text-[#8B3A2B] uppercase tracking-[0.2em]">Get In Touch</span>
                        </div>
                        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#3B1C14] mb-6 leading-[1.2]">
                            Get Personalized Batik Fabric Pricing & Expert Guidance
                        </h2>
                        <p className="text-[#3B1C14]/70 mb-4 text-sm md:text-base leading-relaxed">
                            The right supplier doesn't just provide fabric. They help you choose collections that sell.
                        </p>
                        <p className="text-[#3B1C14]/70 mb-6 text-sm md:text-base leading-relaxed">
                            At Aqsha Batik, we work closely with retailers, wholesalers, and fashion businesses looking for premium batik fabric, women clothing, and indian dresses that customers love.
                        </p>
                        <p className="text-[#3B1C14]/70 mb-10 text-sm md:text-base leading-relaxed font-bold">
                            Submit your details and receive direct manufacturer pricing, catalogue access, and expert assistance.
                        </p>

                        <ul className="flex flex-col gap-4">
                            {[
                                "Latest Batik Collection Catalog",
                                "Wholesale Pricing Support",
                                "Fast WhatsApp Assistance",
                                "Bulk Order Guidance",
                                "Ready Stock Updates",
                                "Premium Quality Assurance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#E5F5E5] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="font-bold text-sm text-[#3B1C14]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="bg-[#FDFBF7] md:bg-white p-5 md:p-12 rounded-[24px] md:rounded-[50px] shadow-sm md:shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-[#5A2A1F]/5 md:border-white">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRUST SECTION ── */}
            <section className="py-20 px-6 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-center">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-8 h-[1px] bg-[#D4AF37] hidden md:block"></span>
                            <span className="text-[10px] font-bold text-[#8B3A2B] uppercase tracking-[0.2em]">Why Choose Aqsha Batik</span>
                            <span className="w-8 h-[1px] bg-[#D4AF37] hidden md:block"></span>
                        </div>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#3B1C14] mb-4">Trusted By Retailers & Fashion Businesses</h2>
                        <p className="text-[#3B1C14]/70 max-w-2xl mx-auto text-sm md:text-base text-left md:text-center">For over 15 years, Aqsha Batik has helped businesses source premium-quality batik collections with confidence.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { title: "Direct Manufacturer", desc: "Buy directly from the manufacturer for better pricing, consistent quality, and reliable support.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                            { title: "Ready Stock Available", desc: "Access a wide range of ready-to-dispatch batik collections and dress materials.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
                            { title: "Fast Dispatch", desc: "Quick processing and delivery to help your business maintain inventory without delays.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                            { title: "Premium Quality", desc: "Carefully crafted collections designed for retailers, wholesalers, and fashion brands.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-[#5A2A1F]/5 text-center flex flex-col items-center">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FDFBF7] flex items-center justify-center text-[#8B3A2B] mb-3 md:mb-4 shadow-sm border border-[#5A2A1F]/5">
                                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path></svg>
                                </div>
                                <h3 className="font-bold text-[#3B1C14] mb-2 md:mb-3 text-[14px] md:text-[15px]">{item.title}</h3>
                                <p className="text-xs md:text-sm font-semibold text-[#3B1C14]/80 leading-relaxed px-1 md:px-2">{item.desc}</p>
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
            <section className="py-20 px-6 bg-[#3B1C14] text-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="lg:w-1/2 text-left">
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold mb-4 leading-tight">Looking For Premium Batik Fabric At Wholesale Prices?</h2>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed">Get direct manufacturer pricing, expert guidance, and access to our latest batik fabric, women clothing, indian dresses, and wholesale collections.</p>
                    </div>
                    <div className="lg:w-auto flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-[#FFD700] text-[#3B1C14] px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors text-center shadow-lg flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                            Get Catalogue On WhatsApp
                        </a>
                        <button className="border border-white/30 text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#3B1C14] transition-colors text-center flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Request Pricing
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
