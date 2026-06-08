"use client";
import React, { useState } from 'react';
import Nav from '@/modules/user/components/Nav';
import Footer from '@/modules/user/components/Footer';

const faqData = [
    {
        category: "Wholesale & Business",
        items: [
            {
                q: "Who is AQSHA Batik Cloth?",
                a: "AQSHA Batik Cloth (Ujjain) is a batik manufacturer with 15+ years of experience, supplying consistent quality fabric and ready-to-sell collections to wholesalers, resellers, and boutiques across India."
            },
            {
                q: "Do you sell wholesale or retail?",
                a: "We work in both, but our primary focus is on wholesale supply, serving resellers, boutiques, and bulk buyers across multiple states."
            },
            {
                q: "Can I connect with you directly for business inquiries?",
                a: "Yes. You can connect with us directly via WhatsApp or call to discuss requirements, pricing, and bulk orders."
            },
            {
                q: "Do you offer a reseller program?",
                a: "Yes, we support resellers and home-based boutiques with ready stock, fast dispatch, and competitive wholesale pricing."
            }
        ]
    },
    {
        category: "Manufacturing & Quality",
        items: [
            {
                q: "Where is your manufacturing based?",
                a: "Our manufacturing is based in Bherugarh, Ujjain (Madhya Pradesh)—a region known for traditional batik craftsmanship and skilled artisans."
            },
            {
                q: "What makes your products different from others?",
                a: "We focus on quality, clean cutting, and consistency. Our fabric is designed to perform in real markets, ensuring repeat demand and reliable supply for buyers."
            },
            {
                q: "What type of cotton do you use?",
                a: "We primarily use premium 60x60 cotton fabric, known for its superior comfort, durability, and suitability for all-day wear."
            }
        ]
    },
    {
        category: "Shipping & Delivery",
        items: [
            {
                q: "Which cities do you supply to?",
                a: "We currently supply across major markets including Delhi, Punjab, Gujarat, and are expanding to more regions across India."
            },
            {
                q: "Do you offer ready stock or made-to-order?",
                a: "We maintain ready stock for fast dispatch, while also supporting bulk requirements based on buyer needs."
            },
            {
                q: "What are your shipping partners?",
                a: "We partner with reliable couriers like Maruti Courier and Xpressbees to ensure safe and timely delivery across India."
            }
        ]
    }
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFaqs = faqData.map(cat => ({
        ...cat,
        items: cat.items.filter(item => 
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.items.length > 0);

    return (
        <div className="bg-[#F5F1EC] min-h-screen font-playfair text-[#5A2A1F]">
            <Nav />

            {/* ── HERO ── */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
                    <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.5em]">Help Center</span>
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">Frequently <span className='hero-highlight'>Asked Questions</span></h1>
                    <p className="text-xl opacity-60 font-medium italic">Find answers to common questions about our batik collections, wholesale process, and shipping.</p>
                </div>
            </section>

            {/* ── SEARCH ── */}
            <section className="pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-6 flex items-center text-[#5A2A1F]/30 group-focus-within:text-[#5A2A1F] transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search for answers..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white rounded-[30px] py-6 pl-16 pr-8 text-lg font-medium shadow-xl border border-[#5A2A1F]/5 focus:outline-none focus:ring-4 focus:ring-[#5A2A1F]/5 transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* ── FAQ CONTENT ── */}
            <section className="pb-40 px-6">
                <div className="max-w-4xl mx-auto flex flex-col gap-20">
                    {filteredFaqs.length > 0 ? filteredFaqs.map((cat, idx) => (
                        <div key={idx} className="flex flex-col gap-10">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#8B3A2B] pb-4 border-b border-[#5A2A1F]/10">{cat.category}</h2>
                            <div className="flex flex-col gap-4">
                                {cat.items.map((item, i) => (
                                    <details key={i} className="group bg-white rounded-[30px] border border-[#5A2A1F]/5 overflow-hidden transition-all duration-500 open:shadow-xl">
                                        <summary className="p-8 flex justify-between items-center cursor-pointer list-none">
                                            <span className="text-xl font-bold leading-tight pr-6">{item.q}</span>
                                            <span className="w-10 h-10 rounded-full bg-[#F5F1EC] flex items-center justify-center text-[#8B3A2B] group-open:rotate-180 transition-transform shrink-0">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                            </span>
                                        </summary>
                                        <div className="px-8 pb-8 text-lg opacity-70 leading-relaxed font-medium">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-20 opacity-40">
                            <p className="text-2xl font-bold">No matching questions found.</p>
                            <p className="mt-2">Try different keywords or contact us directly.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="pb-40 px-6">
                <div className="max-w-4xl mx-auto bg-[#5A2A1F] rounded-[50px] p-12 md:p-20 text-center text-white flex flex-col gap-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-pattern opacity-[0.05]"></div>
                    <h3 className="font-playfair text-4xl md:text-5xl font-bold leading-tight relative z-10">Still Have Questions?</h3>
                    <p className="text-xl opacity-70 font-medium relative z-10">We're here to help you with any custom requirements or business inquiries.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10 mt-4">
                        <a href="/contact" className="bg-[#FFD700] text-black px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Contact Us</a>
                        <a href="https://wa.me/918815373767" className="bg-white/10 text-white border border-white/20 px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all">Chat on WhatsApp</a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
