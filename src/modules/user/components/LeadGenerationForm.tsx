"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface LeadGenerationFormProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    benefits?: string[];
}

export default function LeadGenerationForm({
    title = (
        <>
            Get Personalized <span className="text-highlight italic">Batik Fabric</span> <br className="hidden md:block" /> Pricing & <span className="text-highlight italic">Catalog</span>
        </>
    ),
    description = "Explore our latest batik designs, batik print fabric, batik dress material, and batik suit collections with personalized wholesale pricing, ready-stock updates, and collection catalogs from AQSHA Batik Suits.",
    benefits = [
        "Latest Batik Print Design Catalog",
        "Wholesale Pricing & Bulk Order Support",
        "Batik & Cotton Dress Material Options",
        "Printed Cotton Fabric for Kurtis",
        "Fast WhatsApp Assistance",
        "Ready-Stock & New Collection Updates",
    ]
}: LeadGenerationFormProps) {
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

        const waNumber = "8815373767";
        const message = `*New Wholesale Inquiry* 🏢\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Business:* ${formData.businessName}\n*Est. Order Value:* ${formData.orderValue || 'Not specified'}\n\nHi team, I would like to get a personalized quote and the latest wholesale price list.`;

        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

        setTimeout(() => {
            window.open(waUrl, '_blank');
            setIsSubmitting(false);
            setFormData({
                fullName: "",
                phone: "",
                businessName: "",
                orderValue: ""
            });
        }, 600);
    };

    return (
        <section id="enquiry-form" className="pt-10 pb-16 lg:pt-12 lg:pb-24 px-6 bg-cream relative overflow-hidden border-t border-primary/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
                {/* Left Side: Content & Benefits */}
                <div className="flex-1 flex flex-col gap-8 md:gap-10 text-center md:text-left">
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <span className="text-xl leading-none text-accent">&diams; <span className="text-[11px] font-bold uppercase tracking-[0.25em] ml-2 text-primary/80">Partnership</span></span>
                        <h2 className="text-h2 font-medium text-primary">
                            {title}
                        </h2>
                        <p className="text-body1 text-primary/80 font-medium leading-relaxed max-w-xl text-center md:text-left mt-2">
                            {description}
                        </p>
                    </div>

                    {/* Desktop Points (Hidden on mobile) */}
                    <ul className="hidden lg:flex flex-col gap-4 w-fit mx-auto md:mx-0 text-left">
                        {benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-4 text-base font-medium text-primary">
                                <div className="w-8 h-8 rounded-full bg-white border border-primary/10 flex items-center justify-center text-accent shrink-0 shadow-sm">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                </div>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Form Card */}
                <div className="flex-1 w-full max-w-lg">
                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-primary/5">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-cream border border-primary/10 rounded-xl px-5 py-3.5 text-sm text-primary font-medium placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Business Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-cream border border-primary/10 rounded-xl px-5 py-3.5 text-sm text-primary font-medium placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Business Name</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    required
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    placeholder="Boutique or Export House"
                                    className="w-full bg-cream border border-primary/10 rounded-xl px-5 py-3.5 text-sm text-primary font-medium placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Order Value</label>
                                <div className="relative">
                                    <select
                                        name="orderValue"
                                        required
                                        value={formData.orderValue}
                                        onChange={handleChange}
                                        className={`w-full bg-cream border border-primary/10 rounded-xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer ${!formData.orderValue ? 'text-primary/40' : 'text-primary'}`}
                                    >
                                        <option value="" disabled>Select range</option>
                                        <option value="₹25k - ₹50k">₹25,000 - ₹50,000</option>
                                        <option value="₹50k - ₹1 Lakh">₹50,000 - ₹1,00,000</option>
                                        <option value="₹1 Lakh - ₹5 Lakh">₹1,00,000 - ₹5,00,000</option>
                                        <option value="Above ₹5 Lakh">Above ₹5,00,000</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full py-4 shadow-xl shadow-brand/20 mt-4 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Message on WhatsApp
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Mobile Points (Shown after form on mobile) */}
                <div className="flex lg:hidden w-full flex-col mt-4">
                    <ul className="flex flex-col gap-4 w-fit mx-auto text-left">
                        {benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-4 text-sm font-medium text-primary">
                                <div className="w-8 h-8 rounded-full bg-white border border-primary/10 flex items-center justify-center text-accent shrink-0 shadow-sm">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                </div>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
