"use client";
import React, { useState } from 'react';

export default function ContactForm() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem('fullName') as HTMLInputElement).value;
        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
        const businessName = (form.elements.namedItem('businessName') as HTMLInputElement).value;
        const orderValue = (form.elements.namedItem('orderValue') as HTMLSelectElement).value;

        const waText = `*Aqsha Batik Inquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Business Name:* ${businessName}\n*Est. Order Value:* ${orderValue || 'Not specified'}`;
        const waUrl = `https://wa.me/918815373767?text=${encodeURIComponent(waText)}`;

        window.open(waUrl, '_blank');

        setTimeout(() => setFormState('success'), 500);
    };

    if (formState === 'success') {
        return (
            <div className="flex flex-col items-center justify-center text-center gap-6 py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#3B1C14]">Message Sent!</h3>
                <p className="text-sm opacity-70 text-[#3B1C14]">Thank you for reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setFormState('idle')} className="mt-4 text-secondary font-bold uppercase tracking-wider text-xs border-b border-secondary pb-1">Send Another Message</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#FDB953] ml-1">Full Name</label>
                <input required name="fullName" type="text" placeholder="John Doe"
                    className="w-full bg-[#FDFBF7] border border-transparent rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-primary font-bold placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-[#FDB953] transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]"
                />
            </div>

            <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#FDB953] ml-1">Business Phone Number</label>
                <input required name="phone" type="tel" placeholder="+91 00000 00000"
                    className="w-full bg-[#FDFBF7] border border-transparent rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-primary font-bold placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-[#FDB953] transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]"
                />
            </div>

            <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#FDB953] ml-1">Business Name</label>
                <input required name="businessName" type="text" placeholder="Boutique or Export House Name"
                    className="w-full bg-[#FDFBF7] border border-transparent rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-primary font-bold placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-[#FDB953] transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]"
                />
            </div>

            <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#FDB953] ml-1">Estimated Order Value</label>
                <div className="relative">
                    <select required name="orderValue" defaultValue=""
                        className="w-full bg-[#FDFBF7] border border-transparent rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-primary font-bold appearance-none focus:outline-none focus:ring-2 focus:ring-[#FDB953] transition-all cursor-pointer shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
                        <option value="" disabled>Select range</option>
                        <option value="₹25k - ₹50k">₹25,000 - ₹50,000</option>
                        <option value="₹50k - ₹1 Lakh">₹50,000 - ₹1,00,000</option>
                        <option value="₹1 Lakh - ₹5 Lakh">₹1,00,000 - ₹5,00,000</option>
                        <option value="Above ₹5 Lakh">Above ₹5,00,000</option>
                    </select>
                    <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-60">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                disabled={formState !== 'idle'}
                className="group relative w-full flex items-center justify-center gap-4 bg-[#FDB953] text-primary px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-xs md:text-sm hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 mt-4 shadow-[0_10px_30px_rgba(253,185,83,0.3)] hover:shadow-[0_15px_40px_rgba(253,185,83,0.5)]"
            >
                {formState === 'submitting' ? 'Sending...' : 'Get Wholesale Price List →'}
            </button>
        </form>
    );
}
