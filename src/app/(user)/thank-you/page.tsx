"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/modules/user/components/Nav';
import Footer from '@/modules/user/components/Footer';

function ThankYouContent() {
    const searchParams = useSearchParams();
    const isCod = searchParams.get('method') === 'cod';

    return (
        <div className="bg-[#FDFBF7] min-h-screen font-sans text-[#5A2A1F] flex flex-col">
            <Nav />

            <section className="flex-1 pt-32 pb-24 px-6 max-w-4xl mx-auto w-full flex flex-col justify-center text-center gap-8 md:gap-10">
                {/* Brand Success Animation Badge */}
                <div className="w-24 h-24 rounded-full bg-[#5A2A1F] text-white flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-xs font-black text-[#8B3A2B] uppercase tracking-[0.4em]">Order Confirmed</span>
                    <h1 className="font-playfair text-4xl md:text-6xl font-black leading-tight tracking-tight">
                        {isCod ? "Order Placed Successfully!" : "Thank You for Your Order!"}
                    </h1>

                    <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto text-[#8B3A2B] leading-relaxed font-playfair italic mt-2">
                        "Thank you for choosing Aqsha Batik Suit. Keep shopping with us!"
                    </p>

                    <p className="text-xs md:text-sm font-medium opacity-60 max-w-xl mx-auto mt-2 leading-relaxed font-sans">
                        {isCod
                            ? "Your order has been placed using Cash on Delivery. Our support team will verify your shipping address via phone call or WhatsApp before dispatching your package."
                            : "We have received your payment. Your hand-crafted Batik dress materials are being packaged with extreme care and will be shipped within 24 hours."
                        }
                    </p>
                </div>

                {/* Navigation Actions */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <Link href="/batik-cloth" className="bg-[#5A2A1F] hover:bg-black text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-md active:scale-95">
                        Keep Shopping
                    </Link>
                    <Link href="/" className="bg-white text-[#5A2A1F] border border-[#5A2A1F]/20 hover:border-[#5A2A1F] px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-sm active:scale-95">
                        Back to Home
                    </Link>
                </div>

                {/* Follow Journey Strip */}
                <div className="mt-12 flex flex-col gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Follow our Journey</p>
                    <div className="flex justify-center gap-4">
                        {["Instagram", "Facebook", "WhatsApp"].map((social, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#5A2A1F]/40 hover:bg-[#5A2A1F] hover:text-white transition-all border border-[#5A2A1F]/10 shadow-sm"
                            >
                                <span className="text-[10px] font-black uppercase tracking-wider">{social[0]}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center text-[#5A2A1F] font-bold font-sans">
                Loading...
            </div>
        }>
            <ThankYouContent />
        </Suspense>
    );
}
