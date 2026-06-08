"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WA_LINK = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20get%20your%20latest%20batik%20catalogue.";

export default function WelcomePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // TEMPORARY: Ignored localStorage check so you can test the popup.
        // It will show up every time you refresh.
        const timer = setTimeout(() => {
            setIsOpen(true);
            
            // Automatically close after 5 seconds
            const autoCloseTimer = setTimeout(() => {
                setIsOpen((current) => {
                    if (current) {
                        // localStorage.setItem("hasSeenWelcomePopup", "true");
                        return false;
                    }
                    return current;
                });
            }, 5000);

        }, 3000);
        
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        // localStorage.setItem("hasSeenWelcomePopup", "true");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-[#F9F2E7] w-full max-w-[1000px] max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-[24px] md:rounded-[32px] relative flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-500">

                {/* Close Button */}
                <button onClick={closePopup} className="absolute top-3 right-3 md:top-5 md:right-5 w-10 h-10 rounded-full border border-[#7A2A1A]/20 flex items-center justify-center text-[#7A2A1A] hover:bg-[#7A2A1A] hover:text-white transition-colors z-50 bg-[#F9F2E7]/90 backdrop-blur-sm shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Side - Image with Arch Effect */}
                <div className="md:w-[45%] relative min-h-[200px] sm:min-h-[250px] md:min-h-[600px] bg-[#F9F2E7] shrink-0">
                    <div className="absolute inset-0 rounded-tr-[100px] md:rounded-tr-[140px] overflow-hidden">
                        <Image
                            src="/white_mustard_suit.png"
                            alt="Welcome to Aqsha Batik Suits"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="md:w-[55%] px-4 py-8 md:py-12 md:px-10 flex flex-col items-center text-center text-[#7A2A1A] z-10 relative justify-center">

                    {/* Logo Section */}
                    <div className="flex flex-col items-center gap-1 mb-6">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="mb-1 text-[#7A2A1A]">
                            <path d="M12 2L2 22h20L12 2z" />
                            <circle cx="12" cy="14" r="3" fill="currentColor" />
                            <path d="M12 11v-3" />
                        </svg>
                        <h2 className="font-playfair text-[28px] font-bold tracking-[0.2em] text-[#7A2A1A] leading-none">AQSHA</h2>
                        <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.35em] opacity-80 mt-1">
                            <span className="w-5 h-[1px] bg-[#7A2A1A]"></span>
                            BATIK SUITS
                            <span className="w-5 h-[1px] bg-[#7A2A1A]"></span>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-60 transform -scale-x-100 text-[#C19A6B]">
                            <path d="M12 22C12 22 4 16 4 10C4 6 7.5 3 12 3C16.5 3 20 6 20 10C20 16 12 22 12 22Z" />
                        </svg>
                        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#7A2A1A]">Welcome To Aqsha Batik Suits</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-60 text-[#C19A6B]">
                            <path d="M12 22C12 22 4 16 4 10C4 6 7.5 3 12 3C16.5 3 20 6 20 10C20 16 12 22 12 22Z" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="font-playfair text-2xl md:text-3xl leading-[1.1] font-medium tracking-tight text-[#7A2A1A] mb-5">
                        Premium Batik Suits<br />That Your Customers Love
                    </h1>

                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center gap-1.5 mb-5 opacity-30">
                        <div className="w-8 h-px bg-[#7A2A1A]"></div>
                        <div className="w-1 h-1 rotate-45 border border-[#7A2A1A]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#7A2A1A]"></div>
                        <div className="w-1 h-1 rotate-45 border border-[#7A2A1A]"></div>
                        <div className="w-8 h-px bg-[#7A2A1A]"></div>
                    </div>

                    <p className="text-sm font-medium opacity-80 leading-relaxed mb-8 max-w-sm mx-auto">
                        Wholesale cotton batik suits for boutique owners, resellers, wholesalers & marketplace sellers across India.
                    </p>

                    {/* Features Box */}
                    <div className="w-full flex justify-between items-start gap-1 mb-8 text-[#7A2A1A]">
                        {/* 1 */}
                        <div className="flex flex-col items-center text-center flex-1">
                            <div className="w-10 h-10 rounded-full bg-[#EADDCD] flex items-center justify-center mb-2 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" /><polyline points="14 2 14 8 20 8" /><path d="M2 15h10" /><path d="m9 18 3-3-3-3" /></svg>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider leading-tight">PREMIUM<br />COTTON</span>
                        </div>
                        <div className="w-px h-10 bg-[#7A2A1A]/10 mt-2"></div>
                        {/* 2 */}
                        <div className="flex flex-col items-center text-center flex-1">
                            <div className="w-10 h-10 rounded-full bg-[#EADDCD] flex items-center justify-center mb-2 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2 10 7c0 1.5-2 2.5-3 4-1.5 2-1 4.5.5 5.5s4 1.5 7 .5c2-1 3-3.5 1.5-5.5-1-1.5-3-2.5-3-4l.5-5Z" /><path d="M12 18v4" /><path d="M9 22h6" /></svg>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider leading-tight">TRENDING<br />DESIGNS</span>
                        </div>
                        <div className="w-px h-10 bg-[#7A2A1A]/10 mt-2"></div>
                        {/* 3 */}
                        <div className="flex flex-col items-center text-center flex-1">
                            <div className="w-10 h-10 rounded-full bg-[#EADDCD] flex items-center justify-center mb-2 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider leading-tight">READY STOCK<br />AVAILABLE</span>
                        </div>
                        <div className="w-px h-10 bg-[#7A2A1A]/10 mt-2"></div>
                        {/* 4 */}
                        <div className="flex flex-col items-center text-center flex-1">
                            <div className="w-10 h-10 rounded-full bg-[#EADDCD] flex items-center justify-center mb-2 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" /><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider leading-tight">FAST DISPATCH<br />ACROSS INDIA</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <a href={WA_LINK} target="_blank" rel="noreferrer" onClick={closePopup} className="flex-1 bg-[#7A2A1A] hover:bg-[#5C1F12] text-white rounded-xl py-3.5 px-2 flex items-center justify-center gap-2 transition-colors shadow-lg group">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span className="font-bold text-[10px] lg:text-[11px] tracking-wider uppercase">Get Latest Catalog<br />On WhatsApp</span>
                        </a>
                        <Link href="/batik-cloth" onClick={closePopup} className="flex-1 bg-transparent border-2 border-[#7A2A1A]/30 hover:border-[#7A2A1A] text-[#7A2A1A] rounded-xl py-3.5 px-2 flex items-center justify-center gap-2 transition-colors group">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                            <span className="font-bold text-[11px] tracking-wider uppercase">Explore<br />Collection</span>
                        </Link>
                    </div>

                    {/* Footer Note */}
                    <div className="flex items-center justify-center gap-2 mt-6 opacity-80">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-60 transform -scale-x-100 text-[#C19A6B]">
                            <path d="M12 22C12 22 4 16 4 10C4 6 7.5 3 12 3C16.5 3 20 6 20 10C20 16 12 22 12 22Z" />
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                        <span className="text-[11px] font-medium">Trusted by 1000+ Wholesale Buyers Across India</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-60 text-[#C19A6B]">
                            <path d="M12 22C12 22 4 16 4 10C4 6 7.5 3 12 3C16.5 3 20 6 20 10C20 16 12 22 12 22Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
