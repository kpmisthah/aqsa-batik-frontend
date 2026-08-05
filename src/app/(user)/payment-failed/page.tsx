"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Nav from "@/modules/user/components/Nav";
import Footer from "@/modules/user/components/Footer";

const WA_LINK = "https://wa.me/918815373767?text=Hi%2C%20I%20have%20an%20issue%20with%20my%20payment.";

function PaymentFailedContent() {
    const searchParams = useSearchParams();
    const errorReason = searchParams.get('reason') || 'Transaction was declined by the payment provider.';

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col text-primary selection:bg-secondary selection:text-white">
            <Nav />
            
            <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center">
                
                {/* Error Icon Sequence */}
                <div className="relative mb-10">
                    <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse opacity-40"></div>
                    <div className="w-24 h-24 bg-surface border border-red-200 rounded-full flex items-center justify-center shadow-sm relative z-10 bg-white">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                            <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                    </div>
                </div>

                {/* Typography */}
                <div className="space-y-4 mb-12">
                    <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-primary uppercase">
                        Payment Failed
                    </h1>
                    <p className="text-sm md:text-base font-medium opacity-60 tracking-wide uppercase max-w-md mx-auto">
                        Unfortunately, your payment could not be processed successfully.
                    </p>
                </div>

                {/* Minimalist Details Box */}
                <div className="w-full max-w-[500px] bg-white border border-primary/10 rounded-3xl p-8 mb-12 shadow-sm text-left">
                    <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-6 pb-4 border-b border-primary/5">Transaction Details</h3>
                    
                    <div className="space-y-5 flex flex-col">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-60 mt-1">Status</span>
                            <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1.5 rounded-full border border-red-100">Failed</span>
                        </div>
                        
                        <div className="flex justify-between items-start gap-4">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-60 mt-0.5 whitespace-nowrap">Reason</span>
                            <span className="text-xs font-bold tracking-wider text-right opacity-90 leading-tight">{errorReason}</span>
                        </div>

                        <div className="pt-5 border-t border-primary/5 mt-2">
                             <p className="text-xs font-medium leading-relaxed opacity-70">
                                Don't worry, no charges were made. You can try again using a different payment method, or contact our support if you face persistent issues.
                             </p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px]">
                    <Link href="/cart" className="flex-1 bg-primary hover:bg-black text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-3 transition-all shadow-md active:scale-95 group min-h-[56px]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M21.5 2v6h-6M2.13 15.57a10 10 0 1 0 3.43-12.2l-3.32 3.32"/></svg>
                        <span className="font-bold text-xs tracking-wider uppercase">Try Again</span>
                    </Link>
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex-1 bg-white border-2 border-primary/20 hover:border-primary text-primary rounded-2xl py-4 px-6 flex items-center justify-center gap-3 transition-all active:scale-95 group shadow-sm min-h-[56px]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <span className="font-bold text-xs tracking-wider uppercase">Contact Support</span>
                    </a>
                </div>

            </main>
            
            <Footer />
        </div>
    );
}

export default function PaymentFailedPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
                <Nav />
                <main className="flex-1 flex items-center justify-center text-primary font-bold font-heading uppercase tracking-widest text-sm animate-pulse">
                    Loading Details...
                </main>
                <Footer />
            </div>
        }>
            <PaymentFailedContent />
        </Suspense>
    );
}
