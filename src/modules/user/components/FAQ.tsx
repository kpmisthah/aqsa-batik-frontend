"use client";
import { useState } from "react";

const WA = "https://wa.me/918815373767";

interface FAQItem {
    q: string;
    a: React.ReactNode;
}

interface FAQProps {
    items?: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
    const [open, setOpen] = useState(0);
    const defaultFaqs = [
        { 
            q: "What can I make from batik dress material?", 
            a: "Batik dress material is ideal for stitched suits, kurtis, coordinated sets, casual wear, and festive outfits. Many buyers choose batik print dress material for elegant everyday fashion with traditional style." 
        },
        { 
            q: "Is batik cotton dress material good for daily wear?", 
            a: "Yes. Batik cotton dress material is popular for daily wear because it is breathable, lightweight, and comfortable. It is perfect for warm weather, office outfits, and practical women clothing needs." 
        },
        { 
            q: "Do you sell batik printed fabric for boutiques and resellers?", 
            a: "Yes. We offer premium batik printed fabric and printed batik fabric collections suitable for boutiques, resellers, and retailers looking for stylish fast-moving stock and reliable quality." 
        },
        { 
            q: "Do you have batik dresses and shirts for women?", 
            a: "Yes. Our collection includes cotton batik dresses, elegant batik dress styles, modern batik shirt ladies designs, and fashionable batik shirt womens collections for daily and occasion wear." 
        },
        { 
            q: "Do you offer plus size clothing in batik fabric?", 
            a: "Yes. Our Batik Cloth is suitable for tailored plus size clothing, plus size womens clothing, and custom stitching for all body types. Many boutiques and plus size clothing stores choose batik fabric for stylish inclusive fashion." 
        }
    ];

    const faqs = items || defaultFaqs;

    return (
        <section id="faq" className="py-24 px-6 bg-[#E8D9C0]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[11px] font-bold text-[#5A2A1F]/60 uppercase tracking-[0.4em]">Common Questions</span>
                    <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#5A2A1F] mt-4">Frequently Asked Questions</h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className={`w-full text-left p-6 flex justify-between items-center transition-colors ${open === i ? "bg-white" : "bg-[#F5F1EC]/50 hover:bg-[#F5F1EC]"}`}
                            >
                                <span className="font-bold text-lg text-[#5A2A1F]">{f.q}</span>
                                <span className={`text-2xl transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </button>
                            {open === i && (
                                <div className="bg-white p-6 pt-0 text-[#5A2A1F]/80 leading-relaxed font-medium">
                                    {f.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[#5A2A1F]/60 font-medium mb-6">Still have questions? We're just a message away.</p>
                    <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-[#5A2A1F] text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl">
                        Ask on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
