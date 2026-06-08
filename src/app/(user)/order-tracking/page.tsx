"use client";
import React, { useState } from 'react';
import Nav from '@/modules/user/components/Nav';
import Footer from '@/modules/user/components/Footer';

export default function OrderTrackingPage() {
    const [trackingId, setTrackingId] = useState('');
    const [status, setStatus] = useState<'idle' | 'searching' | 'result'>('idle');

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('searching');
        setTimeout(() => setStatus('result'), 1200);
    };

    return (
        <div className="bg-[#F5F1EC] min-h-screen font-playfair text-[#5A2A1F]">
            <Nav />

            {/* ── HERO ── */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
                    <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.5em]">Track Shipment</span>
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">Where's My Order?</h1>
                    <p className="text-xl opacity-60 font-medium italic">Track your wholesale batik shipment from our Ujjain facility to your doorstep.</p>
                </div>
            </section>

            {/* ── TRACKING FORM ── */}
            <section className="pb-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-[50px] p-10 md:p-16 shadow-2xl border border-[#5A2A1F]/5">
                        <form onSubmit={handleTrack} className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <label className="text-[10px] uppercase font-black tracking-widest opacity-40 ml-4">Order ID or Tracking Number</label>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input 
                                        required 
                                        type="text" 
                                        placeholder="e.g. AB-123456" 
                                        value={trackingId}
                                        onChange={(e) => setTrackingId(e.target.value)}
                                        className="flex-grow bg-[#F5F1EC] border-none rounded-2xl py-6 px-8 text-lg font-bold focus:ring-4 focus:ring-[#5A2A1F]/10 transition-all placeholder:opacity-20" 
                                    />
                                    <button type="submit" className="bg-[#5A2A1F] text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl whitespace-nowrap">
                                        Track Now
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Results Placeholder */}
                        {status === 'searching' && (
                            <div className="mt-16 flex flex-col items-center gap-6 animate-pulse">
                                <div className="w-12 h-12 border-4 border-[#5A2A1F]/10 border-t-[#5A2A1F] rounded-full animate-spin"></div>
                                <p className="font-black uppercase tracking-widest text-[10px] opacity-40">Connecting to Courier Partners...</p>
                            </div>
                        )}

                        {status === 'result' && (
                            <div className="mt-16 flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#5A2A1F]/10">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Current Status</span>
                                        <span className="text-3xl font-bold text-green-600">In Transit</span>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end">
                                        <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Expected Delivery</span>
                                        <span className="text-xl font-bold">24th May, 2026</span>
                                    </div>
                                </div>

                                {/* Tracking Steps */}
                                <div className="flex flex-col gap-8">
                                    {[
                                        { s: "Order Placed", d: "Order received and confirmed", t: "18 May", c: true },
                                        { s: "Manufacturing", d: "Fabric selected and quality checked", t: "19 May", c: true },
                                        { s: "Dispatched", d: "Handed over to Maruti Courier, Ujjain", t: "20 May", c: true },
                                        { s: "In Transit", d: "On its way to your hub city", t: "In Progress", c: false },
                                        { s: "Delivered", d: "Final delivery at your business address", t: "--", c: false }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-8 relative">
                                            {i < 4 && <div className={`absolute left-[19px] top-10 bottom-[-32px] w-0.5 ${step.c ? 'bg-[#5A2A1F]' : 'bg-[#5A2A1F]/10'}`}></div>}
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white shadow-md ${step.c ? 'bg-[#5A2A1F] text-white' : 'bg-[#F5F1EC] text-[#5A2A1F]/20'}`}>
                                                {step.c ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg> : <div className="w-2 h-2 rounded-full bg-current"></div>}
                                            </div>
                                            <div className="flex flex-col gap-1 pb-10">
                                                <div className="flex justify-between items-center gap-4">
                                                    <h4 className={`font-bold text-lg ${step.c ? 'text-[#5A2A1F]' : 'text-[#5A2A1F]/40'}`}>{step.s}</h4>
                                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-30">{step.t}</span>
                                                </div>
                                                <p className="text-sm opacity-60 font-medium">{step.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-[#F5F1EC] p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 border border-[#5A2A1F]/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">🚚</div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Courier Partner</span>
                                            <span className="font-bold">Maruti Courier Services</span>
                                        </div>
                                    </div>
                                    <a href="#" className="text-xs font-black uppercase tracking-widest text-[#8B3A2B] border-b-2 border-[#8B3A2B] pb-1">View Details on Courier Website</a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Support Banner */}
                    <div className="mt-20 text-center flex flex-col gap-8">
                        <p className="text-lg opacity-60 font-medium">Having trouble tracking your order?</p>
                        <div className="flex justify-center gap-8">
                            <a href="https://wa.me/918815373767" className="flex items-center gap-3 text-[#8B3A2B] font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all">
                                <span className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                                </span>
                                WhatsApp Support
                            </a>
                            <a href="tel:+918815373767" className="flex items-center gap-3 text-[#8B3A2B] font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all">
                                <span className="w-10 h-10 rounded-full bg-[#5A2A1F]/10 flex items-center justify-center text-[#5A2A1F]">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </span>
                                Call Dispatch
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
