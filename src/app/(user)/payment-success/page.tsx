"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Nav from "@/modules/user/components/Nav";
import Footer from "@/modules/user/components/Footer";

function PaymentSuccessContent() {
    const searchParams = useSearchParams();
    const paymentId = searchParams.get('payment_id') || 'Verified Automatically';

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col text-primary selection:bg-secondary selection:text-white">
            <Nav />
            
            <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center">
                
                {/* Success Icon Sequence */}
                <div className="relative mb-10">
                    <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-20"></div>
                    <div className="w-24 h-24 bg-surface border border-emerald-200 rounded-full flex items-center justify-center shadow-sm relative z-10 bg-white">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                    </div>
                </div>

                {/* Typography */}
                <div className="space-y-4 mb-12">
                    <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-primary uppercase">
                        Payment Successful
                    </h1>
                    <p className="text-sm md:text-base font-medium opacity-60 tracking-wide uppercase max-w-md mx-auto">
                        Your payment has been successfully processed. Thank you for shopping with Aqsha Batik.
                    </p>
                </div>

                {/* Minimalist Details Box */}
                <div className="w-full max-w-[500px] bg-white border border-primary/10 rounded-3xl p-8 mb-12 shadow-sm text-left">
                    <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-6 pb-4 border-b border-primary/5">Transaction Details</h3>
                    
                    <div className="space-y-5 flex flex-col">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-60 mt-1">Status</span>
                            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">Successful</span>
                        </div>
                        
                        <div className="flex justify-between items-start gap-4">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-60 mt-0.5 whitespace-nowrap">Payment ID</span>
                            <span className="text-xs font-bold font-mono tracking-wider break-all text-right opacity-90">{paymentId}</span>
                        </div>

                        <div className="pt-5 border-t border-primary/5 mt-2">
                             <p className="text-xs font-medium leading-relaxed opacity-70">
                                We have received your payment. You will receive shipping updates via WhatsApp once your package is dispatched.
                             </p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px]">
                    <Link href="/profile" className="flex-1 bg-primary hover:bg-black text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-3 transition-all shadow-md active:scale-95 group min-h-[56px]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <span className="font-bold text-xs tracking-wider uppercase">View Orders</span>
                    </Link>
                    <Link href="/batik-prints-womens-clothing" className="flex-1 bg-white border-2 border-primary/20 hover:border-primary text-primary rounded-2xl py-4 px-6 flex items-center justify-center gap-3 transition-all active:scale-95 group shadow-sm min-h-[56px]">
                        <span className="font-bold text-xs tracking-wider uppercase">Continue Shopping</span>
                    </Link>
                </div>

            </main>
            
            <Footer />
        </div>
    );
}

export default function PaymentSuccessPage() {
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
            <PaymentSuccessContent />
        </Suspense>
    );
}
