"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const WA_LINK = "https://wa.me/918815373767?text=Hi%2C%20I%20have%20placed%20an%20order.";

function ThankYouContent() {
    const searchParams = useSearchParams();
    const isCod = searchParams.get('method') === 'cod';

    return (
        <div className="bg-[#1C1815] min-h-screen flex items-center justify-center p-4 md:p-8 font-playfair">
            <div className="bg-[#F9F2E7] w-full max-w-[1000px] rounded-[32px] relative flex flex-col md:flex-row shadow-2xl overflow-hidden">
                
                {/* Close Button */}
                <Link href="/" className="absolute top-5 right-5 w-10 h-10 rounded-full border border-[#7A2A1A]/20 flex items-center justify-center text-[#7A2A1A] hover:bg-[#7A2A1A] hover:text-white transition-colors z-20 bg-[#F9F2E7]/80 backdrop-blur-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </Link>

                {/* Left Side - Image with Arch Effect */}
                <div className="md:w-[45%] relative min-h-[350px] md:min-h-[650px] bg-[#F9F2E7]">
                    <div className="absolute inset-0 rounded-tr-[140px] overflow-hidden">
                        <Image 
                            src="/fabric_bundle.png" 
                            alt="Aqsha Batik Suits Packaging"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="md:w-[55%] px-6 py-12 md:py-16 md:px-12 flex flex-col items-center text-center text-[#7A2A1A] z-10 relative">
                    
                    {/* Logo Section */}
                    <div className="flex flex-col items-center gap-1 mb-10">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="mb-1 text-[#7A2A1A]">
                            <path d="M12 2L2 22h20L12 2z"/>
                            <circle cx="12" cy="14" r="3" fill="currentColor"/>
                            <path d="M12 11v-3"/>
                        </svg>
                        <h2 className="font-playfair text-3xl font-bold tracking-[0.2em] text-[#7A2A1A]">AQSHA</h2>
                        <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.35em] opacity-80">
                            <span className="w-6 h-[1px] bg-[#7A2A1A]"></span>
                            BATIK SUITS
                            <span className="w-6 h-[1px] bg-[#7A2A1A]"></span>
                        </div>
                    </div>

                    {/* Thank You Header */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="opacity-40 transform -scale-x-100 text-[#C19A6B]">
                            <path d="M12 22C12 22 4 16 4 10C4 6 7.5 3 12 3C16.5 3 20 6 20 10C20 16 12 22 12 22Z"/>
                        </svg>
                        <h1 className="font-playfair text-3xl md:text-4xl font-bold tracking-tight text-[#7A2A1A]">Thank You!</h1>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="opacity-40 text-[#C19A6B]">
                            <path d="M12 22C12 22 4 16 4 10C4 6 7.5 3 12 3C16.5 3 20 6 20 10C20 16 12 22 12 22Z"/>
                        </svg>
                    </div>

                    <p className="font-medium text-lg md:text-xl mb-6">Your order has been received successfully.</p>

                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center gap-1.5 mb-6 opacity-30">
                        <div className="w-8 h-px bg-[#7A2A1A]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#7A2A1A]"></div>
                        <div className="w-2 h-2 rotate-45 bg-[#7A2A1A]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#7A2A1A]"></div>
                        <div className="w-8 h-px bg-[#7A2A1A]"></div>
                    </div>

                    <p className="text-sm font-medium opacity-80 leading-relaxed mb-10 max-w-sm mx-auto">
                        {isCod 
                            ? "Your order has been placed using Cash on Delivery. Our support team will verify your details via WhatsApp before dispatching."
                            : "We have received your payment. Your hand-crafted Batik dress materials are being packaged with extreme care."
                        }
                    </p>

                    {/* Features Box */}
                    <div className="w-full bg-[#F0E5D7] rounded-xl p-5 flex justify-between items-start md:items-center gap-2 mb-10 text-[#7A2A1A] shadow-inner">
                        <div className="flex flex-col items-center text-center flex-1">
                            <div className="w-12 h-12 rounded-full bg-[#7A2A1A] text-white flex items-center justify-center mb-3 shadow-md">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-wider mb-1 leading-tight">FAST DISPATCH</span>
                            <span className="text-[9px] opacity-70">Across India</span>
                        </div>
                        <div className="w-px h-14 bg-[#7A2A1A]/10 hidden md:block"></div>
                        <div className="flex flex-col items-center text-center flex-1">
                            <div className="w-12 h-12 rounded-full bg-[#7A2A1A] text-white flex items-center justify-center mb-3 shadow-md">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-wider mb-1 leading-tight">READY STOCK</span>
                            <span className="text-[9px] opacity-70">Bulk Orders Welcome</span>
                        </div>
                        <div className="w-px h-14 bg-[#7A2A1A]/10 hidden md:block"></div>
                        <div className="flex flex-col items-center text-center flex-1">
                            <div className="w-12 h-12 rounded-full bg-[#7A2A1A] text-white flex items-center justify-center mb-3 shadow-md">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-wider mb-1 leading-tight">PREMIUM QUALITY</span>
                            <span className="text-[9px] opacity-70">You Can Trust</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-4 w-full">
                        <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-full bg-[#7A2A1A] hover:bg-[#5C1F12] text-white rounded-[14px] py-4 flex items-center justify-center gap-3 transition-colors shadow-lg group">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <span className="font-bold text-[13px] tracking-wider uppercase">Continue on WhatsApp</span>
                        </a>
                        <Link href="/cotton-cloth" className="w-full bg-transparent border-2 border-[#7A2A1A]/30 hover:border-[#7A2A1A] text-[#7A2A1A] rounded-[14px] py-4 flex items-center justify-center gap-3 transition-colors group">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                            <span className="font-bold text-[13px] tracking-wider uppercase">Browse More Designs</span>
                        </Link>
                    </div>

                    {/* Footer Note */}
                    <div className="flex items-center justify-center gap-2 mt-8 opacity-60">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        <span className="text-[11px] font-bold">Your information is safe with us.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#1C1815] flex items-center justify-center text-[#F9F2E7] font-bold font-playfair">
                Loading...
            </div>
        }>
            <ThankYouContent />
        </Suspense>
    );
}
