"use client";
import React from 'react';
import Nav from '@/modules/user/components/Nav';
import Footer from '@/modules/user/components/Footer';

export default function ThankYouPage() {
    return (
        <div className="bg-[#F5F1EC] min-h-screen font-sans text-[#5A2A1F]">
            <Nav />

            <section className="pt-60 pb-40 px-6">
                <div className="max-w-4xl mx-auto text-center flex flex-col gap-10">
                    <div className="w-24 h-24 rounded-full bg-[#5A2A1F] text-white flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-tight"><span className='hero-highlight'>Order Confirmed!</span></h1>
                        <p className="text-xl md:text-2xl opacity-60 font-medium italic max-w-2xl mx-auto">
                            Thank you for your purchase. Your order has been successfully placed. We're getting it ready and will ship it within 24 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        <div className="bg-white p-10 rounded-[40px] border border-[#5A2A1F]/5 flex flex-col gap-4 shadow-xl">
                            <span className="text-4xl">📩</span>
                            <h3 className="font-bold text-xl">Order Receipt</h3>
                            <p className="text-sm opacity-60 font-medium leading-relaxed">We've sent an order confirmation and receipt to your email address.</p>
                        </div>
                        <div className="bg-white p-10 rounded-[40px] border border-[#5A2A1F]/5 flex flex-col gap-4 shadow-xl">
                            <span className="text-4xl">💬</span>
                            <h3 className="font-bold text-xl">Shipping Updates</h3>
                            <p className="text-sm opacity-60 font-medium leading-relaxed">You will receive your tracking link via WhatsApp once the order is dispatched.</p>
                        </div>
                        <div className="bg-white p-10 rounded-[40px] border border-[#5A2A1F]/5 flex flex-col gap-4 shadow-xl">
                            <span className="text-4xl">🚛</span>
                            <h3 className="font-bold text-xl">Wholesale Pricing</h3>
                            <p className="text-sm opacity-60 font-medium leading-relaxed">Our wholesale manager will call you to discuss bulk pricing and shipping.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
                        <a href="/batik-cloth" className="bg-[#5A2A1F] text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">Browse Collections</a>
                        <a href="/" className="bg-white text-[#5A2A1F] border border-[#5A2A1F]/20 px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#5A2A1F] hover:text-white transition-all shadow-xl">Back to Home</a>
                    </div>

                    {/* Social Strip */}
                    <div className="mt-20 flex flex-col gap-6">
                        <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">Follow our Journey</p>
                        <div className="flex justify-center gap-6">
                            {["Instagram", "Facebook", "YouTube"].map((social, i) => (
                                <a key={i} href="#" className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#5A2A1F]/40 hover:bg-[#FFD700] hover:text-black transition-all border border-[#5A2A1F]/5 shadow-lg">
                                    <span className="text-[10px] font-black uppercase tracking-widest">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
