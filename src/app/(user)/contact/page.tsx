"use client";
import React, { useState } from 'react';
import Nav from '@/modules/user/components/Nav';
import Footer from '@/modules/user/components/Footer';
import Image from 'next/image';

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20discuss%20a%20business%20inquiry.";

export default function ContactPage() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate submission
        setTimeout(() => setFormState('success'), 1500);
    };

    return (
        <div className="bg-[#F5F1EC] min-h-screen font-playfair text-[#5A2A1F] selection:bg-[#5A2A1F] selection:text-white">
            <Nav />

            {/* ── HERO SECTION ── */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col gap-6 text-center">
                    <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.5em]">Connect With Us</span>
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">Get in <span className='hero-highlight'>Touch</span></h1>
                    <p className="text-xl md:text-2xl opacity-70 font-medium max-w-2xl mx-auto italic leading-relaxed">
                        Whether you're a wholesaler, boutique owner, or reseller, we're here to help you grow your business with premium batik.
                    </p>
                </div>
            </section>

            {/* ── CONTACT GRID ── */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    
                    {/* Form Side */}
                    <div className="bg-white rounded-[50px] p-10 md:p-16 shadow-2xl border border-[#5A2A1F]/5 relative overflow-hidden">
                        {formState === 'success' ? (
                            <div className="flex flex-col items-center justify-center text-center gap-8 py-20 animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-3xl font-bold">Message Sent!</h3>
                                    <p className="text-lg opacity-60 font-medium">Thank you for reaching out. Our team will contact you shortly.</p>
                                </div>
                                <button onClick={() => setFormState('idle')} className="text-[#8B3A2B] font-black uppercase tracking-widest text-xs border-b-2 border-[#8B3A2B] pb-1">Send Another Message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] uppercase font-black tracking-widest opacity-40 ml-4">Full Name</label>
                                        <input required type="text" placeholder="John Doe" className="bg-[#F5F1EC] border-none rounded-2xl py-5 px-8 text-sm focus:ring-2 focus:ring-[#5A2A1F]/20 transition-all font-medium" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] uppercase font-black tracking-widest opacity-40 ml-4">WhatsApp Number</label>
                                        <input required type="tel" placeholder="+91 XXXXX XXXXX" className="bg-[#F5F1EC] border-none rounded-2xl py-5 px-8 text-sm focus:ring-2 focus:ring-[#5A2A1F]/20 transition-all font-medium" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="text-[10px] uppercase font-black tracking-widest opacity-40 ml-4">Business Email</label>
                                    <input required type="email" placeholder="john@business.com" className="bg-[#F5F1EC] border-none rounded-2xl py-5 px-8 text-sm focus:ring-2 focus:ring-[#5A2A1F]/20 transition-all font-medium" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="text-[10px] uppercase font-black tracking-widest opacity-40 ml-4">Your Inquiry</label>
                                    <textarea required rows={5} placeholder="Tell us about your wholesale or business requirements..." className="bg-[#F5F1EC] border-none rounded-2xl py-5 px-8 text-sm focus:ring-2 focus:ring-[#5A2A1F]/20 transition-all font-medium resize-none"></textarea>
                                </div>
                                <button type="submit" disabled={formState === 'submitting'} className="w-full bg-[#5A2A1F] text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl disabled:opacity-50">
                                    {formState === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Info Side */}
                    <div className="flex flex-col gap-12 lg:pl-10">
                        <div className="flex flex-col gap-10">
                            <h2 className="font-playfair text-4xl font-bold">Direct Channels</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <a href={WA} target="_blank" rel="noreferrer" className="group bg-white p-8 rounded-[35px] border border-[#5A2A1F]/5 flex flex-col gap-4 hover:bg-[#25D366] transition-all duration-500">
                                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-white group-hover:scale-110 transition-all">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-black tracking-widest opacity-40 group-hover:text-white group-hover:opacity-100 transition-all">Chat Now</span>
                                        <span className="text-xl font-bold group-hover:text-white transition-all">WhatsApp</span>
                                    </div>
                                </a>
                                <a href="tel:+918815373767" className="group bg-white p-8 rounded-[35px] border border-[#5A2A1F]/5 flex flex-col gap-4 hover:bg-[#5A2A1F] transition-all duration-500">
                                    <div className="w-12 h-12 rounded-full bg-[#5A2A1F]/10 flex items-center justify-center text-[#5A2A1F] group-hover:bg-white group-hover:scale-110 transition-all">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-black tracking-widest opacity-40 group-hover:text-white group-hover:opacity-100 transition-all">Call Us</span>
                                        <span className="text-xl font-bold group-hover:text-white transition-all">+91 88153 73767</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <h2 className="font-playfair text-4xl font-bold">Our Location</h2>
                            <div className="bg-white rounded-[40px] p-8 border border-[#5A2A1F]/5 flex flex-col md:flex-row items-center gap-8 group">
                                <div className="relative w-full md:w-40 h-40 rounded-3xl overflow-hidden shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image src="/history.png" alt="Bherugarh Ujjain" layout="fill" objectFit="cover" />
                                </div>
                                <div className="flex flex-col gap-4 flex-grow">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Manufacturing Hub</span>
                                        <span className="text-xl font-bold">Bherugarh, Ujjain</span>
                                    </div>
                                    <p className="text-sm opacity-60 font-medium leading-relaxed">
                                        Madhya Pradesh, India 456010 <br />
                                        The heart of traditional batik craftsmanship.
                                    </p>
                                    <a href="#" className="text-xs font-black uppercase tracking-widest text-[#8B3A2B] flex items-center gap-2 group/link">
                                        View on Google Maps
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-8 mt-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-4xl font-playfair font-black opacity-10">01</span>
                                <span className="text-xs font-bold uppercase tracking-widest opacity-40 leading-tight">Fast Response Guaranteed</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-4xl font-playfair font-black opacity-10">02</span>
                                <span className="text-xs font-bold uppercase tracking-widest opacity-40 leading-tight">Direct Manufacturer Pricing</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
