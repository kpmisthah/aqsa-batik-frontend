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
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#3B1C14]">Message Sent!</h3>
                <p className="text-sm opacity-70 text-[#3B1C14]">Thank you for reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setFormState('idle')} className="mt-4 text-[#8B3A2B] font-bold uppercase tracking-wider text-xs border-b border-[#8B3A2B] pb-1">Send Another Message</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-1.5 md:gap-3">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#3B1C14] ml-1">Full Name</label>
                <input required name="fullName" type="text" placeholder="John Doe" className="w-full bg-[#FDFBF7] md:bg-white border border-[#5A2A1F]/20 rounded-xl md:rounded-2xl px-3 py-2.5 md:px-5 md:py-4 text-sm md:text-base text-[#5A2A1F] font-bold placeholder:text-[#5A2A1F]/40 focus:outline-none focus:ring-2 focus:ring-[#8B3A2B]/20 transition-all shadow-sm md:shadow-md" />
            </div>
            
            <div className="flex flex-col gap-1.5 md:gap-3">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#3B1C14] ml-1">Business Phone Number</label>
                <input required name="phone" type="tel" placeholder="+91 00000 00000" className="w-full bg-[#FDFBF7] md:bg-white border border-[#5A2A1F]/20 rounded-xl md:rounded-2xl px-3 py-2.5 md:px-5 md:py-4 text-sm md:text-base text-[#5A2A1F] font-bold placeholder:text-[#5A2A1F]/40 focus:outline-none focus:ring-2 focus:ring-[#8B3A2B]/20 transition-all shadow-sm md:shadow-md" />
            </div>

            <div className="flex flex-col gap-1.5 md:gap-3">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#3B1C14] ml-1">Business Name</label>
                <input required name="businessName" type="text" placeholder="Boutique or Export House Name" className="w-full bg-[#FDFBF7] md:bg-white border border-[#5A2A1F]/20 rounded-xl md:rounded-2xl px-3 py-2.5 md:px-5 md:py-4 text-sm md:text-base text-[#5A2A1F] font-bold placeholder:text-[#5A2A1F]/40 focus:outline-none focus:ring-2 focus:ring-[#8B3A2B]/20 transition-all shadow-sm md:shadow-md" />
            </div>

            <div className="flex flex-col gap-1.5 md:gap-3">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#3B1C14] ml-1">Estimated Order Value</label>
                <div className="relative">
                    <select required name="orderValue" defaultValue="" className="w-full bg-[#FDFBF7] md:bg-white border border-[#5A2A1F]/20 rounded-xl md:rounded-2xl px-3 py-2.5 md:px-5 md:py-4 text-sm md:text-base text-[#5A2A1F] font-bold appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B3A2B]/20 transition-all shadow-sm md:shadow-md cursor-pointer">
                        <option value="" disabled>Select range</option>
                        <option value="₹25k - ₹50k">₹25,000 - ₹50,000</option>
                        <option value="₹50k - ₹1 Lakh">₹50,000 - ₹1,00,000</option>
                        <option value="₹1 Lakh - ₹5 Lakh">₹1,00,000 - ₹5,00,000</option>
                        <option value="Above ₹5 Lakh">Above ₹5,00,000</option>
                    </select>
                    <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-60">
                        <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                </div>
            </div>

            <button type="submit" disabled={formState === 'submitting'} className="w-full bg-[#5A2A1F] text-white py-3 md:py-5 rounded-xl md:rounded-2xl font-black text-[13px] md:text-xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl uppercase tracking-widest flex items-center justify-center gap-2 md:gap-4 mt-2 md:mt-4 disabled:opacity-70 disabled:hover:scale-100">
                {formState === 'submitting' ? 'Sending...' : 'Get Wholesale Price List →'}
            </button>
        </form>
    );
}
