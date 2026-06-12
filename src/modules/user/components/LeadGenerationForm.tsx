"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LeadGenerationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        businessName: "",
        orderValue: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // WhatsApp Phone Number (using the support number)
        const waNumber = "8815373767";

        // Construct the pre-filled message
        const message = `*New Wholesale Inquiry* 🏢\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Business:* ${formData.businessName}\n*Est. Order Value:* ${formData.orderValue || 'Not specified'}\n\nHi team, I would like to get a personalized quote and the latest wholesale price list.`;

        // Encode and create URL
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

        // Small delay for UX button feedback, then open WhatsApp
        setTimeout(() => {
            window.open(waUrl, '_blank');
            setIsSubmitting(false);
            // Reset form
            setFormData({
                fullName: "",
                phone: "",
                businessName: "",
                orderValue: ""
            });
        }, 600);
    };

    return (
        <section id="enquiry-form" className="py-10 md:py-24 lg:py-32 px-6 bg-white relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F1EC]/30 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-center relative z-10">
                {/* Left Side: Content & Benefits */}
                <div className="flex-1 flex flex-col gap-6 md:gap-10">
                    <div className="flex flex-col gap-3 md:gap-6 text-center md:text-left items-center md:items-start">
                        <span className="text-[10px] font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Get Wholesale Pricing</span>
                        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#5A2A1F] leading-[1.1]">
                            Get Personalized Batik Fabric Pricing &amp; Latest Catalog
                        </h2>
                        <p className="text-[13px] md:text-lg text-[#5A2A1F]/70 font-medium leading-relaxed max-w-xl text-left md:text-left mt-2 md:mt-0">
                            Receive wholesale pricing, latest batik design collections, and ready-stock updates directly from AQSHA BATIK SUITS within hours.
                        </p>
                    </div>

                    <ul className="flex flex-col gap-3 md:gap-6 mt-2 md:mt-0">
                        {[
                            "Latest Batik Collection Catalog",
                            "Wholesale Pricing Support",
                            "Fast WhatsApp Assistance",
                            "Bulk Order Guidance",
                            "Ready Stock Updates"
                        ].map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 md:gap-4 text-[12px] md:text-lg font-bold text-[#5A2A1F]">
                                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                    <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                </div>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Form Card */}
                <div className="flex-1 w-full max-w-xl">
                    <div className="bg-[#F5F1EC] p-5 md:p-12 rounded-[24px] md:rounded-[50px] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-white">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-8">
                            <div className="flex flex-col gap-1.5 md:gap-3">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#5A2A1F] ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-white border border-[#5A2A1F]/20 rounded-xl md:rounded-2xl px-3 py-2.5 md:px-5 md:py-4 text-sm md:text-base text-[#5A2A1F] font-bold placeholder:text-[#5A2A1F]/40 focus:outline-none focus:ring-2 focus:ring-[#8B3A2B]/20 transition-all shadow-sm md:shadow-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 md:gap-3">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#5A2A1F] ml-1">Business Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-white border border-[#5A2A1F]/20 rounded-xl md:rounded-2xl px-3 py-2.5 md:px-5 md:py-4 text-sm md:text-base text-[#5A2A1F] font-bold placeholder:text-[#5A2A1F]/40 focus:outline-none focus:ring-2 focus:ring-[#8B3A2B]/20 transition-all shadow-sm md:shadow-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 md:gap-3">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#5A2A1F] ml-1">Business Name</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    required
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    placeholder="Boutique or Export House Name"
                                    className="w-full bg-white border border-[#5A2A1F]/20 rounded-xl md:rounded-2xl px-3 py-2.5 md:px-5 md:py-4 text-sm md:text-base text-[#5A2A1F] font-bold placeholder:text-[#5A2A1F]/40 focus:outline-none focus:ring-2 focus:ring-[#8B3A2B]/20 transition-all shadow-sm md:shadow-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 md:gap-3">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#5A2A1F] ml-1">Estimated Order Value</label>
                                <div className="relative">
                                    <select
                                        name="orderValue"
                                        required
                                        value={formData.orderValue}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-[#5A2A1F]/20 rounded-xl md:rounded-2xl px-3 py-2.5 md:px-5 md:py-4 text-sm md:text-base text-[#5A2A1F] font-bold appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B3A2B]/20 transition-all shadow-sm md:shadow-md cursor-pointer"
                                    >
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

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#5A2A1F] text-white py-3 md:py-5 rounded-xl md:rounded-2xl font-black text-[13px] md:text-xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl uppercase tracking-widest flex items-center justify-center gap-2 md:gap-4 mt-2 md:mt-4 disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={24} className="animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Get Wholesale Price List
                                        <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
